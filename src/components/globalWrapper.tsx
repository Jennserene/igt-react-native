import React, { PropsWithChildren } from 'react'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AllProviders from './context/allProviders'

export const GlobalWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const Wrapping = <AllProviders>{children}</AllProviders>

  if (Platform.OS === 'web') {
    return Wrapping
  }

  return <GestureHandlerRootView>{Wrapping}</GestureHandlerRootView>
}
