import { useState } from 'react'
import { DeveloperPanelTab } from '@123ishatest/igt-library'
import { View } from 'react-native'

import {
  IgtButtonFieldProps,
  IgtChoiceFieldProps,
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

import Game from '@game'

const game = Game.getGame

const IgtDeveloperPanel = () => {
  const developerPanel = game.getDeveloperPanel()
  const tabs = developerPanel.tabs
  const [selectedTabLabel, setSelectedTabLabel] = useState(
    developerPanel.tabs[0].label,
  )
  const [selectedTab, setSelectedTab] = useState<DeveloperPanelTab>(
    developerPanel.tabs[0],
  )

  const updateSelectedTab = (label: string) => {
    if (label === selectedTabLabel) return
    setSelectedTabLabel(label)
    const tab = tabs.find((t) => t.label === label)
    if (!tab) return
    setSelectedTab(tab)
  }

  const components = {
    'igt-number-field': (props: IgtNumberFieldProps) => (
      <IgtNumberField {...props} />
    ),
    'igt-button-field': (props: IgtButtonFieldProps) => (
      <IgtButtonField {...props} />
    ),
    'igt-range-field': (props: IgtRangeFieldProps) => (
      <IgtRangeField {...props} />
    ),
    'igt-display-field': (props: IgtDisplayFieldProps) => (
      <IgtDisplayField {...props} />
    ),
    'igt-choice-field': (props: IgtChoiceFieldProps) => (
      <IgtChoiceField {...props} />
    ),
  }

  const renderTabScreen = () => {
    return selectedTab.children.map((field, index) => {
      const componentName = field.componentName as string
      const SelectedComponent =
        components[componentName as keyof typeof components]
      if (!SelectedComponent)
        throw new Error('${componentName} is not defined.')

      const key = `property-${field.propertyName}-${index}`
      const props: Record<string, unknown> = { field }
      !!field.object && (props.value = field.value)

      return (
        <View key={key}>
          {/* @ts-ignore - this is a dynamic component */}
          <SelectedComponent {...props} />
        </View>
      )
    })
  }

  const renderIgtTabs = () => {
    return developerPanel.tabs.map((tab: DeveloperPanelTab, index: number) => (
      <IgtTab
        name={tab.label}
        selected={selectedTabLabel === tab.label}
        key={`tab-${tab.label}-${index}`}
      >
        {renderTabScreen()}
      </IgtTab>
    ))
  }

  return (
    <View style={styles.panelContainer}>
      <IgtTabs
        selectedTab={selectedTabLabel}
        setSelectedTab={updateSelectedTab}
      >
        {renderIgtTabs()}
      </IgtTabs>
    </View>
  )
}

export default IgtDeveloperPanel
