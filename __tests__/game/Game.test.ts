import { GameState } from '@123ishatest/igt-library'

import Game from '@game'
import { MyGame } from '@game/MyGame'

describe('Game', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  it('has inProduction set to false by default', () => {
    expect(Game.inProduction).toBe(false)
  })

  it('should start the game', () => {
    Game.start()
    expect(Game.game.state).toBe(GameState.Playing)
  })

  it('should return a default game instance', () => {
    const defaultGame = Game.getDefaultGame()
    expect(defaultGame).toBeInstanceOf(MyGame)
  })

  it('starts and stops properly', async () => {
    const game = Game.getDefaultGame()

    let tickCount = 0
    const unsub = game.onTick.sub((_sender, _event) => {
      tickCount++
    })

    game.initialize()
    game.load()

    const threeTicksMs = game.tickDuration * 3 * 1000
    await delay(threeTicksMs)
    expect(tickCount).toBe(0)

    game.start()
    await delay(threeTicksMs)
    expect(tickCount).toBeGreaterThan(0)

    game.stop()
    const tickCountAfterStop = tickCount
    expect(game.state).toBe('Stopped')
    await delay(threeTicksMs)
    expect(tickCount).toBe(tickCountAfterStop)

    unsub()
  })
})
