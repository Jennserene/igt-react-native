import { StyleSheet, ViewStyle } from 'react-native'

import { notificationEnums } from '@typeDefs/gameDefs'

import { colors as allColors } from '@utils'

const colors = allColors.game

export const notificationStyles = StyleSheet.create({
  notificationsContainer: {
    zIndex: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 4,
    paddingVertical: 6,
    pointerEvents: 'none',
    padding: 6,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  notificationContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 12,
  },
  iconSize: {
    fontSize: 20,
  },
  textBox: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginHorizontal: -3,
  },
  textContainer: {
    marginHorizontal: 3,
  },
  titleText: {
    fontWeight: 'bold',
  },
  msgText: {
    fontSize: 12,
    color: colors.notification.msgText,
  },
  bgSuccess: {
    backgroundColor: colors.notification.success,
  },
  bgError: {
    backgroundColor: colors.notification.error,
  },
  bgDefault: {
    backgroundColor: colors.notification.default,
  },
  textSuccess: {
    color: colors.notification.success,
  },
  textError: {
    color: colors.notification.error,
  },
  textDefault: {
    color: colors.notification.default,
  },
})

export const notificationBackground: Record<notificationEnums, ViewStyle> = {
  success: notificationStyles.bgSuccess,
  error: notificationStyles.bgError,
  default: notificationStyles.bgDefault,
}

export const notificationText = {
  success: notificationStyles.textSuccess,
  error: notificationStyles.textError,
  default: notificationStyles.textDefault,
}

export const tabsStyles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    padding: 8,
  },
  tabsBorder: {
    borderTopWidth: 1,
    marginTop: 16,
  },
  tabsChildren: {
    marginTop: 16,
  },
})
