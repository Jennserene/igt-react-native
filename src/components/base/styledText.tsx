import { StyledTextProps, fontWeightEnum } from '@typeDefs'
import React from 'react'
import { Text } from 'react-native'

export const StyledText: React.FC<StyledTextProps> = ({
  fontWeight = fontWeightEnum.regular,
  style,
  children,
  ...rest
}) => {
  const textStyle = {
    fontFamily: fontWeight as string,
    ...((style ? style : {}) as object),
  }

  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  )
}
