/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://lastcontact.space',
    changefreq: 'weekly',
    exclude: ['*/_meta'],
    generateRobotsTxt: false
}