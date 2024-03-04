import Svg, { Path } from 'react-native-svg'

import { StdSVGProps } from '@typeDefs'

const MenuButton = (props: StdSVGProps) => {
  const { color = 'black' } = props

  return (
    <Svg height="24px" width="24px" viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 6h16M4 12h16M4 18h7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const navigationSVGs = {
  MenuButton,
}
