import { PropsWithChildren, ReactNode } from 'react'
import {
  ImageStyle,
  PressableProps,
  StyleProp,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native'

import { fontWeightEnum } from './fontEnums'
import { ExternalLinkType, ScreenEnum } from './screenTypes'

export interface StyledTextProps extends TextProps {
  fontWeight?: fontWeightEnum
  style?: TextStyle
}

export interface StyledButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>
  activeColor?: string
  children: ReactNode
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

export interface ExternalLinkPropStylesType {
  linkContainer?: ViewStyle
  linkImage?: ImageStyle
  linkText?: TextStyle
}

export interface ExternalLinkProps extends ExternalLinkType {
  propStyles?: ExternalLinkPropStylesType
  size?: 'small' | 'large'
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

export interface HomeProps {
  externalLinks?: ExternalLinkProps[]
}
