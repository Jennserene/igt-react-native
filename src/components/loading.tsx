import { colors } from '@utils'
import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

export const Loading = () => {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
})
