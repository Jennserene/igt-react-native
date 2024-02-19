import React, { useState } from 'react'
import { DeveloperPanel, DeveloperPanelTab } from '@123ishatest/igt-library'
import { View } from 'react-native'

import {
  IgtButtonFieldProps,
  IgtChoiceFieldProps,
  IgtDeveloperPanelProps,
  IgtDisplayFieldProps,
  IgtNumberFieldProps,
  IgtRangeFieldProps,
} from '@typeDefs/game'

import { devPanelStyles as styles } from '@styles/game'
import {
  IgtButtonField,
  IgtChoiceField,
  IgtDisplayField,
  IgtNumberField,
  IgtRangeField,
} from '@components/game/devPanel'
import IgtTab from '@components/game/util/igtTab'
import IgtTabs from '@components/game/util/igtTabs'

const IgtDeveloperPanel = (props: IgtDeveloperPanelProps) => {
  const { developerPanel } = props
  const [selectedTab, setSelectedTab] = useState(developerPanel.tabs[0].label)
  const components = {
    IgtNumberField: (props: IgtNumberFieldProps) => (
      <IgtNumberField {...props} />
    ),
    IgtButtonField: (props: IgtButtonFieldProps) => (
      <IgtButtonField {...props} />
    ),
    IgtRangeField: (props: IgtRangeFieldProps) => <IgtRangeField {...props} />,
    IgtDisplayField: (props: IgtDisplayFieldProps) => (
      <IgtDisplayField {...props} />
    ),
    IgtChoiceField: (props: IgtChoiceFieldProps) => (
      <IgtChoiceField {...props} />
    ),
  }

  const renderTabScreen = (tab: DeveloperPanelTab) => {
    return tab.children.map((field, index) => {
      const componentName = field.componentName as string
      const Component = components[componentName as keyof typeof components]

      return (
        <View key={`property-${field.propertyName}-${index}`}>
          {/* @ts-ignore - this is a dynamic component */}
          <Component field={field} />
        </View>
      )
    })
  }

  const renderIgtTab = (developerPanel: DeveloperPanel) => {
    return developerPanel.tabs.map((tab, index) => (
      <IgtTab
        name={tab.label}
        selected={selectedTab === tab.label}
        key={`tab-${tab.label}-${index}`}
      >
        {renderTabScreen(tab)}
      </IgtTab>
    ))
  }

  return (
    <View style={styles.panelContainer}>
      <IgtTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        {renderIgtTab(developerPanel)}
      </IgtTabs>
    </View>
  )
}

export default IgtDeveloperPanel
