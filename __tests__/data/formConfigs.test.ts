import { FORM_CONFIGS, type FormType } from '@/contexts/FormModalContext'

// Derived from the source of truth, so a newly added or renamed config is
// automatically covered by the integrity/provider assertions below.
const configuredTypes = Object.keys(FORM_CONFIGS) as FormType[]

// Forms the site must always ship; guards against an accidental removal/rename.
const REQUIRED_TYPES: FormType[] = [
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
  it('includes every required form type', () => {
    for (const type of REQUIRED_TYPES) {
      expect(configuredTypes).toContain(type)
    }
  })

  it('has a non-empty title and a pixel height for every configured form', () => {
    for (const type of configuredTypes) {
      const config = FORM_CONFIGS[type]
      expect(config.title.trim().length).toBeGreaterThan(0)
      expect(config.height).toMatch(/^\d+px$/)
    }
  })

  it('uses secure https embed URLs', () => {
    for (const type of configuredTypes) {
      expect(FORM_CONFIGS[type].src.startsWith('https://')).toBe(true)
    }
  })

  it('routes each configured form to its expected provider', () => {
    // The newsletter is the deliberate exception: Mailchimp, not Monday.com.
    expect(FORM_CONFIGS['newsletter-signup'].src).toContain('list-manage.com')

    for (const type of configuredTypes.filter((t) => t !== 'newsletter-signup')) {
      expect(FORM_CONFIGS[type].src).toContain('forms.monday.com')
    }
  })
})
