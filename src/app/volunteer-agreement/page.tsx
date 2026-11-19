import type { Metadata } from 'next'

// KCCF Volunteer Agreement, Version 1 (November 2026). Text approved by KCCF counsel.
// Do not edit this page: future versions get a new address (e.g. /volunteer-agreement-v2).
export const metadata: Metadata = {
  title: 'KCCF Volunteer Agreement | KCCF',
  description: 'The KCCF Volunteer Agreement, Version 1, November 2026.',
  alternates: { canonical: 'https://thekccf.org/volunteer-agreement' },
  robots: { index: true, follow: true },
}

export default function VolunteerAgreement() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16 print:pt-0 print:pb-0">
      {/* Print on letter paper: hide the site menu, footer and cookie banner */}
      <style>{`@page { size: letter; margin: 0.75in; } @media print { nav, footer, [role="dialog"] { display: none !important; } }`}</style>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 text-gray-800 leading-relaxed print:max-w-none print:px-0 print:text-[11pt]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#772D5E] print:text-black">KCCF Volunteer Agreement</h1>
        <p className="mt-2 mb-8 text-lg text-gray-600 print:text-black">Version 1, November 2026</p>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Koenig Childhood Cancer Foundation, Inc. Volunteer Agreement</h2>
        <p className="mb-4">Thank you for volunteering with Koenig Childhood Cancer Foundation, Inc. (&quot;KCCF&quot;). KCCF serves children with cancer and their families, many of whom are medically fragile. This Agreement explains what we expect from every volunteer and what you agree to by signing. Please read it carefully. If you are under 18, a parent or guardian must read and sign it with you.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">1. Your role</h3>
        <p className="mb-4">You are a volunteer, not an employee. You will not receive pay or benefits of any kind for your volunteer work. KCCF may change or end your volunteer role at any time, for any reason, with or without notice.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">2. Child safety and health</h3>
        <p className="mb-4">When you are with KCCF children, in person or online, you agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Stay home if you feel sick, even with a mild cold, a fever or a cough. Many of our children have weak immune systems.</li>
          <li>Wash or sanitize your hands before you greet or help the children.</li>
          <li>Never be alone with a child. Always stay where other adults can see you.</li>
          <li>Remember that parents and guardians stay responsible for their own children.</li>
          <li>Not contact a child or family privately (by phone, text or social media) unless KCCF has asked you to.</li>
          <li>Tell KCCF right away if you see or hear anything that makes you worried about a child&apos;s safety or well-being.</li>
          <li>Follow the instructions of the KCCF team at every event.</li>
        </ul>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">3. Confidentiality</h3>
        <p className="mb-4">As a volunteer, you may learn private information. Confidential information includes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Information about the children and families we serve, such as names, medical conditions and treatment, finances, living situations, contact details and family relationships.</li>
          <li>Information about our donors, sponsors and partners, such as names, contact details and gift amounts.</li>
          <li>KCCF&apos;s internal information, such as plans, budgets, lists, files, systems, passwords and fundraising strategies.</li>
        </ul>
        <p className="mb-4">You agree to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Keep this information private and use it only for your KCCF volunteer work.</li>
          <li>Not share it with anyone, including friends and family, unless KCCF gives you written permission or the law requires it. If the law requires it, tell KCCF first if you can.</li>
          <li>Discuss private information only in a place where others cannot overhear.</li>
          <li>Return or delete all KCCF files and information when your volunteer role ends, or whenever KCCF asks.</li>
        </ul>
        <p className="mb-4">Your duty to keep this information private continues after your volunteer role ends.</p>
        <p className="mb-4">Work you create for KCCF, such as designs, photos, videos, writing and website code, belongs to KCCF, and KCCF may use it freely. To the extent any of it does not belong to KCCF automatically, you transfer (assign) to KCCF all of your rights in it.</p>
        <p className="mb-4">If private information is shared by mistake, tell KCCF right away. If you break this section, KCCF may ask a court to order you to stop, in addition to any other rights KCCF has. Nothing in this Agreement stops you from reporting a concern about a child&apos;s safety to the police, child protective services or any other government agency, and you do not need KCCF&apos;s permission to do so.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">4. Photos and social media</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Take photos or videos of children and families only with permission from KCCF and the family.</li>
          <li>Never post photos, videos, names or stories of KCCF children or families on your personal social media.</li>
          <li>When you share KCCF posts, share only what KCCF has already posted publicly.</li>
          <li>You give KCCF permission to use photos, videos and recordings of you taken during your volunteer activities, for KCCF&apos;s mission and promotion, without payment.</li>
        </ul>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">5. Other organizations</h3>
        <p className="mb-4">Please tell KCCF before you volunteer for, or work with, a similar children&apos;s cancer charity, so we can avoid any conflict of interest.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">6. Risk, release and insurance</h3>
        <p className="mb-4">You understand that volunteer activities, including travel to and from them, may involve risks of injury, illness or property damage. You choose to take part and accept those risks. To the fullest extent the law allows, you release KCCF and its directors, officers, employees, volunteers and agents from all claims arising from your volunteer activities, including claims caused by their own negligence (carelessness) and claims about first aid or medical care given during those activities. This release does not cover gross negligence or intentional wrongdoing. KCCF does not provide health, accident or disability insurance for volunteers. You are encouraged to have your own. You agree to be responsible for, and to repay KCCF for, any claim made against KCCF because of your own careless or intentional acts during your volunteer activities, to the extent the law allows. If you are hurt or become ill during a volunteer activity and cannot make decisions for yourself (or, if you are under 18, your parent or guardian cannot be reached), you authorize KCCF to arrange emergency medical care for you. You are responsible for the cost of that care.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">7. Background check</h3>
        <p className="mb-4">Volunteers who work with children may be asked to complete a background check. KCCF will give you a written notice and ask for your written permission on a separate form before any check is done.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">8. Disputes and governing law</h3>
        <p className="mb-4">This Agreement is governed by the laws of the State of New York. Any dispute arising out of or relating to this Agreement or your volunteer activities will be decided only in the state or federal courts located in New York County, New York, and you and KCCF agree to the jurisdiction of those courts.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">9. Volunteers under 18</h3>
        <p className="mb-4">If you are under 18, your parent or guardian agrees to this Agreement on your behalf and with you, also agrees to it for themselves (including the release in Section 6), and signs below.</p>
        <h3 className="text-lg font-bold text-[#772D5E] print:text-black mt-8 mb-3 break-after-avoid">10. Agreement</h3>
        <p className="mb-4">By checking the box and typing my name on the KCCF Volunteer Application, I confirm that I have read, understood and agree to this Volunteer Agreement, and that my typed name is my electronic signature and has the same effect as signing by hand. If any part of this Agreement cannot be enforced, the rest of it still applies.</p>
      </article>
    </div>
  )
}
