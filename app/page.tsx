'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import StaticParallaxContainer from '@/components/StaticParallaxContainer';
import ReviewSection from '@/components/ReviewSection';
import BlogSection from '@/components/BlogSection';
import SeoContentSection from '@/components/SeoContentSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import ShopCatalog from '@/components/ShopCatalog';
import WholesaleView from '@/components/WholesaleView';
import AboutView from '@/components/AboutView';
import ContactView from '@/components/ContactView';
import ProductDetailModal from '@/components/ProductDetailModal';
import DeliveryComplianceModal from '@/components/DeliveryComplianceModal';
import BlueprintCenterModal from '@/components/BlueprintCenterModal';
import CartDrawer from '@/components/CartDrawer';
import { Product, CartItem, BlogPost } from '@/lib/types';
import { BUSINESS_CONFIG } from '@/lib/data';
import { Search, User, X } from 'lucide-react';

export default function HomePage() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Modals & Drawers State
  const [cartOpen, setCartOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [blueprintModalOpen, setBlueprintModalOpen] = useState(false);
  const [complianceModalOpen, setComplianceModalOpen] = useState(false);
  const [complianceInitialSection, setComplianceInitialSection] = useState<string>('delivery-info');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Cart Items State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Sample initial item to show immediate functionality
    {
      product: {
        id: 'ribeye-scotch-fillet',
        name: 'Grass-Fed Ribeye (Scotch Fillet)',
        slug: 'grass-fed-ribeye-scotch-fillet',
        category: 'beef',
        subCategory: 'Steaks',
        badge: 'Best Seller',
        shortDescription: 'Tender, juicy Scotch Fillet with natural marbling for maximum steak flavour.',
        fullDescription: 'Hand-selected Australian beef scotch fillet, trimmed to butcher standards. Exceptional tenderness and buttery richness.',
        defaultPrice: '44.90',
        weightOptions: [
          { weight: '500g (2 steaks)', pricePlaceholder: '44.90', serves: '2-3 people' },
          { weight: '1kg (4 steaks)', pricePlaceholder: '86.50', serves: '4-6 people' },
        ],
        stockStatus: 'In Stock',
        originPlaceholder: '[INSERT VERIFIED COUNTRY OF ORIGIN - E.G. 100% AUSTRALIAN BEEF]',
        allergensPlaceholder: 'Nil declared allergens. Pure 100% beef.',
        cutInformation: 'Cube roll primal cut, trimmed fat cover 6mm.',
        storageInstructions: 'Refrigerate immediately between 0°C and 4°C. Freeze if unused within 4 days.',
        cookingSuggestions: 'Bring to room temperature. Sear on high cast-iron skillet for 3 mins each side with butter.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
      },
      selectedWeight: '500g (2 steaks)',
      quantity: 1,
      pricePerUnit: '44.90',
    },
  ]);

  const [headerSearchQuery, setHeaderSearchQuery] = useState('');

  // Navigation Handlers
  const handleNavigate = (view: string, categoryId?: string) => {
    if (view === 'category' && categoryId) {
      setSelectedCategory(categoryId);
      setCurrentView('shop');
    } else {
      setCurrentView(view);
      if (view === 'shop') {
        setSelectedCategory(categoryId || 'all');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Operations
  const handleAddToCart = (product: Product, weight: string, quantity: number) => {
    const selectedOption = product.weightOptions.find((w) => w.weight === weight) || product.weightOptions[0];
    const unitPrice = selectedOption.pricePlaceholder;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prev,
        {
          product,
          selectedWeight: weight,
          quantity,
          pricePerUnit: unitPrice,
        },
      ];
    });

    setCartOpen(true);
  };

  const handleUpdateCartQuantity = (index: number, newQty: number) => {
    setCartItems((prev) => {
      const updated = [...prev];
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenCompliance = (sectionId: string = 'delivery-info') => {
    setComplianceInitialSection(sectionId);
    setComplianceModalOpen(true);
  };

  const handleHeaderSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (headerSearchQuery.trim()) {
      setSearchModalOpen(false);
      setCurrentView('shop');
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Structured Data Schema for Google Indexing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ButcherShop',
    name: BUSINESS_CONFIG.businessName,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    description: 'Online beef and fresh meat delivery service in Australia. Buy premium beef cuts, steaks, chicken, pork, lamb, and family packs.',
    telephone: BUSINESS_CONFIG.phone,
    email: BUSINESS_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU',
      addressRegion: 'Australia',
      streetAddress: '[BUSINESS ADDRESS]',
    },
    currenciesAccepted: 'AUD',
    priceRange: '$$',
    paymentAccepted: 'Credit Card, Debit Card, Apple Pay, Google Pay, Cryptocurrency',
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#151515] flex flex-col selection:bg-[#7A1F2B] selection:text-white">
      {/* Sitewide JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Global Header with Sticky Mega-Menu & Banner */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAccount={() => setAccountModalOpen(true)}
        onOpenCompliance={handleOpenCompliance}
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onShopBeef={() => handleNavigate('category', 'beef')}
              onExploreMeatPacks={() => handleNavigate('category', 'packs')}
              onViewAll={() => handleNavigate('shop')}
              onWholesale={() => handleNavigate('wholesale')}
              onOpenCompliance={handleOpenCompliance}
            />

            {/* 2. Shop by Category Grid */}
            <CategoryGrid
              onSelectCategory={(catId) => handleNavigate('category', catId)}
            />

            {/* 3. Featured Meat Cuts */}
            <FeaturedProducts
              onSelectProduct={(product) => setActiveProduct(product)}
              onAddToCart={handleAddToCart}
              onOpenCompliance={handleOpenCompliance}
            />

            {/* 4. Why Choose Us & 5. How It Works (Static background on scroll ending at "What Customers Say") */}
            <StaticParallaxContainer bgImageUrl="/why-choose-bg.webp">
              {/* 4. Why Choose Us / Trust Badges */}
              <WhyChooseUs onOpenCompliance={handleOpenCompliance} />

              {/* 5. How It Works (3-Step Ordering & Cold Chain) */}
              <HowItWorks
                onShopNow={() => handleNavigate('shop')}
                onOpenCompliance={handleOpenCompliance}
              />
            </StaticParallaxContainer>

            {/* 6. Reviews & Social Proof - "What Customers Say" (static background ends here) */}
            <ReviewSection />

            {/* 7. Blog / Recipes & Storage Guides */}
            <BlogSection onNavigate={handleNavigate} />

            {/* 8. SEO Rich Content & 9. Homepage FAQs (Static background on scroll ending at Footer) */}
            <StaticParallaxContainer
              id="seo-faq-static-parallax-container"
              bgImageUrl="/how-to-buy-beef-bg.jpg"
              altText="How to Buy Beef Online in Australia: Quality, Convenience & Cold-Chain Delivery"
            >
              {/* 8. SEO Rich Content (Buy Beef Online Australia) */}
              <SeoContentSection
                onNavigate={handleNavigate}
                onOpenCompliance={handleOpenCompliance}
              />

              {/* 9. Homepage FAQs */}
              <FaqSection onOpenCompliance={handleOpenCompliance} />
            </StaticParallaxContainer>
          </>
        )}

        {currentView === 'shop' && (
          <ShopCatalog
            initialCategory={selectedCategory}
            onSelectProduct={(product) => setActiveProduct(product)}
            onAddToCart={handleAddToCart}
            onOpenCompliance={handleOpenCompliance}
          />
        )}

        {currentView === 'wholesale' && (
          <WholesaleView onOpenCompliance={handleOpenCompliance} />
        )}

        {currentView === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenCompliance={handleOpenCompliance}
          />
        )}

        {currentView === 'contact' && (
          <ContactView
            onNavigate={handleNavigate}
            onOpenCompliance={handleOpenCompliance}
          />
        )}

        {currentView === 'blog' && (
          <div className="py-12">
            <BlogSection />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCompliance={handleOpenCompliance}
        onOpenBlueprint={() => setBlueprintModalOpen(true)}
      />

      {/* 1. Cart Drawer with Multi-step Checkout */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onOpenCompliance={handleOpenCompliance}
      />

      {/* 2. Product Detail Modal */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={handleAddToCart}
        onSelectProduct={(p) => setActiveProduct(p)}
        onOpenCompliance={handleOpenCompliance}
      />

      {/* 3. Delivery & Food Safety Compliance Hub Modal */}
      {complianceModalOpen && (
        <DeliveryComplianceModal
          initialSectionId={complianceInitialSection}
          onClose={() => setComplianceModalOpen(false)}
        />
      )}

      {/* 4. SEO & Spec Architecture Center Modal */}
      <BlueprintCenterModal
        isOpen={blueprintModalOpen}
        onClose={() => setBlueprintModalOpen(false)}
      />

      {/* 5. Quick Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 pt-20">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-stone-200 animate-fade-in text-stone-900">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-bold">Search Cuts & Meat Packs</h3>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded text-stone-400 hover:text-black"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleHeaderSearchSubmit} className="relative mb-4">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={headerSearchQuery}
                onChange={(e) => setHeaderSearchQuery(e.target.value)}
                placeholder="Search beef steaks, brisket, sausages, mince..."
                className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-xs sm:text-sm outline-none focus:ring-1 focus:ring-[#7A1F2B]"
                autoFocus
              />
            </form>

            <div className="text-xs space-y-2">
              <p className="text-stone-500 font-semibold uppercase text-[10px] tracking-wider">
                Popular Searches:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Ribeye Steak', 'Rump', 'Grass-Fed Beef Mince', 'Brisket', 'Family Meat Pack', 'BBQ Sausages'].map(
                  (term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => {
                        setHeaderSearchQuery(term);
                        setSearchModalOpen(false);
                        setCurrentView('shop');
                      }}
                      className="px-2.5 py-1 bg-stone-100 hover:bg-[#7A1F2B] hover:text-white rounded text-stone-700 transition-colors"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Customer Account Login Placeholder Modal */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 border border-stone-200 animate-fade-in text-stone-900 text-center">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3 text-stone-700">
              <User className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold mb-1">Customer Portal</h3>
            <p className="text-xs text-stone-500 mb-6">
              Access your previous meat delivery orders, invoice history, and saved Australian shipping postcodes.
            </p>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl font-mono text-xs text-stone-600 mb-6">
              [CUSTOMER ACCOUNT AUTHENTICATION / SIGN IN PORTAL]
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setAccountModalOpen(false)}
                className="w-full py-2.5 bg-[#7A1F2B] text-white font-semibold text-xs rounded-lg hover:bg-[#5F1721]"
              >
                Continue as Guest
              </button>
              <button
                type="button"
                onClick={() => {
                  setAccountModalOpen(false);
                  handleNavigate('wholesale');
                }}
                className="w-full py-2 bg-stone-100 text-stone-700 font-semibold text-xs rounded-lg hover:bg-stone-200"
              >
                Trade / Wholesale Account Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
