import React, { useState } from 'react'
import { View } from 'react-native'

import { IgtDisplayFieldProps } from '@typeDefs/gameDefs'

import { useGameTick } from '@hooks'

import { devPanelStyles as styles } from '@styles/gameStyles'
import { StyledText } from '@components/base'

export const IgtDisplayField = (props: IgtDisplayFieldProps) => {
  const { field } = props
  const [valueStr, setValueStr] = useState<string>(field.value as string)
  const { useOnGameTick } = useGameTick(5)

  useOnGameTick(() => {
    const value = field.value as string
    if (value !== valueStr) {
      setValueStr(value)
    }
  })

  return (
    <View style={styles.displayContainer}>
      <StyledText style={styles.displayLabel}>{field.displayLabel}:</StyledText>
      <StyledText style={styles.displayValue}>{valueStr}</StyledText>
    </View>
  )
}
