import { StyleSheet } from 'react-native'

import { colors } from '@utils'

export const baseStyles = StyleSheet.create({
  styledText: {
    color: colors.text.primary,
  },
  progressBar: {
    backgroundColor: colors.progressBar.background,
    overflow: 'hidden',
    height: 8,
    marginBottom: 16,
    flex: 1,
    borderRadius: 4,
  },
  progressBarFiller: {
    backgroundColor: colors.progressBar.foreground,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarText: {
    color: colors.text.light,
    fontSize: 12,
    lineHeight: 16,
  },
})

export const buttonStyles = StyleSheet.create({
  styledButton: {
    borderRadius: 4,
    padding: 16,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    backgroundColor: colors.buttons.blue.standard,
  },
  green: {
    backgroundColor: colors.buttons.green.standard,
  },
  red: {
    backgroundColor: colors.buttons.red.standard,
  },
})
