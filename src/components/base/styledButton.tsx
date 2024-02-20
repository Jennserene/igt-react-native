import React, { useEffect, useState } from 'react'
import { GestureResponderEvent, Pressable, ViewStyle } from 'react-native'

import { StyledButtonProps } from '@typeDefs'

import { colors } from '@utils'

import { buttonStyles } from '@styles'

export const StyledButton = (props: StyledButtonProps) => {
  const { style, activeColor, children, onPress, ...rest } = props
  const defaultColor = colors.buttons.blue.standard
  const [color, setColor] = useState<string>(defaultColor)

  const bgInStyle = !!style && 'backgroundColor' in style
  const bgFromStyle: string = bgInStyle ? (style.backgroundColor as string) : ''

  useEffect(() => {
    if (bgInStyle) setColor(bgFromStyle)
  }, [bgFromStyle, bgInStyle])

  const onPressInHandler = () => {
    if (activeColor) setColor(activeColor)
    if (!activeColor) setColor(colors.buttons.gray)
  }

  const onPressOutHandler = () => {
    if (bgInStyle) setColor(bgFromStyle)
    if (!bgInStyle) setColor(defaultColor)
  }

  const onPressHandler = (event: GestureResponderEvent) => {
    if (!onPress) return
    onPress(event)
  }

  const defaultStyle = buttonStyles.styledButton
  const bgColor = { backgroundColor: color } as ViewStyle

  return (
    <Pressable
      style={[defaultStyle, style, bgColor]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      onPress={onPressHandler}
      {...rest}
    >
      {children}
    </Pressable>
  )
}
