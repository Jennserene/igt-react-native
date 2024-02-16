import { StyleSheet, View } from 'react-native'

import { StyledText } from '@components/base'

export default function Home() {
  return (
    <View style={styles.container} testID="container">
      <StyledText>Welcome to your homescreen!</StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
