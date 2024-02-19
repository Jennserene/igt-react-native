import React from 'react'
import { TouchableOpacity } from 'react-native'

import { ScreenButtonProps } from '@typeDefs'

import { StyledText } from '@components/base'

export const ScreenButton = (props: ScreenButtonProps) => {
  const { title, screen, setActiveScreen } = props
  const handlePress = () => {
    setActiveScreen(screen)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <StyledText>{title}</StyledText>
    </TouchableOpacity>
  )
}
