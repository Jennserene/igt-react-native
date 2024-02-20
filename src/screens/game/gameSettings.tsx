import React from 'react'
import { Alert } from 'react-native'

import { colors } from '@utils'

import { buttonStyles } from '@styles'
import { StyledButton, StyledText } from '@components/base'

import App from '@game'

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
    App.game.deleteSave()
  }

  return (
    <StyledButton
      style={buttonStyles.red}
      activeColor={colors.buttons.red.active}
      onPress={confirmAlert}
    >
      <StyledText>Reset Save</StyledText>
    </StyledButton>
  )
}
