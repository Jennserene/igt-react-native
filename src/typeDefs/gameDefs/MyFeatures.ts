import { IgtFeatures, IgtWallet } from '@123ishatest/igt-library'

import { DuckRescue } from '@game/features/DuckRescue'

export interface MyFeatures extends IgtFeatures {
  wallet: IgtWallet
  rubberDuckProducer: DuckRescue
}
