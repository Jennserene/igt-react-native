import { Platform, StyleSheet } from 'react-native'

import { globalParentStyles } from './globalStyles'
import { navStyles } from './navigationStyles'

const isWeb = Platform.OS === 'web'
const sidebarWidth = navStyles.sidebarContainer.maxWidth

export const homeStyle = StyleSheet.create({
  container: {
    ...globalParentStyles.stdContainer,
    marginLeft: isWeb ? sidebarWidth : 0,
  },
  fries: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
