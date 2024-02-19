import { StyleSheet } from 'react-native'

import { colors } from '@utils'

export const baseStyles = StyleSheet.create({
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