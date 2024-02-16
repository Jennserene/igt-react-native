import React, { useContext } from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { Button, Text, View } from 'react-native'

import {
  LoadingContext,
  LoadingProvider,
} from '@components/context/loadingProvider'

describe('LoadingProvider', () => {
  it('should render children', () => {
    const { getByText } = render(
      <LoadingProvider>
        <Text>Test Child</Text>
      </LoadingProvider>,
    )

    expect(getByText('Test Child')).toBeDefined()
  })

  it('should set loading state correctly', () => {
    const TestComponent = () => {
      const { isLoading, setLoading } = useContext(LoadingContext)

      const handleClick = () => {
        setLoading(true)
      }

      return (
        <View>
          <Text>{isLoading ? 'Loading' : 'Not Loading'}</Text>
          <Button title="Set Loading" onPress={handleClick} />
        </View>
      )
    }

    const { getByText } = render(
      <LoadingProvider>
        <TestComponent />
      </LoadingProvider>,
    )

    expect(getByText('Not Loading')).toBeDefined()

    fireEvent.press(getByText('Set Loading'))

    expect(getByText('Loading')).toBeDefined()
  })
})
