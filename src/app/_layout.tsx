import { Loading, Error } from '@components'
import { GlobalProviders } from '@components/context'
import { LoadingContext } from '@components/context/loadingProvider'
import { fontWeightEnum } from '@typeDefs'
import { colors } from '@utils'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

SplashScreen.preventAutoHideAsync()

export default function HomeLayout() {
  const { isLoading } = useContext(LoadingContext)

  const [fontsLoaded, fontError] = useFonts({
    [fontWeightEnum.thin]: require('@assets/fonts/Inter-Thin.ttf'),
    [fontWeightEnum.regular]: require('@assets/fonts/Inter-Regular.ttf'),
    [fontWeightEnum.bold]: require('@assets/fonts/Inter-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return <Loading />
  }

  if (fontError) {
    return <Error errorText={fontError.message} />
  }

  return (
    <GlobalProviders>
      <SafeAreaView
        style={styles.appContainer}
        testID="appContainer"
        onLayout={onLayoutRootView}
      >
        {isLoading ? <Loading /> : null}
        <Slot />
        <StatusBar style="auto" />
      </SafeAreaView>
    </GlobalProviders>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.backgrounds.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
