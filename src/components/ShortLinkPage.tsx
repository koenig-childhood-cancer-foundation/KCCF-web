const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

// A short address used in outreach messages (e.g. thekccf.org/plan). GitHub Pages can't send a
// server redirect, so this forwards visitors right away with a meta refresh. `to` is either a page
// on this site ("/crazy-socks?sponsor=1") or a full outside address ("https://...").
export function shortLinkTarget(to: string) {
  return to.startsWith('http') ? to : `${basePath}${to}`
}

export default function ShortLinkPage({ to, label }: { to: string; label: string }) {
  const target = shortLinkTarget(to)

  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <section className="min-h-[60vh] flex items-center justify-center px-4 pt-32 pb-20 text-center">
        <div>
          <h1 className="text-3xl font-bold text-violet-600 dark:text-saffron-400">One moment…</h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
            Taking you to{' '}
            <a href={target} className="font-semibold text-violet-600 underline underline-offset-4 dark:text-saffron-400">
              {label}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
