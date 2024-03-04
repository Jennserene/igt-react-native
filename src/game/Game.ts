import { IgtSettings, IgtWallet } from '@123ishatest/igt-library'

import { CurrencyTypes } from '@typeDefs/gameDefs/walletTypes'

import { DuckRescue } from './features'
import { MyGame } from './MyGame'

export default class Game {
  // static inProduction: boolean = process.env.NODE_ENV === 'production'
  static inProduction: boolean = false // @TODO Set to env variable like above.

  static game: MyGame

  static start(): void {
    this.game = this.getDefaultGame()
    this.game.initialize()
    this.game.load()
    this.game.start()
  }

  public static get getGame(): MyGame {
    if (this.game) return this.game
    this.start()
    return this.game
  }

  public static getDefaultGame(): MyGame {
    return new MyGame({
      settings: new IgtSettings(),
      wallet: new IgtWallet([CurrencyTypes.rubberDuck]),
      rubberDuckProducer: new DuckRescue(),
      // Add your own features here.
    })
  }
}
