import ShortLinkPage from '@/components/ShortLinkPage'

// thekccf.org/plan: short link for outreach messages (Rena, 11.8.26). Opens the Crazy Socks page with the sponsor form open.
export default function Plan() {
  return <ShortLinkPage to="/crazy-socks?sponsor=1" label="the Crazy Socks event form" />
}
