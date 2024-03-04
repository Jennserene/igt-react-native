export enum notificationEnums {
  success = 'success',
  error = 'error',
  default = 'default',
}

export const getNotificationEnum = (value: string): notificationEnums => {
  switch (value) {
    case 'success':
      return notificationEnums.success
    case 'error':
      return notificationEnums.error
    default:
      return notificationEnums.default
  }
}

export interface Notification {
  type: string
  title: string
  text: string
}

export interface NotificationProps {
  notification: Notification
}

export interface NotificationsProps {
  notifications: Notification[]
}
