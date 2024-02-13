export type ValidationRule = (value: string | boolean) => string | undefined

export interface ValidationRules {
  [key: string]: ValidationRule[]
}

export interface ValidationResult {
  [key: string]: string | undefined
}
