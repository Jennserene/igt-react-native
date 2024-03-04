import React from 'react'
import { View } from 'react-native'

import { CurrencyProps } from '@typeDefs/gameDefs/walletTypes'

import { currencies } from '@assets/game'

import { StyledText } from '@components/base'

export const IgtCurrency = (props: CurrencyProps) => {
  const {
    currency,
    negative = false,
    showImage = false,
    Image: CurrencySVG = currencies.Money,
    textFirst = false,
  } = props

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      {textFirst && (
        <StyledText style={{ marginRight: 1 }}>
          {negative && '-'}
          {currency.amount}
        </StyledText>
      )}
      {showImage && <CurrencySVG width={8} height={8} />}
      {!textFirst && <StyledText>{currency.type}</StyledText>}
      {!textFirst && (
        <StyledText style={{ marginLeft: 1 }}>
          {negative && '-'}
          {currency.amount}
        </StyledText>
      )}
    </View>
  )
}

export default IgtCurrency
