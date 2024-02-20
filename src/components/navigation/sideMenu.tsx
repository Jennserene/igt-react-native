import React, { PropsWithChildren } from 'react'
import { Image, ScrollView, View } from 'react-native'

import { navStyles as styles } from '@styles'
import { StyledText } from '@components/base'

const SideMenu = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <View style={styles.sideMenuContainer}>
      <View style={styles.header}>
        <Image source={require('@assets/logo.png')} style={styles.logo} />
        <StyledText style={styles.headerText}>
          Incremental Game Template
        </StyledText>
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
