import { IgtSettings } from '@123ishatest/igt-library'

import { MyGame } from './MyGame'

export default class Game {
  static inProduction: boolean = process.env.NODE_ENV === 'production'

  static game: MyGame

  static start(): void {
    this.game = this.getDefaultGame()
    this.game.initialize()
    this.game.load()
    this.game.start()
  }

  public static getDefaultGame(): MyGame {
    return new MyGame({
      settings: new IgtSettings(),
      // Add your own features here.
    })
  }
}
