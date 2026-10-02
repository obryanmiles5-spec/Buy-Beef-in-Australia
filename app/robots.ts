import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/checkout', '/account', '/api/'],
      },
    ],
    sitemap: 'https://pastureandtide.com.au/sitemap.xml',
    host: 'https://pastureandtide.com.au',
  };
}

