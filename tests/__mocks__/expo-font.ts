export const loadAsync = jest.fn()
type useFontsType = [boolean, Error | null]
export const useFonts = jest.fn(() => [true, null] as useFontsType)
