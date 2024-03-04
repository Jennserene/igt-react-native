import React from 'react'
import { View } from 'react-native'

import { NotificationsProps } from '@typeDefs/gameDefs'

import { notificationStyles as styles } from '@styles/gameStyles'

import IgtNotification from './igtNotification'

const IgtNotifications: React.FC<NotificationsProps> = ({ notifications }) => {
  const renderNotifications = notifications.map((notification, index) => (
    <IgtNotification key={index} notification={notification} />
  ))

  return (
    <View style={styles.notificationsContainer}>{renderNotifications}</View>
  )
}

export default IgtNotifications
