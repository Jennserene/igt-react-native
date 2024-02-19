import React from 'react'
import { TextInput, View } from 'react-native'

import { IgtNumberFieldProps } from '@typeDefs/game'

import { devPanelStyles as styles } from '@styles/game'
import { StyledText } from '@components/base'

export const IgtNumberField = (props: IgtNumberFieldProps) => {
  const { field } = props
  const value = field.value as string

  return (
    <View style={styles.stdContainer}>
      <StyledText style={styles.stdLabel}>{field.displayLabel}</StyledText>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={(text) => (field.value = Number(text))}
        keyboardType="numeric"
      />
    </View>
  )
}
