export default function robots() {
    return {
        rules: 
        [
            {// known AI Bots
                userAgent: 
                    [ 
                        'AI2Bot',
                        'Ai2Bot-Dolma',
                        'Amazonbot',
                        'anthropic-ai',
                        'Applebot',
                        'Applebot-Extended',
                        'Bytespider',
                        'CCBot',
                        'ChatGPT-User',
                        'Claude-Web',
                        'ClaudeBot',
                        'Crawl4AI',
                        'cohere-ai',
                        'Diffbot',
                        'DuckAssistBot',
                        'FacebookBot',
                        'firecrawl',
                        'Firecrawl',
                        'FriendlyCrawler',
                        'Google-Extended',
                        'GoogleOther',
                        'GoogleOther-Image',
                        'GoogleOther-Video',
                        'GPTBot',
                        'iaskspider/2.0',
                        'ICC-Crawler',
                        'ImagesiftBot',
                        'img2dataset',
                        'ISSCyberRiskCrawler',
                        'Kangaroo Bot',
                        'Meta-ExternalAgent',
                        'Meta-ExternalFetcher',
                        'OAI-SearchBot',
                        'omgili',
                        'omgilibot',
                        'PanguBot',
                        'PerplexityBot',
                        'PetalBot',
                        'Scrapy',
                        'Sidetrade indexer bot',
                        'Timpibot',
                        'VelenPublicWebCrawler',
                        'Webzio-Extended',
                        'YouBot'
                    ],
                disallow: '/'
            }
        ],
      sitemap: 'https://last-contact.net/sitemap.xml',
    }
  }