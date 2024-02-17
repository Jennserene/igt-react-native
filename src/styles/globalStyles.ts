import { StyleSheet } from 'react-native'

export const globalParentStyles = StyleSheet.create({
  stdContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
})

export const globalStyles = StyleSheet.create({
  ...globalParentStyles,

  stdContainerRow: {
    ...globalParentStyles.stdContainer,
    flexDirection: 'row',
  },
})
