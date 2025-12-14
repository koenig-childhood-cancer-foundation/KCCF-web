'use client'

import React from 'react'
import Image from 'next/image'

interface PageHeaderProps {
  title: string
  subtitle?: string
  image?: string
  childrenRight?: React.ReactNode
}

export default function PageHeader({
  title,
  subtitle,
  image,
  childrenRight
}: PageHeaderProps) {
  return (
    <header className="relative w-full max-w-screen-2xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          {image && (
            <Image
              src={image}
              alt=""
              width={800}
              height={600}
              className="rounded-xl w-full object-cover mb-6"
              priority
            />
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-white/90 text-lg md:text-xl leading-relaxed drop-shadow-md max-w-[42ch] break-words">
              {subtitle}
            </p>
          )}
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex justify-center lg:justify-end lg:place-self-end">
          {childrenRight && (
            <div className="w-full max-w-md">
              {childrenRight}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
