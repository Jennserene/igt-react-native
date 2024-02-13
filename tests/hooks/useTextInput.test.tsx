import { useTextInput } from '@hooks'
import { renderHook, act } from '@testing-library/react-native'

describe('useTextInput', () => {
  it('should update the value when onChangeText is called', () => {
    const { result } = renderHook(() => useTextInput(''))

    act(() => {
      result.current.onChangeText('new value')
    })

    expect(result.current.value).toBe('new value')
  })

  it('should reset the value to the initial value when reset is called', () => {
    const { result } = renderHook(() => useTextInput(''))

    act(() => {
      result.current.onChangeText('new value')
      result.current.reset()
    })

    expect(result.current.value).toBe('')
  })
})
