"use client"

import { useEffect } from 'react'
import { useFormModal, type FormType } from '@/contexts/FormModalContext'

// Loads this page's forms in a hidden frame shortly after the page has loaded,
// so the pop-up opens without the 4–5 second monday.com / Zeffy wait.
// Uses the same warm-up as the buttons, so each form is only loaded once.
export default function PreloadForms({ forms }: { forms: FormType[] }) {
  const { warmUp } = useFormModal()
  const key = forms.join(',')

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    const start = () => {
      timer = setTimeout(() => key.split(',').forEach(f => warmUp(f as FormType)), 2500)
    }
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
    return () => {
      window.removeEventListener('load', start)
      if (timer) clearTimeout(timer)
    }
  }, [key, warmUp])

  return null
}
