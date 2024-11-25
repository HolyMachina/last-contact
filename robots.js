export default function robots() {
    return {
      rules: {
        userAgent: 
            [
                'GPTBot',
                'ChatGPT-User',
                'ClaudeBot',
                'Claude-Web',
                'CCBot',
                'Applebot-Extended',
                'Facebookbot',
                'FacebookBot',
                'Meta-ExternalAgent',
                'Meta-ExternalFetcher',
                'OAI-SearchBot',
                'diffbot',
                'PerplexityBot',
                'Google-Extended',
                'omgili',
                'Omgili',
                'Omgilibot',
                'ImagesiftBot',
                'Bytespider',
                'Amazonbot',
                'Youbot',
                'anthropic-ai',
                'cohere-ai'
            ],
        disallow: '/',
      },
      sitemap: 'https://last-contact.net/sitemap.xml',
    }
  }