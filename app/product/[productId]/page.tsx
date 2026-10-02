import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ALL_PRODUCTS, BUSINESS_CONFIG } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import ProductGalleryView from '@/components/ProductGalleryView';

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
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] font-sans pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-stone-900 text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-[#C7903E]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-mono text-[#E2B766]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:underline">Shop</Link>
          <span>/</span>
          <Link href={`/shop/${product.category}`} className="hover:underline capitalize">{product.category}</Link>
          <span>/</span>
          <span className="text-stone-300 truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href={`/shop/${product.category}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A1F2B] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {product.category} Department</span>
        </Link>

        <ProductGalleryView product={product} />
      </div>
    </div>
  );
}
