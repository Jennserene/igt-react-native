import { ErrorProps } from '@typeDefs'
import { colors } from '@utils'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
