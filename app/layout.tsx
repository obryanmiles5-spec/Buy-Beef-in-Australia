import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Buy Beef Online Australia | Premium Meat Delivery',
  description: 'Buy premium Australian beef cuts, steaks, mince & family meat packs online. Cold-chain delivery, wholesale supply & trusted butcher quality delivered.',
  openGraph: {
    title: 'Buy Beef Online Australia | Premium Meat Delivery',
    description: 'Buy premium Australian beef cuts, steaks, mince & family meat packs online. Cold-chain delivery, wholesale supply & trusted butcher quality delivered.',
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy Beef Online Australia | Premium Meat Delivery',
    description: 'Buy premium Australian beef cuts, steaks, mince & family meat packs online. Cold-chain delivery, wholesale supply & trusted butcher quality delivered.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
