import React, { ReactNode } from 'react'
import { View } from 'react-native'

import { ScreenEnum } from '@typeDefs/screenEnums'

import { globalStyles as styles } from '@styles'
import SideBar from '@components/navigation/sidebar'

import { GameSettings } from './game'
import Home from './home'

const RootLayout: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuOpen, setMenuOpen] = React.useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [screen, setScreen] = React.useState(ScreenEnum.home)

  const displayScreen: Record<string, ReactNode> = {
    home: <Home />,
    settings: <GameSettings />,
    // add other screens here and in the ScreenEnum
  }

  return (
    <View style={styles.stdContainerRow}>
      <SideBar isOpen={menuOpen} />
      <View style={styles.stdContainer} testID="TESTTEST-ROOTLAYOUT">
        {displayScreen[screen]}
      </View>
    </View>
  )
}

export default RootLayout
