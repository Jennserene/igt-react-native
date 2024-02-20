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

export type ScreenType = {
  name?: string | ScreenEnum
  screen: (props?: any) => React.JSX.Element
  props?: Record<string, unknown>
  category: CategoryEnum
  devOnly?: boolean
}

export type ScreensType = Record<ScreenEnum, ScreenType>

export type ExternalLinkType = {
  name: string
  url: string
  image: ImageSourcePropType
}

export type ExternalLinksType = ExternalLinkType[]
