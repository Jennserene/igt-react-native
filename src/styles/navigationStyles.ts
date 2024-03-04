import { StyleSheet } from 'react-native'

import { colors } from '@utils'

import { globalParentStyles } from './globalStyles'

export const navStyles = StyleSheet.create({
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    maxWidth: 240,
    zIndex: 100,
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
  sideMenuContainer: {
    ...globalParentStyles.stdFillContainer,
    justifyContent: 'space-between',
    backgroundColor: colors.backgrounds.sideBar,
    paddingHorizontal: 16,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 40,
    padding: 8,
    flexDirection: 'row',
  },
  logo: {
    height: 48,
    width: 48,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  navigationScroll: {
    flex: 1,
    width: '100%',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
})

export const linkStylesSmall = StyleSheet.create({
  linkContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
  },
  linkImage: {
    width: 25,
    height: 25,
  },
  linkText: {
    fontSize: 12,
  },
})

export const linkStylesLarge = StyleSheet.create({
  linkContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    flexDirection: 'row',
  },
  linkImage: {
    width: 100,
    height: 100,
  },
  linkText: {
    fontSize: 16,
  },
})
