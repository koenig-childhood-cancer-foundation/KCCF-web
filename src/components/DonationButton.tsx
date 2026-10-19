"use client"

import { type ReactNode } from 'react'
import { useDonationModal } from '@/contexts/DonationModalContext'

interface DonationButtonProps {
  amount?: number
  campaign?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: ReactNode
  icon?: ReactNode
  id?: string
}

export default function DonationButton({
  amount = 50,
  campaign = '',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  id
}: DonationButtonProps) {
  const { openModal, warmUp } = useDonationModal()

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#772D5E] cursor-pointer'

  const variantClasses = {
    primary: 'btn-primary btn-primary-orange text-white',
    secondary: 'btn-primary bg-fandango-600 hover:bg-fandango-700 text-white',
    outline: 'btn-primary border-2 border-[#772D5E] text-[#772D5E] hover:bg-[#772D5E] hover:text-white',
    ghost: 'text-[#772D5E] hover:bg-[#772D5E]/10 transform hover:-translate-y-1'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-full',
    md: 'px-6 py-3 text-base rounded-full',
    lg: 'px-8 py-4 text-lg rounded-full'
  }

  const handleClick = () => {
    openModal(campaign || undefined)
  }

  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      onMouseEnter={warmUp}
      onFocus={warmUp}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children || `Donate $${amount}`}
      {icon && <span className="btn-icon" aria-hidden="true">{icon}</span>}
    </button>
  )
}
