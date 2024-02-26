import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { View } from 'react-native'

import { IgtChoiceFieldProps } from '@typeDefs/game'

import { devPanelStyles as styles } from '@styles/game'
import { StyledText } from '@components/base'

export const IgtChoiceField = (props: IgtChoiceFieldProps) => {
  const { field } = props
  const [value, setValue] = useState<string>(field.value as string)

  const handleValueChange = (itemValue: string) => {
    field.value = itemValue
    setValue(itemValue as string)
  }

  return (
    <View style={styles.stdContainer}>
      <StyledText style={styles.stdLabel}>{field.displayLabel}:</StyledText>
      <Picker selectedValue={value} onValueChange={handleValueChange}>
        {field.options.map((option, index) => (
          <Picker.Item
            key={`choice-${field.value}-${index}`}
            label={option[0]}
            value={option[1]}
          />
        ))}
      </Picker>
    </View>
  )
}
