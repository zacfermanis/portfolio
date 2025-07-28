import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zac Fermanis - Solutions Engineer, Architect & AI Leader',
  description: 'Experienced software engineer and technology leader with over 20 years of expertise in enterprise systems, full-stack development, and AI-driven solutions. Currently serving as Solutions Engineer at Liberty Mutual, leading AI initiatives and enterprise architecture for a Fortune 100 company.',
  keywords: [
    'Zac Fermanis',
    'Solutions Engineer',
    'AI Leader',
    'Enterprise Architecture',
    'Software Engineer',
    'Liberty Mutual',
    'AI Strategy',
    'Full-stack Development',
    'Machine Learning',
    'Enterprise Systems',
    'Technology Leader',
    'Portfolio'
  ],
  authors: [{ name: 'Zac Fermanis' }],
  creator: 'Zac Fermanis',
  publisher: 'Zac Fermanis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zacfermanis.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zacfermanis.com',
    siteName: 'Zac Fermanis Portfolio',
    title: 'Zac Fermanis - Solutions Engineer, Architect & AI Leader',
    description: 'Experienced software engineer and technology leader with over 20 years of expertise in enterprise systems, full-stack development, and AI-driven solutions. Currently serving as Solutions Engineer at Liberty Mutual, leading AI initiatives and enterprise architecture for a Fortune 100 company.',
    images: [
      {
        url: '/Me.jpg',
        width: 800,
        height: 600,
        alt: 'Zac Fermanis - Solutions Engineer, Architect & AI Leader',
        type: 'image/jpeg',
      },
      {
        url: '/Me_Transparent_Drawn.png',
        width: 800,
        height: 600,
        alt: 'Zac Fermanis - Professional Headshot',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zacfermanis',
    creator: '@zacfermanis',
    title: 'Zac Fermanis - Solutions Engineer, Architect & AI Leader',
    description: 'Experienced software engineer and technology leader with over 20 years of expertise in enterprise systems, full-stack development, and AI-driven solutions.',
    images: ['/Me.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zac Fermanis" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zac Fermanis",
              "jobTitle": "Solutions Engineer, Architect & AI Leader",
              "description": "Experienced software engineer and technology leader with over 20 years of expertise in enterprise systems, full-stack development, and AI-driven solutions.",
              "image": {
                "@type": "ImageObject",
                "url": "https://zacfermanis.com/Me.jpg",
                "width": 800,
                "height": 600
              },
              "url": "https://zacfermanis.com",
              "sameAs": [
                "https://www.linkedin.com/in/zac-fermanis/",
                "https://github.com/zacfermanis"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Liberty Mutual"
              },
              "alumniOf": [
                {
                  "@type": "Organization",
                  "name": "Boston University"
                },
                {
                  "@type": "Organization", 
                  "name": "University of Southern Maine"
                }
              ],
              "knowsAbout": [
                "Enterprise Architecture",
                "AI Strategy",
                "Full-stack Development",
                "Machine Learning",
                "Enterprise Systems",
                "Cloud Architecture",
                "Software Engineering"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Raleigh",
                "addressRegion": "NC",
                "addressCountry": "US"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
