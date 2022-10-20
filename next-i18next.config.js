module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  react: {
    useSuspense: false,
  },
  localePath: typeof window === "undefined" ?
      require('path').resolve('./public/locales'):
      '/public/locales'
};

