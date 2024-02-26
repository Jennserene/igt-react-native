import { useEffect, useRef } from 'react'

import Game from '@game'

type TickCallback = () => void

// @TODO Update DEFAULT_RATE to an appropriate value.
const DEFAULT_RATE = 10
const CHECK_MULTIPLIER = 3

const game = Game.getGame

/**
 * This hook is used to run a callback on the game tick a set number of times per second.
 * If a component using this is rerendered, it will reset the tick count, resulting
 * in the callback being called less often than expected.
 *
 * @param timesPerSecond
 * @returns useOnGameTick
 */
export const useGameTick = (timesPerSecond: number = DEFAULT_RATE) => {
  const divisor = Math.ceil(1 / (game.tickDuration * timesPerSecond))

  const useOnGameTick = (
    callback: TickCallback,
    numEventsToCheckAfter: number = CHECK_MULTIPLIER,
  ) => {
    const callbackRef = useRef(callback)
    callbackRef.current = callback
    const checkAfter = game.tickDuration * numEventsToCheckAfter * 1000

    useEffect(() => {
      let tickCount: number = 0
      let callIfTimeSinceEvent: NodeJS.Timeout

      const reset = () => {
        clearTimeout(callIfTimeSinceEvent)
        tickCount = 0
        callIfTimeSinceEvent = setTimeout(callbackRef.current, checkAfter)
      }

      const unsub = game.onTick.sub((_sender, _delta) => {
        tickCount++
        if (tickCount % divisor === 0) {
          callbackRef.current()
          reset()
        }
      })

      return () => {
        unsub()
        clearTimeout(callIfTimeSinceEvent)
      }
    }, [divisor])
  }

  return { useOnGameTick }
}
