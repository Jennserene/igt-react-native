import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { IgtTabsProps, TabType } from '@typeDefs/game'

import { tabsStyles as styles } from '@styles/game'

const IgtTabs = (props: IgtTabsProps) => {
  const { selectedTab, setSelectedTab, children } = props
  const childElements = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as JSX.Element[]
  const childTabs: TabType[] = childElements.map((child) => ({
    name: child.props.name,
    isActive: child.props.name === selectedTab,
  }))

  const [tabs, setTabs] = useState<TabType[]>(childTabs)

  const selectTab = (newSelectedTab: TabType) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        isActive: tab.name === newSelectedTab.name,
      })),
    )
    setSelectedTab(newSelectedTab.name)
  }

  const renderTabs = () => {
    return tabs.map((tab, index) => {
      return (
        <TouchableOpacity
          key={`tab${index}`}
          style={styles.tabButton}
          onPress={() => selectTab(tab)}
        >
          <Text
            style={{ fontSize: 16, color: tab.isActive ? 'green' : 'black' }}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View>
      <View style={styles.tabsContainer}>{renderTabs()}</View>
      <View style={styles.tabsBorder} />
      <View style={styles.tabsChildren}>{children}</View>
    </View>
  )
}

export default IgtTabs
