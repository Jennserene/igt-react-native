import { PropsWithChildren } from 'react'
import { TextProps } from 'react-native'

import { fontWeightEnum } from './fontEnums'

export interface StyledTextProps extends TextProps {
  fontWeight?: fontWeightEnum
}

export interface LoadingContextProps {
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

export interface LoadingProviderProps extends PropsWithChildren {
  initialState?: boolean
}

export interface ErrorProps {
  errorText: string
  testID?: string
}
