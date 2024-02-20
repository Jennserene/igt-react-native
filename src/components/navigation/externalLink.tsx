import React from 'react'
import { Image, Linking, TouchableOpacity } from 'react-native'

import {
  ExternalLinkProps,
  ExternalLinkPropStylesType as PropStylesType,
} from '@typeDefs'

import { linkStylesLarge, linkStylesSmall } from '@styles'
import { StyledText } from '@components/base'

export const ExternalLink = (props: ExternalLinkProps) => {
  const { name, url, image, size = 'small' } = props
  const propStyles = {
    linkContainer: {},
    linkImage: {},
    linkText: {},
    ...props.propStyles,
  } as PropStylesType

  const styles = size === 'small' ? linkStylesSmall : linkStylesLarge

  const handlePress = () => {
    Linking.openURL(url)
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.linkContainer, propStyles.linkContainer]}
    >
      <Image source={image} style={[styles.linkImage, propStyles.linkImage]} />
      <StyledText style={styles.linkText}>{name}</StyledText>
    </TouchableOpacity>
  )
}
