import { Product, BlogPost, FaqItem, CategoryInfo, TrustpilotReview } from './types';

export const BUSINESS_CONFIG = {
  businessName: 'Buy Beef Online Australia',
  registeredBusinessName: 'Matty B Farm Fencing',
  entityName: 'A.J BLANCH & M.C BLANCH',
  domain: 'buybeefonline.com.au',
  abn: '45 775 613 837',
  abnVerifiedText: 'Verified ABN: 45 775 613 837',
  abnLookupUrl: 'https://abr.business.gov.au/ABN/View?abn=45775613837',
  location: 'NSW, 2642, Australia',
  address: 'NSW, 2642, Australia',
  phone: '1300 000 632',
  email: 'orders@buybeefonline.com.au',
  whatsapp: '+61 400 000 632',
  operatingHours: 'Mon–Fri: 7:00am – 5:00pm AEST',
  minimumOrder: '80',
  freeDeliveryThreshold: '180',
  cryptoDiscount: '5',
  deliveryTimeframe: 'Cold-chain dispatch within 24–48 hours across NSW & Eastern Australia',
  originPlaceholder: '100% Australian Meat — Sourced from NSW 2642 & Pastoral Stations',
  trustpilotCategoryUrl: 'https://www.trustpilot.com/categories/meat_products',
  trustpilotScore: '4.9',
  trustpilotRatingText: 'Excellent',
  trustpilotReviewCount: '348',
};

export const ANNOUNCEMENT_SLIDES = [
  { id: 1, text: `NSW, 2642, Australia • Cold-Chain Temperature Controlled Dispatch Across Australia` },
  { id: 2, text: `Rated 4.9/5 Excellent on Trustpilot (348+ Verified Reviews)`, isTrustpilot: true },
  { id: 3, text: `Free Temperature-Controlled Delivery on Orders Over $${BUSINESS_CONFIG.freeDeliveryThreshold}` },
  { id: 4, text: `Minimum Order: $${BUSINESS_CONFIG.minimumOrder} — Packed in Insulated Cold-Chain Boxes` },
  { id: 5, text: `Save ${BUSINESS_CONFIG.cryptoDiscount}% When You Pay With Crypto — Terms Apply` },
  { id: 6, text: `Call Us: ${BUSINESS_CONFIG.phone} | Email: ${BUSINESS_CONFIG.email}` },
  { id: 7, text: `Freshness & Cold-Chain Guarantee — Dispatched from NSW, 2642` },
];

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'beef',
    name: 'Beef (Black Angus & F1 Wagyu)',
    slug: 'beef',
    image: '/hero/home2_hd.webp',
    shortDescription: 'Prime Australian Black Angus & F1 Wagyu beef in 1/4 share, 1/2 side, and full carcass options.',
    seoTitle: 'Buy Black Angus & F1 Wagyu Beef Online Australia | 1/4, 1/2 and Full Carcass Delivery',
    metaDescription: 'Order premium Australian Black Angus and F1 Wagyu beef online. Quarter (1/4), half (1/2), and full beef carcass packs delivered cold-chain fresh across Australia.',
    h1: 'Black Angus & F1 Wagyu Beef (1/4, 1/2 and Full Carcass Options)',
    introCopy: 'Explore our pasture-fed and grain-finished Australian Black Angus and F1 Wagyu beef collections. Available exclusively in artisan 1/4 carcass share, 1/2 beef side, and full whole beast options, custom broken down into table-ready steaks, roasts, ribs, and mince, vacuum-sealed, and delivered cold-chain fresh.',
    subcategories: [
      'Black Angus',
      'F1 Wagyu'
    ],
    faqSuggestions: [
      {
        question: 'What is the difference between Black Angus and F1 Wagyu?',
        answer: 'Black Angus offers robust, rich, traditional beef flavor with balanced marbling. F1 Wagyu (a first-generation cross between purebred Wagyu and Angus) delivers intense intramuscular marbling (MB 5-7+), resulting in extraordinary tenderness and buttery juiciness.'
      },
      {
        question: 'How do 1/4, 1/2, and full beef carcass orders work?',
        answer: 'Whole, half, and quarter beef orders are custom-hung, aged to peak tenderness, and artisan-butchered into table-ready steaks, roasts, ribs, and mince. Each cut is vacuum-sealed and labeled for your home freezer.'
      },
      {
        question: 'How much freezer space do I need for a 1/4 or 1/2 beef order?',
        answer: 'A 1/4 beef share (~45-55kg dressed) requires approximately 150-200 litres of freezer space (a small to medium chest freezer). A 1/2 beef side (~90-110kg) requires approximately 300-400 litres.'
      },
      {
        question: 'How is your beef packaged for transit?',
        answer: 'All beef cuts are carefully portioned and sealed in commercial food-grade barrier packaging, then placed within thermal-insulated containers with frozen gel packs designed to keep temperatures within safe food-handling limits.'
      },
      {
        question: 'Can I freeze my beef delivery immediately?',
        answer: 'Yes. Unless specified otherwise on the product pack, all fresh beef cuts arrive in airtight packaging suitable for domestic freezing at -18°C or below.'
      }
    ]
  },
  {
    id: 'chicken',
    name: 'Chicken',
    slug: 'chicken',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Fresh breast fillets, tenderloins, bone-in thighs, wings, and whole birds.',
    seoTitle: 'Buy Chicken Online Australia | Fresh Poultry Delivery',
    metaDescription: 'Order fresh Australian chicken online. Premium breast fillets, thigh cutlets, wings, and roast chicken delivered to your home or food business.',
    h1: 'Fresh Australian Poultry & Chicken Delivery',
    introCopy: 'Our poultry range features versatile cuts trimmed and ready for grilling, roasting, curries, and meal-prepping. Hand-selected for uniform sizing and premium texture, our chicken is packed in hygienic, refrigerated conditions to uphold the highest standard of Australian food safety.',
    subcategories: ['Breast Fillets', 'Thighs & Cutlets', 'Drumsticks & Wings', 'Whole Birds', 'Diced & Stir-Fry', 'Roasting Portions'],
    faqSuggestions: [
      {
        question: 'What is the recommended storage temperature for fresh chicken?',
        answer: 'Store fresh poultry in your refrigerator at or below 4°C, and prepare before the use-by date specified on your package label.'
      }
    ]
  },
  {
    id: 'fish',
    name: 'Fish and Fillets',
    slug: 'fish-and-fillets',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Skin-on salmon portions, white fish fillets, and ocean-fresh catches.',
    seoTitle: 'Buy Fresh Fish & Fillets Online Australia | Quality Seafood',
    metaDescription: 'Shop premium ocean fillets, Atlantic salmon portions, barramundi, and white fish online with temperature-controlled cold-chain delivery.',
    h1: 'Fresh Fish & Portion-Cut Fillets',
    introCopy: 'Experience pristine seafood delivered straight to your kitchen. From skin-on salmon portions rich in healthy fats to delicate white fish fillets, our seafood is handled under strict cold-chain conditions to preserve moisture and clean ocean flavour.',
    subcategories: ['Salmon Portions', 'Barramundi Fillets', 'Snapper & White Fish', 'Tuna Steaks', 'Portioned Fish Packs'],
    faqSuggestions: [
      {
        question: 'How quickly should fresh fish be consumed?',
        answer: 'We recommend consuming fresh fish within 2-3 days of delivery when stored at or below 4°C, or freezing upon receipt.'
      }
    ]
  },
  {
    id: 'pork',
    name: 'Pork',
    slug: 'pork',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Succulent pork belly, loin cutlets, crackling roasts, and ribs.',
    seoTitle: 'Buy Pork Online Australia | Premium Pork Belly, Cutlets & Roasts',
    metaDescription: 'Order premium Australian pork cuts online. Tender cutlets, crispy crackling roasts, pork belly, and ribs delivered cold-chain fresh.',
    h1: 'Australian Pork Cuts & Roasts',
    introCopy: 'From crispy-crackling roasts for Sunday lunch to slow-cooking pork belly and juicy loin cutlets, our pork selections are expertly scored, trimmed, and packed for discerning home chefs and commercial food operations.',
    subcategories: ['Pork Belly', 'Loin Chops & Cutlets', 'Pork Roasts', 'Spare Ribs', 'Pork Mince', 'Diced Pork'],
    faqSuggestions: [
      {
        question: 'How do I achieve crisp pork crackling?',
        answer: 'Unpack the roast, pat the rind thoroughly dry with paper towel, score lightly, season generously with sea salt, and roast at high heat before lowering to cook through.'
      }
    ]
  },
  {
    id: 'lamb',
    name: 'Lamb',
    slug: 'lamb',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Tender lamb cutlets, French-trimmed racks, leg roasts, and shanks.',
    seoTitle: 'Buy Australian Lamb Online | Cutlets, Roasts & Shanks Delivery',
    metaDescription: 'Order quality Australian lamb online. French-trimmed cutlets, succulent lamb shanks, butterfly legs, and family roasts delivered to your door.',
    h1: 'Premium Australian Lamb',
    introCopy: 'Celebrated worldwide for tenderness and mild, rich flavour, our lamb cuts represent the pinnacle of Australian pastoral farming. Enjoy restaurant-quality cutlets, slow-braising shanks, and trimmed boneless roasts.',
    subcategories: ['Lamb Cutlets & Racks', 'Lamb Chops', 'Leg Roasts', 'Lamb Shanks', 'Diced & Souvlaki Lamb', 'Mince'],
    faqSuggestions: [
      {
        question: 'Are your lamb roasts pre-trimmed?',
        answer: 'Yes, our butchers carefully trim excess surface fat while retaining sufficient fat cap for natural basting during roasting.'
      }
    ]
  },
  {
    id: 'seafood',
    name: 'Seafood',
    slug: 'seafood',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Wild Australian prawns, calamari, scallops, and mixed seafood.',
    seoTitle: 'Buy Seafood Online Australia | Prawns, Scallops & Calamari',
    metaDescription: 'Shop premium seafood delivered cold-chain fresh across Australia. King prawns, sea scallops, calamari, and seafood marinara mixes.',
    h1: 'Premium Australian Seafood Delivery',
    introCopy: 'Elevate your dining experience with sustainably sourced Australian and imported seafood. Ideal for weekend barbecues, seafood pastas, and celebration platters.',
    subcategories: ['Australian Prawns', 'Scallops', 'Squid & Calamari', 'Mixed Seafood Marinara', 'Oysters'],
    faqSuggestions: [
      {
        question: 'How is seafood packaged for safe temperature control?',
        answer: 'Seafood is sealed in leak-proof bags and packed with high-capacity frozen cooling gel blocks to maintain consistent cold storage throughout delivery.'
      }
    ]
  },
  {
    id: 'sausages',
    name: 'Sausages',
    slug: 'sausages',
    image: 'https://images.unsplash.com/photo-1597652758151-512918809489?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Gourmet beef, pork, and herb sausages handcrafted in natural casings.',
    seoTitle: 'Buy Artisan Sausages Online Australia | Gourmet Butcher Sausages',
    metaDescription: 'Order handcrafted butcher sausages online. Classic beef BBQ sausages, Italian pork, herb and garlic varieties made with premium meat cuts.',
    h1: 'Handcrafted Artisan Sausages',
    introCopy: 'Made with coarsely ground whole muscle cuts and balanced seasoning in natural casings. Free from artificial fillers, delivering superior sizzle and snap on the grill.',
    subcategories: ['Classic Beef BBQ', 'Gourmet Italian Pork', 'Lamb, Mint & Rosemary', 'Gluten-Free Varieties', 'Chipolatas'],
    faqSuggestions: [
      {
        question: 'Are allergen details listed on your sausage packs?',
        answer: 'Yes, full ingredient lists and common allergens (such as gluten or sulphites) are clearly printed on each physical pack label.'
      }
    ]
  },
  {
    id: 'packs',
    name: 'Meat Packs',
    slug: 'meat-packs',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Curated family value boxes, BBQ party boxes, and monthly meal prep packs.',
    seoTitle: 'Family Meat Packs & BBQ Boxes Online Australia | Value Meat Delivery',
    metaDescription: 'Save on family meat packs, weekend BBQ boxes, and freezer bundles online. Packed fresh and delivered cold-chain direct to your door.',
    h1: 'Family Meat Packs & Curated BBQ Boxes',
    introCopy: 'Our curated meat boxes combine everyday staples—mince, steaks, chicken breasts, and artisan sausages—giving busy households and entertainers maximum value, convenience, and variety.',
    subcategories: ['Family Weekday Essentials', 'Weekend BBQ Party Pack', 'Beef Lover Bundle', 'Lean Meal Prep Box', 'Steak Connoisseur Pack'],
    faqSuggestions: [
      {
        question: 'Can individual cuts in a pack be frozen separately?',
        answer: 'Yes, each cut within our meat boxes is individually vacuum-sealed or packaged for easy, modular freezer storage.'
      }
    ]
  },
  {
    id: 'pet-food',
    name: 'Pet Food',
    slug: 'pet-food',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Fresh raw pet mince, recreation marrow bones, and natural preservative-free butcher meats for pets.',
    seoTitle: 'Buy Raw Pet Food Online Australia | Fresh Butcher Meat for Pets',
    metaDescription: 'Order fresh raw pet food and marrow bones online in Australia. 100% natural raw meat minces, beef marrow bones, chicken necks, and organ treats delivered cold-chain fresh.',
    h1: 'Fresh Raw Pet Food & Butcher Bones',
    introCopy: 'Give your dogs and cats the highest standard of fresh nutrition with 100% Australian, preservative-free butcher raw meats. Ground and prepared fresh with zero artificial colours, binders, sulphur, or chemicals. From nutrient-dense raw beef mince and soft chicken necks to recreational raw marrow bones, we deliver fresh pet nourishment straight to your doorstep.',
    subcategories: [
      'Raw Beef Pet Mince',
      'Chicken Necks & Frames',
      'Raw Marrow Bones',
      'Organ & Liver Treats',
      'Bulk Pet Packs'
    ],
    faqSuggestions: [
      {
        question: 'Is your pet food raw and preservative-free?',
        answer: 'Yes! Our pet food is 100% fresh, raw Australian meat with zero preservatives, sulphites, or synthetic additives. It arrives chilled in our temperature-controlled cold-chain packaging.'
      },
      {
        question: 'Can I freeze the pet food portions upon delivery?',
        answer: 'Absolutely. All pet food is packed in convenient food-grade packaging ideal for portioning and domestic freezer storage at -18°C or below.'
      }
    ]
  },
  {
    id: 'offal',
    name: 'Beef & Meat Offal / Specialty Cuts',
    slug: 'offal-specialty-cuts',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Collagen-rich beef cheeks, gelatinous oxtail, split marrow bones, and nutrient-dense grass-fed liver.',
    seoTitle: 'Buy Beef Cheeks, Oxtail & Specialty Offal Online Australia | Butcher Offal Delivery',
    metaDescription: 'Order premium Australian beef cheeks, rich oxtail, beef marrow bones, and grass-fed liver online. Hand-trimmed specialty cuts delivered cold-chain fresh across Australia.',
    h1: 'Beef & Meat Offal / Specialty Cuts',
    introCopy: 'Prized by culinary chefs and nose-to-tail traditionalists, our specialty cuts and offal range delivers deep, unadulterated flavour, natural collagen, and unmatched nutrient density. From melt-in-the-mouth slow-braised beef cheeks and rich winter oxtail stews to split marrow bones for roasting and nutrient-dense grass-fed beef liver, our artisan butchers carefully prepare and portion each specialty selection.',
    subcategories: [
      'Beef Cheeks',
      'Oxtail',
      'Marrow Bones',
      'Grass-Fed Liver',
      'Beef Heart',
      'Kidneys',
      'Specialty Slow-Cook Cuts'
    ],
    faqSuggestions: [
      {
        question: 'How are beef cheeks best prepared?',
        answer: 'Beef cheeks are packed with connective tissue that transforms into luxurious gelatin when braised low and slow with red wine, stock, and aromatics for 3.5 to 4 hours until fork-tender.'
      },
      {
        question: 'Are your marrow bones split for roasting?',
        answer: 'Yes! We offer both center-cut rounds and canoe-cut split marrow bones ready for direct roasting with garlic and herbs, or for simmering into rich mineral broth.'
      }
    ]
  },
  {
    id: 'wholesale',
    name: 'Wholesale Meat',
    slug: 'wholesale-meat',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Commercial food service cuts, carton buys, and dedicated hospitality supply.',
    seoTitle: 'Wholesale Meat Supplier Australia | Commercial Butcher & Food Service',
    metaDescription: 'Reliable wholesale meat delivery for Australian restaurants, cafes, caterers, pubs, and food retailers. Competitive commercial rates and carton pricing.',
    h1: 'Wholesale Meat Supply for Australian Businesses',
    introCopy: 'We supply high-volume restaurants, boutique cafes, catering operations, and butcher retailers with consistent primal and sub-primal cuts, carton-buy discounts, and commercial cold-chain logistics tailored to demanding food service schedules.',
    subcategories: ['Primal Beef Cuts', 'Carton Steaks', 'Bulk Poultry', 'Commercial Mince Blends', 'Custom Portioning'],
    faqSuggestions: [
      {
        question: 'What is the minimum order for wholesale accounts?',
        answer: 'Wholesale orders have a designated carton or order value threshold (see placeholder: $[WHOLESALE MINIMUM ORDER]). Contact our commercial team for tailored account terms.'
      }
    ]
  }
];

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'beef-mince',
    name: 'Premium Beef Mince',
    category: 'packs',
    subCategory: 'Mince & Everyday Packs',
    shortDescription: 'Versatile, finely ground lean Australian beef mince ideal for bolognese, burgers, and family meals.',
    fullDescription: 'Our Premium Beef Mince is ground from quality trimmed whole-muscle cuts to achieve a balanced lean-to-fat ratio. Never loaded with excess gristle or off-cuts, this kitchen staple provides clean, rich beef flavor for cottage pies, lasagnes, meatballs, and smash burgers.',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '500g Pack', serves: '2–3 serves', pricePlaceholder: '[PRICE]' },
      { weight: '1kg Family Pack', serves: '4–6 serves', pricePlaceholder: '[PRICE]' },
      { weight: '2kg Bulk Value Pack', serves: '8–12 serves', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Freshly ground from select beef trims and chuck primal cuts.',
    storageInstructions: 'Keep refrigerated between 0°C and 4°C. Consume within 2–3 days of opening or freeze immediately at -18°C for up to 3 months.',
    cookingSuggestions: 'Brown in a pre-heated heavy-based pan without crowding to seal in natural juices.',
    allergensPlaceholder: '[NO ADDED ALLERGENS - VERIFY LOCAL COMPLIANCE STATEMENT]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Popular Everyday',
    isFeatured: true
  },
  {
    id: 'beef-rump',
    name: 'Grass-Fed Beef Rump Steak',
    category: 'packs',
    subCategory: 'Steak Packs',
    shortDescription: 'Generous, full-flavoured beef rump steak with a hearty bite and lean profile.',
    fullDescription: 'Rump steak is beloved across Australian households for its robust, classic beef profile and versatility. Great for sizzling on a smoking-hot BBQ, slicing thin for warm steak salads, or cutting into hearty skewers.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '2 x 250g Steaks (500g)', serves: '2 serves', pricePlaceholder: '[PRICE]' },
      { weight: '4 x 250g Steaks (1kg)', serves: '4 serves', pricePlaceholder: '[PRICE]' },
      { weight: 'Whole Rump Roast (approx 2kg)', serves: '8+ serves', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Primal beef rump (hindquarter cut), trimmed with an even thin fat ribbon for natural basting.',
    storageInstructions: 'Store refrigerated at or below 4°C. Remove from vacuum packaging 15 minutes prior to cooking to allow natural bloom.',
    cookingSuggestions: 'Cook on a high-heat flat top or char-grill for 3-4 minutes per side for medium-rare, then rest for 5 minutes.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% UNPROCESSED MEAT CUT]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Butcher Pick',
    isFeatured: true
  },
  {
    id: 'ribeye-steak',
    name: 'Ribeye Steak (Scotch Fillet)',
    category: 'packs',
    subCategory: 'Steak Packs',
    shortDescription: 'Juicy, rich, and naturally tender with distinct central marbling seam.',
    fullDescription: 'Often considered the king of steaks, the Scotch Fillet / Ribeye delivers exceptional tenderness and succulent moisture thanks to its natural eye of marbling. Prepared by our experienced butchers with precision portion weights.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '1 x 300g Steak', serves: '1 generous serve', pricePlaceholder: '[PRICE]' },
      { weight: '2 x 300g Steaks (600g)', serves: '2 serves', pricePlaceholder: '[PRICE]' },
      { weight: '4 x 300g Steaks (1.2kg)', serves: '4 serves', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Cut from the prime rib section between the 6th and 12th ribs.',
    storageInstructions: 'Refrigerate at 0°C to 4°C. Seal airtight if freezing.',
    cookingSuggestions: 'Season simply with coarse sea salt and cracked pepper. Sear in smoking hot cast iron with butter, garlic, and fresh rosemary.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% RAW MEAT]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Premium Cut',
    isFeatured: true
  },
  {
    id: 'beef-burger-patties',
    name: 'Beef Burger Patties',
    category: 'packs',
    subCategory: 'BBQ Packs',
    shortDescription: 'Thick, seasoned beef burger patties engineered for maximum juiciness on the grill.',
    fullDescription: 'Crafted from coarse-ground Australian beef cuts with minimal seasoning to let the pure beef flavours shine. These patties hold their structure under high grill temperatures while retaining delicious internal moisture.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '4 x 150g Patties (600g)', serves: '4 burgers', pricePlaceholder: '[PRICE]' },
      { weight: '8 x 150g Patties (1.2kg)', serves: '8 burgers', pricePlaceholder: '[PRICE]' },
      { weight: '16 x 150g Party Pack', serves: '16 burgers', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Blend of beef chuck, brisket, and flank for the optimal 80/20 lean-to-fat balance.',
    storageInstructions: 'Keep chilled below 4°C. Cook thoroughly before consumption.',
    cookingSuggestions: 'Do not press with the spatula while grilling to prevent moisture loss. Cook to an internal core temperature of 71°C.',
    allergensPlaceholder: '[VERIFY PACKAGING FOR BINDER/SEASONING ALLERGENS]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'BBQ Favourite',
    isFeatured: true
  },
  {
    id: 'beef-brisket',
    name: 'Beef Brisket (Point & Flat)',
    category: 'packs',
    subCategory: 'BBQ Packs',
    shortDescription: 'Ideal for low-and-slow smoking, Texas-style BBQ, or tender braised pot roasts.',
    fullDescription: 'The ultimate pitmaster cut. Rich in collagen and connective tissue that breaks down during slow smoking or braising into fork-tender, gelatinous goodness. Offered in trimmed half brisket or whole packer options.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: 'Half Brisket Flat (approx 1.5kg)', serves: '4–6 serves', pricePlaceholder: '[PRICE]' },
      { weight: 'Whole Cut (approx 3.0kg)', serves: '8–12 serves', pricePlaceholder: '[PRICE]' },
      { weight: 'Pitmaster Full Packer (approx 5kg)', serves: '15+ serves', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Beef breast/pectoral cut with an even 6mm fat cap left intact for thermal protection during smoking.',
    storageInstructions: 'Refrigerate under 4°C. Suitable for freezing.',
    cookingSuggestions: 'Smoke at 110°C–120°C using hardwood until reaching an internal temperature of approximately 93°C (probe tender). Rest for 1 hour minimum.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% UNPROCESSED RAW MEAT]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Low & Slow',
    isFeatured: true
  },
  {
    id: 't-bone-steak',
    name: 'T-Bone Steak',
    category: 'packs',
    subCategory: 'Steak Packs',
    shortDescription: 'The best of both worlds: tender eye fillet on one side, robust sirloin on the other.',
    fullDescription: 'Cut with the classic bone-in signature, the T-bone offers two distinct steak textures in a single cut. The bone conducts heat and imparts rich depth during grilling, making it an iconic Australian steakhouse experience at home.',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '1 x 400g Steak', serves: '1 large serve', pricePlaceholder: '[PRICE]' },
      { weight: '2 x 400g Steaks (800g)', serves: '2 serves', pricePlaceholder: '[PRICE]' },
      { weight: '4 x 400g Steaks (1.6kg)', serves: '4 serves', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Short loin cut featuring a T-shaped lumbar vertebra with striploin and tenderloin muscles.',
    storageInstructions: 'Refrigerate at 0°C to 4°C.',
    cookingSuggestions: 'Position the larger striploin side closer to direct heat, keeping the more delicate fillet on gentle heat.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% RAW MEAT]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Steakhouse Classic',
    isFeatured: true
  },
  {
    id: 'family-bbq-pack',
    name: 'Family BBQ Meat Pack',
    category: 'packs',
    subCategory: 'BBQ Beef Packs',
    shortDescription: 'A balanced selection of rump steaks, artisan sausages, burger patties, and chicken portions.',
    fullDescription: 'Take the guesswork out of weekend feeding. Our Family BBQ Box packs generous quantities of prime steaks, freshly made sausages, seasoned patties, and tender poultry. Vacuum-packed in modular portions for immediate enjoyment or easy freezing.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: 'Small Family Box (approx 2.5kg)', serves: '10–12 meals', pricePlaceholder: '[PRICE]' },
      { weight: 'Large BBQ Gathering Box (approx 5.0kg)', serves: '20+ meals', pricePlaceholder: '[PRICE]' },
      { weight: 'Entertainer Mega Pack (approx 8.0kg)', serves: '30+ meals', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Assorted beef steaks, artisan sausages, beef patties, and poultry pieces.',
    storageInstructions: 'Refrigerate immediately on arrival. Individual packs can be frozen separately.',
    cookingSuggestions: 'Bring steaks to room temperature before grilling. Cook sausages over medium indirect heat to prevent skin splitting.',
    allergensPlaceholder: '[CONTAINS SULPHITES/GLUTEN IN SAUSAGES - SEE INDIVIDUAL PACK LABELS]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Value Bundle',
    isFeatured: true
  },
  {
    id: 'beef-stir-fry',
    name: 'Beef Stir-Fry Strips',
    category: 'packs',
    subCategory: 'Everyday Packs',
    shortDescription: 'Lean, tender beef strips sliced across the grain for quick high-heat wok cooking.',
    fullDescription: 'Spend less time prepping and more time enjoying dinner. Sliced from tender beef cuts across the muscle grain, these uniform strips cook evenly in minutes, absorbing marinades and wok aromas cleanly without drying out.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '500g Tray', serves: '2–3 serves', pricePlaceholder: '[PRICE]' },
      { weight: '1kg Family Tray', serves: '4–6 serves', pricePlaceholder: '[PRICE]' },
      { weight: '2kg Meal Prep Bulk', serves: '8–12 serves', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / LOW STOCK]',
    cutInformation: 'Sliced across the grain from select rump or topside primal beef cuts.',
    storageInstructions: 'Store chilled between 0°C and 4°C. Consume within 3 days or freeze immediately.',
    cookingSuggestions: 'Flash fry in small batches in a smoking-hot wok for 60 to 90 seconds to preserve tenderness.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - UNMARINATED RAW BEEF CUT]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Quick & Healthy',
    isFeatured: true
  },
  {
    id: 'quarter-black-angus',
    name: '1/4 Black Angus Beef Share (Quarter Carcass)',
    category: 'beef',
    subCategory: 'Black Angus',
    shortDescription: 'Balanced quarter beef carcass from Australian pasture-fed Black Angus cattle: prime steaks, roasts, brisket, ribs, and lean mince.',
    fullDescription: 'Our 1/4 Black Angus Beef Share offers exceptional farm-direct value. Sourced from verified Australian Black Angus cattle, hung for 14-21 days of aging, and custom butchered into table-ready steaks (Ribeye/Scotch Fillet, Sirloin/Porterhouse, Rump, T-Bone), slow-cooking brisket, short ribs, chuck roasts, and gourmet mince. Each cut is vacuum-sealed in meal-sized portions and labeled for your home freezer.',
    image: '/hero/home2_hd.webp',
    defaultPrice: '[PRICE PLACEHOLDER / 1/4 ANGUS]',
    weightOptions: [
      { weight: 'Standard 1/4 Share (~45–55kg dressed weight)', serves: '120+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/4 ANGUS]' },
      { weight: 'Heavy 1/4 Share (~55–65kg dressed weight)', serves: '150+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/4 ANGUS]' }
    ],
    stockStatus: '[STOCK STATUS - AVAILABLE FOR CUSTOM BUTCHERY ORDER]',
    cutInformation: 'Artisan portioned from 14–21 day aged Black Angus prime cattle. Includes prime ribeye, sirloin, rump, brisket, ribs, chuck roasts, and mince.',
    storageInstructions: 'Delivered in thermal cold-chain cartons. Individual packs suitable for freezing at -18°C up to 12 months.',
    cookingSuggestions: 'Thaw individual packs slowly in refrigeration 24 hours prior to cooking to retain cellular juiciness.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% PURE AUSTRALIAN BEEF]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: '1/4 Black Angus',
    isFeatured: true
  },
  {
    id: 'half-black-angus',
    name: '1/2 Black Angus Beef Side (Half Carcass)',
    category: 'beef',
    subCategory: 'Black Angus',
    shortDescription: 'Complete half side of Australian Black Angus beef custom butchered into prime steaks, dry-aged roasts, brisket, ribs, and mince.',
    fullDescription: 'The ultimate freezer filler for large families, farm-to-table dining, and serious BBQ pitmasters. An entire half side (forequarter and hindquarter) of prime Australian Black Angus beef. Hung in cold-aging rooms for optimal tenderness, then broken down, portioned, vacuum-sealed, and labeled for seamless freezer organization.',
    image: '/hero/home_hd.webp',
    defaultPrice: '[PRICE PLACEHOLDER / 1/2 ANGUS]',
    weightOptions: [
      { weight: 'Half Side Standard (~90–110kg dressed weight)', serves: '250+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/2 ANGUS]' },
      { weight: 'Half Side Heavy (~110–130kg dressed weight)', serves: '300+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/2 ANGUS]' }
    ],
    stockStatus: '[STOCK STATUS - CUSTOM BUTCHERED TO ORDER]',
    cutInformation: 'Complete side of Black Angus beef hung in cold-aging room then cut to artisan butcher specifications.',
    storageInstructions: 'Arrives individually labeled and cryovaced in refrigerated transport cartons. Long-term freezer storage at -18°C.',
    cookingSuggestions: 'Enjoy a complete range from smoking briskets low-and-slow to rapid pan-searing of prime ribeyes.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% WHOLE BEAST CUTS]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: '1/2 Black Angus',
    isFeatured: true
  },
  {
    id: 'full-black-angus',
    name: 'Full Black Angus Beef Carcass (Whole Beast)',
    category: 'beef',
    subCategory: 'Black Angus',
    shortDescription: 'Whole carcass Australian Black Angus prime beef custom hung, dry-aged, and portioned to your butchery specifications.',
    fullDescription: 'Wholesale-rate whole beast buying direct from Australian pastoral stations. Yields 180kg–220kg of premium Black Angus cuts: Tenderloin/Eye Fillet, Scotch Fillet, Porterhouse, Rump, Brisket, Ribs, Silverside, Osso Buco, Chuck, and Premium Mince. Delivered in cold-chain temperature-controlled packaging.',
    image: '/hero/home3_hd.webp',
    defaultPrice: '[PRICE PLACEHOLDER / FULL ANGUS]',
    weightOptions: [
      { weight: 'Whole Beast (~180–220kg dressed weight)', serves: '500+ meals', pricePlaceholder: '[PRICE PLACEHOLDER / FULL ANGUS]' }
    ],
    stockStatus: '[STOCK STATUS - WHOLE BEAST RESERVE DEPOSIT]',
    cutInformation: 'Complete 100% whole steer carcass with custom primal breakdown options.',
    storageInstructions: 'Delivered in commercial temperature-controlled packaging suitable for walk-in or multi-chest freezer storage.',
    cookingSuggestions: 'Complete butcher guide provided covering optimal preparation techniques for every cut of the animal.',
    allergensPlaceholder: '[NIL ALLERGENS - 100% UNPROCESSED WHOLE CARCASS]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Full Black Angus',
    isFeatured: true
  },
  {
    id: 'quarter-f1-wagyu',
    name: '1/4 F1 Wagyu Beef Share (Quarter Carcass - Marble Score 5-7+)',
    category: 'beef',
    subCategory: 'F1 Wagyu',
    shortDescription: 'Exquisite F1 Wagyu quarter share with high intramuscular marbling (MB 5-7+). Incomparable tenderness, buttery flavor, and juiciness.',
    fullDescription: 'Sourced from prestigious Australian F1 Wagyu cattle (minimum 350-day grain fed). Exceptional marbling score (MB 5-7+). Hand-butchered into Wagyu Scotch Fillet, Wagyu Striploin, Marbled Rump, Wagyu Brisket, Wagyu Short Ribs, and Wagyu Gourmet Burger Mince. Individually vacuum-sealed for zero freezer burn.',
    image: '/hero/home2_hd.webp',
    defaultPrice: '[PRICE PLACEHOLDER / 1/4 WAGYU]',
    weightOptions: [
      { weight: 'Standard 1/4 Wagyu Share (~45–55kg dressed weight)', serves: '120+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/4 WAGYU]' },
      { weight: 'Heavy 1/4 Wagyu Share (~55–65kg dressed weight)', serves: '150+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/4 WAGYU]' }
    ],
    stockStatus: '[STOCK STATUS - LIMITED ALLOCATION / RESERVE NOW]',
    cutInformation: 'First-generation Wagyu x Black Angus cross. Premium intramuscular marbling score MB 5-7+.',
    storageInstructions: 'Chilled vacuum packs arrive in cold-chain thermal packaging. Safe freezer storage at -18°C up to 12 months.',
    cookingSuggestions: 'Wagyu fat renders at a lower melting point. Sear high and fast, then let rest to keep juices intact.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% PURE AUSTRALIAN WAGYU]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: '1/4 F1 Wagyu',
    isFeatured: true
  },
  {
    id: 'half-f1-wagyu',
    name: '1/2 F1 Wagyu Beef Side (Half Carcass - Marble Score 5-7+)',
    category: 'beef',
    subCategory: 'F1 Wagyu',
    shortDescription: 'A full half side of elite Australian F1 Wagyu beef. Melt-in-your-mouth marbling across all prime steak, roast, and slow-cook cuts.',
    fullDescription: 'The pinnacle of luxury home beef supply. An entire half carcass of F1 Wagyu beef showcasing rich intramuscular marbling (MB 5-7+). Cut by master butchers to your preferred thickness and roast sizing, labeled, and dispatched cold-chain direct to your door.',
    image: '/hero/home_hd.webp',
    defaultPrice: '[PRICE PLACEHOLDER / 1/2 WAGYU]',
    weightOptions: [
      { weight: 'Half Side Wagyu Standard (~90–110kg dressed weight)', serves: '250+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/2 WAGYU]' },
      { weight: 'Half Side Wagyu Heavy (~110–130kg dressed weight)', serves: '300+ family meals', pricePlaceholder: '[PRICE PLACEHOLDER / 1/2 WAGYU]' }
    ],
    stockStatus: '[STOCK STATUS - RESERVE DEPOSIT ALLOCATION]',
    cutInformation: 'Complete half beast of F1 Wagyu beef with full marbling certification.',
    storageInstructions: 'Individually labeled cryovac vacuum portions in heavy-duty cold-chain thermal shippers.',
    cookingSuggestions: 'Unpack steaks 20 minutes before searing. No heavy oils required due to rich Wagyu fat.',
    allergensPlaceholder: '[NIL KNOWN ALLERGENS - 100% F1 WAGYU BEEF]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: '1/2 F1 Wagyu',
    isFeatured: true
  },
  {
    id: 'full-f1-wagyu',
    name: 'Full F1 Wagyu Beef Carcass (Whole Beast - Marble Score 5-7+)',
    category: 'beef',
    subCategory: 'F1 Wagyu',
    shortDescription: 'Whole beast luxury Australian F1 Wagyu carcass (MB 5-7+). The ultimate bulk reserve for connoisseurs, catering, and serious meat lovers.',
    fullDescription: 'Maximum yield, wholesale-tier pricing on whole beast F1 Wagyu. The entire animal including premium marbled fillets, ribeyes, striploins, brisket point/flat, beef ribs, chuck, and artisan burger mince. Fully cryovac-packaged in cold-chain containers.',
    image: '/hero/home3_hd.webp',
    defaultPrice: '[PRICE PLACEHOLDER / FULL WAGYU]',
    weightOptions: [
      { weight: 'Whole Beast Wagyu (~180–220kg dressed weight)', serves: '500+ meals', pricePlaceholder: '[PRICE PLACEHOLDER / FULL WAGYU]' }
    ],
    stockStatus: '[STOCK STATUS - WHOLE BEAST WAGYU ALLOCATION]',
    cutInformation: 'Full whole carcass F1 Wagyu steer with comprehensive butcher breakdown.',
    storageInstructions: 'Delivered in commercial insulated cartons. Long-term freezer storage at -18°C.',
    cookingSuggestions: 'Dedicated butcher guide included with temperature recommendations for every cut.',
    allergensPlaceholder: '[NIL ALLERGENS - 100% UNPROCESSED WHOLE WAGYU]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Full F1 Wagyu',
    isFeatured: true
  },
  {
    id: 'pet-raw-beef-mince',
    name: 'Natural Raw Beef Pet Mince',
    category: 'pet-food',
    subCategory: 'Raw Beef Pet Mince',
    shortDescription: '100% preservative-free, chemical-free Australian raw beef pet mince freshly ground from lean trims.',
    fullDescription: 'Crafted specifically for raw-fed canine and feline health. Sourced from 100% Australian grass-fed beef trims with natural fat, sinew, and nutrient balance. Contains zero sulphur dioxide, colour enhancers, fillers, or synthetic preservatives.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '1kg Roll / Tub', serves: 'Daily pet portion', pricePlaceholder: '[PRICE]' },
      { weight: '5kg Value Box (5 x 1kg)', serves: 'Weekly pet supply', pricePlaceholder: '[PRICE]' },
      { weight: '10kg Breeder Pack (10 x 1kg)', serves: 'Fortnightly supply', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK / FRESH GROUND DAILY]',
    cutInformation: 'Freshly minced Australian beef muscle trims, rich in natural proteins and enzymes.',
    storageInstructions: 'Refrigerate below 4°C for up to 3 days, or portion and freeze at -18°C for up to 6 months.',
    cookingSuggestions: 'Serve raw in accordance with canine raw-feeding protocols. Thaw safely in the refrigerator.',
    allergensPlaceholder: '[100% NATURAL MEAT - PRESERVATIVE-FREE PET FOOD]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: '100% Natural Raw',
    isFeatured: true
  },
  {
    id: 'pet-beef-marrow-bones',
    name: 'Raw Beef Marrow Recreational Bones',
    category: 'pet-food',
    subCategory: 'Raw Marrow Bones',
    shortDescription: 'Clean-cut raw beef femur marrow bones for canine dental health, recreation, and mental enrichment.',
    fullDescription: 'Thick-walled Australian beef marrow bones machine-sawn into clean, accessible lengths. Natural raw bones provide essential bio-available calcium, minerals, and rich marrow, while cleaning plaque from teeth under human supervision.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: 'Pack of 3 Bones (~1.2kg)', serves: 'Recreational chews', pricePlaceholder: '[PRICE]' },
      { weight: 'Bulk Bag of 8 Bones (~3.2kg)', serves: 'Multi-pet value bag', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - IN STOCK]',
    cutInformation: 'Centre-cut beef femur bones containing natural nutritious bone marrow.',
    storageInstructions: 'Keep frozen at -18°C. Can be fed frozen outdoors on warm days.',
    cookingSuggestions: 'NEVER cook marrow bones. Always feed raw and supervised to prevent splintering.',
    allergensPlaceholder: '[100% NATURAL RAW BONE - PET USE ONLY]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Dental & Enrichment',
    isFeatured: true
  },
  {
    id: 'pet-chicken-necks',
    name: 'Fresh Raw Chicken Necks for Pets',
    category: 'pet-food',
    subCategory: 'Chicken Necks & Frames',
    shortDescription: 'Soft, digestible raw poultry bones rich in natural calcium and glucosamine for dogs and cats.',
    fullDescription: 'An ideal source of natural chondroitin and calcium for puppies, adult dogs, and cats. Free from artificial preservatives and chemical washes, packed fresh daily.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '[PRICE]',
    weightOptions: [
      { weight: '1kg Bag', serves: 'Daily raw feeding', pricePlaceholder: '[PRICE]' },
      { weight: '3kg Bulk Value Pack', serves: 'Multi-meal feeding', pricePlaceholder: '[PRICE]' }
    ],
    stockStatus: '[STOCK STATUS - FRESH ARRIVALS DAILY]',
    cutInformation: 'Whole fresh Australian chicken necks with soft digestible cartilage.',
    storageInstructions: 'Refrigerate below 4°C or domestic freeze at -18°C.',
    cookingSuggestions: 'Always feed raw. Cooked poultry bones can splinter and are dangerous. Feed raw only.',
    allergensPlaceholder: '[100% RAW POULTRY - PRESERVATIVE-FREE]',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Joints & Calcium',
    isFeatured: false
  },
  // Chicken
  {
    id: 'chicken-breast-fillets',
    name: 'Free-Range Chicken Breast Fillets',
    category: 'chicken',
    subCategory: 'Breast Fillets',
    shortDescription: 'Tender, skinless and boneless chicken breast fillets from Australian free-range farms.',
    fullDescription: 'Hand-trimmed free-range chicken breasts with zero hormone growth promoters. Exceptionally moist and tender, vacuum-sealed in leak-proof cold-chain pouches.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '18.50',
    weightOptions: [
      { weight: '500g Pack (~2-3 fillets)', serves: '2–3 serves', pricePlaceholder: '9.90' },
      { weight: '1kg Family Pack (~4-5 fillets)', serves: '4–6 serves', pricePlaceholder: '18.50' },
      { weight: '2kg Bulk Meal Prep Pack', serves: '8–12 serves', pricePlaceholder: '35.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Trimmed breast fillet with tenderloin intact, zero excess fat.',
    storageInstructions: 'Keep refrigerated between 0°C and 4°C. Freeze at -18°C within 3 days.',
    cookingSuggestions: 'Pan-sear on medium heat with olive oil and herbs, or poach gently for shredded salads.',
    allergensPlaceholder: '100% Australian Free-Range Chicken. Nil allergens.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Free Range',
    isFeatured: true
  },
  {
    id: 'chicken-thigh-cutlets',
    name: 'Free-Range Chicken Thigh Cutlets (Bone-In)',
    category: 'chicken',
    subCategory: 'Thighs & Cutlets',
    shortDescription: 'Juicy bone-in chicken thighs with skin on for golden, crispy roasting or grilling.',
    fullDescription: 'Bone-in thigh cutlets lock in natural juices and gelatin during slow baking, curries, or barbecue grilling. Sourced from certified Australian pasture-roaming flocks.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.90',
    weightOptions: [
      { weight: '1kg Pack (~4-5 thighs)', serves: '4 serves', pricePlaceholder: '16.90' },
      { weight: '2kg Value Pack (~8-10 thighs)', serves: '8 serves', pricePlaceholder: '32.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Bone-in, skin-on prime thigh cutlets.',
    storageInstructions: 'Keep refrigerated at 0–4°C. Suitable for freezing.',
    cookingSuggestions: 'Roast skin-side up at 200°C for 35 minutes until skin crackles.',
    allergensPlaceholder: '100% Australian Chicken. Nil allergens.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'BBQ & Roasts',
    isFeatured: false
  },
  {
    id: 'chicken-whole-roast',
    name: 'Whole Free-Range Roasting Bird (~1.8kg)',
    category: 'chicken',
    subCategory: 'Whole Birds',
    shortDescription: 'Plump, pasture-raised Australian whole roasting bird with giblets removed.',
    fullDescription: 'Ideal for Sunday family roasts, rotisserie, or smoking. Uniformly sized for even cooking, packed fresh with moisture retained.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '22.00',
    weightOptions: [
      { weight: 'Whole Bird (~1.8kg)', serves: '4–6 serves', pricePlaceholder: '22.00' },
      { weight: 'Twin Pack (2 x 1.8kg Birds)', serves: '8–12 serves', pricePlaceholder: '40.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Whole fresh bird, trussed and oven-ready.',
    storageInstructions: 'Refrigerate at 0–4°C.',
    cookingSuggestions: 'Season cavity with lemon and thyme; roast at 190°C for 75 minutes.',
    allergensPlaceholder: '100% Free-Range Poultry.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Sunday Roast',
    isFeatured: true
  },
  // Fish & Fillets
  {
    id: 'atlantic-salmon-portions',
    name: 'Atlantic Salmon Portions (Skin-On)',
    category: 'fish',
    subCategory: 'Salmon Portions',
    shortDescription: 'Pristine ocean salmon portions rich in healthy Omega-3 oils with crispy skin potential.',
    fullDescription: 'Portion-cut from ocean-farmed Atlantic salmon. Pin-bone removed and scaled, vacuum-packed fresh to preserve vibrant orange colour and rich taste.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '34.90',
    weightOptions: [
      { weight: '2 x 200g Portions (400g)', serves: '2 serves', pricePlaceholder: '18.90' },
      { weight: '4 x 200g Portions (800g)', serves: '4 serves', pricePlaceholder: '34.90' },
      { weight: 'Whole Side Fillet (~1.2kg)', serves: '6–8 serves', pricePlaceholder: '49.90' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Centre-cut salmon portions, skin-on and scaled.',
    storageInstructions: 'Keep refrigerated at 0–3°C. Consume within 2–3 days or freeze.',
    cookingSuggestions: 'Crisp skin-down in a hot skillet with olive oil for 4 mins, flip for 2 mins.',
    allergensPlaceholder: 'Contains Fish (Salmon).',
    originPlaceholder: 'Sustainably Farmed Atlantic Salmon',
    badge: 'Rich in Omega-3',
    isFeatured: true
  },
  {
    id: 'barramundi-fillets',
    name: 'Australian Barramundi Fillets',
    category: 'fish',
    subCategory: 'Barramundi Fillets',
    shortDescription: 'Sweet, buttery Australian Barramundi fillets with tender flaky flesh.',
    fullDescription: 'Iconic Australian saltwater fish known for delicate sweetness and firm white flakes. Cleanly portioned with skin on for pan-frying or oven baking.',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '38.50',
    weightOptions: [
      { weight: '2 x 200g Portions (400g)', serves: '2 serves', pricePlaceholder: '20.50' },
      { weight: '4 x 200g Portions (800g)', serves: '4 serves', pricePlaceholder: '38.50' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Saltwater barramundi fillets, boneless and scaled.',
    storageInstructions: 'Refrigerate at 0–3°C or freeze at -18°C.',
    cookingSuggestions: 'Dust skin in cornflour and sear in butter with lemon and capers.',
    allergensPlaceholder: 'Contains Fish (Barramundi).',
    originPlaceholder: 'Australian Saltwater Aquaculture',
    badge: 'Aussie Classic',
    isFeatured: false
  },
  // Pork
  {
    id: 'pork-belly-crackling',
    name: 'Australian Pork Belly (Scored for Crackling)',
    category: 'pork',
    subCategory: 'Pork Belly',
    shortDescription: 'Tender pork belly with fine fat layers and butcher-scored rind for guaranteed crackling.',
    fullDescription: 'Prepared from prime Australian pork sides. Precision machine-scored at 5mm intervals so salt and oil penetrate deeply, creating crunchy blistered crackling.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '26.50',
    weightOptions: [
      { weight: '1kg Roast Slab', serves: '3–4 serves', pricePlaceholder: '26.50' },
      { weight: '2kg Large Slab', serves: '6–8 serves', pricePlaceholder: '49.90' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Belly roast with rind on, pre-scored by butcher.',
    storageInstructions: 'Refrigerate at 0–4°C. Pat dry with paper towels prior to seasoning.',
    cookingSuggestions: 'Rub rind generously with coarse sea salt; blast at 220°C for 25 mins, then 160°C for 90 mins.',
    allergensPlaceholder: '100% Australian Pork. Nil allergens.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Crispy Crackling',
    isFeatured: true
  },
  {
    id: 'pork-loin-cutlets',
    name: 'Free-Range Pork Loin Cutlets',
    category: 'pork',
    subCategory: 'Loin Chops & Cutlets',
    shortDescription: 'Succulent French-trimmed bone-in pork loin chops with an edge ribbon of fat.',
    fullDescription: 'Cut thick to prevent drying out. Free-range grain-fed pork from regional farms, delivering clean pork sweetness on the barbecue or cast iron.',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '24.90',
    weightOptions: [
      { weight: '2 x 250g Cutlets (500g)', serves: '2 serves', pricePlaceholder: '13.50' },
      { weight: '4 x 250g Cutlets (1kg)', serves: '4 serves', pricePlaceholder: '24.90' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Loin cutlets on the rib bone, French trimmed.',
    storageInstructions: 'Keep chilled at 0–4°C.',
    cookingSuggestions: 'Sear on high heat for 4 minutes per side, then rest for 5 minutes.',
    allergensPlaceholder: '100% Australian Pork. Nil allergens.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Tender & Lean',
    isFeatured: false
  },
  // Lamb
  {
    id: 'lamb-cutlets-french',
    name: 'Pasture-Fed Lamb Cutlets (French Trimmed)',
    category: 'lamb',
    subCategory: 'Lamb Cutlets & Racks',
    shortDescription: 'The pinnacle of tender Australian lamb—sweet, tender, and meticulously trimmed.',
    fullDescription: 'Expertly prepared by our master butchers with clean bone handles. Sourced from lush pasturelands in NSW and regional Australia for unbeatable tenderness.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '48.90',
    weightOptions: [
      { weight: '6 Cutlets (~500g)', serves: '2 serves', pricePlaceholder: '25.90' },
      { weight: '12 Cutlets (~1kg)', serves: '4 serves', pricePlaceholder: '48.90' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Rib cutlets French trimmed to the eye.',
    storageInstructions: 'Refrigerate at 0–4°C. Consume within 3 days.',
    cookingSuggestions: 'Flash grill over smoking hot charcoal or pan-fry in butter and rosemary for 2 mins per side.',
    allergensPlaceholder: '100% Pasture-Fed Australian Lamb.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Butcher Premium',
    isFeatured: true
  },
  {
    id: 'lamb-shanks-slow-cook',
    name: 'Slow-Cook Lamb Shanks (Hindquarter)',
    category: 'lamb',
    subCategory: 'Lamb Shanks',
    shortDescription: 'Meaty, collagen-rich hindquarter lamb shanks ready for rich winter braises.',
    fullDescription: 'Generous hindquarter shanks trimmed of excessive external fat while keeping the connective tissues intact. Melt-in-the-mouth tenderness when slow-cooked.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '27.50',
    weightOptions: [
      { weight: '2 Shanks (~800g)', serves: '2 serves', pricePlaceholder: '27.50' },
      { weight: '4 Shanks (~1.6kg)', serves: '4 serves', pricePlaceholder: '52.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Primal hindquarter shank with marrow bone exposed.',
    storageInstructions: 'Refrigerate at 0–4°C or freeze up to 4 months.',
    cookingSuggestions: 'Braise with red wine, mirepoix, and rosemary at 150°C for 3.5 hours until falling off the bone.',
    allergensPlaceholder: '100% Australian Lamb.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Slow Cooker Pick',
    isFeatured: false
  },
  // Seafood
  {
    id: 'australian-king-prawns',
    name: 'Australian Wild-Caught King Prawns',
    category: 'seafood',
    subCategory: 'Australian Prawns',
    shortDescription: 'Jumbo wild ocean king prawns with firm, sweet meat and rich oceanic flavour.',
    fullDescription: 'Trawled from pristine Australian ocean currents and snap frozen at sea or chilled directly to preserve crunch and natural sea sweetness.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '46.00',
    weightOptions: [
      { weight: '1kg Box (Raw U10 Jumbo)', serves: '3–4 serves', pricePlaceholder: '46.00' },
      { weight: '2kg Bulk Pack', serves: '6–8 serves', pricePlaceholder: '88.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Whole shell-on raw jumbo king prawns.',
    storageInstructions: 'Store in freezer at -18°C or thaw in ice water.',
    cookingSuggestions: 'Split down the back, butter with garlic and parsley, and char on the BBQ for 3 minutes.',
    allergensPlaceholder: 'Contains Crustacea (Prawns).',
    originPlaceholder: 'Wild Caught Australian Waters',
    badge: 'Wild Ocean Caught',
    isFeatured: true
  },
  {
    id: 'tasmanian-sea-scallops',
    name: 'Tasmanian Sea Scallops (Roe-Off)',
    category: 'seafood',
    subCategory: 'Scallops',
    shortDescription: 'Plump, tender wild scallops harvested from pure cool Tasmanian coastal bays.',
    fullDescription: 'Chemical-free sea scallops with clean, translucent meat that caramelises beautifully in foaming butter without leaching water.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '48.00',
    weightOptions: [
      { weight: '500g Tub (~20-25 scallops)', serves: '2–3 serves', pricePlaceholder: '26.00' },
      { weight: '1kg Value Tub', serves: '4–6 serves', pricePlaceholder: '48.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Fresh shucked sea scallops, dry-packed with no added water or phosphates.',
    storageInstructions: 'Keep on crushed ice or below 2°C.',
    cookingSuggestions: 'High-heat sear in cast iron with butter for 90 seconds per side until golden.',
    allergensPlaceholder: 'Contains Molluscs (Scallops).',
    originPlaceholder: 'Tasmanian Australian Waters',
    badge: 'Sashimi Grade',
    isFeatured: false
  },
  // Sausages
  {
    id: 'traditional-beef-bbq-snags',
    name: 'Traditional Butcher Beef BBQ Sausages',
    category: 'sausages',
    subCategory: 'Classic Beef BBQ',
    shortDescription: 'Australian butcher sausages made with coarse-ground beef in natural hog casings.',
    fullDescription: 'The quintessential Aussie barbecue staple. Coarsely ground Australian beef trim with cracked pepper, sea salt, and minimal breadcrumb in natural casings for great snap.',
    image: 'https://images.unsplash.com/photo-1597652758151-512918809489?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.50',
    weightOptions: [
      { weight: '1kg Pack (~12 sausages)', serves: '4–6 serves', pricePlaceholder: '16.50' },
      { weight: '2kg Family BBQ Pack (~24 sausages)', serves: '8–12 serves', pricePlaceholder: '30.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Natural collagen and hog casings, linked by hand.',
    storageInstructions: 'Refrigerate at 0–4°C. Freeze within 3 days.',
    cookingSuggestions: 'Cook gently on medium grill heat, turning frequently to avoid bursting the casings.',
    allergensPlaceholder: 'Contains Gluten, Sulphites.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Aussie BBQ Staple',
    isFeatured: true
  },
  {
    id: 'gourmet-italian-pork-sausages',
    name: 'Gourmet Italian Pork & Fennel Sausages',
    category: 'sausages',
    subCategory: 'Gourmet Italian Pork',
    shortDescription: 'Rustic coarse pork sausages seasoned with whole toasted fennel seed and garlic.',
    fullDescription: 'Handcrafted artisan Italian snags. Made from prime pork shoulder and belly cuts with cracked black pepper and aromatic fennel seeds.',
    image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '18.90',
    weightOptions: [
      { weight: '1kg Pack (~10 thick snags)', serves: '4–5 serves', pricePlaceholder: '18.90' },
      { weight: '2kg Pack (~20 thick snags)', serves: '8–10 serves', pricePlaceholder: '35.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: '100% Australian pork shoulder, natural casing.',
    storageInstructions: 'Keep chilled at 0–4°C.',
    cookingSuggestions: 'Grill whole or squeeze meat out of casings for authentic pasta sauces and ragù.',
    allergensPlaceholder: 'Contains Sulphites. Gluten-Free Recipe.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Artisan Crafted',
    isFeatured: false
  },
  // Meat Packs
  {
    id: 'ultimate-family-essentials-pack',
    name: 'Ultimate Family Essentials Meat Box (~7.5kg)',
    category: 'packs',
    subCategory: 'Family Weekday Essentials',
    shortDescription: 'Curated value box of everyday Australian butcher cuts for two weeks of family meals.',
    fullDescription: 'Includes: 2kg Premium Beef Mince, 1kg Grass-Fed Rump Steaks (4 x 250g), 1.5kg Chicken Breast Fillets, 1kg Traditional Beef BBQ Sausages, and 2kg Pork Loin Chops. All cuts individually vacuum packed for modular freezer storage.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '169.00',
    weightOptions: [
      { weight: 'Standard Box (~7.5kg)', serves: '14+ family dinners', pricePlaceholder: '169.00' },
      { weight: 'Jumbo Box (~12kg)', serves: '24+ family dinners', pricePlaceholder: '249.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Multi-cut bundle, individually labelled and vacuum sealed.',
    storageInstructions: 'Keep refrigerated or freeze portions immediately at -18°C.',
    cookingSuggestions: 'Versatile weekly rotation: bolognese, steak night, schnitzels, and BBQ.',
    allergensPlaceholder: 'See individual pack labels for allergen declarations.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Best Value Pack',
    isFeatured: true
  },
  {
    id: 'aussie-weekend-bbq-pack',
    name: 'Aussie Weekend BBQ Feast Box (~6kg)',
    category: 'packs',
    subCategory: 'Weekend BBQ Party Pack',
    shortDescription: 'Everything needed to feed a hungry gathering: burgers, steaks, wings, and sausages.',
    fullDescription: 'Includes: 4 x 250g Ribeye Steaks, 8 x Handmade Beef Burger Patties, 1kg Gourmet Italian Sausages, and 2kg Chicken Wings & Drumsticks. Packed with frozen gel packs for same-day weekend grilling.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '145.00',
    weightOptions: [
      { weight: 'BBQ Party Box (~6kg)', serves: '8–12 people', pricePlaceholder: '145.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Fresh party portions trimmed for quick high-heat grilling.',
    storageInstructions: 'Chilled delivery, ready to cook.',
    cookingSuggestions: 'Fire up the barbecue to medium-high heat with direct and indirect cooking zones.',
    allergensPlaceholder: 'Contains Gluten & Sulphites in sausages/patties.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Entertainer Pick',
    isFeatured: false
  },
  // Wholesale
  {
    id: 'wholesale-whole-striploin-primal',
    name: 'Whole Black Angus Striploin Primal (Commercial Carton)',
    category: 'wholesale',
    subCategory: 'Primal Beef Cuts',
    shortDescription: 'Full vacuum-sealed primal striploin for restaurants, caterers, and steak enthusiasts.',
    fullDescription: 'Whole cryovac primal beef striploin with intact fat cap. Ideal for commercial kitchen portioning or whole slow roasting on wood-fired spits.',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '280.00',
    weightOptions: [
      { weight: 'Whole Striploin (~6.5kg)', serves: 'Food service primal', pricePlaceholder: '280.00' },
      { weight: 'Carton of 2 (~13kg)', serves: 'Commercial volume carton', pricePlaceholder: '530.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Primal whole striploin (sirloin), vacuum aged.',
    storageInstructions: 'Store sealed between 0°C and 2°C for optimal wet ageing.',
    cookingSuggestions: 'Slice with a sharp butchery knife into 250g, 300g, or 400g NY Strip steaks.',
    allergensPlaceholder: '100% Unprocessed Australian Beef.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Carton Buy Price',
    isFeatured: true
  },
  {
    id: 'wholesale-bulk-chicken-breast',
    name: 'Bulk Chicken Breast Commercial Carton (10kg)',
    category: 'wholesale',
    subCategory: 'Bulk Poultry',
    shortDescription: '10kg food-service carton of skinless chicken breast fillets for hospitality operators.',
    fullDescription: 'Double-bagged commercial carton of calibrated free-range chicken breasts. Consistent portion sizing for meal delivery companies, cafes, and catering kitchens.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '140.00',
    weightOptions: [
      { weight: '10kg Commercial Box', serves: 'Commercial food service', pricePlaceholder: '140.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Bulk calibrated fillets, double food-grade liner.',
    storageInstructions: 'Refrigerate at 0–2°C.',
    cookingSuggestions: 'Batch sous-vide, grill, or slice for commercial meal prep.',
    allergensPlaceholder: '100% Australian Chicken.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Commercial Rate',
    isFeatured: false
  },
  // Beef & Meat Offal / Specialty Cuts (Cheeks, Oxtail, Marrow, Liver)
  {
    id: 'beef-cheeks-slow-cook',
    name: 'Australian Black Angus Beef Cheeks',
    category: 'offal',
    subCategory: 'Cheeks',
    shortDescription: 'Tender, collagen-dense Black Angus beef cheeks, trimmed and ready for slow braising.',
    fullDescription: 'Prized by high-end bistros and home chefs. Rich in natural gelatin and connective tissue that yields melting tenderness when braised low and slow with aromatics, garlic, and red wine.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '26.90',
    weightOptions: [
      { weight: '500g (~2 cheeks)', serves: '2 serves', pricePlaceholder: '14.50' },
      { weight: '1kg (~4 cheeks)', serves: '4-5 serves', pricePlaceholder: '26.90' },
      { weight: '2kg Bulk Pack', serves: '8-10 serves', pricePlaceholder: '51.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Trimmed ox cheek, silver skin cleaned, vacuum-sealed.',
    storageInstructions: 'Refrigerate at 0–4°C or freeze up to 6 months.',
    cookingSuggestions: 'Brown in a heavy Dutch oven, then slow braise for 3.5 hours at 150°C with red wine, beef stock, and thyme.',
    allergensPlaceholder: '100% Australian Beef. Nil declared allergens.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Slow-Cook Master',
    isFeatured: true
  },
  {
    id: 'pasture-fed-oxtail',
    name: 'Premium Australian Beef Oxtail',
    category: 'offal',
    subCategory: 'Oxtail',
    shortDescription: 'Meaty, cross-cut beef oxtail sections for deeply rich stews, soups, and ragùs.',
    fullDescription: 'Hand-jointed by our butchers into uniform pieces. The center bone and rich marrow infuse cooking liquids with incredible depth and body. The holy grail of cold-weather slow cooking.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '29.90',
    weightOptions: [
      { weight: '1kg Cut Pieces', serves: '3-4 serves', pricePlaceholder: '29.90' },
      { weight: '2kg Family Stew Pack', serves: '6-8 serves', pricePlaceholder: '57.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Cross-cut oxtail sections, excess exterior fat trimmed.',
    storageInstructions: 'Refrigerate at 0–4°C.',
    cookingSuggestions: 'Dust in seasoned flour, sear thoroughly, and simmer gently in a rich tomato and red wine broth for 4 hours.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Rich & Gelatinous',
    isFeatured: true
  },
  {
    id: 'beef-marrow-bones-canoe',
    name: 'Artisan Canoe-Cut Beef Marrow Bones',
    category: 'offal',
    subCategory: 'Marrow',
    shortDescription: 'Lengthwise split beef femur bones exposing pure, rich culinary bone marrow.',
    fullDescription: 'Lengthwise split (canoe cut) by our master butchers for effortless restaurant-style oven roasting or making rich nutrient-packed bone broth.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.50',
    weightOptions: [
      { weight: '2 Split Bones (~700g)', serves: '2 serves', pricePlaceholder: '16.50' },
      { weight: '4 Split Bones (~1.4kg)', serves: '4 serves', pricePlaceholder: '31.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Canoe split femur bones, washed and ready to roast.',
    storageInstructions: 'Keep chilled at 0–4°C or freeze for up to 6 months.',
    cookingSuggestions: 'Roast at 220°C for 18–20 minutes until golden and bubbling. Serve with parsley salad and toasted sourdough.',
    allergensPlaceholder: '100% Australian Beef Marrow Bones.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Steakhouse Classic',
    isFeatured: false
  },
  {
    id: 'grass-fed-beef-liver',
    name: 'Pasture-Raised Grass-Fed Beef Liver',
    category: 'offal',
    subCategory: 'Liver',
    shortDescription: 'Thinly sliced, ultra-fresh Australian beef liver packed with bioavailable vitamins and iron.',
    fullDescription: 'The original nutrient superfood. Sourced from 100% grass-fed cattle, portioned thinly for quick searing with sweet caramelized onions and bacon.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '12.90',
    weightOptions: [
      { weight: '500g Thin Slices', serves: '2-3 serves', pricePlaceholder: '12.90' },
      { weight: '1kg Pack', serves: '4-6 serves', pricePlaceholder: '24.00' }
    ],
    stockStatus: 'In Stock',
    cutInformation: 'Membrane-stripped and thinly sliced across the grain.',
    storageInstructions: 'Refrigerate at 0–4°C and cook within 2 days, or freeze immediately.',
    cookingSuggestions: 'Flash fry for 90 seconds per side in hot butter. Do not overcook—best enjoyed medium to keep it tender.',
    allergensPlaceholder: '100% Pure Australian Beef Liver.',
    originPlaceholder: BUSINESS_CONFIG.originPlaceholder,
    badge: 'Superfood Nutrition',
    isFeatured: false
  }
];

// Curated 8 Featured Products specifically highlighting Australian Beef (Carcass Shares & Prime Cuts)
export const FEATURED_PRODUCTS: Product[] = [
  ALL_PRODUCTS.find((p) => p.id === 'quarter-black-angus')!,
  ALL_PRODUCTS.find((p) => p.id === 'half-black-angus')!,
  ALL_PRODUCTS.find((p) => p.id === 'quarter-f1-wagyu')!,
  ALL_PRODUCTS.find((p) => p.id === 'half-f1-wagyu')!,
  ALL_PRODUCTS.find((p) => p.id === 'full-black-angus')!,
  ALL_PRODUCTS.find((p) => p.id === 'ribeye-steak')!,
  ALL_PRODUCTS.find((p) => p.id === 't-bone-steak')!,
  ALL_PRODUCTS.find((p) => p.id === 'beef-brisket')!,
].filter(Boolean);

export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    id: 'tp-1',
    author: 'Lachlan Campbell',
    location: 'Albury, NSW 2642',
    rating: 5,
    date: '3 days ago',
    verified: true,
    title: 'Top-tier steakhouse marbling and cold-chain perfection',
    content: 'Ordered the 1/4 Beef share and Wagyu Scotch fillets. Arrived dispatched from NSW in heavy insulated boxes with frozen ice packs still rock solid. The marbling on the ribeye was genuinely steakhouse quality. Meat cooked with incredible tenderness and clean beef flavour. Having the verified ABN on the site gave me full confidence to order a bulk quarter share.',
    productCut: '1/4 Beef Carcass Share & Wagyu Ribeye',
    helpfulCount: 24
  },
  {
    id: 'tp-2',
    author: 'Sarah Jenkins',
    location: 'Sydney, NSW',
    rating: 5,
    date: '1 week ago',
    verified: true,
    title: 'Airtight packaging, fresh meat, and super fast delivery',
    content: 'I will never buy meat from the supermarket again. The vacuum packaging is genuinely airtight with zero leakage. The grass-fed rump was remarkably tender, and my German Shepherd went crazy for the raw marrow bones. Verified ABN and local NSW dispatch makes this the most trustworthy online butcher in Australia.',
    productCut: 'Grass-Fed Beef Rump & Raw Marrow Bones',
    helpfulCount: 19
  },
  {
    id: 'tp-3',
    author: 'Marcus Thorne',
    location: 'Wagga Wagga, NSW',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    title: 'Black Angus Brisket was a pitmaster dream',
    content: 'As an avid BBQ smoker, finding a properly trimmed brisket with an even quarter-inch fat cap is rare. Arrived chilled at 2°C right on schedule. The bark and smoke ring were incredible after a 12-hour smoke. Can highly recommend to any BBQ enthusiast looking for serious Australian beef.',
    productCut: 'Whole Black Angus Beef Brisket',
    helpfulCount: 31
  },
  {
    id: 'tp-4',
    author: 'Emily Zhang',
    location: 'Melbourne, VIC',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    title: 'Exceptional cold-chain control even in 32°C heat',
    content: 'Was slightly nervous ordering fresh salmon and free-range chicken during a warm Melbourne week, but the insulated thermal liner and frozen gel packs kept everything ice-cold. Chicken breasts were so juicy and the salmon had a crispy skin that blew us away. Customer service was super responsive.',
    productCut: 'Atlantic Salmon Portions & Free-Range Chicken',
    helpfulCount: 15
  },
  {
    id: 'tp-5',
    author: 'David O\'Connor',
    location: 'Brisbane, QLD',
    rating: 5,
    date: '1 month ago',
    verified: true,
    title: 'Family meat pack is phenomenal value for money',
    content: 'The 7.5kg family pack fed our family of five for nearly three weeks. Zero gristle or water pumping in the mince, and the traditional beef BBQ sausages actually tasted like real butcher snags. Great value and will be on a recurring monthly order for sure.',
    productCut: 'Ultimate Family Essentials Meat Box',
    helpfulCount: 28
  },
  {
    id: 'tp-6',
    author: 'Jessica Miller',
    location: 'Canberra, ACT',
    rating: 5,
    date: '1 month ago',
    verified: true,
    title: 'Verified Australian butcher you can trust',
    content: 'I always check ABNs before ordering online. The verified ABN 45 775 613 837 linked directly to the Australian Business Register which gave me peace of mind. The pasture-fed French trimmed lamb cutlets and beef short ribs were magnificent. Five stars across the board.',
    productCut: 'Pasture-Fed Lamb Cutlets & Beef Short Ribs',
    helpfulCount: 22
  },
  {
    id: 'tp-7',
    author: 'Robert Hayes',
    location: 'Newcastle, NSW',
    rating: 5,
    date: '6 weeks ago',
    verified: true,
    title: 'Pure pasture-fed taste and superior portioning',
    content: 'Clean, robust beef flavour without the bland, watery taste of supermarket cuts. The butchers here clearly know their craft. Ribeye steaks were cut uniformly so they hit medium-rare together on the grill. Highly recommend to anyone who appreciates good protein.',
    productCut: 'Grass-Fed Ribeye Steak (Scotch Fillet)',
    helpfulCount: 17
  },
  {
    id: 'tp-8',
    author: 'Chloe Evans',
    location: 'Wollongong, NSW',
    rating: 5,
    date: '2 months ago',
    verified: true,
    title: 'Crackling on the pork belly was out of this world',
    content: 'The pre-scored pork belly made getting blistered crunchy crackling effortless. Followed the butcher tips included in the box and had the best Sunday roast we have made in years. Delivered right to our porch in NSW in perfect chilled condition.',
    productCut: 'Australian Pork Belly (Scored for Crackling)',
    helpfulCount: 21
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Choose the Best Beef Cut for Every Meal',
    category: 'Buying Guides',
    slug: 'how-to-choose-the-best-beef-cut-for-every-meal',
    excerpt: 'A practical Australian guide to matching beef cuts with cooking styles—from fast pan-sears to slow weekend winter braises.',
    readingTime: '6 min read',
    image: '/hero/home.webp',
    content: [
      'Selecting the right beef cut starts with understanding the anatomy of the animal and the degree of work each muscle group performs. Muscles that do heavy work (such as the shoulder/chuck, shin, and brisket) contain high levels of connective tissue and collagen. These cuts require gentle, moist, low-temperature cooking over several hours to transform into melt-in-the-mouth tenderness.',
      'In contrast, muscles along the back and loin (such as the tenderloin, scotch fillet, and striploin) undergo little exertion. They are naturally tender and best suited to rapid, dry-heat methods including pan-searing, grilling, or high-heat broiling.',
      'For quick weeknight dinners, lean beef strips and high-quality mince offer maximum versatility and rapid cooking times. When choosing steaks, inspect for consistent thickness and natural marbling, and always allow the meat to come up to cool room temperature for 15 minutes before hitting the hot pan.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Best Steak Cuts for BBQ Season in Australia',
    category: 'BBQ & Grilling',
    slug: 'best-steak-cuts-for-bbq-season-in-australia',
    excerpt: 'Get the most out of your barbecue this summer with expert butcher tips on ribeye, rump, T-bone, and flat iron steaks.',
    readingTime: '5 min read',
    image: '/hero/home1.webp',
    content: [
      'Nothing defines an Australian weekend quite like firing up the barbecue. To achieve steakhouse-quality results at home, cut selection and heat management are paramount.',
      'Scotch Fillet (Ribeye) remains the undisputed crowd pleaser. Its internal marbling provides a built-in basting mechanism as the fat renders over direct charcoal or gas flames. For a leaner profile with maximum beefy punch, a thick-cut Rump steak delivers exceptional value and flavour.',
      'If you are entertaining guests who appreciate culinary drama, the bone-in T-bone or Tomahawk provides both visual flair and deep roasted bone notes. Always remember the golden barbecue rule: resting time is non-negotiable. Allow your steaks to rest on a warm board for at least half their cooking time before carving.'
    ]
  },
  {
    id: 'blog-3',
    title: 'How to Store Fresh Meat Safely at Home',
    category: 'Food Safety & Storage',
    slug: 'how-to-store-fresh-meat-safely-at-home',
    excerpt: 'Essential temperature controls, safe refrigeration techniques, and freezing guidelines to keep your meat delivery fresh and hygienic.',
    readingTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=800&auto=format&fit=crop',
    content: [
      'Maintaining food safety at home requires consistent temperature management in accordance with Australian food standards. When your cold-chain meat delivery arrives, inspect the insulated box and immediately transfer all meat portions into your refrigerator or freezer.',
      'Your domestic refrigerator should be verified with a thermometer to operate between 0°C and 4°C. Store fresh raw meat on the bottom shelf or in designated meat drawers to prevent any accidental dripping onto ready-to-eat foods.',
      'Vacuum-sealed cuts stay fresh longer in unopened packaging. If freezing, do so while the meat is at peak freshness. Label each pack with the freeze date. When thawing, always thaw slowly in the refrigerator rather than on the kitchen bench to avoid the food-safety temperature danger zone (5°C to 60°C).'
    ]
  },
  {
    id: 'blog-4',
    title: 'Beef Cooking Temperatures and Simple Cooking Tips',
    category: 'Cooking Tips',
    slug: 'beef-cooking-temperatures-and-simple-cooking-tips',
    excerpt: 'Master accurate internal core temperatures, probe thermometers, and the science of the Maillard reaction for perfect doneness every time.',
    readingTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop',
    content: [
      'Relying on timing alone often leads to overcooked steaks or undercooked roasts because meat density, initial temperature, and pan heat vary significantly. The single most reliable tool in any kitchen is a digital instant-read probe thermometer.',
      'Recommended internal temperatures for whole beef cuts after resting: Rare: 50°C–52°C; Medium-Rare: 54°C–57°C; Medium: 60°C–63°C; Well-Done: 70°C+. Remember that meat continues to rise 2°C–3°C during resting due to residual carryover cooking.',
      'Ground beef (such as burger patties and meatballs) should always be cooked to an internal core temperature of at least 71°C to ensure complete bacterial safety, as the grinding process disperses surface bacteria throughout the meat.'
    ]
  }
];

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: `How do I buy beef online from ${BUSINESS_CONFIG.businessName}?`,
    answer: `Purchasing beef online is straightforward. Browse our shop catalog, select your preferred cuts (such as Scotch fillet, rump, mince, or family packs), choose your desired pack weight or portion quantity, and add them to your cart. When ready, enter your delivery postcode during checkout, select your delivery window, and complete payment through our secure gateway.`
  },
  {
    question: 'What beef cuts can I order online?',
    answer: `Our online beef range features prime steaks (Ribeye/Scotch Fillet, T-Bone, Rump, Sirloin, Eye Fillet), lean mince, brisket (whole or flat), burger patties, roasts, beef ribs, stir-fry strips, soup bones, offal, and curated family BBQ boxes.`
  },
  {
    question: 'Is there a minimum order amount?',
    answer: `Yes, our minimum order value is $${BUSINESS_CONFIG.minimumOrder} to ensure efficient cold-chain packing. Orders exceeding $${BUSINESS_CONFIG.freeDeliveryThreshold} may qualify for free delivery depending on your delivery zone. Check our Delivery Information page for specific details.`
  },
  {
    question: 'Which areas do you deliver to in Australia?',
    answer: `We deliver to designated postal codes across [INSERT VERIFIED DELIVERY REGIONS / SUBURBS]. Enter your Australian postcode in our delivery checker on any product page or in your shopping cart to confirm whether temperature-controlled cold-chain delivery is available to your location.`
  },
  {
    question: 'How is meat packaged for temperature-controlled delivery?',
    answer: `All meat is portioned in hygienic, refrigerated premises, vacuum-packed or food-grade sealed to prevent leakage, and packed inside thermal-insulated liners with heavy-duty commercial gel ice packs designed to maintain safe food storage temperatures throughout the transit period.`
  },
  {
    question: 'Can I order bulk or wholesale meat for my business?',
    answer: `Yes. We cater to cafes, restaurants, pubs, clubs, caterers, meal-prep companies, and bulk buyers. Visit our Wholesale Meat page to submit a wholesale enquiry or complete an account application for commercial pricing and carton ordering.`
  },
  {
    question: 'How should I store my meat delivery once received?',
    answer: `Unpack your delivery immediately upon arrival. Place items intended for use within 2 to 3 days into your domestic refrigerator at or below 4°C. Items intended for longer storage should be placed directly into your freezer at -18°C or below in their sealed packaging.`
  },
  {
    question: 'How can I contact Australian customer support?',
    answer: `Our Australian customer care team is available during operating hours (${BUSINESS_CONFIG.operatingHours}). You can reach us by phone at ${BUSINESS_CONFIG.phone}, by email at ${BUSINESS_CONFIG.email}, or via our Contact Us page form.`
  }
];

export const WHOLESALE_FAQS: FaqItem[] = [
  {
    question: 'Who qualifies for a wholesale meat account?',
    answer: 'Wholesale pricing is available to registered Australian businesses with a valid ABN, including restaurants, pubs, catering companies, burger bars, cafes, schools, butcher shops, and institutional food service providers.'
  },
  {
    question: 'What is the wholesale minimum order quantity?',
    answer: 'Wholesale orders typically require full-carton purchases or a minimum spend of $[WHOLESALE MINIMUM ORDER]. Custom portioning and carton configurations are agreed upon during account setup.'
  },
  {
    question: 'Do you provide commercial credit terms?',
    answer: 'Initial orders are completed on a pro-forma or upfront payment basis. 7-day or 14-day commercial credit accounts are subject to application, credit checks, and trading history.'
  },
  {
    question: 'What cold-chain logistics do you use for commercial deliveries?',
    answer: 'Commercial orders are transported via certified refrigerated food transport vehicles maintaining compliant transit temperatures from depot to commercial kitchen loading docks.'
  }
];

export const COMPLIANCE_SECTIONS = [
  {
    id: 'delivery-info',
    title: '1. Delivery Information & Timelines',
    content: `All deliveries are dispatched under controlled cold-chain logistics. Standard delivery timeframes apply: [INSERT VERIFIED DELIVERY TIMEFRAME]. Orders are placed into designated delivery runs to optimize temperature preservation. Customers receive dispatch tracking notifications via SMS and email.`
  },
  {
    id: 'delivery-areas',
    title: '2. Delivery Areas & Postcode Coverage',
    content: `Delivery is currently restricted to verified Australian postcodes within [INSERT VERIFIED DELIVERY REGIONS]. We do not deliver to PO Boxes or Australia Post parcel lockers due to the perishable nature of refrigerated foodstuffs. Customers must ensure a secure, sheltered delivery location is available if Authority to Leave (ATL) is requested.`
  },
  {
    id: 'minimum-order',
    title: '3. Minimum Order Values & Delivery Fees',
    content: `A minimum order threshold of $[MINIMUM ORDER] is required on all retail orders to warrant specialized temperature-controlled insulated packaging. Free delivery is provided on orders exceeding $[FREE DELIVERY THRESHOLD] within standard metro zones. Regional surcharges or delivery fees [INSERT FEE SCHEDULE] apply where applicable.`
  },
  {
    id: 'cold-chain',
    title: '4. Cold-Chain & Packaging Framework',
    content: `Our cold-chain packing protocol utilizes high-density thermal insulated liners combined with high-grade food refrigerant gel bricks. This passive temperature control framework is designed to keep meat safely chilled (< 5°C) during transit and until delivery within designated window times. Verification of temperature upon unpacking is recommended.`
  },
  {
    id: 'returns-refunds',
    title: '5. Perishable Goods Returns & Refunds Policy',
    content: `Under the Australian Consumer Law (ACL), consumers are entitled to a replacement or refund for major failures with goods. Due to strict food health and safety regulations, we cannot accept returns of perishable meat products once delivered. If your order arrives damaged, spoiled, or compromised in transit, report the issue to [EMAIL ADDRESS] with photographic evidence within 2 hours of delivery for prompt investigation and resolution.`
  },
  {
    id: 'food-safety',
    title: '6. Food Safety & Domestic Storage Guidance',
    content: `Adhere to Australian Food Safety Standards (Standard 3.2.2). Store fresh raw meat at or below 4°C in a calibrated refrigerator. Store frozen products at or below -18°C. Keep raw meat separated from cooked and ready-to-eat foods to eliminate cross-contamination risks. Wash cutting boards and utensils with hot soapy water after handling raw meat. Cook ground beef, sausages, and poultry thoroughly before eating.`
  },
  {
    id: 'labelling-origin',
    title: '7. Country of Origin & Allergen Labelling',
    content: `All products comply with the Australian Country of Origin Labelling (CoOL) laws under the Food Standards Code. Country of origin details: [INSERT VERIFIED COUNTRY OF ORIGIN - E.G. 100% AUSTRALIAN BEEF]. Any allergen risks (e.g., gluten or sulphites in sausages, marinades, or binders) are declared explicitly on pack labels. Unprocessed primal cuts are 100% pure raw meat with no additives.`
  },
  {
    id: 'legal-disclaimer',
    title: '8. Legal & Compliance Disclaimer',
    content: `The information presented on this website does not substitute for independent legal, nutritional, or food-safety compliance advice. Before publishing live commercial terms, all policies, ABN details, delivery boundaries, and refund terms must be verified by a qualified Australian commercial solicitor and food safety officer.`
  }
];

export const SEO_METADATA_TABLE = [
  {
    page: 'Homepage',
    url: '/',
    primaryKeyword: 'Buy Beef Online Australia',
    titleTag: 'Buy Beef Online Australia | Premium Meat Delivery',
    charCount: 47,
    metaDescription: 'Buy premium Australian beef cuts, steaks, mince & family meat packs online. Cold-chain delivery, wholesale supply & trusted butcher quality delivered.',
    metaCount: 152,
    h1: 'Buy Beef Online in Australia'
  },
  {
    page: 'Shop Catalog',
    url: '/shop',
    primaryKeyword: 'Buy meat online Australia',
    titleTag: 'Shop Premium Meat Online Australia | Fresh Butcher Cuts',
    charCount: 56,
    metaDescription: 'Browse Australian beef, chicken, lamb, pork, seafood, sausages & value meat packs. Order online with cold-chain home delivery.',
    metaCount: 130,
    h1: 'Shop Fresh Meat Online'
  },
  {
    page: 'Beef Category',
    url: '/category/beef',
    primaryKeyword: 'beef cuts online',
    titleTag: 'Buy Beef Online Australia | Scotch Fillet, Rump & Brisket',
    charCount: 58,
    metaDescription: 'Order premium Australian beef online. Premium scotch fillets, rump steaks, lean mince, briskets and family packs delivered fresh.',
    metaCount: 139,
    h1: 'Buy Beef Online in Australia'
  },
  {
    page: 'Wholesale Meat',
    url: '/wholesale',
    primaryKeyword: 'wholesale meat supplier',
    titleTag: 'Wholesale Meat Supply Australia | Commercial Food Service',
    charCount: 57,
    metaDescription: 'Reliable wholesale meat supply for Australian restaurants, cafes, caterers and hospitality venues. Primal cuts, carton buys and B2B pricing.',
    metaCount: 151,
    h1: 'Wholesale Meat Supply for Australian Businesses'
  },
  {
    page: 'About Us',
    url: '/about',
    primaryKeyword: 'online butcher Australia',
    titleTag: 'About Our Australian Butcher & Meat Delivery Team',
    charCount: 50,
    metaDescription: 'Discover our dedication to quality Australian beef, artisan butchery, and cold-chain temperature-controlled meat delivery.',
    metaCount: 135,
    h1: 'About [BUSINESS NAME]'
  },
  {
    page: 'Contact Us',
    url: '/contact',
    primaryKeyword: 'meat delivery support Australia',
    titleTag: 'Contact [BUSINESS NAME] | Meat Delivery & Wholesale',
    charCount: 51,
    metaDescription: 'Need assistance with your meat delivery or wholesale enquiry? Contact our Australian team via phone, email, or online form.',
    metaCount: 136,
    h1: 'Contact [BUSINESS NAME]'
  }
];

export const BLOG_CONTENT_PLAN = [
  { id: 1, type: 'Buying Guide', title: 'How to Choose the Best Beef Cut for Every Meal', target: 'beef cuts online' },
  { id: 2, type: 'BBQ & Grilling', title: 'Best Steak Cuts for BBQ Season in Australia', target: 'steak delivery' },
  { id: 3, type: 'Food Safety', title: 'How to Store Fresh Meat Safely at Home', target: 'store fresh meat safe' },
  { id: 4, type: 'Cooking Guide', title: 'Beef Cooking Temperatures and Simple Cooking Tips', target: 'beef cooking temps' },
  { id: 5, type: 'Commercial Guide', title: 'How Restaurants Reduce Food Costs with Primal Carton Meat Buys', target: 'wholesale meat supplier' },
  { id: 6, type: 'Recipe & Prep', title: 'Smoked Texas-Style Beef Brisket on Australian Charcoal Smokers', target: 'beef brisket online' },
  { id: 7, type: 'Budget & Family', title: 'How to Stretch a 5kg Family Meat Pack Across 10 Weeknight Dinners', target: 'family meat packs' },
  { id: 8, type: 'Butcher Craft', title: 'Scotch Fillet vs Ribeye vs Porterhouse: Cut Comparison Explained', target: 'ribeye steak Australia' },
  { id: 9, type: 'Cooking Guide', title: 'Reverse Sear vs Traditional Sear: The Science of Cooking Thick Steaks', target: 'how to cook thick steak' },
  { id: 10, type: 'Safety & Storage', title: 'Freezing Meat: Does It Harm Texture and How to Defrost Properly', target: 'how to freeze meat properly' },
  { id: 11, type: 'Nutrition & Diet', title: 'Understanding Beef Marbling Scores and Fat Composition', target: 'beef marbling explained' },
  { id: 12, type: 'Recipe & Prep', title: 'Classic Australian Sunday Roast Beef with Herb Crust & Gravy', target: 'beef roast online' },
  { id: 13, type: 'Commercial Guide', title: 'Cold-Chain Delivery Standards: What Australian Food Safety Requires', target: 'cold chain food safety' },
  { id: 14, type: 'BBQ & Grilling', title: 'The Art of Smoking Beef Short Ribs: Wood Types and Cook Times', target: 'beef short ribs online' },
  { id: 15, type: 'Recipe & Prep', title: 'Homemade Smash Burgers: Selecting the Best Beef Mince Blends', target: 'beef burger patties online' },
  { id: 16, type: 'Buying Guide', title: 'Grass-Fed vs Grain-Fed Beef: Taste Profiles, Cooking Times, and Nutrition', target: 'grass fed beef Australia' },
  { id: 17, type: 'Butcher Craft', title: 'Secondary Beef Cuts: Cooking with Flank, Skirt, and Chuck', target: 'secondary beef cuts' },
  { id: 18, type: 'Commercial Guide', title: 'Opening a Food Business: Sourcing Wholesale Meat in Australia', target: 'commercial meat procurement' },
  { id: 19, type: 'Recipe & Prep', title: 'Quick 15-Minute Beef Stir-Fry Recipes with Tender Rump Strips', target: 'beef stir fry strips' },
  { id: 20, type: 'Entertaining', title: 'Planning an Aussie BBQ for 20 People: Meat Quantities & Cut Calculator', target: 'BBQ meat packs' }
];

export const PLACEHOLDERS_CHECKLIST = [
  { item: '[INSERT BUSINESS NAME]', location: 'Header, Footer, Copy, Schemas', status: 'Pending business input' },
  { item: '[INSERT DOMAIN]', location: 'Canonical tags, sitemap, OpenGraph URLs', status: 'Pending domain registration' },
  { item: '[INSERT ABN]', location: 'Footer, Wholesale Page, Tax invoice terms', status: 'Pending ABN registration verification' },
  { item: '[PHONE NUMBER]', location: 'Top slider, Contact page, Header', status: 'Pending Australian telephone line' },
  { item: '[EMAIL ADDRESS]', location: 'Top slider, Footer, Customer support', status: 'Pending domain email setup' },
  { item: '[WHATSAPP NUMBER]', location: 'Contact page (optional)', status: 'Optional - remove if not offered' },
  { item: '[BUSINESS ADDRESS]', location: 'Contact page, LocalBusiness schema', status: 'Pending physical commercial address' },
  { item: '[OPERATING HOURS]', location: 'Contact page, Support availability', status: 'Pending confirmed hours (AEST/AEDT)' },
  { item: '$[MINIMUM ORDER]', location: 'Header slider, Cart checkout warning', status: 'Pending financial threshold setup' },
  { item: '$[FREE DELIVERY THRESHOLD]', location: 'Header slider, Cart shipping bar', status: 'Pending logistics costing' },
  { item: '[CRYPTO DISCOUNT]%', location: 'Header slider, Checkout promo', status: 'Pending crypto gateway terms' },
  { item: '[INSERT VERIFIED DELIVERY TIMEFRAME]', location: 'Header slider, Product cards, Checkout', status: 'Pending courier SLA' },
  { item: '[INSERT VERIFIED DELIVERY REGIONS]', location: 'Delivery checker, Compliance policy', status: 'Pending courier postcode route table' },
  { item: 'From $[PRICE] and $[PRICE]', location: 'All product cards & variations', status: 'Pending butcher pricing catalogue' },
  { item: '[INSERT OFFICIAL TRUSTPILOT WIDGET]', location: 'Reviews section', status: 'Connect when verified Trustpilot ID provided' },
  { item: '[INSERT VERIFIED COUNTRY OF ORIGIN]', location: 'Product pages, CoOL labels', status: 'Insert verified origin per product line' },
  { item: '[STOCK STATUS - IN STOCK / LOW STOCK]', location: 'Product pages & catalog cards', status: 'Connect to live ERP/inventory system' }
];

export const KEYWORD_MAP = [
  {
    page: '/',
    targetKeyword: 'Buy Beef Online Australia',
    suggestedH1: 'Buy Beef Online in Australia: Quality, Convenience & Cold-Chain Delivery',
    searchIntent: 'Commercial & Transactional'
  },
  {
    page: '/shop',
    targetKeyword: 'Buy meat online Australia',
    suggestedH1: 'Buy Meat Online in Australia | Fresh Butcher Delivery',
    searchIntent: 'Commercial & Transactional'
  },
  {
    page: '/category/beef',
    targetKeyword: 'beef cuts online',
    suggestedH1: 'Buy Beef Online in Australia',
    searchIntent: 'High Intent Transactional'
  },
  {
    page: '/wholesale',
    targetKeyword: 'wholesale meat supplier',
    suggestedH1: 'Wholesale Meat Supply for Australian Businesses',
    searchIntent: 'B2B Commercial'
  },
  {
    page: '/about',
    targetKeyword: 'online butcher Australia',
    suggestedH1: 'About [BUSINESS NAME]',
    searchIntent: 'Navigational & Informational'
  },
  {
    page: '/contact',
    targetKeyword: 'meat delivery support Australia',
    suggestedH1: 'Contact [BUSINESS NAME]',
    searchIntent: 'Customer Support'
  },
  {
    page: '/blog/how-to-choose-best-beef-cut-every-meal',
    targetKeyword: 'best beef cuts guide',
    suggestedH1: 'How to Choose the Best Beef Cut for Every Meal',
    searchIntent: 'Informational & Culinary'
  }
];

export const XML_SITEMAP_ENTRIES = [
  { loc: 'https://[INSERT DOMAIN]/', changefreq: 'daily', priority: '1.0' },
  { loc: 'https://[INSERT DOMAIN]/shop', changefreq: 'daily', priority: '0.9' },
  { loc: 'https://[INSERT DOMAIN]/category/beef', changefreq: 'daily', priority: '0.9' },
  { loc: 'https://[INSERT DOMAIN]/category/chicken', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://[INSERT DOMAIN]/category/pork', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://[INSERT DOMAIN]/category/lamb', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://[INSERT DOMAIN]/category/seafood', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://[INSERT DOMAIN]/category/sausages', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://[INSERT DOMAIN]/category/packs', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://[INSERT DOMAIN]/wholesale', changefreq: 'weekly', priority: '0.8' },
  { loc: 'https://[INSERT DOMAIN]/about', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://[INSERT DOMAIN]/contact', changefreq: 'monthly', priority: '0.6' },
  { loc: 'https://[INSERT DOMAIN]/blog', changefreq: 'weekly', priority: '0.7' },
  { loc: 'https://[INSERT DOMAIN]/delivery-information', changefreq: 'monthly', priority: '0.5' },
  { loc: 'https://[INSERT DOMAIN]/returns-refunds', changefreq: 'monthly', priority: '0.5' }
];
