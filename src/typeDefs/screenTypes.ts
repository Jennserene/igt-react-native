import { ImageSourcePropType } from 'react-native'

export enum ScreenEnum {
  Home = 'Home',
  DeveloperPanel = 'DeveloperPanel',
  Settings = 'Settings',
}

export enum CategoryEnum {
  Game = 'Game',
  Other = 'Other',
}

export type ScreenOptions = {
  category: CategoryEnum
  devOnly: boolean
  isClassComponent: boolean
}

export type ScreenType = {
  name?: string | ScreenEnum
  screen: unknown
  props?: Record<string, unknown>
  options: ScreenOptions
}

export type PropsType = Record<string, unknown> | undefined

export type ScreensType = Record<ScreenEnum, ScreenType>

export type ExternalLinkType = {
  name: string
  url: string
  image: ImageSourcePropType
}

export type ExternalLinksType = ExternalLinkType[]
