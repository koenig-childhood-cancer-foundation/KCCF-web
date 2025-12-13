"use client"

import { type ReactNode } from 'react'
import { useFormModal, FormType } from '@/contexts/FormModalContext'

interface FormButtonProps {
  formType: FormType
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'violet' | 'fandango' | 'orange' | 'saffron'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
  icon?: ReactNode
  fullWidth?: boolean
}

export default function FormButton({
  formType,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  fullWidth = false
}: FormButtonProps) {
  const { openModal } = useFormModal()

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer'

  const variantClasses = {
    primary: 'btn-primary btn-primary-orange text-white focus:ring-orange-500',
    secondary: 'btn-primary bg-fandango-600 hover:bg-fandango-700 text-white focus:ring-fandango-500',
    violet: 'btn-primary btn-primary-violet text-white focus:ring-violet-500',
    fandango: 'btn-primary bg-fandango-600 hover:bg-fandango-700 text-white focus:ring-fandango-500',
    orange: 'btn-primary btn-primary-orange text-white focus:ring-orange-500',
    saffron: 'btn-primary bg-saffron-600 hover:bg-saffron-700 text-white focus:ring-saffron-500',
    outline: 'btn-primary btn-outline-violet focus:ring-violet-500',
    ghost: 'text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 transform hover:-translate-y-1 focus:ring-violet-500'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  }

  const widthClass = fullWidth ? 'w-full' : ''

  const handleClick = () => {
    openModal(formType)
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
    >
      {children}
      {icon && <span className="ml-2" aria-hidden="true">{icon}</span>}
    </button>
  )
}
