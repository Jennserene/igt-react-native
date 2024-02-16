// import App from '@game'
// import { MyGame } from '@game/MyGame'

describe.skip('App', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('should set inProduction to true when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production'
    expect(App.inProduction).toBe(true)
  })

  it('should set inProduction to false when NODE_ENV is not production', () => {
    process.env.NODE_ENV = 'development'
    expect(App.inProduction).toBe(false)
  })

  it('should start the game', () => {
    App.start()
    expect(App.game.state).toBe('running')
  })

  it('should return a default game instance', () => {
    const defaultGame = App.getDefaultGame()
    expect(defaultGame).toBeInstanceOf(MyGame)
  })
})
