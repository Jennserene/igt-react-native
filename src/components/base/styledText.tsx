import React from 'react'
import { Text, TextStyle } from 'react-native'

import { fontWeightEnum, StyledTextProps } from '@typeDefs'

import { baseStyles } from '@styles'

export const StyledText = (props: StyledTextProps) => {
  const { children } = props
  const { fontWeight, ...style } = props.style ?? ({} as TextStyle)

  const stringToWeight = (fontWeight: TextStyle['fontWeight']): string => {
    if (fontWeight === '100') return fontWeightEnum.thin
    if (fontWeight === 'bold') return fontWeightEnum.bold
    return fontWeightEnum.regular
  }

  const weight = props.fontWeight
    ? props.fontWeight
    : stringToWeight(fontWeight)
  const textStyle: TextStyle = {
    fontFamily: weight,
  }

  return (
    <Text style={[textStyle, style, baseStyles.styledText]}>{children}</Text>
  )
}
