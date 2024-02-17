import React from 'react'
import { Alert, Pressable, Text } from 'react-native'

// import App from '@game'

export const GameSettings = () => {
  const confirmAlert = () =>
    Alert.alert('Reset Save', 'Are you sure you want to reset your save?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Reset',
        onPress: () => handleResetSave(),
      },
    ])

  const handleResetSave = () => {
    // App.game.deleteSave()
  }

  return (
    <Pressable onPress={confirmAlert}>
      <Text>Reset Save</Text>
    </Pressable>
  )
}
