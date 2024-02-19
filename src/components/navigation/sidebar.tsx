import React from 'react'
import { Platform, View, ViewStyle } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { SidebarProps } from '@typeDefs'

import { navStyles as styles } from '@styles'

import Drawer from './drawer'
import SideMenu from './sideMenu'

export const SideBar = (props: SidebarProps) => {
  const { isOpen, children } = props
  const { height: safeHeight } = useSafeAreaFrame()
  const isOnWeb = Platform.OS === 'web'
  const sidebarHeight = { height: safeHeight } as ViewStyle
  const sideMenu = <SideMenu>{children}</SideMenu>

  return (
    <View style={[styles.sidebarContainer, sidebarHeight]}>
      {isOnWeb ? sideMenu : <Drawer isOpen={isOpen}>{sideMenu}</Drawer>}
    </View>
  )
}
