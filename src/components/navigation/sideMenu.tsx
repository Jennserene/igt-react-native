import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { navStyles as styles } from '@styles'

const SideMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu Header</Text>
      </View>
      <ScrollView
        style={styles.navigationScroll}
        contentContainerStyle={styles.navContentAndFooter}
      >
        <View style={styles.navContent}>
          {/* Add your navigation options here */}
          <Text>Option 1</Text>
          <Text>Option 2</Text>
          <Text>Option 3</Text>
          <Text>Option 4</Text>
          <Text>Option 5</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Menu Footer</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default SideMenu
