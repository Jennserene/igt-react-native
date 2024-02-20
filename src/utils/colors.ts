import { Appearance } from 'react-native'

const theme = Appearance.getColorScheme()
const isLight = theme === 'light'

const commonColors = {
  text: {
    light: '#000000',
    dark: '#ffffff',
  },
  background: {
    light: '#f5f5f5',
    dark: '#1f2937',
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
      ? commonColors.background.light
      : commonColors.background.dark,
    sideBar: isLight ? '#000000' : '#111827',
    error: '#ff0000',
  },
  activityIndicator: '#0000ff',
  game: {
    background: {
      devPanel: isLight ? '#fff9c4' : '#616161',
    },
    notification: {
      ...commonColors.notification,
      msgText: '#757575',
    },
  },
  text: {
    ...commonColors.text,
    primary: isLight ? commonColors.text.light : commonColors.text.dark,
  },
  link: {
    activeBg: isLight ? '#f5f5f5' : '#e4e7eb',
    activeText: isLight ? commonColors.text.dark : commonColors.text.light,
  },
  progressBar: {
    background: '#f48fb1',
    foreground: '#e91e63',
  },
}
