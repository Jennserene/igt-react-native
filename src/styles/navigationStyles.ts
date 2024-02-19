import { StyleSheet } from 'react-native'

export const navStyles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    maxWidth: 200,
  },
  drawerContainer: {
    flex: 1,
    height: '100%',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
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
