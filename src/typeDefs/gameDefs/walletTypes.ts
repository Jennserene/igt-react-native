import { Currency, IgtWallet } from '@123ishatest/igt-library'

export interface WalletProps {
  walletFeature: IgtWallet
}

export interface CurrencyProps {
  currency: Currency
  negative?: boolean
  showImage?: boolean
  Image?: React.FC
  textFirst?: boolean
}

export enum CurrencyTypes {
  rubberDuck = 'Rubber Duck',
}
