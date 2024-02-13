export interface UseTextInputHook {
  value: string
  onChangeText: (text: string) => void
  reset: () => void
}
