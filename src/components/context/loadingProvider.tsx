import React, { createContext, useState } from 'react'

import { LoadingContextProps, LoadingProviderProps } from '@typeDefs'

const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  setLoading: () => {},
})

const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
  options = { initialState: false },
}) => {
  const { initialState } = options
  const [isLoading, setIsLoading] = useState(initialState)

  const setLoading = (isLoading: boolean) => {
    setIsLoading(isLoading)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export { LoadingContext, LoadingProvider }
