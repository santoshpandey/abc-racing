const headers = require('./securityheader');
const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache')


module.exports = withPWA({
  reactStrictMode: true,
  productionBrowserSourceMaps:true,


  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
});