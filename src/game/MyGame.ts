import { IgtGame } from '@123ishatest/igt-library'

import { MyFeatures } from './MyFeatures'

export class MyGame extends IgtGame {
  // @TODO Update SAVE_KEY to something unique
  protected readonly SAVE_KEY: string = 'igt-react-native'
  // @TODO Update TICK_DURATION to an appropriate value. 1 is 1 second, 0.05 is 50 milliseconds, etc.
  protected readonly TICK_DURATION: number = 0.1

  features: MyFeatures

  constructor(features: MyFeatures) {
    super()
    this.features = features
  }

  public get tickDuration(): number {
    return this.TICK_DURATION
  }
}
