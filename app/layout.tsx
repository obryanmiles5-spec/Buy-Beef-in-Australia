import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#7A1F2B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pastureandtide.com.au'),
  title: 'Buy Beef Online Australia | Premium Meat Delivery',
  description: 'Premium online beef, seafood and wholesale meat platform for Australian households, BBQ enthusiasts, and commercial food businesses with cold-chain delivery on pastureandtide.com.au.',
  keywords: [
    'buy beef online Australia',
    'pastureandtide.com.au',
    'pasture and tide',
    'online butcher Australia',
    'wagyu beef delivery',
    'black angus steak online',
    'family meat packs Australia',
    'wholesale meat supplier',
    'cold chain meat delivery NSW',
  ],
  authors: [{ name: 'Pasture & Tide Master Butcher' }],
  creator: 'Pasture & Tide',
  publisher: 'Pasture & Tide Australia',
  alternates: {
    canonical: 'https://pastureandtide.com.au',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Buy Beef Online Australia | Premium Meat Delivery',
    description: 'Premium online beef, seafood and wholesale meat platform for Australian households, BBQ enthusiasts, and commercial food businesses with cold-chain delivery on pastureandtide.com.au.',
    url: 'https://pastureandtide.com.au',
    siteName: 'Pasture & Tide | Buy Beef Online Australia',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://pastureandtide.com.au/site-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Pasture & Tide Australian Meat Delivery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Beef Online Australia | Premium Meat Delivery',
    description: 'Premium online beef, seafood and wholesale meat platform for Australian households, BBQ enthusiasts, and commercial food businesses with cold-chain delivery on pastureandtide.com.au.',
    images: ['https://pastureandtide.com.au/site-logo.svg'],
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
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
