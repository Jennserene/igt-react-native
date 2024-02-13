import { UseTextInputHook } from '@typeDefs'
import { useState } from 'react'

export const useTextInput = (initialValue: string): UseTextInputHook => {
  const [value, setValue] = useState(initialValue)

  const onChangeText = (text: string) => {
    setValue(text)
  }

  const reset = () => {
    setValue(initialValue)
  }

  return { value, onChangeText, reset }
}
