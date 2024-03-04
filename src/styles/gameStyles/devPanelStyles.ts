import { StyleSheet } from 'react-native'

import { colors } from '@utils'

export const devPanelStyles = StyleSheet.create({
  panelContainer: {
    backgroundColor: colors.game.background.devPanel,
  },
  displayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  displayValue: {
    fontSize: 16,
  },
  textInput: {
    flex: 1,
  },
  stdContainer: {
    flexDirection: 'row',
  },
  stdLabel: {
    alignSelf: 'center',
    margin: 2,
  },
})
