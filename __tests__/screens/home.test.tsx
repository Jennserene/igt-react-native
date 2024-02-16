import React from 'react'
import { render, waitFor } from '@testing-library/react-native'

import Home from '@screens/home'

import '@testing-library/jest-native/extend-expect'

describe('App', () => {
  it('renders without crashing', () => {
    render(<Home />)
  })

  it('renders the correct text', () => {
    const { getByText } = render(<Home />)

    waitFor(() => {
      const textElement = getByText('Welcome to your homescreen!')
      expect(textElement).toBeTruthy()
    })
  })

  it('renders the container with correct styles', () => {
    const { getByTestId } = render(<Home />)

    waitFor(() => {
      const containerElement = getByTestId('container')
      expect(containerElement).toHaveStyle({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      })
    })
  })
})
