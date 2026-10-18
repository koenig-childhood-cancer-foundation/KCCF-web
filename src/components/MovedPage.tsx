import Link from 'next/link'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

// Stands in for a retired page: sends visitors (and Google) straight to its replacement.
// GitHub Pages can't send a server redirect, so this uses an instant meta refresh,
// which Google treats as a permanent redirect. Each page's layout also sets the canonical address.
export default function MovedPage({ to, name }: { to: string; name: string }) {
  const target = `${basePath}${to}`

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <section className="min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20 text-center">
        <div>
          <h1 className="text-3xl font-bold text-violet-600 dark:text-saffron-400">This page has moved</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
            You can now find it on our{' '}
            <Link href={to} className="font-semibold text-violet-600 underline underline-offset-4 dark:text-saffron-400">
              {name}
            </Link>{' '}
            page.
          </p>
        </div>
      </section>
    </>
  )
}
