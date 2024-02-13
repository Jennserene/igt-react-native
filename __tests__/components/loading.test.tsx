import { Loading } from '@components/loading'
import { render, screen } from '@testing-library/react-native'
import React from 'react'

describe('Loading', () => {
  it('renders loading indicator', () => {
    render(<Loading />)

    const loadingIndicator = screen.getByAccessibilityHint('Loading...')
    expect(loadingIndicator).toBeTruthy()
  })
})
