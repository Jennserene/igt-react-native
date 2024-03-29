import React from 'react'
import App from '@app'
import { render, screen } from '@testing-library/react-native'
import { useFonts } from 'expo-font'

import { colors } from '@utils'

import { LoadingProvider } from '@components/context'

import '@testing-library/jest-native/extend-expect'

const mockedUseFonts = useFonts as jest.MockedFunction<typeof useFonts>

jest.mock('@components', () => {
  const originalModule = jest.requireActual('@components')
  return {
    ...originalModule,
    GlobalWrapper: ({ children }: { children: React.ReactNode }) => children,
  }
})

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaFrame: jest.fn().mockReturnValue({ height: 100 }),
}))

describe.skip('App', () => {
  beforeEach(() => {
    mockedUseFonts.mockImplementation(() => [true, null])
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  const renderWithLoading = (isLoading: boolean) => {
    const options = isLoading ? { initialState: isLoading } : undefined
    return render(
      <LoadingProvider options={options}>
        <App />
      </LoadingProvider>,
    )
  }

  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders the appContainer with correct styles when fonts are loaded', async () => {
    renderWithLoading(false)

    const containerElement = screen.getByTestId('appContainer')
    const loadingElement = screen.queryByAccessibilityHint('Loading...')

    expect(containerElement).toHaveStyle({
      flex: 1,
      backgroundColor: colors.backgrounds.primary,
      alignItems: 'center',
      justifyContent: 'center',
    })
    expect(loadingElement).toBeNull()
  })

  it('renders the Loading component when isLoading is true', () => {
    renderWithLoading(true)

    const loadingElement = screen.getByAccessibilityHint('Loading...')

    expect(loadingElement).toBeTruthy()
  })

  it('renders the Loading component when fonts are not loaded', () => {
    mockedUseFonts.mockImplementation(() => [false, null])

    renderWithLoading(false)

    const loadingElement = screen.getByAccessibilityHint('Loading...')
    expect(loadingElement).toBeTruthy()
  })

  it('renders the Error component when there is a font error', async () => {
    const errorText = 'Font loading failed'
    mockedUseFonts.mockImplementation(() => [false, new Error(errorText)])

    render(<App />)
    const errorElement = await screen.getByText(errorText)
    expect(errorElement).toBeTruthy()
  })

  it('does not render the Loading component when isLoading is false (by default)', async () => {
    renderWithLoading(false)
    const loadingElement = screen.queryByAccessibilityHint('Loading...')
    expect(loadingElement).toBeNull()
  })

  it('renders the Home component by default', () => {
    renderWithLoading(false)
    const homeElement = screen.getByText('Welcome to your homescreen!')
    expect(homeElement).toBeTruthy()
  })
})
