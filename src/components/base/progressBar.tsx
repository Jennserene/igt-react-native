import { View, ViewStyle } from 'react-native'

import { ProgressBarProps } from '@typeDefs'

import { baseStyles as styles } from '@styles'

import { StyledText } from './styledText'

export const ProgressBar = (props: ProgressBarProps) => {
  const { progress, text, barStyle, fillerStyle, textStyle } = props

  const minZeroProgress = progress <= 0 ? 0 : progress
  const percentage = {
    width: `${Math.min(minZeroProgress, 100)}%`,
  } as ViewStyle

  return (
    <View style={[styles.progressBar, barStyle]}>
      <View style={[styles.progressBarFiller, fillerStyle, percentage]}>
        {text && (
          <StyledText style={[styles.progressBarText, textStyle]}>
            {text}
          </StyledText>
        )}
      </View>
    </View>
  )
}
