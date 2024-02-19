import React from 'react'
import Slider from '@react-native-community/slider'
import { View } from 'react-native'

import { IgtRangeFieldProps } from '@typeDefs/game'

import { devPanelStyles as styles } from '@styles/game'
import { StyledText } from '@components/base'

export const IgtRangeField = (props: IgtRangeFieldProps) => {
  const { field } = props
  const value = field.value as number

  return (
    <View style={styles.stdContainer}>
      <StyledText style={styles.stdLabel}>
        {field.displayLabel} - {value}
      </StyledText>
      <Slider
        style={{ flex: 1 }}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={(value) => {
          field.value = value
        }}
      />
    </View>
  )
}
