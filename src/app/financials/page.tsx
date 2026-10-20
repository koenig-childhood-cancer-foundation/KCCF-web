import Image from 'next/image';
import PageHeader from '@/components/PageHeader';

// Figures and ratings from KCCF Current Facts – MASTER (2025 Financial Review).
const split = [
  { label: 'Programs', value: 90.6, color: 'bg-violet-600' },
  { label: 'Management and general', value: 6.1, color: 'bg-[#DAB87E]' },
  { label: 'Fundraising', value: 3.3, color: 'bg-[#8A6A2E]' },
];

const documents = [
  { title: '2025 Financial Review', note: 'CPA review by Davis, Ward & Hochman, March 2026', href: '/documents/financial-review-2025-kccf.pdf' },
  { title: 'Form 990 (2025)', note: 'Annual IRS filing', href: '/documents/990-2025-kccf.pdf' },
  { title: 'Form 990 (2023)', note: 'Annual IRS filing', href: '/documents/990-2023-kccf.pdf' },
  { title: 'IRS Determination Letter', note: '501(c)(3) public charity', href: '/documents/irs-determination.pdf' },
];

const ratings = [
  { name: 'Candid Platinum Seal of Transparency', href: 'https://www.guidestar.org/profile/84-4892279', src: '/candid seal of transparency.png', alt: 'Candid seal of transparency logo' },
  { name: 'Charity Navigator 4-star rating', href: 'https://www.charitynavigator.org/ein/844892279', src: '/images/4star-ratingbadge-2026.svg', alt: 'Charity Navigator 4-Star Rating Badge 2026' },
  { name: 'GreatNonprofits Top-Rated Nonprofit', href: 'https://greatnonprofits.org/org/koenig-childhood-cancer-foundation', src: '/images/2025-top-rated-awards-badge-embed.png', alt: 'GreatNonprofits Top-Rated Award 2025' },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">{title}</h2>
      <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
      {subtitle && <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export default function Financials() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Plum header with gold lines, as on Privacy */}
      <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 top-24 bg-[#772D5E]">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-[#DAB87E]" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#DAB87E]" aria-hidden="true" />
        </div>
        <PageHeader
          title="Financials"
          subtitle="Where every gift goes, and the documents that show it."
        />
      </div>

      {/* Where the money goes */}
      <section className="py-16 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle title="Where Your Gift Goes" />
          <div className="bg-white dark:bg-gray-700 border border-[#DAB87E] rounded-[22px] shadow-md p-6 md:p-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <span className="text-6xl font-extrabold text-violet-600 dark:text-saffron-400 leading-none">90.6%</span>
              <div className="text-center sm:text-left">
                <p className="text-xl font-bold text-[#2B2330] dark:text-white">of expenses go directly to programs</p>
                <p className="text-sm italic text-[#8A6A2E] dark:text-[#DAB87E] mt-1">
                  (2025 Financial Review). 100% volunteer&#8209;run: no salaries.
                </p>
              </div>
            </div>
            <div className="mt-8 flex h-4 w-full overflow-hidden rounded-full" role="img" aria-label="2025 expenses: programs 90.6%, management and general 6.1%, fundraising 3.3%">
              {split.map((s) => (
                <div key={s.label} className={s.color} style={{ width: `${s.value}%` }} />
              ))}
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-200">
              {split.map((s) => (
                <li key={s.label} className="flex items-center gap-2">
                  <span className={`inline-block h-3 w-3 rounded-full ${s.color}`} aria-hidden="true" />
                  {s.label}: <b>{s.value}%</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle title="Accountability Documents" subtitle="Open or download any of them. Grant makers and companies often ask for these." />
          {/* Flex-wrap so a short last row sits in the middle */}
          <ul className="flex flex-wrap justify-center gap-5 list-none p-0">
            {documents.map((d) => (
              <li key={d.title} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc((100%-2.5rem)/3)]">
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-[22px] border-t-4 border-violet-600 dark:border-saffron-400 bg-white dark:bg-gray-800 shadow-md px-6 py-5 hover:shadow-lg transition-shadow"
                >
                  <span className="text-lg font-bold text-[#2B2330] dark:text-white">{d.title}</span>
                  <span className="mt-1 text-sm text-gray-600 dark:text-gray-300">{d.note}</span>
                  <span className="mt-auto pt-3 font-semibold text-violet-600 dark:text-saffron-400">Open PDF &rarr;</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-gray-700 dark:text-gray-300">
            Need our W-9? Email{' '}
            <a href="mailto:join@thekccf.org" className="font-semibold text-violet-600 dark:text-saffron-400 hover:underline">join@thekccf.org</a>{' '}
            and we will send it.
          </p>
        </div>
      </section>

      {/* Ratings */}
      <section className="py-16 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle title="Independent Ratings" />
          <ul className="flex flex-wrap items-center justify-center gap-10 list-none p-0">
            {ratings.map((r) => (
              <li key={r.name}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 hover:opacity-80 transition-opacity">
                  <span className="h-20 flex items-center">
                    <Image src={r.src} alt={r.alt} width={120} height={120} className="h-20 w-auto" />
                  </span>
                  <span className="text-sm font-semibold text-[#2B2330] dark:text-white text-center max-w-[12rem]">{r.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Legal details and New York disclosure */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-gray-700 dark:text-gray-200 space-y-6">
          <div className="text-center">
            <p className="font-bold text-[#2B2330] dark:text-white">Koenig Childhood Cancer Foundation, Inc.</p>
            <p>501(c)(3) public charity · EIN 84-4892279</p>
            <p>Gifts are tax-deductible to the extent allowed by law.</p>
          </div>
          {/* New York disclosure (Executive Law § 174-b); moved here from Privacy, until Bradley confirms Donate page and footer */}
          <div className="rounded-[22px] border border-[#F1E7D6] dark:border-gray-700 bg-[#FDF9F2] dark:bg-gray-800 p-6">
            <h2 className="text-xl font-bold text-violet-600 dark:text-saffron-400 mb-3">New York Fundraising Disclosure</h2>
            <p className="leading-relaxed">
              A copy of our latest annual financial report may be obtained from Koenig Childhood Cancer Foundation, Inc., 1175 York Ave, Suite 15E, New York, NY 10065, or from the New York State Attorney General&apos;s Charities Bureau at{' '}
              <a href="https://www.charitiesnys.com" target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-saffron-400 underline underline-offset-2 hover:no-underline">www.charitiesnys.com</a>. For information about charities, call the Attorney General at{' '}
              <a href="tel:+12124168686" className="text-violet-600 dark:text-saffron-400 underline underline-offset-2 hover:no-underline">(212) 416-8686</a>. A description of our programs is available from us on request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
