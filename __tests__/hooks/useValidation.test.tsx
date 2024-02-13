import { useValidation } from '@hooks'
import { renderHook, act } from '@testing-library/react-native'

describe('useValidation', () => {
  it('should validate form input values', () => {
    const formInputValues = {
      username: '',
    }

    const validationRules = {
      username: [
        (value: string | boolean) => {
          if (!value) {
            return 'Username is required'
          }
        },
      ],
    }

    const { result } = renderHook(() =>
      useValidation(formInputValues, validationRules),
    )

    act(() => {
      result.current.validateForm()
    })

    expect(result.current.errors).toEqual({
      username: 'Username is required',
    })
  })

  it('should reset errors', () => {
    const formInputValues = {
      username: '',
    }

    const validationRules = {
      username: [
        (value: string | boolean) => {
          if (!value) {
            return 'Username is required'
          }
        },
      ],
    }

    const { result } = renderHook(() =>
      useValidation(formInputValues, validationRules),
    )

    act(() => {
      result.current.validateForm()
    })

    expect(result.current.errors).toEqual({
      username: 'Username is required',
    })

    act(() => {
      result.current.resetError()
    })

    expect(result.current.errors).toEqual({})
  })
})
