import React from 'react'
import { View } from 'react-native'

import {
  CategoryEnum,
  ExternalLinksType,
  ScreenEnum,
  ScreensType,
} from '@typeDefs'

import { globalStyles as styles } from '@styles'
import {
  Category,
  ExternalLink,
  ScreenButton,
  SideBar,
} from '@components/navigation'

import { GameSettings } from './game'
import Home from './home'

const externalLinks: ExternalLinksType = [
  {
    name: 'Discord',
    url: 'https://discord.gg/WUYDqct2Ef',
    imagePath: '@assets/socials/discord.png',
  },
  {
    name: 'Documentation',
    url: 'https://123ishatest.github.io/igt-docs',
    imagePath: '@assets/socials/docusaurus.svg',
  },
  {
    name: 'Github',
    url: 'https://github.com/123ishaTest/igt-library',
    imagePath: '@assets/socials/github.png',
  },
]

const RootLayout: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuOpen, setMenuOpen] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeScreen, setActiveScreen] = React.useState(ScreenEnum.Home)

  const screenList: ScreensType = {
    Home: {
      screen: Home,
      props: { externalLinks },
      category: CategoryEnum.Other,
    },
    Settings: {
      screen: GameSettings,
      category: CategoryEnum.Other,
    },
    // add other screens here and in the ScreenEnum in src/typeDefs/screenTypes
  }

  const renderButtons = (menuItems: ScreenEnum[]) => {
    return menuItems.map((screen, index) => {
      const title: string = screenList[screen].name ?? screen
      return (
        <ScreenButton
          key={`button-${title}-${index}`}
          title={title}
          screen={screen}
          isActive={activeScreen === screen}
          setActiveScreen={setActiveScreen}
        />
      )
    })
  }

  const renderCategory = (category: string, index: number) => {
    const menuItems = Object.keys(screenList).filter(() => {
      return screenList[ScreenEnum.Home].category === category
    }) as ScreenEnum[]

    return (
      <Category key={`category-${category}-${index}`} title={category}>
        {renderButtons(menuItems)}
      </Category>
    )
  }

  const renderMenuItems = () => {
    return Object.keys(CategoryEnum).map((category, index) =>
      renderCategory(category, index),
    )
  }

  const renderScreen = () => {
    const { screen: Screen, props } = screenList[activeScreen]
    return <Screen {...props} />
  }

  const renderExternalLinks = externalLinks.map((link) => (
    <ExternalLink key={`link-${link.name}`} {...link} />
  ))

  return (
    <View style={styles.stdContainerRow}>
      <SideBar isOpen={menuOpen}>
        {renderMenuItems()}
        <Category title="Links">{renderExternalLinks}</Category>
      </SideBar>
      <View style={styles.stdContainer}>{renderScreen()}</View>
    </View>
  )
}

export default RootLayout
