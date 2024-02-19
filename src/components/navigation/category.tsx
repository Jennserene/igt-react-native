import React from 'react'
import { View } from 'react-native'

import { CategoryProps } from '@typeDefs'

import { navStyles as styles } from '@styles'
import { StyledText } from '@components/base'

export const Category = (props: CategoryProps) => {
  const { title, children } = props

  return (
    <View style={styles.categoryContainer}>
      <StyledText style={styles.categoryTitle}>{title}</StyledText>
      {children}
    </View>
  )
}
