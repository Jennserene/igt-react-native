import { GameState } from '@123ishatest/igt-library'

import Game from '@game'
import { MyGame } from '@game/MyGame'

describe('Game', () => {
  beforeEach(() => {
    jest.resetModules()
  })

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
})
