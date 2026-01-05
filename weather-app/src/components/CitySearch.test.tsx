import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CitySearch } from '@/components/CitySearch'

describe('CitySearch Component', () => {
  it('should render search input', () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={false} />)
    expect(screen.getByPlaceholderText('Search for a city...')).toBeInTheDocument()
  })

  it('should render search button', () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={false} />)
    expect(screen.getByRole('button', { name: /🔍/ })).toBeInTheDocument()
  })

  it('should filter cities on input change', async () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={false} />)

    const input = screen.getByPlaceholderText('Search for a city...')
    await userEvent.type(input, 'New')

    await waitFor(() => {
      expect(screen.getByText('New York')).toBeInTheDocument()
    })
  })

  it('should show city suggestions when focused', async () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={false} />)

    const input = screen.getByPlaceholderText('Search for a city...')
    fireEvent.focus(input)

    await waitFor(() => {
      expect(screen.getByText('New York')).toBeInTheDocument()
    })
  })

  it('should call onCitySelect when city is clicked', async () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={false} />)

    const input = screen.getByPlaceholderText('Search for a city...')
    await userEvent.type(input, 'London')

    await waitFor(() => {
      const londonOption = screen.getByText('London')
      fireEvent.click(londonOption)
    })

    expect(mockOnSelect).toHaveBeenCalledWith('London')
  })

  it('should disable input when loading', () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={true} />)

    const input = screen.getByPlaceholderText('Search for a city...')
    expect(input).toBeDisabled()
  })

  it('should disable search button when loading', () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={true} />)

    const button = screen.getByRole('button', { name: /⏳/ })
    expect(button).toBeDisabled()
  })

  it('should clear input after selecting city', async () => {
    const mockOnSelect = vi.fn()
    render(<CitySearch onCitySelect={mockOnSelect} isLoading={false} />)

    const input = screen.getByPlaceholderText('Search for a city...') as HTMLInputElement
    await userEvent.type(input, 'Paris')

    await waitFor(() => {
      const parisOption = screen.getByText('Paris')
      fireEvent.click(parisOption)
    })

    expect(input.value).toBe('')
  })
})
