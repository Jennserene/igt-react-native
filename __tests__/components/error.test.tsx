import React from 'react'
import { render } from '@testing-library/react-native'

import { Error } from '@components/error'

describe('Error component', () => {
  const errorText = 'Something went wrong'

  it('renders the error text', () => {
    const { getByText } = render(<Error errorText={errorText} />)
    const errorTextElement = getByText(errorText)
    expect(errorTextElement).toBeTruthy()
  })
})
