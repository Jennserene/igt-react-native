module.exports = {
  expo: {
    name: 'IGT React Native',
    slug: 'igt-react-native',
    scheme: 'igt-react-native',
    version: '0.1.0',
    orientation: 'portrait',
    icon: './src/assets/native/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './src/assets/native/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/native/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      favicon: './src/assets/native/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-font',
        {
          fonts: [
            'src/assets/fonts/Inter-Regular.ttf',
            'src/assets/fonts/Inter-Thin.ttf',
            'src/assets/fonts/Inter-Bold.ttf',
          ],
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
}
