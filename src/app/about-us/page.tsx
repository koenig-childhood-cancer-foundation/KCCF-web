'use client';

import Image from 'next/image';
import FormButton from '@/components/FormButton';
import { useFormModal } from '@/contexts/FormModalContext';

// Elana's story and the team, combined from the Our Story and KCCF Family pages.
// Facts and titles follow KCCF Current Facts – MASTER.

const journey = [
  { src: '/images/cropped-ElanaNoHairUpsetDuringTreatment-scaled.jpg', caption: 'Elana during treatment' },
  { src: '/images/cropped-Elana-and-Trophy.png', caption: "Elana kicked cancer's butt" },
  { src: '/images/cropped-IMG_1521-scaled-1.jpg', caption: 'Elana now' },
];

type Person = { name: string; title?: string; photo: string; bio: string[] };

const board: Person[] = [
  {
    name: 'Rena Koenig, MBA',
    title: 'Co-Founder, President & Keynote Speaker',
    photo: '/images/Untitled-drawing-1.jpg',
    bio: [
      "An NYU Stern graduate with 20 years of corporate leadership at firms like KPMG. She spent the past decade co-running a family business before fully dedicating herself to her daughter Elana's mission—Koenig Childhood Cancer Foundation.",
    ],
  },
  {
    name: 'Scott Koenig, MBA',
    title: 'Chairman / Treasurer',
    photo: '/images/Untitled-drawing-33.png',
    bio: [
      'A Weatherhead School of Management graduate, Scott began his career on Wall Street, later owned and ran a 75-year-old lighting company, sold it in 2018, and now focuses on business planning and growth strategy for startups.',
    ],
  },
  {
    name: 'Bradley Bailyn, Esq.',
    title: 'Secretary',
    photo: '/images/cropped-Bradley-Bailyn-1.png',
    bio: [
      'A graduate of NYU Stern and Brooklyn Law School, Bradley is a leading corporate attorney, litigator, and founder of Bailyn Law. A proud lifelong Brooklyn resident, with his wife, two kids and a dog.',
    ],
  },
];

const advisers: Person[] = [
  {
    name: 'Mike Blumenfeld, MBA',
    photo: '/images/Mike-Blumenfeld-Director-copy.png',
    bio: [
      'A graduate of Wharton and NYU Stern, Mike leverages over 30 years of experience in strategic planning to assist KCCF with organizational growth. Since 1981, he has specialized in helping entrepreneurs build profitable businesses and positive cultures. Mike focuses on practical, results-driven solutions to help small-to-midsized companies thrive.',
    ],
  },
  {
    name: 'Clarke Moyer, MBA-ITM',
    photo: '/images/cropped-Clarke-Moyer-Bio-Picture-2MP.jpg',
    bio: [
      'A U.S. Army veteran, Clarke is a Principal Investigator at Penn State Applied Research Laboratory. He holds an MBA-ITM from Western Governors University and is currently an eDBA candidate at PSU Smeal. Clarke leverages his deep technical expertise to lead robust cybersecurity and automation solutions that drive organizational growth.',
    ],
  },
  {
    name: 'Oliwia Caes',
    photo: '/images/Oliwia-Caes.JPEG',
    bio: [
      'A UCLA Biochemistry student, Oliwia is passionate about medicinal chemistry, oncology, and biomedical research. She manages vital communications for oncology families and donors, ensuring clear and compassionate outreach. Oliwia is a dedicated advocate for the cause and has been a proud member of the KCCF family since its inception.',
    ],
  },
];

const honorary: Person[] = [
  { name: 'Dr. Wexler', title: "Saved Elana's Life", photo: '/images/Dr.-Wexler-Honorary-Director-copy.png', bio: ['Pediatric Hematologist – Oncologist', 'Memorial Sloan Kettering Cancer Center'] },
  { name: 'Dr. Morris', title: "Removed Elana's Tumor", photo: '/images/Carol-Morris-2-copy-2_FINAL.png', bio: ['Orthopaedic Surgeon', 'Memorial Sloan Kettering Cancer Center'] },
  { name: 'Dr. Prince', title: "Elana's Second Surgeon", photo: '/images/cropped-DrPrinceElana-scaled.jpg', bio: ['Orthopaedic Surgeon', 'Memorial Sloan Kettering Cancer Center'] },
  { name: 'Dr. Charas', title: "Volunteer Shani's dad", photo: '/images/Dr.-Tomas-copy.png', bio: ['Radiation Oncologist', 'Rambam Health Care Campus, Israel'] },
  { name: 'Dr. Kearney', title: "Elana's Therapist", photo: '/images/kearney_170721_02_3x2-copy.png', bio: ['Pediatric Psychiatrist', 'Memorial Sloan Kettering Cancer Center'] },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">{title}</h2>
      <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
      {subtitle && <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function PersonCard({ person, size = 'w-40 h-40' }: { person: Person; size?: string }) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-6 py-8 text-center flex flex-col">
      <div className={`relative ${size} mx-auto mb-5 rounded-full p-1 bg-white border border-[#DAB87E] shadow-md`}>
        <Image src={person.photo} alt={person.name} fill sizes="160px" className="rounded-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-[#2B2330] dark:text-white">{person.name}</h3>
      {person.title && (
        <p className="mt-1 italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">{person.title}</p>
      )}
      <div className="mt-3 text-gray-600 dark:text-gray-200 leading-relaxed">
        {person.bio.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function AboutUs() {
  const { openModal } = useFormModal();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Hero: home-page style (full photo, warm tint, soft shade behind the words) */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_our_story.jpg"
            alt="Elana Koenig"
            fill
            className="object-cover object-[38%_15%] lg:object-[center_20%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-amber-400/12 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 lg:pl-24 pb-14 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">About Us</h1>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-white max-w-xl mx-auto lg:mx-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            A child cancer survivor&apos;s dream, now helping thousands of families.
          </p>
          <button
            type="button"
            onClick={() => openModal('book-elana')}
            className="btn-primary mt-8 bg-white/10 hover:bg-white/20 border-2 border-white text-white py-3.5 px-8 rounded-full text-lg font-semibold inline-flex items-center justify-center"
          >
            Book Elana to Speak
          </button>
        </div>
      </section>

      {/* Between the top photo and the story card */}
      <div className="bg-white dark:bg-gray-900 pt-10 pb-8 px-4 text-center">
        <p className="text-xl sm:text-3xl font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#8A6A2E] via-[#A8823F] to-[#8A6A2E] bg-clip-text text-transparent dark:from-[#DAB87E] dark:via-[#F1DDB0] dark:to-[#DAB87E]">From Patient to Changemaker</p>
        <div className="w-24 h-1 bg-[#DAB87E] rounded-full mx-auto mt-4" aria-hidden="true" />
      </div>

      {/* Elana's story: plum journey band with a gold path */}
      <section className="bg-white dark:bg-gray-900 px-4 pb-10">
        <div className="relative max-w-6xl mx-auto py-12 px-4 text-center bg-violet-600 dark:bg-gray-800 rounded-[40px] border-2 border-[#DAB87E] shadow-xl overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Elana&rsquo;s Story</h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mt-5 mb-10" aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[16%] right-[16%] top-[calc(50%-1.5rem)] border-t-2 border-dashed border-[#DAB87E]/70" aria-hidden="true" />
            <div className="relative grid grid-cols-3 gap-4 sm:gap-10">
              {[
                { ...journey[0], label: 'Age 7', note: 'Fighting cancer' },
                { ...journey[1], label: 'Age 8', note: 'Kicked cancer\u2019s butt' },
                { ...journey[2], label: 'Today', note: 'Helping children beat cancer' },
              ].map((step) => (
                <figure key={step.caption}>
                  <div className="relative aspect-square rounded-full p-1.5 bg-[#DAB87E] shadow-xl">
                    <Image src={step.src} alt={step.caption} fill sizes="(max-width: 640px) 30vw, 220px" className="rounded-full object-cover p-1.5" />
                  </div>
                  <figcaption className="mt-4">
                    <span className="block text-xl sm:text-3xl font-bold text-[#DAB87E]">{step.label}</span>
                    {step.note && <span className="block text-sm sm:text-base text-white/85">{step.note}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4 xl:px-28">
          <div className="space-y-5 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            <p className="text-xl font-semibold text-[#2B2330] dark:text-white">
              My name is Elana Koenig, and I am a cancer survivor, singer, and founder of Koenig Childhood Cancer Foundation.
            </p>
            <p>
              I was only 7 when I was diagnosed with an aggressive rare childhood cancer called Ewing&apos;s Sarcoma. I
              remember seeing my mother and father heartbroken, trying to hide it. I didn&apos;t yet understand the
              difficult journey that lay ahead.
            </p>
            <p>
              Over the next 18 months, I experienced firsthand the physical and emotional toll of cancer treatment,
              enduring 9 cycles of chemotherapy, undergoing 15 surgeries, and spending 6 months in a full-body cast. My
              parents put their own lives on hold to stand by my side every step of the way.
            </p>
            <p>
              On the day of my final chemotherapy treatment, as I prepared to leave the hospital, I realized that while
              my own battle had ended, the fight countless children and families were facing was far from over. That
              motivated me to start KCCF in 2020 with $900 in my piggy bank to help other children battling cancer.
            </p>
            <p>Today I am a student at Cornell University, Class of 2030.</p>
          </div>
          <blockquote className="mt-12 text-center">
            <p className="text-3xl md:text-4xl font-bold text-violet-600 dark:text-saffron-400 leading-tight">&ldquo;No child should fight cancer alone.&rdquo;</p>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mt-5 mx-auto" aria-hidden="true" />
            <footer className="mt-4 italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">Elana Koenig, Founder</footer>
          </blockquote>
        </div>
      </section>

      {/* Mission: the statement in a gold-edged card, then the need in two gold ovals */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <SectionTitle title="Our Mission" />
          <div className="rounded-[28px] border-2 border-[#DAB87E] bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-800 px-6 py-10 md:px-14 shadow-md">
            <p className="text-2xl md:text-3xl font-normal leading-snug text-violet-600 dark:text-saffron-400">
              KCCF provides life-saving financial and emotional support to children battling cancer and their families.
            </p>
          </div>
          {/* Figures from KCCF Current Facts – MASTER (WHO fact sheet, 2026) */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5 sm:gap-8">
            <div className="rounded-full border-2 border-[#DAB87E] px-10 py-5 bg-white dark:bg-gray-800 shadow-sm">
              <span className="block text-4xl md:text-5xl font-bold text-violet-600 dark:text-saffron-400">1,100</span>
              <span className="block mt-1 text-sm md:text-base font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">children diagnosed with cancer every day</span>
            </div>
            <div className="rounded-full border-2 border-[#DAB87E] px-10 py-5 bg-white dark:bg-gray-800 shadow-sm">
              <span className="block text-4xl md:text-5xl font-bold text-violet-600 dark:text-saffron-400">28</span>
              <span className="block mt-1 text-sm md:text-base font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">school buses filled, every day</span>
            </div>
          </div>
          <p className="mt-10 max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            To reach specialized cancer centers, families face the costs of travel, lodging, living expenses and
            treatment. KCCF helps lift that financial strain so families can focus on their child.
          </p>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Worldwide figures: World Health Organization, 2026.</p>
        </div>
      </section>

      {/* Nasdaq photo */}
      <section className="pt-16 pb-4 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <figure className="max-w-6xl mx-auto px-4">
          <div className="relative aspect-[2.68/1] rounded-[22px] overflow-hidden border-t-4 border-violet-600 shadow-md">
            <Image src="/images/header_image_kccf_family.png" alt="KCCF family and friends at the Nasdaq podium" fill sizes="(max-width: 1200px) 100vw, 1150px" className="object-cover" />
          </div>
          <figcaption className="mt-3 text-center italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">Our KCCF family at Nasdaq, which honored Elana and KCCF.</figcaption>
        </figure>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <SectionTitle title="Board of Directors" />
          <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {board.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>

          <div className="mt-20">
            <SectionTitle title="Advisers" />
            <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
              {advisers.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Honorary Directors"
            subtitle="The medical professionals who saved Elana's life and continue to support our mission."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {honorary.map((person) => (
              <PersonCard key={person.name} person={person} size="w-32 h-32" />
            ))}
          </div>
        </div>
      </section>

      {/* Plum ending: invite Elana to speak */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Book Elana to Speak</h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">
            For graduations, galas, corporate events and media.
          </p>
          <FormButton formType="book-elana" variant="orange" size="lg" className="py-4 px-10 text-lg">
            Book Elana to Speak
          </FormButton>
        </div>
      </section>
    </div>
  );
}
