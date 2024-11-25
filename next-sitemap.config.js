/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://last-contact.net',
    changefreq: 'weekly',
    generateRobotsTxt: true, // (optional)
    exclude: ['*/_meta'],
    robotsTxtOptions: {
        policies: [
            {userAgent: 'GPTBot', disallow: '/'},
            {userAgent: 'ChatGPT-User', disallow: '/'},
            {userAgent: 'ClaudeBot', disallow: '/'},
            {userAgent: 'Claude-Web', disallow: '/'},
            {userAgent: 'CCBot', disallow: '/'},
            {userAgent: 'Applebot-Extended', disallow: '/'},
            {userAgent: 'Facebookbot', disallow: '/'},
            {userAgent: 'FacebookBot', disallow: '/'},
            {userAgent: 'Meta-ExternalAgent', disallow: '/'},
            {userAgent: 'Meta-ExternalFetcher', disallow: '/'},
            {userAgent: 'OAI-SearchBot', disallow: '/'},
            {userAgent: 'diffbot', disallow: '/'},
            {userAgent: 'PerplexityBot', disallow: '/'},
            {userAgent: 'Google-Extended', disallow: '/'},
            {userAgent: 'omgili', disallow: '/'},
            {userAgent: 'Omgili', disallow: '/'},
            {userAgent: 'Omgilibot', disallow: '/'},
            {userAgent: 'ImagesiftBot', disallow: '/'},
            {userAgent: 'Bytespider', disallow: '/'},
            {userAgent: 'Amazonbot', disallow: '/'},
            {userAgent: 'Youbot', disallow: '/'},
            {userAgent: 'anthropic-ai', disallow: '/'},
            {userAgent: 'cohere-ai', disallow: '/'}
        ],
        includeNonIndexSitemaps: false
    }
}