import { Appearance } from 'react-native'

const theme = Appearance.getColorScheme()
const isLight = theme === 'light'

const commonColors = {
  text: {
    light: '#000000',
    dark: '#ffffff',
  },
  notification: {
    success: '#4caf50',
    error: '#f44336',
    default: '#9e9e9e',
  },
}

export const colors = {
  backgrounds: {
    primary: '#ffffff',
    sideBar: '#f0f0f0',
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
  },
  progressBar: {
    background: '#f48fb1',
    foreground: '#e91e63',
  },
}
