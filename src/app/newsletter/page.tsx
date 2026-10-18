import MovedPage from '@/components/MovedPage'

// Old newsletter address: opens Home with the newsletter sign-up pop-up showing.
export default function Newsletter() {
  return <MovedPage to="/?subscribe=1" name="Home" />
}
