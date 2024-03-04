import React, { useState } from 'react'
import { View } from 'react-native'

import { CurrencyTypes, WalletProps } from '@typeDefs/gameDefs'

import { useGameTick } from '@hooks'

import { StyledText } from '@components/base'

export const Wallet = (props: WalletProps) => {
  const { walletFeature } = props
  const [numDucks, setNumDucks] = useState<number>(0)
  const { useOnGameTick } = useGameTick(10)

  useOnGameTick(() => {
    const newNumDucks = walletFeature.getAmount(CurrencyTypes.rubberDuck)
    const numDucksInt = Math.floor(newNumDucks)
    if (numDucksInt === numDucks) return
    setNumDucks(numDucksInt)
  })

  return (
    <View>
      <StyledText>You have {numDucks} Rubber Duckies</StyledText>
    </View>
  )
}

export default Wallet
