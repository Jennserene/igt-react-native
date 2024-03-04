import { StyleSheet } from 'react-native'

import { colors } from '@utils'

export const globalParentStyles = StyleSheet.create({
  stdFillContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  stdContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const globalStyles = StyleSheet.create({
  ...globalParentStyles,

  stdContainerRow: {
    ...globalParentStyles.stdFillContainer,
    flexDirection: 'row',
  },
  rootContainer: {
    ...globalParentStyles.stdFillContainer,
    backgroundColor: colors.backgrounds.primary,
  },
  headerContainer: {
    ...globalParentStyles.stdContainer,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 16,
    width: '100%',
    maxHeight: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.title,
    marginLeft: 16,
  },
  screenContainer: {
    ...globalParentStyles.stdFillContainer,
    padding: 16,
  },
})
