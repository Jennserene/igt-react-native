import React from 'react'
import { render, screen } from '@testing-library/react-native'

import { LoadingProvider } from '@components/context'
import { Loading } from '@components/loading'

describe('Loading', () => {
  it('renders loading indicator', () => {
    render(
      <LoadingProvider options={{ initialState: true }}>
        <Loading />
      </LoadingProvider>,
    )

    const loadingIndicator = screen.getByAccessibilityHint('Loading...')
    expect(loadingIndicator).toBeTruthy()
  })
})
