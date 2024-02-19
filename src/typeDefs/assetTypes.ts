import { notificationEnums } from './game/notificationTypes'

export type SvgType<K extends string | number | symbol> = Record<
  K,
  () => React.JSX.Element
>

export type NotificationIconType = SvgType<notificationEnums>
