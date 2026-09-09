'use client';

import { useState } from 'react';
import { 
  X, 
  FileCode2, 
  CheckSquare, 
  ListTree, 
  Search, 
  Copy, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { BUSINESS_CONFIG, KEYWORD_MAP, XML_SITEMAP_ENTRIES } from '@/lib/data';

interface BlueprintCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlueprintCenterModal({ isOpen, onClose }: BlueprintCenterModalProps) {
  const [activeTab, setActiveTab] = useState<'keywords' | 'schemas' | 'sitemap' | 'robots' | 'checklist'>('keywords');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['ButcherShop', 'Organization'],
    name: BUSINESS_CONFIG.businessName,
    url: `https://${BUSINESS_CONFIG.domain}`,
    logo: `https://${BUSINESS_CONFIG.domain}/images/logo.png`,
    description: 'Online beef and fresh meat delivery service in Australia.',
    telephone: BUSINESS_CONFIG.phone,
    email: BUSINESS_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '[BUSINESS STREET ADDRESS]',
      addressLocality: '[SUBURB / CITY]',
      addressRegion: '[STATE - E.G. VIC]',
      postalCode: '[POSTCODE]',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-37.8136',
      longitude: '144.9631',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Credit Card, Apple Pay, Google Pay, Cryptocurrency',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I buy beef online from ${BUSINESS_CONFIG.businessName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Browse our departments, pick your desired portion size or pack, add to cart, and checkout with your Australian delivery address.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is meat packaged for cold-chain delivery in Australia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All items are vacuum-sealed or thermo-sealed in food-grade bags, nested in heavy-duty thermal insulated boxes with food-grade gel ice packs keeping contents below 5°C.',
        },
      },
    ],
  };

  const robotsTxtContent = `# robots.txt for ${BUSINESS_CONFIG.domain}
User-agent: *
Allow: /
Disallow: /api/
Disallow: /checkout/
Disallow: /cart/
Disallow: /admin/

Sitemap: https://${BUSINESS_CONFIG.domain}/sitemap.xml`;

  return (
    <div
      id="blueprint-center-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blueprint-title"
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col border border-stone-200 animate-fade-in relative text-[#151515]">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-900 text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C7903E]/20 text-[#C7903E] flex items-center justify-center border border-[#C7903E]/40">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7903E] font-bold">
                  Technical Architecture
                </span>
                <span className="bg-emerald-950 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-800">
                  Ready for CMS & Staging
                </span>
              </div>
              <h2 id="blueprint-title" className="font-serif text-xl sm:text-2xl font-bold">
                SEO, Schema Markup & Australian Compliance Blueprint
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800"
            aria-label="Close blueprint modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 pt-4 pb-2 border-b border-stone-200 bg-stone-50 overflow-x-auto text-xs">
          {[
            { id: 'keywords', label: 'Keyword Map' },
            { id: 'schemas', label: 'Schema.org JSON-LD' },
            { id: 'sitemap', label: 'XML Sitemap' },
            { id: 'robots', label: 'Robots.txt' },
            { id: 'checklist', label: 'Implementation Checklist' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#151515] text-white shadow-sm'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* 1. KEYWORD MAP */}
          {activeTab === 'keywords' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  SEO Architecture & Target Keyword Matrix
                </h3>
                <p className="text-xs text-stone-600">
                  Detailed map of target URLs, primary search intents, target Australian keywords, and H1 recommendations.
                </p>
              </div>

              <div className="overflow-x-auto border border-stone-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse font-sans">
                  <thead>
                    <tr className="bg-stone-100 border-b border-stone-200 text-stone-700 font-mono">
                      <th className="p-3">Page / Path</th>
                      <th className="p-3">Primary Target Keyword</th>
                      <th className="p-3">Recommended H1</th>
                      <th className="p-3">Search Intent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {KEYWORD_MAP.map((row) => (
                      <tr key={row.page} className="hover:bg-stone-50">
                        <td className="p-3 font-mono font-semibold text-[#7A1F2B]">{row.page}</td>
                        <td className="p-3 font-semibold text-stone-900">{row.targetKeyword}</td>
                        <td className="p-3 text-stone-700">{row.suggestedH1}</td>
                        <td className="p-3 text-stone-500 font-mono text-[11px]">{row.searchIntent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. SCHEMA MARKUP */}
          {activeTab === 'schemas' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Structured Data Recommendations (JSON-LD)
                </h3>
                <p className="text-xs text-stone-600">
                  These rich snippets validate business credentials, opening hours, local geographic service zones, and FAQ accordions for Google Search.
                </p>
              </div>

              {/* Organization & ButcherShop Schema */}
              <div className="border border-stone-200 rounded-xl overflow-hidden">
                <div className="p-3 bg-stone-100 flex items-center justify-between border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-800">
                    Organization & ButcherShop Schema (Sitewide Layout)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('org-schema', JSON.stringify(organizationSchema, null, 2))}
                    className="text-xs font-mono text-[#7A1F2B] hover:underline flex items-center gap-1"
                  >
                    {copiedKey === 'org-schema' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'org-schema' ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                </div>
                <pre className="p-4 bg-[#151515] text-stone-200 font-mono text-xs overflow-x-auto">
                  {JSON.stringify(organizationSchema, null, 2)}
                </pre>
              </div>

              {/* FAQ Schema */}
              <div className="border border-stone-200 rounded-xl overflow-hidden">
                <div className="p-3 bg-stone-100 flex items-center justify-between border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-800">
                    FAQPage Schema (Homepage & Category Pages)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('faq-schema', JSON.stringify(faqSchema, null, 2))}
                    className="text-xs font-mono text-[#7A1F2B] hover:underline flex items-center gap-1"
                  >
                    {copiedKey === 'faq-schema' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'faq-schema' ? 'Copied' : 'Copy JSON'}</span>
                  </button>
                </div>
                <pre className="p-4 bg-[#151515] text-stone-200 font-mono text-xs overflow-x-auto">
                  {JSON.stringify(faqSchema, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* 3. XML SITEMAP */}
          {activeTab === 'sitemap' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Recommended XML Sitemap Structure
                </h3>
                <p className="text-xs text-stone-600">
                  Full list of canonical URLs with crawling priorities for Googlebot and Bingbot.
                </p>
              </div>

              <div className="border border-stone-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs border-collapse font-sans">
                  <thead>
                    <tr className="bg-stone-100 border-b border-stone-200 font-mono text-stone-700">
                      <th className="p-3">URL</th>
                      <th className="p-3">Change Frequency</th>
                      <th className="p-3">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {XML_SITEMAP_ENTRIES.map((entry) => (
                      <tr key={entry.loc} className="hover:bg-stone-50 font-mono">
                        <td className="p-3 text-[#7A1F2B] font-semibold">{entry.loc}</td>
                        <td className="p-3 text-stone-600">{entry.changefreq}</td>
                        <td className="p-3 text-stone-900 font-bold">{entry.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. ROBOTS.TXT */}
          {activeTab === 'robots' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Recommended Robots.txt Configuration
                </h3>
                <p className="text-xs text-stone-600">
                  Permits indexing of marketing and product pages while blocking cart, account, and internal administrative routes.
                </p>
              </div>

              <div className="border border-stone-200 rounded-xl overflow-hidden">
                <div className="p-3 bg-stone-100 flex items-center justify-between border-b border-stone-200">
                  <span className="font-mono text-xs font-bold text-stone-800">
                    /robots.txt
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy('robots-txt', robotsTxtContent)}
                    className="text-xs font-mono text-[#7A1F2B] hover:underline flex items-center gap-1"
                  >
                    {copiedKey === 'robots-txt' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey === 'robots-txt' ? 'Copied' : 'Copy Robots.txt'}</span>
                  </button>
                </div>
                <pre className="p-4 bg-[#151515] text-stone-200 font-mono text-xs whitespace-pre-wrap">
                  {robotsTxtContent}
                </pre>
              </div>
            </div>
          )}

          {/* 5. CHECKLIST */}
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Production Launch & Australian Compliance Checklist
                </h3>
                <p className="text-xs text-stone-600">
                  Items to finalize before opening public orders and launching paid marketing.
                </p>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  {
                    title: 'Insert Verified Australian Business Number (ABN)',
                    desc: 'Replace [INSERT ABN] in header, footer, wholesale application, and legal policies with the registered ASIC ABN.',
                    status: 'Ready for client insertion',
                  },
                  {
                    title: 'Publish Exact Postcode Delivery Matrix',
                    desc: 'Configure dispatch schedule by zone (e.g. Metro Melbourne vs Regional Victoria) with cut-off ordering times.',
                    status: 'Placeholders configured',
                  },
                  {
                    title: 'Verify Food Safety & Cold-Chain Protocol with Local Health Authority',
                    desc: 'Ensure refrigerated courier partners maintain cold chain below 5°C with logged data-loggers.',
                    status: 'Standard 3.2.2 matrix included',
                  },
                  {
                    title: 'Connect Verified Customer Review Platform',
                    desc: 'Embed live Trustpilot, Judge.me, or Google Reviews widget to replace placeholders.',
                    status: 'Placeholder widget ready',
                  },
                  {
                    title: 'Legal Counsel Review of Terms & Perishable Refund Rules',
                    desc: 'Verify 2-hour photo reporting window complies with Australian Consumer Law (ACL) statutory consumer guarantees.',
                    status: 'Consumer-friendly draft ready',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-3">
                    <CheckSquare className="w-4 h-4 text-[#2E6B4D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-stone-900">{item.title}</h4>
                      <p className="text-stone-600 text-[11px] mt-0.5">{item.desc}</p>
                      <span className="inline-block mt-2 font-mono text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded font-semibold">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between rounded-b-2xl text-xs text-stone-500">
          <span>Target Keyword: Buy Beef Online Australia | Strict Placeholder Compliance Enforced</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#151515] text-white font-semibold rounded-lg hover:bg-stone-800"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
}
