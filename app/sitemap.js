export default function sitemap() {
  return [
    {
      url: 'https://last-contact.net',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/lastcontact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: 'https://acme.com/theblog',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}