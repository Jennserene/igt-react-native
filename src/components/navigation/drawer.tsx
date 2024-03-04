import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { DrawerProps } from '@typeDefs'

import { navStyles as styles } from '@styles'

const Drawer = (props: DrawerProps) => {
  const { isOpen, children } = props
  const frame = useSafeAreaFrame()
  const offset = useSharedValue(0)
  const width = useSharedValue(0)

  const sidebarWidth = (80 / 100) * frame.width

  useEffect(() => {
    if (isOpen) {
      width.value = withSpring(sidebarWidth, {
        damping: 20,
        stiffness: 90,
      })
    } else {
      width.value = withSpring(0, {
        damping: 20,
        stiffness: 90,
      })
    }
  }, [isOpen])

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value += event.changeX
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width.value / 2) + sidebarWidth / 2,
          width.value / 2 - sidebarWidth / 2,
        ],
      })
    })

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
    width: sidebarWidth,
  }))

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.drawerContainer, animatedContainerStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  )
}

export default Drawer
