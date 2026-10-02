import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES, ALL_PRODUCTS, BUSINESS_CONFIG } from '@/lib/data';
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, CheckCircle2 } from 'lucide-react';

interface PageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    categorySlug: cat.slug || cat.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = CATEGORIES.find((c) => (c.slug || c.id) === categorySlug);
  if (!category) return { title: 'Department Not Found' };

  return {
    title: category.seoTitle || `${category.name} | ${BUSINESS_CONFIG.businessName}`,
    description: category.metaDescription,
    alternates: {
      canonical: `https://${BUSINESS_CONFIG.domain}/shop/${categorySlug}`,
    },
    openGraph: {
      title: category.seoTitle,
      description: category.metaDescription,
      url: `https://${BUSINESS_CONFIG.domain}/shop/${categorySlug}`,
      type: 'website',
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = CATEGORIES.find((c) => (c.slug || c.id) === categorySlug);
  if (!category) notFound();

  const products = ALL_PRODUCTS.filter((p) => p.category === category.id);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.metaDescription,
    url: `https://${BUSINESS_CONFIG.domain}/shop/${categorySlug}`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((prod, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://${BUSINESS_CONFIG.domain}/product/${prod.id}`,
        name: prod.name,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Breadcrumb Header */}
      <div className="bg-[#151515] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-[#C7903E]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E2B766] mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:underline">Shop Departments</Link>
            <span>/</span>
            <span className="text-stone-300">{category.name}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            {category.h1 || category.name}
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {category.introCopy}
          </p>
        </div>
      </div>

      {/* Products & Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#EAE6DF]">
          <div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              {category.name} Cuts ({products.length} available)
            </h2>
            <p className="text-xs text-stone-500 font-mono mt-1">
              Temperature-controlled cold-chain delivery across Australia • Sourced from NSW 2642
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7A1F2B] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Departments</span>
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-[#EAE6DF] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#7A1F2B] text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs shadow-xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7903E] font-bold block mb-1">
                    {product.subCategory || category.name}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#7A1F2B] transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-stone-100 mt-auto">
                <div>
                  <span className="text-[10px] uppercase font-mono text-stone-500 block">Price From</span>
                  <span className="font-mono text-lg font-bold text-[#7A1F2B]">
                    ${product.defaultPrice} <span className="text-xs text-stone-500 font-normal">AUD</span>
                  </span>
                </div>
                <Link
                  href={`/product/${product.id}`}
                  className="bg-[#7A1F2B] hover:bg-[#5F1721] text-white text-xs font-semibold px-4 py-2.5 rounded-xs transition-colors shadow-xs"
                >
                  View Cut & Order →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Category FAQ Section */}
        {category.faqSuggestions && category.faqSuggestions.length > 0 && (
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm mb-12">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
              Frequently Asked Questions: {category.name}
            </h3>
            <div className="space-y-6">
              {category.faqSuggestions.map((faq, i) => (
                <div key={i} className="pb-4 border-b border-stone-100 last:border-0 last:pb-0">
                  <h4 className="font-bold text-stone-900 text-sm mb-1">{faq.question}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
