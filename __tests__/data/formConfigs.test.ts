import { FORM_CONFIGS, type FormType } from '@/contexts/FormModalContext'

const FORM_TYPES: FormType[] = [
  'camp-camper',
  'camp-counselor',
  'crazy-socks-sponsor',
  'newsletter-signup',
  'book-elana',
  'volunteer',
  'contact',
  'aid-application',
]

describe('FORM_CONFIGS integrity', () => {
  it('defines a config for every form type', () => {
    for (const type of FORM_TYPES) {
      expect(FORM_CONFIGS[type]).toBeDefined()
    }
  })

  it('has a non-empty title and a pixel height for every form', () => {
    for (const type of FORM_TYPES) {
      const config = FORM_CONFIGS[type]
      expect(config.title.trim().length).toBeGreaterThan(0)
      expect(config.height).toMatch(/^\d+px$/)
    }
  })

  it('uses secure https embed URLs', () => {
    for (const type of FORM_TYPES) {
      expect(FORM_CONFIGS[type].src.startsWith('https://')).toBe(true)
    }
  })

  it('routes each form to its expected provider', () => {
    // The newsletter is the deliberate exception: Mailchimp, not Monday.com.
    expect(FORM_CONFIGS['newsletter-signup'].src).toContain('list-manage.com')

    for (const type of FORM_TYPES.filter((t) => t !== 'newsletter-signup')) {
      expect(FORM_CONFIGS[type].src).toContain('forms.monday.com')
    }
  })
})
