/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://last-contact.net',
    changefreq: 'weekly',
    generateRobotsTxt: true, // (optional)
    exclude: ['*/_meta']
    // ...other options
  }