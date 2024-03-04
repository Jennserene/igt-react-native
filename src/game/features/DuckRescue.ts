import {
  Currency,
  IgtFeature,
  IgtWallet,
  SaveData,
} from '@123ishatest/igt-library'

import { CurrencyTypes } from '@typeDefs/gameDefs'
import { MyFeatures } from '@typeDefs/gameDefs/MyFeatures'

export class DuckRescue extends IgtFeature {
  private _wallet: IgtWallet = undefined as unknown as IgtWallet

  constructor() {
    super('rubberDuck')
  }

  initialize(features: MyFeatures) {
    this._wallet = features.wallet
  }

  update(delta: number) {
    const rubberDucksToGain = 1
    const currency = new Currency(
      rubberDucksToGain * delta,
      CurrencyTypes.rubberDuck,
    )
    this._wallet.gainCurrency(currency)
  }

  load(_data: SaveData): void {}

  save(): SaveData {
    return {}
  }
}
