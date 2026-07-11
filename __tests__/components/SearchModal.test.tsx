import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchModal from '@/components/SearchModal'

// Variables prefixed with `mock` may be referenced from a jest.mock factory.
const mockClose = jest.fn()
const mockPush = jest.fn()

jest.mock('@/contexts/SearchModalContext', () => ({
  useSearchModal: () => ({ isOpen: true, closeModal: mockClose }),
}))

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

describe('SearchModal', () => {
  beforeEach(() => {
    mockClose.mockClear()
    mockPush.mockClear()
  })

  it('shows all pages when the query is empty', () => {
    render(<SearchModal />)
    expect(screen.getByRole('option', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: /Donate/i })).toBeInTheDocument()
  })

  it('filters results by keyword', async () => {
    const user = userEvent.setup()
    render(<SearchModal />)
    await user.type(screen.getByLabelText('Search pages'), 'donate')
    expect(screen.getByText('Donate')).toBeInTheDocument()
    expect(screen.queryByText('Our Story')).not.toBeInTheDocument()
  })

  it('shows an empty state when nothing matches', async () => {
    const user = userEvent.setup()
    render(<SearchModal />)
    await user.type(screen.getByLabelText('Search pages'), 'zzzznotarealpage')
    expect(screen.getByText(/No results found/i)).toBeInTheDocument()
  })

  it('navigates and closes the modal when a result is selected', async () => {
    const user = userEvent.setup()
    render(<SearchModal />)
    await user.click(screen.getByRole('button', { name: /Donate/i }))
    expect(mockPush).toHaveBeenCalledWith('/donate')
    expect(mockClose).toHaveBeenCalled()
  })
})
