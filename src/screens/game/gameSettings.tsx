import React from 'react'

import { alert, colors } from '@utils'

import { buttonStyles } from '@styles'
import { StyledButton, StyledText } from '@components/base'

import Game from '@game'

const game = Game.getGame

export const GameSettings = () => {
  const confirmAlert = () =>
    alert(
      'Reset Save',
      'Are you sure you want to reset your save? Requires reload.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Reset',
          onPress: () => handleResetSave(),
        },
      ],
    )

  const handleResetSave = () => {
    game.deleteSave()
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
