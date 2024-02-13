import { LoadingContextProps, LoadingProviderProps } from '@typeDefs'
import React, { createContext, useState } from 'react'

const LoadingContext = createContext<LoadingContextProps>({
  isLoading: false,
  setLoading: () => {},
})

const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
  initialState = false,
}) => {
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
