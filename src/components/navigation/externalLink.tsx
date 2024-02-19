import React from 'react'
import { Image, Linking, TouchableOpacity } from 'react-native'

import { ExternalLinkProps } from '@typeDefs'

import { StyledText } from '@components/base'

export const ExternalLink = (props: ExternalLinkProps) => {
  const { name, url, imagePath } = props
  const handlePress = () => {
    Linking.openURL(url)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={require(imagePath)} />
      <StyledText>{name}</StyledText>
    </TouchableOpacity>
  )
}
