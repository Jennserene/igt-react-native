import React, { PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'

import { navStyles as styles } from '@styles'
import { StyledText } from '@components/base'

const SideMenu = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StyledText style={styles.headerText}>Menu Header</StyledText>
      </View>
      <ScrollView
        style={styles.navigationScroll}
        contentContainerStyle={styles.navContentAndFooter}
      >
        <View style={styles.navContent}>{children}</View>
        <View style={styles.footer}>
          <StyledText style={styles.footerText}>Menu Footer</StyledText>
        </View>
      </ScrollView>
    </View>
  )
}

export default SideMenu
