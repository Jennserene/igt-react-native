import React from 'react'
import { Text, View } from 'react-native'

import {
  getNotificationEnum,
  notificationEnums,
  NotificationProps,
} from '@typeDefs/gameDefs'

import { notificationIcons } from '@assets/game'

import {
  notificationBackground,
  notificationText,
  notificationStyles as styles,
} from '@styles/gameStyles'

const Notification: React.FC<NotificationProps> = ({ notification }) => {
  const { type: typeString, title, text } = notification
  const notificationType: notificationEnums = getNotificationEnum(typeString)

  const iconBg = notificationBackground[notificationType]
  const Icon = notificationIcons[notificationType]
  const titleColor = notificationText[notificationType]

  return (
    <View style={styles.notificationContainer}>
      <View style={[styles.iconContainer, iconBg]}>
        <Text style={styles.iconSize}>
          <Icon />
        </Text>
      </View>

      <View style={styles.textBox}>
        <View style={styles.textContainer}>
          <Text style={[styles.titleText, titleColor]}>{title}</Text>
          <Text style={styles.msgText}>{text}</Text>
        </View>
      </View>
    </View>
  )
}

export default Notification
