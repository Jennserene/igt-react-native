import React from 'react'
import { View } from 'react-native'

import { RecruitmentProps } from '@typeDefs/gameDefs'

import { generalStyles as styles } from '@styles/gameStyles'
import { StyledText } from '@components/base'
import { Wallet } from '@components/gameComponents/features/igtWallet'

import Game from '@game'

const game = Game.getGame

export const Rescue = (_props: RecruitmentProps) => {
  return (
    <View style={styles.gameContainer}>
      <StyledText>Duckie Kingdom Rescue Service</StyledText>
      <Wallet walletFeature={game.features.wallet} />
    </View>
  )
}

export default Rescue
