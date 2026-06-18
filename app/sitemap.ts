import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog';
import { servicePages } from '@/lib/services';

const BASE_URL = 'https://subjetividades.cl';

export default function sitemap(): MetadataRoute.Sitemap {
  // Fecha más reciente entre los artículos, para el listado /blog.
  const latestPost = blogPosts
    .map((p) => p.lastModified)
    .sort()
    .at(-1)!;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: latestPost, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/prensa`, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((s) => ({
    url: `${BASE_URL}/${s.slug}`,
    lastModified: s.lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const postRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
