import React from 'react'
import { View, ViewStyle } from 'react-native'

import { IgtTabProps } from '@typeDefs/gameDefs'

const IgtTab = (props: IgtTabProps) => {
  const { selected, children } = props

  const isDisplayed = {
    display: selected ? 'flex' : 'none',
  } as ViewStyle

  return <View style={isDisplayed}>{children}</View>
}

export default IgtTab
