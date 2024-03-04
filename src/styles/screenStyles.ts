import { StyleSheet } from 'react-native'

import { globalParentStyles } from './globalStyles'

export const homeStyle = StyleSheet.create({
  container: {
    ...globalParentStyles.stdFillContainer,
  },
  fries: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
