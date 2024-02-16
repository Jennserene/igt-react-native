import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ErrorProps } from '@typeDefs'

import { colors } from '@utils'

export const Error: React.FC<ErrorProps> = ({ errorText }) => {
  return (
    <View style={styles.errorContainer}>
      <Text>{errorText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: colors.backgrounds.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
