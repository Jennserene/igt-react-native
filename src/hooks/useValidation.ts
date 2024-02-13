import { ValidationRules, ValidationResult } from '@typeDefs'
import { useState } from 'react'

export const useValidation = (
  formInputValues: Record<string, string | boolean>,
  validationRules: ValidationRules,
) => {
  const [errors, setErrors] = useState<ValidationResult>({})

  const validateForm = (): boolean => {
    const validationErrors: ValidationResult = {}

    Object.entries(validationRules).forEach(([fieldName, rules]) => {
      let fieldError: string | undefined

      rules.some((rule) => {
        fieldError = rule(formInputValues[fieldName])
        return fieldError !== undefined
      })

      if (fieldError) {
        validationErrors[fieldName] = fieldError
      }
    })

    setErrors(validationErrors)
    return Object.keys(validationErrors).length === 0
  }

  const resetError = () => {
    setErrors({})
  }

  return { errors, validateForm, resetError }
}
