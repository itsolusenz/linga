const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: '',
    trailingSlash: isProduction,
    i18n: {
        locales: ['en', 'ta'],
        defaultLocale: 'en'
    }

} 