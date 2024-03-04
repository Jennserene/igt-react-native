import {
  CategoryEnum,
  ExternalLinksType,
  ScreenOptions,
  ScreensType,
} from '@typeDefs'

import { DeveloperPanel, GameSettings, Rescue } from './game'
import Home from './home'

export const externalLinks: ExternalLinksType = [
  {
    name: 'Discord',
    url: 'https://discord.gg/WUYDqct2Ef',
    image: require('@assets/socials/discord.png'),
  },
  {
    name: 'Documentation',
    url: 'https://123ishatest.github.io/igt-docs',
    image: require('@assets/socials/docusaurus.svg'),
  },
  {
    name: 'Github',
    url: 'https://github.com/123ishaTest/igt-library',
    image: require('@assets/socials/github.png'),
  },
]

export const defaultOptions: ScreenOptions = {
  category: CategoryEnum.Game,
  devOnly: false,
}

export const screenList: ScreensType = {
  Home: {
    screen: Home,
    props: { externalLinks },
    options: {
      category: CategoryEnum.Other,
      devOnly: false,
    },
  },
  Rescue: {
    screen: Rescue,
    options: defaultOptions,
  },
  DeveloperPanel: {
    name: 'Developer Panel',
    screen: DeveloperPanel,
    options: {
      category: CategoryEnum.Game,
      devOnly: true,
    },
  },
  Settings: {
    screen: GameSettings,
    options: {
      category: CategoryEnum.Other,
      devOnly: false,
    },
  },
  // add other screens here and in the ScreenEnum in src/typeDefs/screenTypes
}
