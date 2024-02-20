import React from 'react'
import { View } from 'react-native'

import { HomeProps } from '@typeDefs'

import { homeStyle } from '@styles'
import { StyledText } from '@components/base'
import { ExternalLink } from '@components/navigation'

const Home = (props: HomeProps) => {
  const { externalLinks } = props

  const renderExternalLinks = () => {
    if (!externalLinks) return null
    return externalLinks.map((link, index) => (
      <ExternalLink
        key={`homepageLink-${link.name}-${index}`}
        {...link}
        size="large"
      />
    ))
  }

  return (
    <View style={homeStyle.container}>
      <StyledText>Welcome to your homescreen!</StyledText>
      <View style={homeStyle.fries}>
        {externalLinks && renderExternalLinks()}
      </View>
    </View>
  )
}

export default Home
