import './globals.css';
import ErrorBoundary from '@/components/ErrorBoundary';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://candacestewart.com'),
  title: {
    default: 'Candace Stewart - Portfolio',
    template: '%s | Candace Stewart'
  },
  description: 'I design theories through prototypes. Designer and systems thinker working at the intersection of technology, culture, and care. Exploring how care, intimacy, and context become system logic.',
  keywords: [
    'Candace Stewart',
    'portfolio',
    'design',
    'media studies',
    'creative coding',
    'designer',
    'systems thinker',
    'UX design',
    'product design',
    'algorithmic design',
    'extended reality',
    'WebXR',
    'AR design',
    'knowledge infrastructure',
    'design theory',
    'engineering psychology',
    'Parsons School of Design',
    'West Point'
  ],
  authors: [{ name: 'Candace Stewart' }],
  creator: 'Candace Stewart',
  publisher: 'Candace Stewart',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Candace Stewart - Portfolio',
    description: 'I design theories through prototypes. Designer and systems thinker working at the intersection of technology, culture, and care.',
    siteName: 'Candace Stewart Portfolio',
    images: [
      {
        url: '/proflie.png',
        width: 150,
        height: 150,
        alt: 'Candace Stewart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Candace Stewart - Portfolio',
    description: 'I design theories through prototypes. Designer and systems thinker working at the intersection of technology, culture, and care.',
    images: ['/proflie.png'],
    creator: '@candiikay',
  },
  alternates: {
    canonical: '/',
  },
  category: 'portfolio',
};

export default function RootLayout({ children }) {
  // Structured data for Person/Portfolio
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Candace Stewart',
    jobTitle: 'Designer & Systems Thinker',
    description: 'I design theories through prototypes. Exploring how care, intimacy, and context become system logic.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://candacestewart.com',
    image: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/proflie.png` : '/proflie.png',
    sameAs: [
      'https://www.instagram.com/candiikay/',
      'https://www.linkedin.com/in/candaceks',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'West Point',
        description: 'B.S. Engineering Psychology, Systems Engineering track',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Parsons School of Design',
        description: 'M.A. Media Studies and Creative Coding',
      },
    ],
    knowsAbout: [
      'Design',
      'Creative Coding',
      'Media Studies',
      'Systems Engineering',
      'UX Design',
      'Product Design',
      'Extended Reality',
      'WebXR',
      'Algorithmic Design',
      'Knowledge Infrastructure',
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}

