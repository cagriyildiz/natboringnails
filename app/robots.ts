import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Examples of what to hide from Google
    },
    sitemap: 'https://natboringnails.nl/sitemap.xml',
  }
}