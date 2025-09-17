'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import PageHeader from '@/components/PageHeader'
import FormButton from '@/components/FormButton'
import { IMPACT_STATS } from '@/constants/impactStats'

export default function CrazySocksContent() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slideshowImages = [
    "/images/MetaLeadershipMakingfitBags-scaled.jpg",
    "/images/bankofamerica-scaled.jpeg",
    "/images/AlfacGiftMakingEvent-scaled.jpeg",
    "/images/ElanaOliviaGiftBags-scaled.jpg",
    "/images/MetaCSGiftBagEvent-scaled.jpg",
    "/images/giftbagevent2-scaled.jpeg",
    "/images/IMG_6861-scaled.jpeg",
    "/images/IMG_6703-scaled.jpeg",
    "/images/IMG_5046-scaled.jpg",
    "/images/IMG_2841-scaled.jpg",
    "/images/IMG_1850-scaled.jpg",
    "/images/IMG_0875-scaled.jpeg"
  ]

  const collageImages = [
    "/images/MetaLeadershipMakingfitBags-scaled.jpg",
    "/images/bankofamerica-scaled.jpeg",
    "/images/AlfacGiftMakingEvent-scaled.jpeg",
    "/images/ElanaOliviaGiftBags-scaled.jpg",
    "/images/MetaCSGiftBagEvent-scaled.jpg",
    "/images/giftbagevent2-scaled.jpeg",
    "/images/IMG_6861-scaled.jpeg",
    "/images/IMG_6703-scaled.jpeg",
    "/images/IMG_5046-scaled.jpg",
    "/images/IMG_2841-scaled.jpg",
    "/images/IMG_1850-scaled.jpg",
    "/images/IMG_0875-scaled.jpeg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideshowImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <PageHeader
        title="Crazy Socks Gift Bags"
        subtitle="Use your company's Corporate Social Responsibility (CSR) program to sponsor and host gift bag events for hospitalized children – bring smiles to their faces."
      />

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-full mb-6">
                <span className="text-white font-semibold text-sm">Our Signature Project</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                Why <span className="text-[#732154] dark:text-saffron-400">Crazy Socks</span> <span className="text-fandango-600 dark:text-fandango-400">Gift Bags</span>?
              </h2>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  Crazy Socks Gift Bag is KCCF's signature project, inspired by founder Elana's personal journey with cancer at the age of 7. While battling Ewing's sarcoma, a rare and aggressive bone cancer, Elana was struck by how the dull hospital socks mirrored the monotony and sadness of her days.
                </p>
                <p>
                  The moment she got home, she would pull them off and throw them away, hoping to leave behind the needles, pain, and fear. She was determined to change that experience for other children fighting cancer.
                </p>
                <p className="text-xl font-semibold text-[#732154] dark:text-saffron-400">
                  To date, more than {IMPACT_STATS.CRAZY_SOCKS[0].value.toLowerCase()} gift bags, containing over {IMPACT_STATS.CRAZY_SOCKS[1].value.toLowerCase()} items, have been delivered to hospitalized children across the United States and around the world.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#732154]/20 to-[#732154]/30 dark:from-[#732154]/40 dark:to-[#732154]/50 p-8 rounded-3xl shadow-2xl">
                <Image
                  src="/images/Screen-Shot-2021-03-05-at-10.45.40-AM.png"
                  alt="Crazy Socks Gift Bags"
                  width={500}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="text-[#732154] dark:text-saffron-400">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {IMPACT_STATS.CRAZY_SOCKS.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                <div className={`text-4xl font-bold ${stat.color.light} ${stat.color.dark} mb-4`}>
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-200 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-[#732154] dark:text-saffron-400">Gallery</span> <span className="text-fandango-600 dark:text-fandango-400">Showcase</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See the joy and impact of our Crazy Socks Gift Bag events in action.
            </p>
          </div>

          {/* Slideshow */}
          <div className="mb-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {slideshowImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <Image
                      src={image}
                      alt={`Crazy Socks Event ${index + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 896px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {slideshowImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Animated Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {collageImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={image}
                      alt={`Crazy Socks Collage ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.66vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Event {index + 1}
                    </div>
                    {/* Click indicator */}
                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-[#732154] dark:text-saffron-400">Corporate</span> <span className="text-fandango-600 dark:text-fandango-400">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              We bring the fun event to you! Leading companies partner with us to make a difference.
            </p>
            
            {/* SEO-Optimized Corporate Volunteering Paragraph */}
            <div className="bg-gradient-to-r from-[#732154]/10 to-fandango-600/10 dark:from-[#732154]/20 dark:to-fandango-600/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#732154] dark:text-saffron-400">Corporate Social Responsibility Through Gift Bag Volunteering</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Our Gift Bag Project offers a powerful way for companies to engage in <strong>Corporate Social Responsibility (CSR)</strong> through <strong>employee volunteering</strong> and <strong>team-building events</strong>. We provide <strong>turnkey opportunities in NYC</strong>, where employees can assemble <strong>gift bags for children battling cancer</strong>. This <strong>hands-on experience</strong> supports <strong>children's health and well-being</strong> while delivering <strong>measurable community impact</strong>. Through <strong>Volunteer Days</strong>, <strong>Volunteer Time Off (VTO)</strong>, and skills-based volunteering, companies can strengthen <strong>philanthropy partnerships</strong> and <strong>nonprofit collaboration</strong>. By partnering with KCCF, corporations contribute to <strong>scalable CSR initiatives</strong> that bring hope and joy to young patients while fostering a stronger workplace culture through <strong>employee engagement programs</strong>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Meta Leadership */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/MetaLeadershipMakingfitBags-scaled.jpg"
                    alt="Meta Leadership"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Meta Leadership</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Elana, teen founder presents!</p>
            </div>

            {/* Bank of America */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/bankofamerica-scaled.jpeg"
                    alt="Bank of America"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Bank of America</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">You make a difference!</p>
            </div>

            {/* Aflac Global Investments */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/AlfacGiftMakingEvent-scaled.jpeg"
                    alt="Aflac Global Investments"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Aflac Global Investments</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Hospitalized kids love it!</p>
            </div>

            {/* Forvis Mazars Group */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/giftbagevent2-scaled.jpeg"
                    alt="Forvis Mazars Group"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Forvis Mazars Group</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Making a difference together!</p>
            </div>

            {/* Elana and Olivia */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/ElanaOliviaGiftBags-scaled.jpg"
                    alt="Elana and Olivia Gift Bags"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Elana & Olivia</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Founder and friend</p>
            </div>

            {/* Meta CS Gift Bag Event */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/MetaCSGiftBagEvent-scaled.jpg"
                    alt="Meta CS Gift Bag Event"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Meta CS Event</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center">Community service impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Form Section */}
      <section className="py-20 bg-gradient-to-br from-[#732154] via-fandango-600 to-[#732154] dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sponsor <span className="text-white dark:text-[#732154]">Gift Bag</span> Event
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              For hospitalized children battling cancer
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-gray-900 text-center">
              <p className="text-lg text-gray-700 mb-8">
                Ready to make a difference? Partner with us to sponsor a gift bag event and bring joy to hospitalized children.
              </p>
              
              <FormButton
                formType="crazy-socks-sponsor"
                variant="primary"
                size="lg"
                className="min-w-[250px]"
              >
                Sponsor Gift Bag Event
              </FormButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
