import { useEffect, useRef } from 'react'

import { TickCallback, UseOnGameTickOptions } from '@typeDefs'

import Game from '@game'

// @TODO Update DEFAULT_RATE and CHECK_MULTIPLIER to an appropriate value.
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

  /**
   * useOnGameTick is the hook that will run the callback on the game tick a set number
   * of times per second, set when calling useGameTick.
   * You can also pass in an options object with a numEventsToCheckAfter property to
   * adjust how many events to let pass before calling the callback again if the tick event stops.
   * If you need to adjust this hook, you can add more options to the options object.
   *
   * @param callback
   * @param options
   */
  const useOnGameTick = (
    callback: TickCallback,
    options?: UseOnGameTickOptions,
  ) => {
    const checkAfterEvents = options?.numEventsToCheckAfter ?? CHECK_MULTIPLIER
    const callbackRef = useRef(callback)
    callbackRef.current = callback
    const checkAfter = game.tickDuration * checkAfterEvents * 1000

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
