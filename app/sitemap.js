export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://candacestewart.com';
  
  // List of all project slugs
  const projects = [
    'algorithmic-ear',
    '4th-kit',
    'sneaker-builder-ar',
    'soma-ar',
    'field-node-v1',
    'field-node-v2',
    'cyborg-manifesto',
  ];

  // Home page
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  // Project pages
  projects.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/project/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  return routes;
}

