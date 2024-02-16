import React, { useCallback, useContext } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { fontWeightEnum } from '@typeDefs'

import { colors } from '@utils'

import { Error, GlobalWrapper, Loading } from '@components'
import { LoadingContext } from '@components/context'

import Home from '.'

SplashScreen.preventAutoHideAsync()

export default function HomeLayout() {
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

  if (!fontsLoaded && !fontError) {
    setLoading(true)
  }

  if (fontError) {
    return <Error errorText={fontError.message} />
  }

  return (
    <GlobalWrapper>
      <SafeAreaView
        style={styles.appContainer}
        testID="appContainer"
        onLayout={onLayoutRootView}
      >
        <Loading />
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    </GlobalWrapper>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.backgrounds.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gestureHandler: {
    flex: 1,
  },
})
