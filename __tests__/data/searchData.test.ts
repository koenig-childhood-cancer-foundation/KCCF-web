import { searchData } from '@/data/searchData'

describe('searchData integrity', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(searchData)).toBe(true)
    expect(searchData.length).toBeGreaterThan(0)
  })

  it('has all required fields populated on every item', () => {
    for (const item of searchData) {
      expect(item.title.trim().length).toBeGreaterThan(0)
      expect(item.description.trim().length).toBeGreaterThan(0)
      expect(item.href.trim().length).toBeGreaterThan(0)
      expect(Array.isArray(item.keywords)).toBe(true)
      expect(item.keywords.length).toBeGreaterThan(0)
      expect(item.category.trim().length).toBeGreaterThan(0)
    }
  })

  it('uses root-relative internal hrefs', () => {
    for (const item of searchData) {
      expect(item.href.startsWith('/')).toBe(true)
    }
  })

  it('has unique hrefs (no duplicate search entries)', () => {
    const hrefs = searchData.map((i) => i.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
  })

  it('only uses known categories', () => {
    const allowed = new Set(['Pages', 'Programs', 'About', 'Contact'])
    for (const item of searchData) {
      expect(allowed.has(item.category)).toBe(true)
    }
  })

  it('keeps keywords lowercase so SearchModal matching stays case-insensitive', () => {
    // SearchModal lowercases the query but compares against raw keywords,
    // so keywords must already be lowercase for matching to work.
    for (const item of searchData) {
      for (const keyword of item.keywords) {
        expect(keyword).toBe(keyword.toLowerCase())
      }
    }
  })
})
