import { render, screen } from '@testing-library/react'
import ShortLinkPage, { shortLinkTarget } from '@/components/ShortLinkPage'
import Plan from '@/app/plan/page'
import Meet from '@/app/meet/page'

describe('ShortLinkPage', () => {
  it('keeps outside addresses as they are', () => {
    expect(shortLinkTarget('https://calendar.app.google/abc')).toBe('https://calendar.app.google/abc')
  })

  it('forwards with a meta refresh and shows a fallback link', () => {
    render(<ShortLinkPage to="/crazy-socks?sponsor=1" label="the form" />)
    expect(document.querySelector('meta[http-equiv="refresh"]')?.getAttribute('content')).toBe('0;url=/crazy-socks?sponsor=1')
    expect(screen.getByRole('link', { name: 'the form' })).toHaveAttribute('href', '/crazy-socks?sponsor=1')
  })

  it('/plan opens the Crazy Socks sponsor form', () => {
    render(<Plan />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/crazy-socks?sponsor=1')
  })

  it("/meet opens Rena's booking page", () => {
    render(<Meet />)
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://calendar.app.google/W4hp8PjXQ2utEkoP7')
  })
})
