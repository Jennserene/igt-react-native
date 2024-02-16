module.exports = {
  // Standard Settings
  singleQuote: true,
  semi: false,
  trailingComma: 'all',

  // Plugins
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '<TYPES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '@typeDefs(/[^\'"]*)?',
    '',
    '@assets(/[^\'"]*)?',
    '',
    '@utils(/[^\'"]*)?',
    '@hooks(/[^\'"]*)?',
    '@api(/[^\'"]*)?',
    '',
    '@components(/[^\'"]*)?',
    '@app(/[^\'"]*)?',
    '',
    '@game(/[^\'"]*)?',
    '',
    '^[.]', // Relative imports
    '',
    '@mocks(/[^\'"]*)?',
  ],
  importOrderTypeScriptVersion: '5.0.0',
}
