import { StyleSheet } from 'react-native'

import { colors } from '@utils'

export const generalStyles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.game.border,
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
