import { StyleSheet } from 'react-native'

export const navStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  header: {
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationScroll: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  navContentAndFooter: {
    flex: 1,
    justifyContent: 'space-between',
  },
  navContent: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'flex-start',
  },
  footer: {
    height: 50,
    backgroundColor: 'lightgray',

    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
})
