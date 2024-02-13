import { StyledText } from '@components/base'
import { StyleSheet, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container} testID="container">
      <StyledText>Open up index.tsx to start working on your app!</StyledText>
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
