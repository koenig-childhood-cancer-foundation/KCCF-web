'use client';

import Image from 'next/image';
import CallToAction from '@/components/CallToAction';
import { useFormModal } from '@/contexts/FormModalContext';

// Elana's story and the team, combined from the Our Story and KCCF Family pages.
// Facts and titles follow KCCF Current Facts – MASTER.

const journey = [
  { src: '/images/cropped-ElanaNoHairUpsetDuringTreatment-scaled.jpg', caption: 'Elana during treatment' },
  { src: '/images/cropped-Elana-and-Trophy.png', caption: "Elana kicked cancer's butt" },
  { src: '/images/cropped-NUP_206704_00566.jpg', caption: 'Elana today' },
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
            Book Elana as a Keynote Speaker
          </button>
        </div>
      </section>

      {/* Elana's journey in three photos */}
      <section className="py-14 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 sm:gap-10 max-w-4xl mx-auto">
            {journey.map((step) => (
              <figure key={step.caption} className="text-center">
                <div className="relative aspect-square rounded-full p-1 bg-white border border-[#DAB87E] shadow-md">
                  <Image src={step.src} alt={step.caption} fill sizes="(max-width: 640px) 30vw, 220px" className="rounded-full object-cover" />
                </div>
                <figcaption className="mt-3 text-sm sm:text-lg italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">
                  {step.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Elana's story */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4 xl:px-28">
          <SectionTitle title="Elana's Story" />
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-5 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              <p className="text-xl font-semibold text-violet-600 dark:text-saffron-400">
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
              <p className="pt-2 italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">
                &ldquo;No child should fight cancer alone.&rdquo; &mdash; Elana Koenig, Founder
              </p>
            </div>
            <div className="bg-white p-2.5 rounded-[14px] border border-[#DAB87E] shadow-lg max-w-[380px] mx-auto lg:mr-0">
              <Image
                src="/images/cropped-IMG_1521-scaled-1.jpg"
                alt="Elana Koenig"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionTitle title="Our Mission" />
          <p className="text-2xl md:text-3xl font-semibold leading-snug text-[#2B2330] dark:text-white">
            KCCF provides life-saving financial and emotional support to children battling cancer and their families.
          </p>
          <p className="mt-8 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Every day, about 1,100 children are diagnosed with cancer worldwide, enough to fill 28 school buses. To reach
            specialized cancer centers, families face the costs of travel, lodging, living expenses and treatment. KCCF
            helps lift that financial strain so families can focus on their child.
          </p>
        </div>
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

      <CallToAction />
    </div>
  );
}
