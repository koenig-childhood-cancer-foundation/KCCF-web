import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { FormModalProvider, useFormModal } from '@/contexts/FormModalContext'

const wrapper = ({ children }: { children: ReactNode }) => (
  <FormModalProvider>{children}</FormModalProvider>
)

describe('FormModalContext', () => {
  it('starts closed with no form type', () => {
    const { result } = renderHook(() => useFormModal(), { wrapper })
    expect(result.current.isOpen).toBe(false)
    expect(result.current.formType).toBeNull()
  })

  it('openModal opens the requested form', () => {
    const { result } = renderHook(() => useFormModal(), { wrapper })
    act(() => result.current.openModal('aid-application'))
    expect(result.current.isOpen).toBe(true)
    expect(result.current.formType).toBe('aid-application')
  })

  it('closeModal resets the modal state', () => {
    const { result } = renderHook(() => useFormModal(), { wrapper })
    act(() => result.current.openModal('contact'))
    act(() => result.current.closeModal())
    expect(result.current.isOpen).toBe(false)
    expect(result.current.formType).toBeNull()
  })

  it('sends GA4 events for the aid and sponsor forms only', () => {
    const w = window as Window & { dataLayer?: Record<string, unknown>[] }
    w.dataLayer = []
    const { result } = renderHook(() => useFormModal(), { wrapper })
    act(() => result.current.openModal('aid-application'))
    act(() => result.current.openModal('crazy-socks-sponsor'))
    act(() => result.current.openModal('contact'))
    expect(w.dataLayer.map((e) => e.event)).toEqual(['aid_apply_open', 'sponsor_click'])
  })

  it('sends nothing before analytics consent (no dataLayer yet)', () => {
    const w = window as Window & { dataLayer?: Record<string, unknown>[] }
    delete w.dataLayer
    const { result } = renderHook(() => useFormModal(), { wrapper })
    act(() => result.current.openModal('aid-application'))
    expect(w.dataLayer).toBeUndefined()
  })
})
