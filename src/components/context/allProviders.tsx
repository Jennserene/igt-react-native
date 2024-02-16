import React, { PropsWithChildren } from 'react'

import { LoadingProvider } from './loadingProvider'

const AllProviders: React.FC<PropsWithChildren> = ({ children }) => {
  return <LoadingProvider>{children}</LoadingProvider>
}

export default AllProviders
