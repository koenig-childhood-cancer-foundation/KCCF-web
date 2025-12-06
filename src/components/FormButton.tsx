"use client"

import { useFormModal, FormType } from '@/contexts/FormModalContext'

interface FormButtonProps {
  formType: FormType
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'violet' | 'fandango' | 'orange' | 'saffron'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  icon?: React.ReactNode
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
    primary: 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-orange-500',
    secondary: 'bg-fandango-600 hover:bg-fandango-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-fandango-500',
    violet: 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-violet-500',
    fandango: 'bg-fandango-600 hover:bg-fandango-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-fandango-500',
    orange: 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-orange-500',
    saffron: 'bg-saffron-600 hover:bg-saffron-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-saffron-500',
    outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white transform hover:-translate-y-1 focus:ring-violet-500',
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
