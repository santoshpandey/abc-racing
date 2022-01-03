const headers = require('./securityheader');
const withPWA = require("next-pwa");

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
    locales: ['en-US', 'fr', 'ca'],
    defaultLocale: 'en-US',
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});