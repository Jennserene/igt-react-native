import { Error } from '@components/error'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('Error component', () => {
  const errorText = 'Something went wrong'

  it('renders the error text', () => {
    const { getByText } = render(<Error errorText={errorText} />)
    const errorTextElement = getByText(errorText)
    expect(errorTextElement).toBeTruthy()
  })
})
