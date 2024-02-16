import React, { PropsWithChildren } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { LoadingProvider } from './loadingProvider'

const AllProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </SafeAreaProvider>
  )
}

export default AllProviders
