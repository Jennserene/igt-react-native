import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { SideBarProps } from '@typeDefs'

import Drawer from './drawer'
import SideMenu from './sideMenu'

const SideBar = (props: SideBarProps) => {
  const { isOpen, children } = props
  const { height: safeHeight } = useSafeAreaFrame()
  const isOnWeb = Platform.OS === 'web'

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      flex: 1,
      height: safeHeight,
      maxWidth: 200,
    },
  })

  return (
    <View style={styles.container}>
      {isOnWeb ? <SideMenu /> : <Drawer isOpen={isOpen}>{children}</Drawer>}
    </View>
  )
}

export default SideBar
