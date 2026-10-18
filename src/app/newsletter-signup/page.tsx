import MovedPage from '@/components/MovedPage'

// The newsletter sign-up is now a pop-up (footer button). Old links open Home with the pop-up showing.
export default function NewsletterSignup() {
  return <MovedPage to="/?subscribe=1" name="Home" />
}
