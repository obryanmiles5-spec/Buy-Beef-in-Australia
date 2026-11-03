import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { CATEGORIES, ALL_PRODUCTS, BUSINESS_CONFIG } from '@/lib/data';
import CategoryPageClient from '@/components/CategoryPageClient';

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ categorySlug: string }>;
}

function findCategory(slug: string) {
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  return CATEGORIES.find(
    (c) =>
      c.slug.toLowerCase() === normalized ||
      c.id.toLowerCase() === normalized ||
      c.name.toLowerCase() === normalized ||
      c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === normalized
  );
}

export async function generateStaticParams() {
  const slugs = new Set<string>();
  CATEGORIES.forEach((cat) => {
    if (cat.slug) slugs.add(cat.slug);
    if (cat.id) slugs.add(cat.id);
  });
  return Array.from(slugs).map((categorySlug) => ({
    categorySlug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  if (categorySlug.toLowerCase() === 'all') {
    return { title: `All Cuts & Departments | ${BUSINESS_CONFIG.businessName}` };
  }
  const category = findCategory(categorySlug);
  if (!category) return { title: 'Department Not Found' };

  return {
    title: category.seoTitle || `${category.name} | ${BUSINESS_CONFIG.businessName}`,
    description: category.metaDescription,
    alternates: {
      canonical: `https://${BUSINESS_CONFIG.domain}/shop/${category.slug || category.id}`,
    },
  };
}

export default async function CategoryAliasPage({ params }: PageProps) {
  const { categorySlug } = await params;
  if (categorySlug.toLowerCase() === 'all') {
    redirect('/shop');
  }

  const category = findCategory(categorySlug);
  if (!category) notFound();

  // Redirect to canonical /shop/[categorySlug] or render
  redirect(`/shop/${category.slug || category.id}`);
}
