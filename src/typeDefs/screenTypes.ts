export enum ScreenEnum {
  Home = 'Home',
  Settings = 'Settings',
}

export enum CategoryEnum {
  Game = 'Game',
  Other = 'Other',
}

export type ScreenType = {
  name?: string | ScreenEnum
  screen: () => React.JSX.Element
  props?: Record<string, unknown>
  category: CategoryEnum
  devOnly?: boolean
}

export type ScreensType = Record<ScreenEnum, ScreenType>

export type ExternalLinkType = {
  name: string
  url: string
  imagePath: string
}

export type ExternalLinksType = ExternalLinkType[]
