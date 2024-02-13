import React, { PropsWithChildren } from 'react'

import { LoadingProvider } from './loadingProvider'

export const GlobalProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return <LoadingProvider>{children}</LoadingProvider>
}
