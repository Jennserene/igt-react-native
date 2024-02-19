import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { View } from 'react-native'

import { IgtChoiceFieldProps } from '@typeDefs/game'

import { devPanelStyles as styles } from '@styles/game'
import { StyledText } from '@components/base'

export const IgtChoiceField = (props: IgtChoiceFieldProps) => {
  const { field } = props

  return (
    <View style={styles.stdContainer}>
      <StyledText style={styles.stdLabel}>{field.displayLabel}</StyledText>
      <Picker
        selectedValue={field.value}
        onValueChange={(itemValue) => (field.value = itemValue)}
      >
        {field.options.map((option, index) => (
          <Picker.Item
            key={`choice-${field.value}-${index}`}
            label={option[0]}
            value={option.values()}
          />
        ))}
      </Picker>
    </View>
  )
}
