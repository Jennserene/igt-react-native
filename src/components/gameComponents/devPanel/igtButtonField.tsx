import React from 'react'
import { View } from 'react-native'

import { IgtButtonFieldProps } from '@typeDefs/gameDefs'

import { devPanelStyles as styles } from '@styles/gameStyles'
import { StyledButton } from '@components/base'

export const IgtButtonField = (props: IgtButtonFieldProps) => {
  const { field } = props
  const run = () => {
    field.func()
  }

  return (
    <View style={styles.stdContainer}>
      <StyledButton title={field.displayLabel} onPress={run} />
    </View>
  )
}
