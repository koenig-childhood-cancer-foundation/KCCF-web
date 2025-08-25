# Use the official Node.js 20 Alpine image as base
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

# Pass environment variables to build stage
ARG NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ARG STRIPE_SECRET_KEY
ARG STRIPE_WEBHOOK_SECRET
ARG CLOUDFLARE_R2_ACCOUNT_ID
ARG CLOUDFLARE_R2_ACCESS_KEY_ID
ARG CLOUDFLARE_R2_SECRET_ACCESS_KEY
ARG CLOUDFLARE_R2_BUCKET_NAME
ARG CLOUDFLARE_R2_PUBLIC_URL
ARG GAS_ENDPOINT
ENV NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=$NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
ENV STRIPE_SECRET_KEY=$STRIPE_SECRET_KEY
ENV STRIPE_WEBHOOK_SECRET=$STRIPE_WEBHOOK_SECRET
ENV CLOUDFLARE_R2_ACCOUNT_ID=$CLOUDFLARE_R2_ACCOUNT_ID
ENV CLOUDFLARE_R2_ACCESS_KEY_ID=$CLOUDFLARE_R2_ACCESS_KEY_ID
ENV CLOUDFLARE_R2_SECRET_ACCESS_KEY=$CLOUDFLARE_R2_SECRET_ACCESS_KEY
ENV CLOUDFLARE_R2_BUCKET_NAME=$CLOUDFLARE_R2_BUCKET_NAME
ENV CLOUDFLARE_R2_PUBLIC_URL=$CLOUDFLARE_R2_PUBLIC_URL
ENV GAS_ENDPOINT=$GAS_ENDPOINT

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

# Runtime environment variables for Cloudflare R2 and GAS
ENV CLOUDFLARE_R2_ACCOUNT_ID=$CLOUDFLARE_R2_ACCOUNT_ID
ENV CLOUDFLARE_R2_ACCESS_KEY_ID=$CLOUDFLARE_R2_ACCESS_KEY_ID
ENV CLOUDFLARE_R2_SECRET_ACCESS_KEY=$CLOUDFLARE_R2_SECRET_ACCESS_KEY
ENV CLOUDFLARE_R2_BUCKET_NAME=$CLOUDFLARE_R2_BUCKET_NAME
ENV CLOUDFLARE_R2_PUBLIC_URL=$CLOUDFLARE_R2_PUBLIC_URL
ENV GAS_ENDPOINT=$GAS_ENDPOINT

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
