import React, { PropsWithChildren } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { GameProvider } from './gameProvider'
import { LoadingProvider } from './loadingProvider'

const AllProviders = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaProvider>
      <GameProvider>
        <LoadingProvider>{children}</LoadingProvider>
      </GameProvider>
    </SafeAreaProvider>
  )
}

export default AllProviders
