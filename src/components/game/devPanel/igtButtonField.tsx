import React from 'react'
import { Button, View } from 'react-native'

import { IgtButtonFieldProps } from '@typeDefs/game'

import { devPanelStyles as styles } from '@styles/game'

export const IgtButtonField = (props: IgtButtonFieldProps) => {
  const { field } = props
  const run = () => {
    field.func()
  }

  return (
    <View style={styles.stdContainer}>
      <Button title={field.displayLabel} onPress={run} />
    </View>
  )
}
