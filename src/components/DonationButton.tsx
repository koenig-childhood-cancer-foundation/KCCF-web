"use client"

import { type ReactNode } from 'react'
import Link from 'next/link'

interface DonationButtonProps {
  amount?: number
  campaign?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: ReactNode
  icon?: ReactNode
}

export default function DonationButton({
  amount = 50,
  campaign: _campaign = '',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon
}: DonationButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732154] cursor-pointer'

  const variantClasses = {
    primary: 'btn-primary btn-primary-orange text-white',
    secondary: 'btn-primary bg-fandango-600 hover:bg-fandango-700 text-white',
    outline: 'btn-primary border-2 border-[#732154] text-[#732154] hover:bg-[#732154] hover:text-white',
    ghost: 'text-[#732154] hover:bg-[#732154]/10 transform hover:-translate-y-1'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full'
  }

  return (
    <Link
      href="/donate"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children || `Donate $${amount}`}
      {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
    </Link>
  )
}
