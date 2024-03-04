import React, { useState } from 'react'
import { View, ViewStyle } from 'react-native'

import { CategoryEnum, ScreenEnum } from '@typeDefs'

import { globalStyles as styles } from '@styles'
import { Header } from '@components'
import {
  Category,
  ExternalLink,
  ScreenButton,
  SideBar,
} from '@components/navigation'

import Game from '@game'

import { externalLinks, screenList } from './screens'

const RootLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuOpen, _setMenuOpen] = useState<boolean>(false)
  const [activeScreen, setActiveScreen] = useState<ScreenEnum>(ScreenEnum.Home)
  const [rootLeftMargin, setRootLeftMargin] = useState<ViewStyle>({})
  const inProduction = Game.inProduction

  const screenTitle = (screen: ScreenEnum): string => {
    return screenList[screen].name ?? screen
  }

  const renderButtons = (menuItems: ScreenEnum[]) => {
    return menuItems.map((screen, index) => {
      const title = screenTitle(screen)
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
    const menuItems = Object.keys(screenList).filter((screen) => {
      const options = screenList[screen as ScreenEnum].options
      if (inProduction && options.devOnly) return false

      return options.category === category
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
    const { screen, props } = screenList[activeScreen]
    const Screen = screen as React.ComponentType
    return <Screen {...props} />
  }

  const renderExternalLinks = externalLinks.map((link) => (
    <ExternalLink key={`link-${link.name}`} {...link} />
  ))

  return (
    <View style={styles.stdContainerRow}>
      <SideBar isOpen={menuOpen} setRootLeftMargin={setRootLeftMargin}>
        {renderMenuItems()}
        <Category title="Links">{renderExternalLinks}</Category>
      </SideBar>
      <View style={[styles.rootContainer, rootLeftMargin]}>
        <Header title={screenTitle(activeScreen)} />
        <View style={styles.screenContainer}>{renderScreen()}</View>
      </View>
    </View>
  )
}

export default RootLayout
