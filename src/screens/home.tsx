import React from 'react'
import { StyleSheet, View } from 'react-native'

import { StyledText } from '@components/base'

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <StyledText>Welcome to your homescreen!</StyledText>
    </View>
  )
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
