import React, { PropsWithChildren } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AllProviders from './context/allProviders'

export const GlobalWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const Wrapping = <AllProviders>{children}</AllProviders>

  if (Platform.OS === 'web') {
    return Wrapping
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      {Wrapping}
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
