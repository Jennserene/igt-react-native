import React from 'react'
import { View } from 'react-native'

import { IgtDisplayFieldProps } from '@typeDefs/game'

import { devPanelStyles as styles } from '@styles/game'
import { StyledText } from '@components/base'

export const IgtDisplayField = (props: IgtDisplayFieldProps) => {
  const { field } = props
  const value = field.value as string
  return (
    <View style={styles.displayContainer}>
      <StyledText style={styles.displayLabel}>{field.displayLabel}:</StyledText>
      <StyledText style={styles.displayValue}>{value}</StyledText>
    </View>
  )
}
