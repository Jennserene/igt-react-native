import React from 'react'
import { render, screen } from '@testing-library/react-native'
import { useFonts } from 'expo-font'

import { colors } from '@utils'

import { LoadingProvider } from '@components/context'
import HomeLayout from '@app/_layout'

import '@testing-library/jest-native/extend-expect'

const mockedUseFonts = useFonts as jest.MockedFunction<typeof useFonts>

describe('HomeLayout', () => {
  beforeEach(() => {
    mockedUseFonts.mockImplementation(() => [true, null])
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders without crashing', () => {
    render(<HomeLayout />)
  })

  it('renders the appContainer with correct styles when fonts are not loaded', async () => {
    render(<HomeLayout />)
    const containerElement = await screen.getByTestId('appContainer')
    expect(containerElement).toHaveStyle({
      flex: 1,
      backgroundColor: colors.backgrounds.primary,
      alignItems: 'center',
      justifyContent: 'center',
    })
  })

  it.skip('renders the Loading component when fonts are not loaded', async () => {
    mockedUseFonts.mockImplementation(() => [false, null])

    render(<HomeLayout />)
    const loadingElement = await screen.getByAccessibilityHint('Loading...')
    expect(loadingElement).toBeTruthy()
  })

  it('renders the Error component when there is a font error', async () => {
    const errorText = 'Font loading failed'
    mockedUseFonts.mockImplementation(() => [false, new Error(errorText)])

    render(<HomeLayout />)
    const errorElement = await screen.getByText(errorText)
    expect(errorElement).toBeTruthy()
  })

  it.skip('renders the Loading component when isLoading is true', () => {
    render(
      <LoadingProvider options={{ initialState: true }}>
        <HomeLayout />
      </LoadingProvider>,
    )
    const loadingElement = screen.getByAccessibilityHint('Loading...')
    expect(loadingElement).toBeTruthy()
  })

  it('does not render the Loading component when isLoading is false (by default)', async () => {
    render(
      <LoadingProvider>
        <HomeLayout />
      </LoadingProvider>,
    )
    const loadingElement = screen.queryByAccessibilityHint('Loading...')
    expect(loadingElement).toBeNull()
  })
})
