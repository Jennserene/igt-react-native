import { Appearance } from 'react-native'

const theme = Appearance.getColorScheme()
const isLight = theme === 'light'

const commonColors = {
  white: '#ffffff',
  black: '#000000',
  gray2: '#e5e7eb',
  gray3: '#d1d5db',
  gray5: '#6b7280',
  gray7: '#374151',
  gray8: '#1f2937',
}

const commonElements = {
  text: {
    light: commonColors.black,
    dark: commonColors.white,
    game: isLight ? commonColors.gray5 : commonColors.gray3,
  },
  background: {
    light: '#f5f5f5',
    dark: commonColors.gray8,
  },
  notification: {
    success: '#4caf50',
    error: '#f44336',
    default: '#9e9e9e',
  },
}

export const colors = {
  backgrounds: {
    primary: isLight
      ? commonElements.background.light
      : commonElements.background.dark,
    sideBar: isLight ? commonColors.black : '#111827',
    error: '#ff0000',
  },
  activityIndicator: '#0000ff',
  game: {
    background: {
      devPanel: isLight ? '#fff9c4' : '#616161',
    },
    notification: {
      ...commonElements.notification,
      msgText: '#757575',
    },
    border: commonColors.gray3,
    text: {
      primary: commonElements.text.game,
    },
  },
  text: {
    ...commonElements.text,
    title: isLight ? commonColors.gray8 : commonColors.white,
    primary: isLight ? commonElements.text.light : commonElements.text.dark,
  },
  link: {
    activeBg: isLight ? '#f5f5f5' : '#e4e7eb',
    activeText: isLight ? commonElements.text.dark : commonElements.text.light,
  },
  buttons: {
    menu: isLight ? commonColors.black : commonColors.white,
    blue: {
      standard: '#3b82f6',
      hover: '#2563eb',
      active: '#1e40af',
    },
    green: {
      standard: '#22c55e',
      hover: '#16a34a',
      active: '#15803d',
    },
    red: {
      standard: '#ef4444',
      hover: '#dc2626',
      active: '#b91c1c',
    },
    gray: commonColors.gray3,
  },
  progressBar: {
    background: '#f48fb1',
    foreground: '#e91e63',
  },
}
