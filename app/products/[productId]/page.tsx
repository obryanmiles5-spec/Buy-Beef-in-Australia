import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { ALL_PRODUCTS, BUSINESS_CONFIG } from '@/lib/data';
import ProductPageClient from '@/components/ProductPageClient';

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ productId: string }>;
}

function findProduct(idOrSlug: string) {
  const normalized = decodeURIComponent(idOrSlug).toLowerCase().trim();
  return ALL_PRODUCTS.find(
    (p) =>
      p.id.toLowerCase() === normalized ||
      p.slug?.toLowerCase() === normalized
  );
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((prod) => ({
    productId: prod.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = findProduct(productId);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | ${BUSINESS_CONFIG.businessName}`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://${BUSINESS_CONFIG.domain}/product/${product.id}`,
    },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `https://${BUSINESS_CONFIG.domain}/product/${product.id}`,
      images: [{ url: product.image, alt: product.name }],
      type: 'website',
    },
  };
}

export default async function ProductsAliasPage({ params }: PageProps) {
  const { productId } = await params;
  const product = findProduct(productId);
  if (!product) notFound();

  // Redirect to canonical /product/[id] or render directly
  redirect(`/product/${product.id}`);
}
