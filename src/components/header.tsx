import React from 'react'
import { View } from 'react-native'

import { navigationSVGs } from '@assets/app'

import { colors } from '@utils'

import { globalStyles as styles } from '@styles'

import { StyledText } from './base'

interface HeaderProps {
  title: string
}

export const Header = (props: HeaderProps) => {
  const { title } = props
  const { MenuButton } = navigationSVGs

  return (
    <View style={styles.headerContainer}>
      <MenuButton color={colors.buttons.menu} />
      <StyledText style={styles.title}>{title}</StyledText>
    </View>
  )
}

export default Header
