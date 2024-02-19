import { PropsWithChildren } from 'react'
import { TextProps, TextStyle, ViewStyle } from 'react-native'

import { fontWeightEnum } from './fontEnums'
import { ScreenEnum } from './screenTypes'

export interface StyledTextProps extends TextProps {
  fontWeight?: fontWeightEnum
}

export interface ProgressBarProps {
  progress: number
  text?: string
  barStyle?: ViewStyle
  fillerStyle?: ViewStyle
  textStyle?: TextStyle
}

export interface LoadingContextProps {
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

export interface LoadingProviderProps extends PropsWithChildren {
  options?: {
    initialState: boolean
  }
}

export interface ErrorProps {
  errorText: string
}

export interface SidebarProps extends PropsWithChildren {
  isOpen: boolean
}

export interface ExternalLinkProps {
  name: string
  url: string
  imagePath: string
}

export interface CategoryProps extends PropsWithChildren {
  title: string
}

export interface ScreenButtonProps {
  title: string
  screen: ScreenEnum
  isActive: boolean
  setActiveScreen: (screen: ScreenEnum) => void
}
