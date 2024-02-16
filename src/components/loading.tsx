import React, { useContext } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native'

import { colors } from '@utils'

import { LoadingContext } from './context'

export const Loading = () => {
  const { isLoading } = useContext(LoadingContext)

  if (!isLoading) {
    return <View style={styles.hidden} />
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={colors.activityIndicator}
        accessibilityHint="Loading..."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },

  hidden: {
    display: 'none',
  },
})
