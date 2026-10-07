import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ALL_PRODUCTS, BUSINESS_CONFIG } from '@/lib/data';
import ProductPageClient from '@/components/ProductPageClient';

interface PageProps {
  params: Promise<{ productId: string }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((prod) => ({
    productId: prod.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === productId);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | ${BUSINESS_CONFIG.businessName}`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://${BUSINESS_CONFIG.domain}/product/${productId}`,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `https://${BUSINESS_CONFIG.domain}/product/${productId}`,
      images: [{ url: product.image, alt: product.name }],
      type: 'website',
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { productId } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === productId);
  if (!product) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.galleryImages || [product.image],
    description: product.fullDescription || product.shortDescription,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: BUSINESS_CONFIG.businessName,
    },
    offers: {
      '@type': 'Offer',
      url: `https://${BUSINESS_CONFIG.domain}/product/${product.id}`,
      priceCurrency: 'AUD',
      price: product.defaultPrice,
      priceValidUntil: '2027-12-31',
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: BUSINESS_CONFIG.businessName,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '348',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductPageClient product={product} />
    </>
  );
}
