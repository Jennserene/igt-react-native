import React from 'react'
import { Text } from 'react-native'

import { fontWeightEnum, StyledTextProps } from '@typeDefs'

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
