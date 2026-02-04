import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../SearchBar'

it('renders and calls onSearch', () => {
  const onSearch = vi.fn()
  render(<SearchBar defaultQuery="X" onSearch={onSearch} />)
  const input = screen.getByRole('textbox', { name: /search location/i })
  fireEvent.change(input, { target: { value: 'London' } })
  const button = screen.getByRole('button', { name: /search/i })
  fireEvent.click(button)
  expect(onSearch).toHaveBeenCalledWith('London')
})
