import React, { useCallback, useContext, useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

import { fontWeightEnum } from '@typeDefs'

import { globalStyles as styles } from '@styles'
import { Error, GlobalWrapper, Loading } from '@components'
import { LoadingContext } from '@components/context'
import RootLayout from '@screens/rootLayout'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const { setLoading } = useContext(LoadingContext)
  const [fontsLoaded, fontError] = useFonts({
    [fontWeightEnum.thin]: require('@assets/fonts/Inter-Thin.ttf'),
    [fontWeightEnum.regular]: require('@assets/fonts/Inter-Regular.ttf'),
    [fontWeightEnum.bold]: require('@assets/fonts/Inter-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
      setLoading(false)
    }
  }, [fontsLoaded, fontError])

  useEffect(() => {
    if (!fontsLoaded || fontError) {
      setLoading(true)
    }
  }, [fontsLoaded, fontError])

  if (fontError) {
    return <Error errorText={fontError.message} />
  }

  return (
    <GlobalWrapper>
      <View
        style={styles.stdContainer}
        testID="appContainer"
        onLayout={onLayoutRootView}
      >
        <Loading />
        <RootLayout />
        <StatusBar style="auto" />
      </View>
    </GlobalWrapper>
  )
}
