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
    image: '/categories/beef.webp',
    shortDescription: 'Prime Australian Black Angus & F1 Wagyu beef in 1/4 share, 1/2 side, and full carcass options, plus steakhouse prime cuts.',
    seoTitle: 'Buy Black Angus & F1 Wagyu Beef Online Australia | 1/4, 1/2 and Full Carcass Delivery',
    metaDescription: 'Order premium Australian Black Angus and F1 Wagyu beef online. Quarter (1/4), half (1/2), and full beef carcass packs delivered cold-chain fresh across Australia.',
    h1: 'Black Angus & F1 Wagyu Beef (1/4, 1/2, Full Carcass & Prime Cuts)',
    introCopy: 'Explore our pasture-fed and grain-finished Australian Black Angus and F1 Wagyu beef collections. Sourced directly from verified Australian pastoral stations in NSW 2642. Available in artisan 1/4 carcass shares, 1/2 beef sides, whole carcasses, dry-aged Scotch fillets, marble score 7+ Wagyu, pitmaster briskets, and everyday kitchen staples. Every cut is aged to perfection, expertly trimmed, vacuum-sealed in leak-proof packaging, and delivered in temperature-controlled cold-chain boxes.',
    subcategories: [
      'Black Angus Carcass Shares',
      'F1 Wagyu Carcass Shares',
      'Black Angus Prime Steaks',
      'F1 Wagyu Steaks & BBQ',
      'Low & Slow, Brisket & Ribs',
      'Roasts & Slow Cook',
      'Everyday Beef Mince & Strips'
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
    name: 'Chicken (Free-Range Poultry)',
    slug: 'chicken',
    image: '/categories/chicken.webp',
    shortDescription: 'Pasture-raised Australian free-range poultry in 1/4 share, 1/2 share, and full farm carton options, plus fresh breast fillets, thighs, wings, and whole birds.',
    seoTitle: 'Buy Free-Range Chicken Online Australia | 1/4, 1/2 and Full Poultry Shares Delivery',
    metaDescription: 'Order fresh Australian free-range chicken online. Quarter (1/4), half (1/2), and full poultry farm shares, breast fillets, thighs, wings, and whole birds delivered cold-chain fresh.',
    h1: 'Fresh Australian Free-Range Poultry (1/4, 1/2, Full Shares & Cuts)',
    introCopy: 'Raised ethically on open green pastures across regional NSW 2642 with generous outdoor roaming access, natural grain forage, and zero chemical washes, hormones, or antibiotics. Available in our popular bulk poultry shares: 1/4 Farm Share, 1/2 Farm Share, and Full Farm Cartons (featuring balanced allocations of whole roasting birds, breast fillets, juicy boneless thighs, party wings, drumsticks, and crumbed schnitzels), alongside individually portioned everyday staples. Vacuum-packed in leak-proof cold-chain pouches to lock in natural moisture and farm freshness.',
    subcategories: ['Free-Range Poultry Shares', 'Breast Fillets', 'Thighs & Cutlets', 'Drumsticks & Wings', 'Whole Birds', 'Diced & Stir-Fry', 'Roasting Portions'],
    faqSuggestions: [
      {
        question: 'What is included in a 1/4, 1/2, or Full poultry farm share?',
        answer: 'Our poultry shares feature a balanced breakdown of whole oven-ready roasting chickens, skinless breast fillets, boneless thigh fillets, party wings, drumsticks, and artisanal schnitzels—all vacuum-sealed in modular family portion packs.'
      },
      {
        question: 'What is the recommended storage temperature for fresh chicken?',
        answer: 'Store fresh poultry in your refrigerator at or below 4°C, and prepare before the use-by date specified on your package label or freeze immediately at -18°C.'
      }
    ]
  },
  {
    id: 'fish',
    name: 'Fish and Fillets',
    slug: 'fish-and-fillets',
    image: '/categories/fish.webp',
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
    name: 'Pork (Australian Farm-Raised)',
    slug: 'pork',
    image: '/categories/pork.webp',
    shortDescription: 'Prime Australian farm-raised pork in 1/4 share, 1/2 side, and full carcass options, plus crackling pork belly, loin cutlets, and ribs.',
    seoTitle: 'Buy Australian Pork Online | 1/4, 1/2 and Full Pork Carcass Delivery',
    metaDescription: 'Order premium Australian farm-raised pork online. Quarter (1/4), half (1/2), and full pork carcass packs, crackling belly, and cutlets delivered cold-chain fresh.',
    h1: 'Australian Farm-Raised Pork (1/4, 1/2, Full Carcass & Prime Cuts)',
    introCopy: 'Sourced from verified Australian pig farms in the NSW Riverina Basin. Grown with high-welfare standards, natural grain diets, and zero hormone growth promoters. Available in economical 1/4 pork shares, complete 1/2 sides, full carcasses (whole pig for master butchering or festive whole spit roasting), plus restaurant-grade scored crackling bellies, thick-cut loin chops, and St. Louis spare ribs. Every cut is expertly trimmed, scored, vacuum-sealed in barrier film, and delivered in refrigerated cold-chain boxes.',
    subcategories: ['Pork Carcass Shares', 'Pork Belly', 'Loin Chops & Cutlets', 'Pork Roasts', 'Spare Ribs', 'Pork Mince', 'Diced Pork'],
    faqSuggestions: [
      {
        question: 'How do 1/4, 1/2, and full pork carcass orders work?',
        answer: 'Whole, half, and quarter pork orders are custom-broken down into table-ready cuts: scored crackling belly slabs, thick loin cutlets, rolled shoulder roasts, St. Louis ribs, leg roasts, and lean mince. Each portion is individually vacuum-sealed and labeled.'
      },
      {
        question: 'Can I order a whole pig for spit roasting?',
        answer: 'Yes! We supply both fully portioned and vacuum-sealed carcasses for home freezers as well as whole dressed pigs cleaned, prepped, and trussed ready for traditional charcoal spit roasting.'
      },
      {
        question: 'How do I achieve crisp pork crackling?',
        answer: 'Unpack the roast, pat the rind thoroughly dry with paper towel, score lightly, season generously with sea salt, and roast at high heat (220°C) before lowering to cook through.'
      }
    ]
  },
  {
    id: 'lamb',
    name: 'Lamb (Pasture-Fed Prime)',
    slug: 'lamb',
    image: '/categories/lamb.webp',
    shortDescription: 'Pasture-fed Australian lamb in 1/4 share, 1/2 side, and full carcass options, plus French-trimmed cutlets, leg roasts, and shanks.',
    seoTitle: 'Buy Pasture-Fed Australian Lamb Online | 1/4, 1/2 and Full Carcass Delivery',
    metaDescription: 'Order premium Australian pasture-fed lamb online. Quarter (1/4), half (1/2), and full lamb carcass packs, French-trimmed cutlets, and roasts delivered cold-chain fresh.',
    h1: 'Pasture-Fed Australian Lamb (1/4, 1/2, Full Carcass & Cuts)',
    introCopy: 'Celebrated worldwide for sweetness, tenderness, and clean natural flavor, our pasture-fed lamb cuts represent the pinnacle of Australian pastoral farming in NSW 2642. Sourced directly from local graziers and custom butchered to your exact requirements. Choose from convenient 1/4 lamb shares, traditional 1/2 sides, whole lamb carcasses (for home freezers or whole spit roasting), gourmet French-trimmed cutlets, slow-braising shanks, and trimmed boneless roasts. Every order is expertly portioned, vacuum-sealed in leak-proof cryovac barrier pouches, and delivered cold-chain fresh.',
    subcategories: ['Lamb Carcass Shares', 'Lamb Cutlets & Racks', 'Lamb Chops', 'Leg Roasts', 'Lamb Shanks', 'Diced & Souvlaki Lamb', 'Mince'],
    faqSuggestions: [
      {
        question: 'What cuts come in a 1/4 or 1/2 lamb order?',
        answer: 'A half lamb side provides a full 8-bone French-trimmed rack or cutlets, sweet loin chops, chump steaks, whole leg roast (bone-in or butterflied), shoulder roast, 2 shanks, ribs, and lean mince. A 1/4 lamb provides a balanced proportional selection.'
      },
      {
        question: 'Are whole lambs available for spit roasts?',
        answer: 'Yes! We supply whole dressed Australian lambs selected for optimal fat-to-meat ratio, dressed and trussed for charcoal spit roasts, or fully portioned and cryovaced for your home freezer.'
      },
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
    image: '/categories/seafood.webp',
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
    image: '/categories/sausages.webp',
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
    image: '/categories/packs.webp',
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
    image: '/categories/pet-food.webp',
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
    image: '/categories/offal.webp',
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
    image: '/categories/wholesale.webp',
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
  // ==========================================
  // BEEF CATEGORY: Black Angus & F1 Wagyu (Carcass Shares, Prime Steaks, BBQ & Staples)
  // ==========================================
  {
    id: 'quarter-black-angus',
    name: '1/4 Black Angus Beef Share (Quarter Carcass)',
    category: 'beef',
    subCategory: 'Black Angus Carcass Shares',
    shortDescription: 'Balanced quarter beef carcass from Australian pasture-fed Black Angus cattle: prime steaks, roasts, brisket, ribs, and lean mince.',
    fullDescription: 'Our 1/4 Black Angus Beef Share offers exceptional farm-direct value. Sourced from verified Australian Black Angus cattle in NSW 2642, dry-aged for 14–21 days in climate-controlled lockers, and custom butchered into table-ready cuts: Scotch Fillet/Ribeye, Porterhouse, Rump, T-Bone, slow-cooking brisket, short ribs, chuck roasts, osso buco, and gourmet mince. Every cut is individually vacuum-sealed in heavy cryovac barrier pouches and labeled for seamless home freezer organization.',
    image: '/hero/home2_hd.webp',
    defaultPrice: '1050.00',
    weightOptions: [
      { weight: 'Standard 1/4 Share (~50kg dressed yield)', serves: '120–140 family meals', pricePlaceholder: '1050.00' },
      { weight: 'Heavy 1/4 Share (~60kg dressed yield)', serves: '150–170 family meals', pricePlaceholder: '1260.00' }
    ],
    stockStatus: 'In Stock • Custom Butchery Order',
    cutInformation: 'Artisan portioned from 14–21 day aged Black Angus prime steer. Includes prime Ribeye, Sirloin, Rump, T-Bone, Brisket, Short Ribs, Chuck Roasts, Osso Buco, and Mince.',
    storageInstructions: 'Delivered in heavy-duty thermal insulated cold-chain cartons with frozen gel blocks. Individual packs cryovaced for domestic freezing at -18°C for up to 12 months.',
    cookingSuggestions: 'Thaw individual packs slowly in refrigeration 24 hours prior to cooking to retain natural cellular moisture. Sear thick steaks high and fast; braise chuck and brisket low and slow.',
    allergensPlaceholder: '100% Pure Australian Black Angus Beef. Free from additives, preservatives, binders, and gluten. Nil known allergens.',
    originPlaceholder: '100% Australian Pasture-Fed & Grain-Finished Black Angus — Riverina Pastoral Region, NSW 2642.',
    badge: '1/4 Carcass Share',
    isFeatured: true
  },
  {
    id: 'half-black-angus',
    name: '1/2 Black Angus Beef Side (Half Carcass)',
    category: 'beef',
    subCategory: 'Black Angus Carcass Shares',
    shortDescription: 'Complete half side of Australian Black Angus beef custom butchered into prime steaks, dry-aged roasts, brisket, ribs, and mince.',
    fullDescription: 'The ultimate freezer filler for large families, homesteads, farm-to-table dining, and serious BBQ pitmasters. An entire half side (forequarter and hindquarter) of prime Australian Black Angus beef. Hung in cold-aging rooms for optimal tenderness, then broken down, portioned, vacuum-sealed, and labeled to your butchery specifications.',
    image: '/hero/home_hd.webp',
    defaultPrice: '1890.00',
    weightOptions: [
      { weight: 'Standard 1/2 Side (~100kg dressed yield)', serves: '250–280 family meals', pricePlaceholder: '1890.00' },
      { weight: 'Heavy 1/2 Side (~120kg dressed yield)', serves: '300–340 family meals', pricePlaceholder: '2280.00' }
    ],
    stockStatus: 'In Stock • Custom Butchery Order',
    cutInformation: 'Complete side of prime Australian Black Angus hung in climate-controlled aging room. Custom broken down to your steak thickness, roast sizing, and mince preferences.',
    storageInstructions: 'Packaged in modular insulated cold-chain boxes. All cuts individually labeled and cryovaced. Ideal for medium to large chest freezers (approx. 300–350L capacity).',
    cookingSuggestions: 'From smoking the entire brisket flat to flash-frying ribeyes and slow braising beef cheeks and shanks.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens. Zero additives or chemical washes.',
    originPlaceholder: '100% Australian Black Angus — Riverina & Southern Slopes NSW 2642.',
    badge: '1/2 Carcass Side',
    isFeatured: true
  },
  {
    id: 'full-black-angus',
    name: 'Full Black Angus Beef Carcass (Whole Beast)',
    category: 'beef',
    subCategory: 'Black Angus Carcass Shares',
    shortDescription: 'Whole carcass Australian Black Angus prime beef custom hung, dry-aged, and portioned to your butchery specifications.',
    fullDescription: 'Wholesale-rate whole beast buying direct from Australian pastoral stations in NSW 2642. Yields 180kg–220kg of premium Black Angus cuts: Tenderloin/Eye Fillet, Scotch Fillet, Porterhouse, Rump, Brisket, Ribs, Silverside, Osso Buco, Chuck, and Premium Mince. Delivered in cold-chain temperature-controlled packaging.',
    image: '/hero/home3_hd.webp',
    defaultPrice: '3450.00',
    weightOptions: [
      { weight: 'Whole Beast Standard (~200kg dressed yield)', serves: '500+ family meals', pricePlaceholder: '3450.00' },
      { weight: 'Whole Beast Heavy (~230kg dressed yield)', serves: '580+ family meals', pricePlaceholder: '3890.00' }
    ],
    stockStatus: 'Available for Whole Beast Reserve',
    cutInformation: 'Entire steer whole carcass aged 21 days. Full artisan breakdown yielding all prime tenderloins, ribeyes, striploins, rump, brisket, ribs, chuck, silverside, shanks, and mince.',
    storageInstructions: 'Multi-carton chilled freight delivery across Australia. Requires approximately 600–700L freezer space.',
    cookingSuggestions: 'Comprehensive master butcher preparation guide included for every cut.',
    allergensPlaceholder: '100% Australian Whole Carcass Beef. Nil allergens.',
    originPlaceholder: 'Pastoral Verified Black Angus Steer — NSW 2642.',
    badge: 'Whole Beast Reserve',
    isFeatured: true
  },
  {
    id: 'quarter-f1-wagyu',
    name: '1/4 F1 Wagyu Beef Share (Quarter Carcass - Marble Score 5-7+)',
    category: 'beef',
    subCategory: 'F1 Wagyu Carcass Shares',
    shortDescription: 'Exquisite F1 Wagyu quarter share with high intramuscular marbling (MB 5-7+). Incomparable tenderness, buttery flavor, and juiciness.',
    fullDescription: 'Sourced from prestigious Australian F1 Wagyu cattle (minimum 350-day grain fed in Riverina NSW). Exceptional marbling score (MB 5-7+). Hand-butchered into Wagyu Scotch Fillet, Wagyu Striploin, Marbled Rump, Wagyu Brisket, Wagyu Short Ribs, and Wagyu Gourmet Burger Mince. Individually vacuum-sealed in heavy puncture-resistant barrier film for zero freezer burn.',
    image: '/hero/home2_hd.webp',
    defaultPrice: '1690.00',
    weightOptions: [
      { weight: 'Standard 1/4 Wagyu Share (~50kg dressed yield)', serves: '120–140 luxury meals', pricePlaceholder: '1690.00' },
      { weight: 'Heavy 1/4 Wagyu Share (~60kg dressed yield)', serves: '150–170 luxury meals', pricePlaceholder: '1980.00' }
    ],
    stockStatus: 'Limited Allocation • In Stock',
    cutInformation: 'First-generation Wagyu x Black Angus cross (minimum 350 days grain fed). Verified Marble Score 5-7+. Hand-butchered into Wagyu Scotch Fillet, Striploin, Picanha, Marbled Brisket, Short Ribs, and Gourmet Wagyu Mince.',
    storageInstructions: 'Dispatched in temperature-controlled cold-chain shipping units. Vacuum sealed in heavy barrier film. Domestic freezer storage at -18°C.',
    cookingSuggestions: 'Wagyu fat renders at low temperatures (~25°C). Cook steaks in hot cast-iron without extra oil. Let rest thoroughly to allow juices to reabsorb.',
    allergensPlaceholder: '100% Australian F1 Wagyu Beef. Nil allergens. Zero preservatives.',
    originPlaceholder: '100% Australian F1 Wagyu (MBS 5-7+) — Sourced from Riverina NSW 2642 Pastoral Stations.',
    badge: 'MBS 5-7+ Wagyu',
    isFeatured: true
  },
  {
    id: 'half-f1-wagyu',
    name: '1/2 F1 Wagyu Beef Side (Half Carcass - Marble Score 5-7+)',
    category: 'beef',
    subCategory: 'F1 Wagyu Carcass Shares',
    shortDescription: 'A full half side of elite Australian F1 Wagyu beef. Melt-in-your-mouth marbling across all prime steak, roast, and slow-cook cuts.',
    fullDescription: 'The pinnacle of luxury home beef supply. An entire half carcass of F1 Wagyu beef showcasing rich intramuscular marbling (MB 5-7+). Cut by master butchers to your preferred thickness and roast sizing, labeled, and dispatched cold-chain direct to your door.',
    image: '/hero/home_hd.webp',
    defaultPrice: '3150.00',
    weightOptions: [
      { weight: 'Standard 1/2 Side Wagyu (~100kg dressed yield)', serves: '250–280 luxury meals', pricePlaceholder: '3150.00' },
      { weight: 'Heavy 1/2 Side Wagyu (~120kg dressed yield)', serves: '300–340 luxury meals', pricePlaceholder: '3780.00' }
    ],
    stockStatus: 'Limited Allocation • Reserve Now',
    cutInformation: 'Complete half side of elite Australian F1 Wagyu with certified high intramuscular marbling. Cut by master butchers to your custom thickness specifications.',
    storageInstructions: 'Delivered in commercial cold-chain thermal cartons with real-time temperature monitoring. Store at -18°C.',
    cookingSuggestions: 'Ideal for gourmet steak nights, smoking Wagyu briskets and beef ribs, and luxury entertaining.',
    allergensPlaceholder: '100% Certified Australian F1 Wagyu. Nil allergens.',
    originPlaceholder: 'Australian F1 Wagyu Cattle — Riverina NSW 2642.',
    badge: '1/2 Wagyu Carcass',
    isFeatured: true
  },
  {
    id: 'full-f1-wagyu',
    name: 'Full F1 Wagyu Beef Carcass (Whole Beast - Marble Score 5-7+)',
    category: 'beef',
    subCategory: 'F1 Wagyu Carcass Shares',
    shortDescription: 'Whole beast luxury Australian F1 Wagyu carcass (MB 5-7+). The ultimate bulk reserve for connoisseurs, catering, and serious meat lovers.',
    fullDescription: 'Maximum yield, wholesale-tier pricing on whole beast F1 Wagyu. The entire animal including premium marbled fillets, ribeyes, striploins, brisket point/flat, beef ribs, chuck, and artisan burger mince. Fully cryovac-packaged in cold-chain containers.',
    image: '/hero/home3_hd.webp',
    defaultPrice: '5890.00',
    weightOptions: [
      { weight: 'Whole Beast Wagyu (~200kg dressed yield)', serves: '500+ luxury meals', pricePlaceholder: '5890.00' }
    ],
    stockStatus: 'Available for Whole Beast Wagyu Reserve',
    cutInformation: 'Full whole beast carcass of F1 Wagyu. Yields full tenderloins, ribeye blocks, striploins, tri-tips, briskets, short ribs, and gourmet Wagyu burger trim.',
    storageInstructions: 'Direct refrigerated freight delivery. Store in commercial walk-in or multiple chest freezers.',
    cookingSuggestions: 'Dedicated butcher guide included with temperature recommendations for every cut.',
    allergensPlaceholder: '100% Unprocessed Whole F1 Wagyu Steer. Nil allergens.',
    originPlaceholder: 'Australian Wagyu Steer — NSW 2642.',
    badge: 'Whole Wagyu Beast',
    isFeatured: true
  },
  {
    id: 'ribeye-steak',
    name: 'Black Angus Ribeye Steak (Scotch Fillet - 21 Days Aged)',
    category: 'beef',
    subCategory: 'Black Angus Prime Steaks',
    shortDescription: 'Juicy, rich, and naturally tender with distinct central marbling seam. 21 days dry-aged.',
    fullDescription: 'Often considered the king of steaks in Australia, the Scotch Fillet / Ribeye delivers exceptional tenderness and succulent moisture thanks to its natural eye of marbling. Prepared by our experienced butchers from 21-day dry-aged Black Angus beef.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '24.50',
    weightOptions: [
      { weight: '1 x 350g Thick-Cut Steak', serves: '1 generous serve', pricePlaceholder: '24.50' },
      { weight: '2 x 350g Steaks (700g Pack)', serves: '2 serves', pricePlaceholder: '48.00' },
      { weight: '4 x 350g Steaks (1.4kg Family Pack)', serves: '4 serves', pricePlaceholder: '92.00' },
      { weight: 'Whole Ribeye Primal (~2.5kg Uncut Roast)', serves: '8–10 serves', pricePlaceholder: '160.00' }
    ],
    stockStatus: 'Fresh Cut Daily • In Stock',
    cutInformation: 'Cut from the prime rib primal (ribs 6–12). Hand-trimmed with natural eye of fat for self-basting tenderness.',
    storageInstructions: 'Keep chilled at 0°C to 4°C. Consume within 5 days in cryovac or freeze at -18°C for up to 6 months.',
    cookingSuggestions: 'Season simply with coarse sea salt and cracked black pepper. Sear in smoking-hot cast iron with butter, garlic, and fresh rosemary for 3–4 mins per side for medium-rare, then rest for 5 mins.',
    allergensPlaceholder: '100% Raw Australian Black Angus Beef. Nil allergens.',
    originPlaceholder: 'Riverina NSW 2642 Pastoral Stations.',
    badge: 'Butcher Reserve',
    isFeatured: true
  },
  {
    id: 'wagyu-scotch-fillet',
    name: 'F1 Wagyu Scotch Fillet Ribeye MBS 7+',
    category: 'beef',
    subCategory: 'F1 Wagyu Steaks & BBQ',
    shortDescription: 'Elite Australian F1 Wagyu Scotch Fillet with dense intramuscular marbling (MBS 7+). Ultra buttery.',
    fullDescription: 'First-generation Wagyu cross with intensive intramuscular marbling (MBS 7+). Sourced from long-fed cattle in NSW. Delicate web of fine fat ribbons renders during cooking to deliver unparalleled tenderness and deep umami richness.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '39.00',
    weightOptions: [
      { weight: '1 x 300g Wagyu Steak', serves: '1 luxury serve', pricePlaceholder: '39.00' },
      { weight: '2 x 300g Wagyu Steaks (600g)', serves: '2 serves', pricePlaceholder: '76.00' },
      { weight: '4 x 300g Wagyu Steaks (1.2kg)', serves: '4 serves', pricePlaceholder: '148.00' }
    ],
    stockStatus: 'In Stock • Steakhouse Grade',
    cutInformation: 'Ribeye muscle from certified F1 Wagyu (MBS 7+). Cleanly trimmed of excess exterior fat.',
    storageInstructions: 'Refrigerate at 0–3°C. Thaw vacuum pack slowly in the fridge if frozen.',
    cookingSuggestions: 'No cooking oil required. Sear in a dry screaming-hot skillet for 2 minutes per side to develop a golden caramelized crust, then rest for 6 minutes before slicing.',
    allergensPlaceholder: '100% Australian Wagyu Beef. Nil allergens.',
    originPlaceholder: 'Certified Australian F1 Wagyu (MBS 7+) — NSW 2642.',
    badge: 'Marble Score 7+',
    isFeatured: true
  },
  {
    id: 'black-angus-eye-fillet',
    name: 'Black Angus Eye Fillet Tenderloin (Centre-Cut)',
    category: 'beef',
    subCategory: 'Black Angus Prime Steaks',
    shortDescription: 'The leanest and most tender cut of beef. Hand-trimmed Chateaubriand steaks and roasts.',
    fullDescription: 'The absolute pinnacle of tenderness. Cut from the non-working tenderloin muscle, our Black Angus Eye Fillets are completely denuded of silver skin and excess fat. Offers a delicate, buttery texture that cuts effortlessly with a butter knife.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '38.00',
    weightOptions: [
      { weight: '2 x 200g Steaks (400g Pack)', serves: '2 serves', pricePlaceholder: '38.00' },
      { weight: '4 x 200g Steaks (800g Pack)', serves: '4 serves', pricePlaceholder: '74.00' },
      { weight: 'Whole Centre-Cut Chateaubriand (~1.2kg Roast)', serves: '6 serves', pricePlaceholder: '110.00' }
    ],
    stockStatus: 'In Stock • Hand-Trimmed Center Cut',
    cutInformation: 'Center-cut beef tenderloin (psoas major). 100% lean with silver skin fully removed.',
    storageInstructions: 'Keep chilled at 0–4°C. Freeze at -18°C.',
    cookingSuggestions: 'Best cooked rare to medium-rare. Pan-sear in clarified butter or roast whole as a classic Beef Wellington or Chateaubriand with red wine jus.',
    allergensPlaceholder: '100% Pure Australian Beef. Nil allergens.',
    originPlaceholder: 'Riverina NSW 2642.',
    badge: 'Ultra Tender',
    isFeatured: true
  },
  {
    id: 'wagyu-striploin-sirloin',
    name: 'F1 Wagyu Striploin / Sirloin Steak MBS 6-7+',
    category: 'beef',
    subCategory: 'F1 Wagyu Steaks & BBQ',
    shortDescription: 'Signature New York strip cut from F1 Wagyu cattle with rich intramuscular marbling (MBS 6-7+).',
    fullDescription: 'Cut from the shortloin with a thin fat strip on the edge. High marbling score MBS 6-7+ throughout the whole muscle provides a robust beefy punch paired with luxurious melt-in-the-mouth texture.',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '34.50',
    weightOptions: [
      { weight: '1 x 300g Wagyu Striploin', serves: '1 luxury serve', pricePlaceholder: '34.50' },
      { weight: '2 x 300g Wagyu Striploins (600g)', serves: '2 serves', pricePlaceholder: '67.00' },
      { weight: '4 x 300g Wagyu Striploins (1.2kg)', serves: '4 serves', pricePlaceholder: '130.00' }
    ],
    stockStatus: 'In Stock • Next Day Dispatch',
    cutInformation: 'Striploin / Porterhouse primal from Australian F1 Wagyu with certified MBS 6-7+ marbling.',
    storageInstructions: 'Refrigerate at 0°C to 4°C. Suitable for domestic freezing.',
    cookingSuggestions: 'Render the side fat strip first by holding upright in the pan with tongs, then sear both flat sides for 2.5 minutes each.',
    allergensPlaceholder: '100% Australian Wagyu Beef. Nil allergens.',
    originPlaceholder: 'Australian F1 Wagyu — NSW 2642.',
    badge: 'MBS 6-7+ Sirloin',
    isFeatured: true
  },
  {
    id: 't-bone-steak',
    name: 'Black Angus King Cut T-Bone Steak (450g)',
    category: 'beef',
    subCategory: 'Black Angus Prime Steaks',
    shortDescription: 'The best of both worlds: tender eye fillet on one side, robust sirloin on the other.',
    fullDescription: 'Cut with the classic bone-in signature, the T-bone offers two distinct steak textures in a single cut. The central T-bone conducts heat and imparts rich marrow depth during grilling, making it an iconic Australian steakhouse experience at home.',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '23.50',
    weightOptions: [
      { weight: '1 x 450g King Cut T-Bone', serves: '1 large serve', pricePlaceholder: '23.50' },
      { weight: '2 x 450g King Cut T-Bones (900g)', serves: '2 serves', pricePlaceholder: '45.00' },
      { weight: '4 x 450g King Cut T-Bones (1.8kg)', serves: '4 serves', pricePlaceholder: '88.00' }
    ],
    stockStatus: 'In Stock • Classic Aussie Cut',
    cutInformation: 'Short loin cut featuring a T-shaped lumbar vertebra with striploin and tenderloin muscles.',
    storageInstructions: 'Refrigerate at 0°C to 4°C.',
    cookingSuggestions: 'Char-grill over hot charcoal or high gas heat. Position the bone towards the hottest flame to conduct heat through the center.',
    allergensPlaceholder: '100% Australian Bone-In Beef. Nil allergens.',
    originPlaceholder: 'Pasture-Fed Black Angus — NSW 2642.',
    badge: 'Steakhouse Classic',
    isFeatured: true
  },
  {
    id: 'wagyu-tomahawk-steak',
    name: 'Giant F1 Wagyu Tomahawk Steak MBS 6+ (~1.3kg)',
    category: 'beef',
    subCategory: 'F1 Wagyu Steaks & BBQ',
    shortDescription: 'Long-bone French-trimmed Wagyu ribeye steak (MBS 6+). The ultimate visual and culinary showstopper.',
    fullDescription: 'A colossal 1.3kg bone-in ribeye with the rib bone cleaned and French-trimmed to perfection. Showcasing Marble Score 6+ Wagyu fat distribution, this cut commands the table at dinner parties, barbecues, and celebratory feasts.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '118.00',
    weightOptions: [
      { weight: '1 x 1.2kg–1.4kg French-Trimmed Tomahawk', serves: '2–3 serves (Feast)', pricePlaceholder: '118.00' },
      { weight: '2 x 1.3kg Tomahawks (2.6kg Twin Pack)', serves: '5–6 serves', pricePlaceholder: '225.00' }
    ],
    stockStatus: 'In Stock • Showstopper Cut',
    cutInformation: 'Long-bone ribeye with French-trimmed rib bone (approx. 30cm). High intramuscular marbling MBS 6+.',
    storageInstructions: 'Delivered in custom extra-long chilled packaging. Store below 4°C or freeze at -18°C.',
    cookingSuggestions: 'The ultimate reverse-sear cut. Roast in oven or indirect BBQ at 115°C until internal temp reaches 48°C, then flash-sear over open flames or a roaring cast iron for 2 mins per side.',
    allergensPlaceholder: '100% Australian F1 Wagyu. Nil allergens.',
    originPlaceholder: 'Riverina Wagyu Herd — NSW 2642.',
    badge: 'Showstopper 1.3kg',
    isFeatured: true
  },
  {
    id: 'beef-brisket',
    name: 'Black Angus Beef Brisket (Point & Flat Full Packer)',
    category: 'beef',
    subCategory: 'Low & Slow, Brisket & Ribs',
    shortDescription: 'Ideal for low-and-slow smoking, Texas-style BBQ, or tender braised pot roasts.',
    fullDescription: 'The ultimate pitmaster cut. Rich in collagen and connective tissue that breaks down during slow smoking or braising into fork-tender, gelatinous goodness. Offered in trimmed half brisket or full whole packer options with 6mm competition fat cap.',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '42.00',
    weightOptions: [
      { weight: 'Half Brisket Flat (~1.8kg Trimmed)', serves: '4–6 serves', pricePlaceholder: '42.00' },
      { weight: 'Whole Pitmaster Packer Brisket (~4.5kg - 5.0kg)', serves: '12–16 serves', pricePlaceholder: '98.00' }
    ],
    stockStatus: 'In Stock • Pitmaster 6mm Fat Cap Trim',
    cutInformation: 'Beef breast/pectoral cut with an even 6mm fat cap left intact for thermal protection during smoking.',
    storageInstructions: 'Refrigerate under 4°C. Suitable for freezing.',
    cookingSuggestions: 'Smoke at 110°C–120°C using Australian Ironbark or Oak until reaching an internal temperature of approximately 93°C–96°C (probe tender). Rest for 1 hour minimum.',
    allergensPlaceholder: '100% Raw Australian Black Angus Beef. Nil allergens.',
    originPlaceholder: 'Black Angus Beef — NSW 2642.',
    badge: 'Pitmaster Spec',
    isFeatured: true
  },
  {
    id: 'black-angus-short-ribs',
    name: 'Black Angus Beef Short Ribs (3-Bone Asado Rack)',
    category: 'beef',
    subCategory: 'Low & Slow, Brisket & Ribs',
    shortDescription: 'Thick-cut 3-bone beef short rib racks loaded with rich marbling and deep beef flavour.',
    fullDescription: 'Known as Jacob\'s Ladder or Asado ribs. Cut from the beef forequarter ribs 6–8, featuring substantial meat thickness over 3 robust bones. The extensive marbling renders into luscious gelatin during smoking or red-wine braising.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '32.00',
    weightOptions: [
      { weight: 'Flanken-Style Thin-Cut Cross Ribs (1kg Tray)', serves: '3–4 serves', pricePlaceholder: '32.00' },
      { weight: '3-Bone English-Cut Rack (~1.2kg)', serves: '2–3 serves', pricePlaceholder: '36.00' },
      { weight: '2 x 3-Bone Racks (~2.4kg Smoker Pack)', serves: '5–6 serves', pricePlaceholder: '69.00' }
    ],
    stockStatus: 'In Stock • Dense Collagen & Marbling',
    cutInformation: 'Cut from ribs 6–8 of the beef forequarter. Thick meat layer over 3 substantial bones with deep internal marbling.',
    storageInstructions: 'Refrigerate at 0°C to 4°C. Suitable for freezing.',
    cookingSuggestions: 'Smoke at 115°C for 5–6 hours until meat pulls back 1–2cm from the bone and probes like warm butter. Alternatively braise in red wine and beef stock for 3.5 hours.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens.',
    originPlaceholder: 'NSW 2642 Pastoral Stations.',
    badge: 'Smoker Essential',
    isFeatured: false
  },
  {
    id: 'black-angus-picanha-rump-cap',
    name: 'Black Angus Rump Cap (Picanha Roast & Steaks)',
    category: 'beef',
    subCategory: 'Black Angus Prime Steaks',
    shortDescription: 'Prized Brazilian barbecue cut with a thick, juicy fat cap that melts over tender rump meat.',
    fullDescription: 'The crowning glory of the beef hindquarter. Our Black Angus Rump Cap (Picanha) retains the full traditional fat cap. As it roasts or grills over embers, the fat cap bastes the tender, richly flavoured rump meat underneath.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '34.00',
    weightOptions: [
      { weight: 'Sliced Picanha Steaks (4 x 250g / 1kg Pack)', serves: '4 serves', pricePlaceholder: '34.00' },
      { weight: 'Whole Picanha Rump Cap (~1.2kg Whole Roast)', serves: '4–6 serves', pricePlaceholder: '38.00' },
      { weight: '2 x Whole Rump Caps (~2.4kg Bundle)', serves: '8–12 serves', pricePlaceholder: '72.00' }
    ],
    stockStatus: 'In Stock • Authentic Thick Fat Cap',
    cutInformation: 'The top cap of the beef rump (culotte/picanha). Prized for its buttery, rendered fat cap that bastes the meat.',
    storageInstructions: 'Refrigerate at 0°C to 4°C. Freeze at -18°C.',
    cookingSuggestions: 'Score the fat cap in a diamond pattern, season with rock salt, and roast whole or slice into C-shaped skewers for Brazilian churrasco BBQ.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens.',
    originPlaceholder: 'Riverina NSW 2642.',
    badge: 'Picanha Favourite',
    isFeatured: false
  },
  {
    id: 'beef-rump',
    name: 'Grass-Fed Black Angus Rump Steak (Centre-Cut Heart)',
    category: 'beef',
    subCategory: 'Black Angus Prime Steaks',
    shortDescription: 'Generous, full-flavoured beef rump steak with a hearty bite and lean profile.',
    fullDescription: 'Rump steak is beloved across Australian households for its robust, classic beef profile and versatility. Great for sizzling on a smoking-hot BBQ, slicing thin for warm steak salads, or cutting into hearty skewers.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.50',
    weightOptions: [
      { weight: '2 x 250g Steaks (500g)', serves: '2 serves', pricePlaceholder: '16.50' },
      { weight: '4 x 250g Steaks (1kg Family Pack)', serves: '4 serves', pricePlaceholder: '31.00' },
      { weight: 'Whole Rump Roast (~2.0kg Centre-Cut)', serves: '8+ serves', pricePlaceholder: '58.00' }
    ],
    stockStatus: 'In Stock • Everyday Aussie Classic',
    cutInformation: 'Primal beef rump (hindquarter cut), trimmed with an even thin fat ribbon for natural basting.',
    storageInstructions: 'Store refrigerated at or below 4°C. Remove from vacuum packaging 15 minutes prior to cooking to allow natural bloom.',
    cookingSuggestions: 'Cook on a high-heat flat top or char-grill for 3-4 minutes per side for medium-rare, then rest for 5 minutes.',
    allergensPlaceholder: '100% Pure Raw Beef. Nil allergens.',
    originPlaceholder: '100% Australian Pasture-Fed Beef — NSW 2642.',
    badge: 'Everyday Value',
    isFeatured: false
  },
  {
    id: 'black-angus-osso-buco',
    name: 'Black Angus Osso Buco & Beef Shin Slices (Bone Marrow)',
    category: 'beef',
    subCategory: 'Roasts & Slow Cook',
    shortDescription: 'Cross-cut beef shin steaks with nutrient-dense central marrow bone. Rich gelatin for stews.',
    fullDescription: 'A winter cooking treasure. Cross-cut from pasture-fed Black Angus beef shins. The central bone is filled with rich marrow that melts into braising sauces while the surrounding collagen transforms into unctuous, spoon-tender beef.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '15.50',
    weightOptions: [
      { weight: '2 x Thick-Cut Slices (~600g)', serves: '2 serves', pricePlaceholder: '15.50' },
      { weight: '4 x Thick-Cut Slices (~1.2kg Family Pack)', serves: '4 serves', pricePlaceholder: '29.50' },
      { weight: 'Whole Beef Shank on the Bone (~1.8kg Thor Hammer)', serves: '4–6 serves', pricePlaceholder: '42.00' }
    ],
    stockStatus: 'In Stock • Collagen & Rich Bone Marrow',
    cutInformation: 'Cross-cut beef shin containing rich marrow in the center bone and collagen-rich connective muscle tissue.',
    storageInstructions: 'Keep refrigerated at 0–4°C. Freeze at -18°C.',
    cookingSuggestions: 'Dust in seasoned flour, brown deeply on all sides, then slow braise in tomato, mirepoix vegetables, white wine, and broth for 3 hours until spoon-tender.',
    allergensPlaceholder: '100% Australian Bone-In Beef. Nil allergens.',
    originPlaceholder: 'NSW 2642 Pastoral Stations.',
    badge: 'Slow Braise',
    isFeatured: false
  },
  {
    id: 'beef-mince',
    name: 'Grass-Fed Black Angus Premium Beef Mince (90/10 Lean)',
    category: 'beef',
    subCategory: 'Everyday Beef Mince & Strips',
    shortDescription: 'Versatile, finely ground lean Australian beef mince ideal for bolognese, burgers, and family meals.',
    fullDescription: 'Our Premium Beef Mince is ground daily from quality trimmed whole-muscle chuck and topside cuts to achieve a 90/10 lean-to-fat ratio. Never loaded with excess gristle, off-cuts, water, or preservatives. Provides clean, rich beef flavor for cottage pies, lasagnes, meatballs, and tacos.',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '9.90',
    weightOptions: [
      { weight: '500g Vacuum Pack', serves: '2–3 serves', pricePlaceholder: '9.90' },
      { weight: '1kg Family Pack', serves: '4–6 serves', pricePlaceholder: '18.50' },
      { weight: '2kg Bulk Value Pack (2 x 1kg)', serves: '8–12 serves', pricePlaceholder: '35.00' }
    ],
    stockStatus: 'Freshly Ground Daily • In Stock',
    cutInformation: 'Freshly ground from select beef trims and chuck primal cuts. Strict 90/10 lean balance.',
    storageInstructions: 'Keep refrigerated between 0°C and 4°C. Consume within 2–3 days of opening or freeze immediately at -18°C for up to 6 months.',
    cookingSuggestions: 'Brown in a pre-heated heavy-based pan without crowding to seal in natural juices.',
    allergensPlaceholder: '100% Pure Australian Grass-Fed Beef. Nil allergens. Zero preservatives.',
    originPlaceholder: '100% Australian Beef — NSW 2642.',
    badge: 'Popular Staple',
    isFeatured: false
  },
  {
    id: 'beef-burger-patties',
    name: 'F1 Wagyu & Black Angus Beef Burger Patties (80/20 Blend)',
    category: 'beef',
    subCategory: 'F1 Wagyu Steaks & BBQ',
    shortDescription: 'Thick, seasoned beef burger patties engineered for maximum juiciness on the grill.',
    fullDescription: 'Crafted from coarse-ground Australian Black Angus chuck and rich Wagyu brisket trims with minimal seasoning to let pure beef flavours shine. These patties hold their structure under high grill temperatures while retaining delicious internal moisture.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.50',
    weightOptions: [
      { weight: '4 x 160g Hand-Pressed Patties (640g)', serves: '4 burgers', pricePlaceholder: '16.50' },
      { weight: '8 x 160g Burger Pack (1.28kg)', serves: '8 burgers', pricePlaceholder: '31.00' },
      { weight: '16 x 160g Party BBQ Pack (2.56kg)', serves: '16 burgers', pricePlaceholder: '59.00' }
    ],
    stockStatus: 'In Stock • Juicy 80/20 Ratio',
    cutInformation: 'Blend of beef chuck, brisket, and flank for the optimal 80/20 lean-to-fat balance.',
    storageInstructions: 'Keep chilled below 4°C. Cook thoroughly before consumption.',
    cookingSuggestions: 'Do not press with the spatula while grilling to prevent moisture loss. Cook to an internal core temperature of 71°C.',
    allergensPlaceholder: 'Contains 100% Australian Beef, Sea Salt, Cracked Black Pepper. Nil artificial binders.',
    originPlaceholder: 'NSW 2642 Pastoral Stations.',
    badge: 'BBQ Smash Hit',
    isFeatured: false
  },
  {
    id: 'beef-stir-fry',
    name: 'Black Angus Beef Stir-Fry Strips (Thinly Sliced)',
    category: 'beef',
    subCategory: 'Everyday Beef Mince & Strips',
    shortDescription: 'Lean, tender beef strips sliced across the grain for quick high-heat wok cooking.',
    fullDescription: 'Spend less time prepping and more time enjoying dinner. Sliced from tender beef cuts across the muscle grain, these uniform strips cook evenly in minutes, absorbing marinades and wok aromas cleanly without drying out.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '14.50',
    weightOptions: [
      { weight: '500g Vacuum Tray', serves: '2–3 serves', pricePlaceholder: '14.50' },
      { weight: '1kg Family Pack', serves: '4–6 serves', pricePlaceholder: '27.50' },
      { weight: '2kg Meal Prep Bulk', serves: '8–12 serves', pricePlaceholder: '52.00' }
    ],
    stockStatus: 'In Stock • Hand-Sliced Daily',
    cutInformation: 'Sliced across the grain from select rump or topside primal beef cuts.',
    storageInstructions: 'Store chilled between 0°C and 4°C. Consume within 3 days or freeze immediately.',
    cookingSuggestions: 'Flash fry in small batches in a smoking-hot wok for 60 to 90 seconds to preserve tenderness.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens.',
    originPlaceholder: 'Riverina NSW 2642.',
    badge: 'Quick Midweek Meal',
    isFeatured: false
  },
  {
    id: 'black-angus-chuck-roast',
    name: 'Black Angus Chuck Roll & Gravy Beef (Diced & Roast)',
    category: 'beef',
    subCategory: 'Roasts & Slow Cook',
    shortDescription: 'Rich, collagen-dense beef shoulder cut ideal for slow cooker casseroles, beef bourguignon, and pot roasts.',
    fullDescription: 'Cut from the forequarter shoulder, our Black Angus Chuck is marbling-rich with connective tissue that dissolves into luxurious sauce during long, slow braising. Hand-trimmed and diced into generous bite-sized chunks or whole roast pieces.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '13.50',
    weightOptions: [
      { weight: '500g Diced Casserole Pack', serves: '2–3 serves', pricePlaceholder: '13.50' },
      { weight: '1kg Family Casserole Pack', serves: '4–6 serves', pricePlaceholder: '25.00' },
      { weight: 'Whole Chuck Roast Piece (~1.8kg)', serves: '6–8 serves', pricePlaceholder: '44.00' }
    ],
    stockStatus: 'In Stock • Deep Braising Flavour',
    cutInformation: 'Chuck primal cut with extensive natural collagen for slow braising.',
    storageInstructions: 'Keep chilled below 4°C. Freeze at -18°C.',
    cookingSuggestions: 'Sear diced chunks in hot oil until deeply browned. Simmer in red wine, stock, carrots, and thyme for 3 hours on low heat.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens.',
    originPlaceholder: 'NSW 2642 Pastoral Stations.',
    badge: 'Slow Cooker Gold',
    isFeatured: false
  },
  {
    id: 'corned-silverside-beef',
    name: 'Black Angus Traditional Corned Silverside Beef Roast',
    category: 'beef',
    subCategory: 'Roasts & Slow Cook',
    shortDescription: 'Artisan brine-cured Black Angus silverside with traditional butcher aromatics. Ideal for family boiling dinners.',
    fullDescription: 'A nostalgic Australian family classic. We cure select Black Angus silverside pieces in our mild brine infused with whole cloves, bay leaves, and black peppercorns. Boils up exceptionally tender, yielding delicious warm slices for dinner and cold cuts for lunch sandwiches.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '25.50',
    weightOptions: [
      { weight: '1.5kg Traditional Corned Piece', serves: '5–6 serves', pricePlaceholder: '25.50' },
      { weight: '2.5kg Large Family Piece', serves: '8–10 serves', pricePlaceholder: '40.00' }
    ],
    stockStatus: 'In Stock • Artisan Brine Cured',
    cutInformation: 'Lean beef silverside cured in our butcher recipe mild brine with bay leaves, cloves, and whole peppercorns.',
    storageInstructions: 'Keep refrigerated in original vacuum pouch at 0–4°C. Freeze up to 6 months.',
    cookingSuggestions: 'Place in a large pot, cover with cold water, add 2 tbsp malt vinegar, 1 tbsp brown sugar, and a chopped onion. Simmer gently for 2–2.5 hours until fork tender. Serve with white parsley sauce and steamed cabbage.',
    allergensPlaceholder: '100% Australian Beef, Salt, Sugar, Spices (Cloves, Bay Leaves), Sodium Nitrite (Curing Agent).',
    originPlaceholder: 'Australian Black Angus — NSW 2642.',
    badge: 'Traditional Butcher Cure',
    isFeatured: false
  },
  // ==========================================
  // POULTRY / CHICKEN CATEGORY
  // ==========================================
  {
    id: 'quarter-freerange-chicken',
    name: '1/4 Free-Range Poultry Farm Share (~12.5kg Mixed Cuts & Birds)',
    category: 'chicken',
    subCategory: 'Free-Range Poultry Shares',
    shortDescription: 'Balanced quarter share of Australian pasture-raised poultry: 2 whole roasting birds, breast fillets, juicy thighs, wings, drumsticks & schnitzels.',
    fullDescription: 'Our 1/4 Free-Range Poultry Farm Share provides exceptional farm-direct wholesale value for households and healthy meal prep. Sourced from certified Australian free-range farms in NSW 2642. Yields ~12.5kg of premium poultry: 2 x Whole Roasting Chickens (~1.8kg each), 2.5kg Skinless Breast Fillets, 2.5kg Boneless Thigh Fillets, 2kg Party Wings & Drumettes, 2kg Drumsticks, and 1kg Hand-Crumbed Herb Schnitzels. Portioned into vacuum-sealed cryovac barrier pouches (500g–1kg packs) and labeled for easy freezer organization.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '195.00',
    weightOptions: [
      { weight: 'Standard 1/4 Poultry Share (~12.5kg Mixed Cuts & 2 Whole Birds)', serves: '35–40 family meals', pricePlaceholder: '195.00' },
      { weight: 'Heavy 1/4 Poultry Share (~15.0kg Meal Prep Reserve)', serves: '45–50 family meals', pricePlaceholder: '230.00' }
    ],
    stockStatus: 'In Stock • Farm Direct Bulk Pack',
    cutInformation: 'Farm-direct allocation of pasture-raised poultry. Includes 2 whole birds, breast fillets, thigh fillets, wings, drumsticks, and schnitzels in leak-proof cryovac packs.',
    storageInstructions: 'Delivered in thermal-insulated cold-chain cartons with high-freeze gel packs. Freeze immediately at -18°C for up to 6 months.',
    cookingSuggestions: 'Ideal for Sunday family roasts, quick wok stir-fries, crispy buffalo wings, and golden pan-fried schnitzels.',
    allergensPlaceholder: '100% Free-Range Chicken. Note: Herb schnitzels contain wheat (gluten), dairy (parmesan), and egg.',
    originPlaceholder: 'Certified Free-Range Australian Poultry — NSW 2642 Regional Farms.',
    badge: '1/4 Poultry Share',
    isFeatured: true
  },
  {
    id: 'half-freerange-chicken',
    name: '1/2 Free-Range Poultry Farm Share (~25kg Mixed Cuts & Birds)',
    category: 'chicken',
    subCategory: 'Free-Range Poultry Shares',
    shortDescription: 'Complete half farm share of Australian free-range poultry: 4 whole roasting birds, 5kg breasts, 5kg thighs, 4kg wings, drumsticks & schnitzels.',
    fullDescription: 'The ultimate freezer supply for busy families, fitness athletes, and home cooks. A full half farm flock allocation yielding ~25kg of premium free-range chicken: 4 x Whole Roasting Chickens (~1.8kg each), 5kg Skinless Breast Fillets, 5kg Boneless Thigh Fillets, 4kg Wings & Drumettes, 3kg Drumsticks, and 2kg Hand-Crumbed Herb Schnitzels. Packed in modular vacuum pouches (approx. 500g–1kg packs) ready for immediate domestic freezing.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '375.00',
    weightOptions: [
      { weight: 'Standard 1/2 Poultry Share (~25kg Mixed Cuts & 4 Whole Birds)', serves: '70–80 family meals', pricePlaceholder: '375.00' },
      { weight: 'Heavy 1/2 Poultry Share (~30kg Bulk Pack)', serves: '85–95 family meals', pricePlaceholder: '440.00' }
    ],
    stockStatus: 'In Stock • Farm Direct Bulk Pack',
    cutInformation: 'Comprehensive half-flock allocation of pasture-raised poultry. Vacuum packed in modular family portions.',
    storageInstructions: 'Delivered in heavy-duty cold-chain thermal cartons. Requires approx. 65–80L freezer capacity.',
    cookingSuggestions: 'All cuts prepped for direct roasting, grilling, smoking, or quick wok stir-frying.',
    allergensPlaceholder: '100% Free-Range Chicken. (Schnitzels contain wheat, dairy, egg).',
    originPlaceholder: 'Pasture-Raised Australian Poultry — NSW 2642.',
    badge: '1/2 Poultry Share',
    isFeatured: true
  },
  {
    id: 'full-freerange-chicken',
    name: 'Full Free-Range Poultry Farm Carton (Whole Flock Reserve - ~50kg)',
    category: 'chicken',
    subCategory: 'Free-Range Poultry Shares',
    shortDescription: 'Wholesale whole flock farm reserve: 8 whole roasting birds, 10kg breasts, 10kg thighs, 8kg wings, 6kg drumsticks, and schnitzels.',
    fullDescription: 'Commercial homestead and volume buying direct from Australian free-range farms in NSW 2642. Yields ~50kg of prime, pasture-raised poultry: 8 x Whole Roasting Chickens, 10kg Skinless Breast Fillets, 10kg Boneless Thigh Fillets, 8kg Wings & Drumettes, 6kg Drumsticks, and 4kg Artisan Schnitzels. Hand-trimmed under strict HACCP cold-chain hygiene, vacuum-packed, and shipped in multi-carton insulated refrigerated containers.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '710.00',
    weightOptions: [
      { weight: 'Whole Flock Farm Carton (~50kg Commercial & Home Reserve)', serves: '150–170 family meals', pricePlaceholder: '710.00' },
      { weight: 'Heavy Whole Flock Carton (~60kg Hospitality Reserve)', serves: '180–200 family meals', pricePlaceholder: '840.00' }
    ],
    stockStatus: 'Available for Farm Reserve',
    cutInformation: 'Full farm flock allocation of free-range chicken. All primal portions vacuum-sealed in labeled 1kg bags.',
    storageInstructions: 'Multi-carton thermal freight delivery. Requires approx. 140–160L chest freezer storage.',
    cookingSuggestions: 'Unpack into freezer; thaw overnight in refrigerator as needed for weekly meal preparation.',
    allergensPlaceholder: '100% Australian Free-Range Chicken. (Schnitzels contain wheat, dairy, egg).',
    originPlaceholder: 'Certified Australian Free-Range Poultry — NSW 2642.',
    badge: 'Whole Flock Reserve',
    isFeatured: true
  },
  {
    id: 'half-cut-chicken',
    name: '1/2 Free-Range Spatchcock Chicken (Butterflied Half Bird)',
    category: 'chicken',
    subCategory: 'Whole Birds',
    shortDescription: 'Half free-range chicken butterflied flat for rapid, even barbecue grilling or crisp oven roasting.',
    fullDescription: 'Half bird split lengthwise with breast, wing, thigh, and drumstick intact. Flattened flat to cook in half the time of a whole bird while ensuring crisp golden skin and succulent, moist breast meat.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '12.50',
    weightOptions: [
      { weight: 'Single Half Bird (~900g)', serves: '2 serves', pricePlaceholder: '12.50' },
      { weight: 'Twin Half Birds (2 x ~900g)', serves: '4 serves', pricePlaceholder: '23.00' }
    ],
    stockStatus: 'In Stock • Spatchcocked & Ready',
    cutInformation: 'Half bird with bone intact, flattened for fast, uniform barbecue cooking.',
    storageInstructions: 'Refrigerate at 0–4°C. Freeze at -18°C for up to 6 months.',
    cookingSuggestions: 'Season with lemon, garlic, and fresh oregano. Grill skin-side down over medium coals for 15 mins, flip and finish for 12 mins.',
    allergensPlaceholder: '100% Australian Free-Range Chicken. Nil allergens.',
    originPlaceholder: 'Australian Free-Range Poultry — NSW 2642.',
    badge: '1/2 Bird Cut',
    isFeatured: false
  },
  {
    id: 'quarter-cut-chicken',
    name: '1/4 Cut Chicken Portions (Bone-In Maryland & Breast Quarters)',
    category: 'chicken',
    subCategory: 'Roasting Portions',
    shortDescription: 'Traditional butcher quarter chicken cuts: bone-in chicken maryland (thigh + drumstick) and bone-in breast with wing.',
    fullDescription: 'Portioned from whole Australian free-range chickens. Provides bone-in, skin-on chicken quarters for deep roasting flavor and maximum moisture retention.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '11.00',
    weightOptions: [
      { weight: '2 Quarter Cuts (~900g Pack)', serves: '2 serves', pricePlaceholder: '11.00' },
      { weight: '4 Quarter Cuts (~1.8kg Family Pack)', serves: '4 serves', pricePlaceholder: '20.00' }
    ],
    stockStatus: 'In Stock • Traditional Quarter Cut',
    cutInformation: '1/4 chicken portions with bone and skin intact for roasting.',
    storageInstructions: 'Keep refrigerated below 4°C. Freeze at -18°C.',
    cookingSuggestions: 'Roast at 200°C for 40 minutes with garlic butter and rosemary.',
    allergensPlaceholder: '100% Australian Chicken. Nil allergens.',
    originPlaceholder: 'NSW Pasture-Raised Poultry.',
    badge: '1/4 Bird Cut',
    isFeatured: false
  },
  {
    id: 'chicken-breast-fillets',
    name: 'Free-Range Chicken Breast Fillets (Skinless & Boneless)',
    category: 'chicken',
    subCategory: 'Breast Fillets',
    shortDescription: 'Tender, skinless and boneless chicken breast fillets from Australian free-range farms.',
    fullDescription: 'Hand-trimmed free-range chicken breasts with zero added hormones or growth promoters. Sourced from certified Australian free-range farms where birds roam freely outdoors. Exceptionally tender, lean, and vacuum-sealed in leak-proof cold-chain pouches.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '11.50',
    weightOptions: [
      { weight: '500g Pack (~2–3 Fillets)', serves: '2–3 serves', pricePlaceholder: '11.50' },
      { weight: '1kg Family Pack (~4–5 Fillets)', serves: '4–6 serves', pricePlaceholder: '21.00' },
      { weight: '2kg Bulk Meal Prep Pack (~8–10 Fillets)', serves: '8–12 serves', pricePlaceholder: '39.00' }
    ],
    stockStatus: 'Fresh Daily • In Stock',
    cutInformation: 'Premium skinless, boneless single breast fillets with tenderloins intact. Fat cleanly trimmed.',
    storageInstructions: 'Keep refrigerated between 0°C and 4°C. Consume within 3 days or freeze immediately at -18°C for up to 6 months.',
    cookingSuggestions: 'Pan-sear on medium-high heat with olive oil and fresh rosemary for 5–6 mins per side until internal temperature reaches 74°C, then rest for 3 minutes.',
    allergensPlaceholder: '100% Australian Free-Range Chicken. Free from gluten, preservatives, and dairy. Nil known allergens.',
    originPlaceholder: '100% Australian Free-Range Poultry — Certified Farms NSW/VIC.',
    badge: 'Free-Range Certified',
    isFeatured: true
  },
  {
    id: 'chicken-thigh-fillets',
    name: 'Free-Range Chicken Thigh Fillets (Skinless & Boneless)',
    category: 'chicken',
    subCategory: 'Thighs & Cutlets',
    shortDescription: 'Ultra-succulent skinless, boneless chicken thigh fillets that stay moist under high heat.',
    fullDescription: 'The chef\'s secret for curry, stir-fries, and char-grilling. Thigh meat has slightly higher natural intramuscular fat that prevents drying out, delivering maximum succulence and deep chicken flavor.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '12.50',
    weightOptions: [
      { weight: '500g Pack (~3–4 Fillets)', serves: '2–3 serves', pricePlaceholder: '12.50' },
      { weight: '1kg Family Pack (~6–8 Fillets)', serves: '4–6 serves', pricePlaceholder: '23.00' },
      { weight: '2kg Value Pack', serves: '8–12 serves', pricePlaceholder: '43.00' }
    ],
    stockStatus: 'Fresh Daily • In Stock',
    cutInformation: 'Skinless, boneless thigh fillets trimmed of excess cartilage and surface fat.',
    storageInstructions: 'Refrigerate at 0°C to 4°C. Domestic freeze at -18°C.',
    cookingSuggestions: 'Marinate in yogurt, lemon, and garlic for tandoori or souvlaki skewers. Grill over medium-high heat for 6–8 minutes per side.',
    allergensPlaceholder: '100% Australian Free-Range Chicken. Nil allergens.',
    originPlaceholder: 'Australian Free-Range Flocks — NSW 2642 Regional Supply.',
    badge: 'Juicy & Moist',
    isFeatured: false
  },
  {
    id: 'chicken-thigh-cutlets',
    name: 'Free-Range Chicken Thigh Cutlets (Bone-In, Skin-On)',
    category: 'chicken',
    subCategory: 'Thighs & Cutlets',
    shortDescription: 'Juicy bone-in chicken thighs with skin on for golden, crispy roasting or grilling.',
    fullDescription: 'Bone-in thigh cutlets lock in natural juices and collagen during slow baking, curries, or barbecue grilling. Sourced from certified Australian pasture-roaming flocks.',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.90',
    weightOptions: [
      { weight: '1kg Pack (~4–5 Thighs)', serves: '4 serves', pricePlaceholder: '16.90' },
      { weight: '2kg Value Pack (~8–10 Thighs)', serves: '8 serves', pricePlaceholder: '32.00' }
    ],
    stockStatus: 'In Stock • Crispy Skin',
    cutInformation: 'Bone-in, skin-on prime thigh cutlets with trimmed edges.',
    storageInstructions: 'Keep refrigerated at 0–4°C. Suitable for domestic freezing.',
    cookingSuggestions: 'Roast skin-side up at 200°C for 35–40 minutes until skin crackles and turns deeply golden.',
    allergensPlaceholder: '100% Australian Chicken. Nil allergens.',
    originPlaceholder: 'Australian Free-Range Poultry — NSW Regional Farms.',
    badge: 'BBQ & Roasts',
    isFeatured: false
  },
  {
    id: 'chicken-whole-roast',
    name: 'Whole Free-Range Roasting Bird (~1.8kg Oven-Ready)',
    category: 'chicken',
    subCategory: 'Whole Birds',
    shortDescription: 'Plump, pasture-raised Australian whole roasting bird with giblets removed.',
    fullDescription: 'Ideal for Sunday family roasts, rotisserie, or smoking. Uniformly sized for even cooking, packed fresh with moisture retained and neck/cavity cleaned.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '22.00',
    weightOptions: [
      { weight: 'Whole Bird (~1.8kg)', serves: '4–6 serves', pricePlaceholder: '22.00' },
      { weight: 'Twin Pack (2 x 1.8kg Birds)', serves: '8–12 serves', pricePlaceholder: '40.00' }
    ],
    stockStatus: 'In Stock • Trussed & Ready',
    cutInformation: 'Whole fresh bird, cavity cleaned and expertly trussed for even roasting.',
    storageInstructions: 'Refrigerate at 0–4°C. Suitable for freezer storage at -18°C.',
    cookingSuggestions: 'Rub skin with butter and sea salt, season cavity with half a lemon and thyme sprigs. Roast at 190°C for 75–80 minutes until juices run completely clear.',
    allergensPlaceholder: '100% Free-Range Australian Poultry. Nil allergens.',
    originPlaceholder: 'Certified Free-Range Australian Poultry — NSW 2642 Region.',
    badge: 'Sunday Roast',
    isFeatured: true
  },
  {
    id: 'chicken-wings-party',
    name: 'Free-Range Chicken Wings & Party Drumettes',
    category: 'chicken',
    subCategory: 'Drumsticks & Wings',
    shortDescription: 'Plump free-range chicken wings pre-cut into flats and drumettes for crispy buffalo or sticky BBQ wings.',
    fullDescription: 'Freshly portioned Australian chicken wings. High skin-to-meat ratio ensures maximum crunch when baked, air-fried, or smoked on the barbecue.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '12.00',
    weightOptions: [
      { weight: '1kg Party Pack (~12–14 pieces)', serves: '3–4 serves', pricePlaceholder: '12.00' },
      { weight: '2kg Value Smoker Pack (~25–28 pieces)', serves: '6–8 serves', pricePlaceholder: '22.00' }
    ],
    stockStatus: 'In Stock • Fresh Cut',
    cutInformation: '3-piece wings jointed into flats (mid-wings) and drumettes with wing-tips removed.',
    storageInstructions: 'Keep chilled below 4°C. Freeze at -18°C for up to 6 months.',
    cookingSuggestions: 'Toss in baking powder and sea salt, bake on a wire rack at 210°C for 40 mins for ultra-crispy skin, then glaze with warm hot sauce and butter.',
    allergensPlaceholder: '100% Australian Chicken. Nil allergens.',
    originPlaceholder: 'Australian Free-Range Poultry.',
    badge: 'Game Day Classic',
    isFeatured: false
  },
  {
    id: 'chicken-drumsticks-pack',
    name: 'Free-Range Chicken Drumsticks (Family Value Pack)',
    category: 'chicken',
    subCategory: 'Drumsticks & Wings',
    shortDescription: 'Succulent, tender chicken drumsticks ideal for family tray bakes, marinades, and BBQ.',
    fullDescription: 'Affordable, succulent, and family friendly. Sourced from plump pasture-raised birds, these drumsticks brown beautifully with sticky honey-soy or lemon-herb marinades.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '9.90',
    weightOptions: [
      { weight: '1kg Pack (~6–8 Drumsticks)', serves: '3–4 serves', pricePlaceholder: '9.90' },
      { weight: '2kg Family Pack (~14–16 Drumsticks)', serves: '6–8 serves', pricePlaceholder: '18.50' }
    ],
    stockStatus: 'In Stock • Great Everyday Value',
    cutInformation: 'Skin-on lower leg cut from free-range chickens, cleanly jointed.',
    storageInstructions: 'Refrigerate at 0°C to 4°C. Freeze at -18°C.',
    cookingSuggestions: 'Bake in a single layer at 200°C for 35 minutes, turning halfway and basting with your favorite marinade.',
    allergensPlaceholder: '100% Australian Chicken. Nil allergens.',
    originPlaceholder: 'NSW Regional Australian Farms.',
    badge: 'Family Value',
    isFeatured: false
  },
  {
    id: 'chicken-schnitzels-crumbed',
    name: 'Hand-Crumbed Herb & Garlic Chicken Schnitzels',
    category: 'chicken',
    subCategory: 'Breast Fillets',
    shortDescription: 'Tender chicken breast hand-crumbed in our butcher golden breadcrumb with rosemary, garlic & parmesan.',
    fullDescription: 'Made fresh in-house daily. Whole free-range chicken breast fillets gently tenderized and coated in crunchy panko crumbs, sea salt, cracked pepper, garlic, and dried rosemary. Ready to pan-fry for a pub-quality chicken parmigiana at home.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.50',
    weightOptions: [
      { weight: '4 x 200g Schnitzels (800g Pack)', serves: '4 serves', pricePlaceholder: '16.50' },
      { weight: '8 x 200g Schnitzels (1.6kg Family Pack)', serves: '8 serves', pricePlaceholder: '31.00' }
    ],
    stockStatus: 'Fresh Made Daily • In Stock',
    cutInformation: 'Hand-flattened free-range chicken breast coated in artisan herb breadcrumbs.',
    storageInstructions: 'Keep chilled below 4°C. Consume within 3 days or freeze separated with baking paper.',
    cookingSuggestions: 'Shallow fry in vegetable or olive oil over medium-high heat for 3–4 minutes per side until golden and crispy.',
    allergensPlaceholder: 'Contains Gluten (Wheat), Dairy (Parmesan Cheese), Egg (Crumb wash).',
    originPlaceholder: '100% Australian Chicken Breast — Crumbed In-House NSW 2642.',
    badge: 'Pub Style Schnitty',
    isFeatured: true
  },

  // ==========================================
  // PORK CATEGORY
  // ==========================================
  {
    id: 'quarter-australian-pork',
    name: '1/4 Australian Pork Share (Quarter Carcass)',
    category: 'pork',
    subCategory: 'Pork Carcass Shares',
    shortDescription: 'Balanced quarter carcass of tender Australian pork: scored crackling belly slab, thick loin chops, rolled roast, spare ribs, and mince.',
    fullDescription: 'Our 1/4 Australian Pork Share offers exceptional value for families, smokers, and BBQ enthusiasts. Sourced from Australian high-welfare grain-fed pork in NSW 2642. Hand-butchered into table-ready favorites: machine-scored crackling belly slab (~1.5kg), thick French-trimmed loin cutlets, boneless rolled shoulder roast, St. Louis cut meaty spare ribs, and freshly minced lean pork. All portions are vacuum-sealed in durable cryovac barrier packs and labeled for your freezer.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '245.00',
    weightOptions: [
      { weight: 'Standard 1/4 Pork Share (~15kg–18kg dressed yield)', serves: '40–50 family meals', pricePlaceholder: '245.00' },
      { weight: 'Heavy 1/4 Pork Share (~20kg–22kg dressed yield)', serves: '55–65 family meals', pricePlaceholder: '295.00' }
    ],
    stockStatus: 'In Stock • Custom Butchery Order',
    cutInformation: 'Artisan breakdown from premium Australian market pig. Includes scored crackling belly, thick loin cutlets, rolled shoulder roast, spare ribs, and lean pork mince.',
    storageInstructions: 'Delivered in heavy-duty thermal insulated cold-chain cartons with frozen gel packs. Vacuum-sealed for refrigeration (up to 5 days) or domestic freezing at -18°C for up to 9 months.',
    cookingSuggestions: 'Blister pork belly rind at 220°C for crackling; pan-sear thick cutlets with butter and sage; smoke ribs at 110°C with applewood.',
    allergensPlaceholder: '100% Pure Australian Farm-Raised Pork. Nil additives, preservatives, or allergens.',
    originPlaceholder: '100% Australian Farm-Raised Pork — Riverina Region, NSW 2642.',
    badge: '1/4 Pork Share',
    isFeatured: true
  },
  {
    id: 'half-australian-pork',
    name: '1/2 Australian Pork Side (Half Carcass)',
    category: 'pork',
    subCategory: 'Pork Carcass Shares',
    shortDescription: 'Complete half side of Australian pork: full scored belly, French-trimmed loin cutlets, scotch collar roast, leg roast, spare ribs, and mince.',
    fullDescription: 'The complete pork lover\'s freezer supply. A full half side of prime Australian pork, hung and custom portioned to your butchery requests. Delivers a generous whole scored belly sheet (for succulent roasts or homemade bacon), thick French-trimmed loin cutlets, pork scotch fillet collar butt (for championship pulled pork), whole leg roast, meaty St. Louis ribs, pork hock for pea-and-ham soup, and lean mince. Individually cryovaced and labeled.',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '465.00',
    weightOptions: [
      { weight: 'Standard 1/2 Pork Side (~32kg–36kg dressed yield)', serves: '85–100 family meals', pricePlaceholder: '465.00' },
      { weight: 'Heavy 1/2 Pork Side (~40kg–45kg dressed yield)', serves: '110–125 family meals', pricePlaceholder: '575.00' }
    ],
    stockStatus: 'In Stock • Custom Butchery Order',
    cutInformation: 'Complete side of prime Australian pork. Custom broken down into belly roasts, loin chops, collar roast, leg roasts, ribs, hock, and mince.',
    storageInstructions: 'Packaged in insulated thermal boxes. Requires approximately 100–120L freezer space (fits easily in standard chest freezers).',
    cookingSuggestions: 'Detailed master butcher cooking guidelines included for crackling, smoking, and roasting every cut.',
    allergensPlaceholder: '100% Australian Farm-Raised Pork. Zero preservatives or additives. Nil allergens.',
    originPlaceholder: 'Australian Grain-Fed Pork — NSW 2642.',
    badge: '1/2 Pork Side',
    isFeatured: true
  },
  {
    id: 'full-australian-pork',
    name: 'Full Australian Pork Carcass (Whole Pig / Beast)',
    category: 'pork',
    subCategory: 'Pork Carcass Shares',
    shortDescription: 'Whole Australian pork carcass. Available custom-butchered into individual cuts or prepared whole for traditional spit roasting.',
    fullDescription: 'Wholesale-rate whole pig purchasing direct from Australian regional farms. Sourced from high-health, high-welfare farms in NSW 2642. Options include: (A) Full master butcher breakdown into vacuum-sealed table cuts (2 full belly slabs, 2 racks of ribs, dozens of loin chops, 2 scotch collar butts, 2 leg roasts, 2 shoulder roasts, hocks, and bulk mince), OR (B) Whole dressed suckling/market pig prepped, cleaned, and trussed ready for a traditional charcoal spit roast event. Dispatched cold-chain across Australia.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '880.00',
    weightOptions: [
      { weight: 'Whole Pig Butcher Breakdown (~65kg–72kg dressed yield)', serves: '180–200 family meals', pricePlaceholder: '880.00' },
      { weight: 'Whole Pig Heavy Butchered (~78kg–85kg dressed yield)', serves: '220–240 family meals', pricePlaceholder: '990.00' },
      { weight: 'Whole Spit Roast Pig (~22kg–25kg whole carcass unportioned)', serves: '45–55 event guests', pricePlaceholder: '490.00' }
    ],
    stockStatus: 'Available for Whole Beast Reserve',
    cutInformation: 'Whole pig carcass dressed and inspected. Delivered fully portioned and vacuum packed, or whole for spit roasters.',
    storageInstructions: 'Multi-carton thermal shipping with high-freeze refrigerant. Requires approx. 200–240L freezer volume for butcher breakdown.',
    cookingSuggestions: 'Spit roast over slow charcoal coals at 110–120°C for 5–6 hours with vinegar-salt baste for blistering crackling.',
    allergensPlaceholder: '100% Australian Whole Carcass Pork. Nil allergens.',
    originPlaceholder: 'Verified Australian Farm-Raised Pork — NSW 2642.',
    badge: 'Whole Pig Reserve',
    isFeatured: true
  },
  {
    id: 'pork-belly-crackling',
    name: 'Australian Pork Belly (Scored for Crunchy Crackling)',
    category: 'pork',
    subCategory: 'Pork Belly',
    shortDescription: 'Tender pork belly with fine fat layers and butcher-scored rind for guaranteed crackling.',
    fullDescription: 'Prepared from prime Australian pork sides. Precision machine-scored at 5mm intervals so salt and oil penetrate deeply, creating crunchy blistered crackling while the luscious layers of belly meat remain meltingly tender.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '26.50',
    weightOptions: [
      { weight: '1kg Roast Slab', serves: '3–4 serves', pricePlaceholder: '26.50' },
      { weight: '2kg Large Slab', serves: '6–8 serves', pricePlaceholder: '49.90' },
      { weight: '3kg Whole Sheet (Feast)', serves: '10–12 serves', pricePlaceholder: '72.00' }
    ],
    stockStatus: 'In Stock • Precision Scored',
    cutInformation: 'Belly roast with rind on, scored by butcher at 5mm intervals.',
    storageInstructions: 'Refrigerate at 0–4°C. Pat rind dry with paper towels prior to seasoning.',
    cookingSuggestions: 'Rub rind generously with olive oil and coarse sea salt; blast at 220°C for 25 mins to blister crackling, then reduce oven to 160°C for 90 mins.',
    allergensPlaceholder: '100% Australian Pork. Nil allergens.',
    originPlaceholder: '100% Australian Farm-Raised Pork — NSW/VIC Riverina Basin.',
    badge: 'Crispy Crackling',
    isFeatured: true
  },
  {
    id: 'pork-loin-cutlets',
    name: 'Free-Range Pork Loin Cutlets (French-Trimmed)',
    category: 'pork',
    subCategory: 'Loin Chops & Cutlets',
    shortDescription: 'Succulent French-trimmed bone-in pork loin chops with an edge ribbon of fat.',
    fullDescription: 'Cut thick (approx. 25mm) to prevent drying out. Free-range grain-fed pork from regional farms, delivering clean pork sweetness on the barbecue or cast iron skillet.',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '14.50',
    weightOptions: [
      { weight: '2 x 250g Cutlets (500g)', serves: '2 serves', pricePlaceholder: '14.50' },
      { weight: '4 x 250g Cutlets (1kg)', serves: '4 serves', pricePlaceholder: '26.90' },
      { weight: '6 x 250g Cutlets (1.5kg Pack)', serves: '6 serves', pricePlaceholder: '39.00' }
    ],
    stockStatus: 'In Stock • Thick Cut',
    cutInformation: 'Loin cutlets on the rib bone, French trimmed for clean presentation.',
    storageInstructions: 'Keep chilled at 0–4°C. Freeze at -18°C.',
    cookingSuggestions: 'Sear in cast iron with butter and sage leaves for 4 minutes per side to internal temp of 65°C, then rest 5 minutes.',
    allergensPlaceholder: '100% Australian Pork. Nil allergens.',
    originPlaceholder: 'Pasture-Raised Australian Pork — NSW 2642 Region.',
    badge: 'Tender & Lean',
    isFeatured: false
  },
  {
    id: 'pork-scotch-fillet-roast',
    name: 'Pork Scotch Fillet / Collar Butt (Pulled Pork & Steaks)',
    category: 'pork',
    subCategory: 'Pork Roasts',
    shortDescription: 'Marbling-rich pork collar neck roast. The supreme cut for juicy pulled pork and tender steaks.',
    fullDescription: 'Also known as Boston Butt or Collar. Packed with natural intramuscular marbling that renders completely into gelatinous tenderness during low-and-slow smoking or slow roasting.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '28.00',
    weightOptions: [
      { weight: 'Sliced Pork Scotch Steaks (4 x 250g / 1kg)', serves: '4 serves', pricePlaceholder: '24.00' },
      { weight: 'Whole Collar Roast (~1.5kg)', serves: '6–8 serves', pricePlaceholder: '28.00' },
      { weight: 'Whole Smoker Boston Butt (~3.0kg)', serves: '12–15 serves', pricePlaceholder: '54.00' }
    ],
    stockStatus: 'In Stock • Pitmaster Spec',
    cutInformation: 'Pork neck/collar primal with dense internal marbling and no bone.',
    storageInstructions: 'Refrigerate below 4°C. Freeze at -18°C.',
    cookingSuggestions: 'Rub with brown sugar and smoked paprika. Smoke at 110°C for 8 hours until internal temp hits 95°C and shreds effortlessly.',
    allergensPlaceholder: '100% Raw Australian Pork. Nil allergens.',
    originPlaceholder: 'Australian Pork — NSW 2642.',
    badge: 'Pulled Pork Gold',
    isFeatured: true
  },
  {
    id: 'pork-spare-ribs-st-louis',
    name: 'Australian Pork St. Louis Spare Ribs (Full Rack)',
    category: 'pork',
    subCategory: 'Spare Ribs',
    shortDescription: 'Full St. Louis cut pork spare ribs with brisket bone trimmed away for uniform meat thickness.',
    fullDescription: 'The champion barbecue cut. Trimmed flat and square with thick, meaty coverage across the entire rack. Membrane removed from the bone side for maximum smoke absorption.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '29.50',
    weightOptions: [
      { weight: '1 x Full Rack (~1.2kg)', serves: '2–3 serves', pricePlaceholder: '29.50' },
      { weight: '2 x Full Racks (~2.4kg Smoker Pack)', serves: '5–6 serves', pricePlaceholder: '56.00' }
    ],
    stockStatus: 'In Stock • Membrane Removed',
    cutInformation: 'St. Louis square-trimmed pork belly rib rack with membrane peeled.',
    storageInstructions: 'Keep refrigerated below 4°C. Freeze up to 6 months.',
    cookingSuggestions: 'Use the 3-2-1 method: 3 hours smoke at 110°C, 2 hours wrapped in foil with butter and apple juice, 1 hour unwrapped with glaze.',
    allergensPlaceholder: '100% Australian Pork. Nil allergens.',
    originPlaceholder: 'Riverina NSW Farm-Raised Pork.',
    badge: 'BBQ Pitmaster',
    isFeatured: false
  },
  {
    id: 'premium-pork-mince',
    name: 'Premium Lean Australian Pork Mince (Coarse Butcher Grind)',
    category: 'pork',
    subCategory: 'Pork Mince',
    shortDescription: 'Freshly minced Australian pork shoulder trim. Essential for dumplings, pork meatballs, and san choy bau.',
    fullDescription: 'Ground fresh daily from trimmed pork shoulder cuts with an optimal 85/15 meat-to-fat balance. Clean sweetness with zero fillers, binders, or preservatives.',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '9.90',
    weightOptions: [
      { weight: '500g Vacuum Pack', serves: '2–3 serves', pricePlaceholder: '9.90' },
      { weight: '1kg Family Pack', serves: '4–6 serves', pricePlaceholder: '18.90' },
      { weight: '2kg Bulk Pack', serves: '8–10 serves', pricePlaceholder: '35.00' }
    ],
    stockStatus: 'In Stock • Fresh Ground Daily',
    cutInformation: 'Freshly ground from boneless pork shoulder muscle trims.',
    storageInstructions: 'Refrigerate at 0–4°C. Freeze at -18°C.',
    cookingSuggestions: 'Brown in a hot wok with ginger, garlic, soy sauce, and scallions for authentic Asian lettuce wraps.',
    allergensPlaceholder: '100% Pure Australian Pork. Nil allergens.',
    originPlaceholder: '100% Australian Pork — NSW 2642.',
    badge: 'Dumpling & Wok Staple',
    isFeatured: false
  },

  // ==========================================
  // LAMB CATEGORY
  // ==========================================
  {
    id: 'quarter-pasture-lamb',
    name: '1/4 Pasture-Fed Lamb Share (Quarter Carcass)',
    category: 'lamb',
    subCategory: 'Lamb Carcass Shares',
    shortDescription: 'Balanced quarter carcass of tender Australian pasture-fed lamb: cutlets, loin chops, leg/shoulder roast, shanks, and mince.',
    fullDescription: 'Our 1/4 Pasture-Fed Lamb Share offers outstanding farm-direct value and freezer convenience. Selected from young prime Australian lambs raised on native pastures in NSW 2642. Custom portioned into table-ready cuts: French-trimmed rib cutlets, sweet loin chops, boneless butterflied or bone-in leg roast, succulent forequarter shoulder chops, meaty slow-cook shanks, and lean lamb mince. All cuts are individually vacuum-sealed in heavy barrier cryovac pouches and clearly labeled.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '165.00',
    weightOptions: [
      { weight: 'Standard 1/4 Lamb Share (~6kg–7kg dressed yield)', serves: '18–22 family meals', pricePlaceholder: '165.00' },
      { weight: 'Heavy 1/4 Lamb Share (~8kg–9kg dressed yield)', serves: '24–28 family meals', pricePlaceholder: '198.00' }
    ],
    stockStatus: 'In Stock • Custom Butchery Order',
    cutInformation: 'Artisan portioned from young pasture-fed Australian prime lamb. Includes French-trimmed cutlets, mid-loin chops, leg roast piece, shoulder chops, shank, and gourmet lean mince.',
    storageInstructions: 'Delivered in thermal-insulated cold-chain cartons with frozen gel packs. Vacuum-sealed for immediate refrigeration (up to 5 days) or domestic freezer storage at -18°C for up to 10 months.',
    cookingSuggestions: 'Grill cutlets and chops over high heat for 2–3 minutes per side for tender medium-rare; slow roast leg and shoulder at 150°C with garlic, rosemary, and olive oil.',
    allergensPlaceholder: '100% Pure Australian Pasture-Fed Lamb. Nil additives, preservatives, or allergens.',
    originPlaceholder: '100% Australian Pasture-Fed Lamb — Southern Slopes NSW 2642.',
    badge: '1/4 Lamb Share',
    isFeatured: true
  },
  {
    id: 'half-pasture-lamb',
    name: '1/2 Pasture-Fed Lamb Side (Half Carcass)',
    category: 'lamb',
    subCategory: 'Lamb Carcass Shares',
    shortDescription: 'Complete half side of Australian pasture-fed lamb: full rack of cutlets, loin chops, whole leg roast, shoulder, shanks, ribs, and mince.',
    fullDescription: 'The ultimate lamb freezer-filler for Australian families. A full half carcass (forequarter, loin, and hindquarter) of pasture-fed prime lamb. Aged and custom butchered into: 8-bone French-trimmed rack/cutlets, prime T-bone loin chops, chump steaks, whole leg roast (bone-in or butterflied), whole shoulder roast (bone-in or rolled boneless), 2 hindquarter shanks, breast ribs, and freshly ground lamb mince. Vacuum sealed and labeled.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '295.00',
    weightOptions: [
      { weight: 'Standard 1/2 Lamb Side (~12kg–14kg dressed yield)', serves: '35–42 family meals', pricePlaceholder: '295.00' },
      { weight: 'Heavy 1/2 Lamb Side (~16kg–18kg dressed yield)', serves: '45–54 family meals', pricePlaceholder: '365.00' }
    ],
    stockStatus: 'In Stock • Custom Butchery Order',
    cutInformation: 'Complete side of prime Australian lamb. Custom butchered into cutlets, loin chops, leg roast, shoulder roast, 2 shanks, spare ribs, and mince. All packaged in modular vacuum pouches.',
    storageInstructions: 'Packaged in insulated cold-chain cartons with heavy-duty gel ice packs. Fits comfortably into a standard home upright or chest freezer compartment (approx. 45–60L capacity).',
    cookingSuggestions: 'From Sunday family roasts and char-grilled cutlets to hearty red-wine shanks.',
    allergensPlaceholder: '100% Australian Pasture-Fed Lamb. Nil allergens. Zero preservatives.',
    originPlaceholder: '100% Australian Pasture-Fed Prime Lamb — NSW 2642 Pastoral Regions.',
    badge: '1/2 Lamb Side',
    isFeatured: true
  },
  {
    id: 'full-pasture-lamb',
    name: 'Full Pasture-Fed Lamb Carcass (Whole Beast)',
    category: 'lamb',
    subCategory: 'Lamb Carcass Shares',
    shortDescription: 'Whole pasture-fed Australian lamb carcass. Available custom-butchered into individual cuts or prepared whole for spit roasting.',
    fullDescription: 'Direct farm-to-table whole lamb buying. Sourced from prime Australian pasture-fed lambs in NSW 2642. You can choose either: (A) Full artisan butcher breakdown into vacuum-sealed table-ready cuts (16 French cutlets, 16+ loin chops, 2 whole leg roasts, 2 whole shoulder roasts, 4 shanks, ribs, neck chops, and bulk mince), OR (B) Whole dressed carcass prepared and secured for festive Greek/Cypriot charcoal spit roasting. Dispatched in temperature-controlled cold-chain packaging.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '540.00',
    weightOptions: [
      { weight: 'Whole Lamb Custom Butchered (~24kg–26kg dressed yield)', serves: '75–90 family meals', pricePlaceholder: '540.00' },
      { weight: 'Whole Lamb Heavy Butchered (~30kg–34kg dressed yield)', serves: '95–110 family meals', pricePlaceholder: '670.00' },
      { weight: 'Whole Lamb Spit Roast Ready (~22kg–25kg whole carcass)', serves: '50–60 event guests', pricePlaceholder: '495.00' }
    ],
    stockStatus: 'Available for Whole Beast Reserve',
    cutInformation: 'Whole lamb carcass hung and dressed. Available fully broken down into vacuum-sealed retail cuts, or whole spit-ready trussed on request.',
    storageInstructions: 'Delivered in commercial insulated containers with eutectic refrigerant packs. Requires approx. 90–110L freezer space for portioned breakdown.',
    cookingSuggestions: 'Complete cooking & carving guide provided for both spit-roasting and home oven/BBQ cuts.',
    allergensPlaceholder: '100% Australian Whole Carcass Lamb. Nil allergens.',
    originPlaceholder: 'Pastoral Verified Prime Lamb — Southern Slopes NSW 2642.',
    badge: 'Whole Lamb Reserve',
    isFeatured: true
  },
  {
    id: 'lamb-cutlets-french',
    name: 'Pasture-Fed Lamb Cutlets (French-Trimmed)',
    category: 'lamb',
    subCategory: 'Lamb Cutlets & Racks',
    shortDescription: 'The pinnacle of tender Australian lamb—sweet, tender, and meticulously trimmed.',
    fullDescription: 'Expertly prepared by our master butchers with clean bone handles. Sourced from lush pasturelands in NSW and regional Australia for unbeatable tenderness and delicate, sweet lamb flavor.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '26.90',
    weightOptions: [
      { weight: '6 Cutlets (~500g Pack)', serves: '2 serves', pricePlaceholder: '26.90' },
      { weight: '12 Cutlets (~1kg Family Pack)', serves: '4 serves', pricePlaceholder: '52.00' },
      { weight: 'Whole 8-Bone French Rack (~800g Roast)', serves: '3–4 serves', pricePlaceholder: '44.00' }
    ],
    stockStatus: 'In Stock • Hand French-Trimmed',
    cutInformation: 'Rib cutlets French trimmed to the eye with bone handles cleanly denuded.',
    storageInstructions: 'Refrigerate at 0–4°C. Consume within 3 days or freeze at -18°C.',
    cookingSuggestions: 'Flash grill over smoking hot charcoal or pan-fry in butter, garlic, and fresh rosemary for 2 mins per side for perfect pink medium-rare.',
    allergensPlaceholder: '100% Pasture-Fed Australian Lamb. Nil allergens.',
    originPlaceholder: '100% Australian Pasture-Fed Lamb — Southern Slopes NSW 2642.',
    badge: 'Butcher Premium',
    isFeatured: true
  },
  {
    id: 'lamb-shanks-slow-cook',
    name: 'Slow-Cook Lamb Shanks (Hindquarter Meaty Cut)',
    category: 'lamb',
    subCategory: 'Lamb Shanks',
    shortDescription: 'Meaty, collagen-rich hindquarter lamb shanks ready for rich winter braises.',
    fullDescription: 'Generous hindquarter shanks trimmed of excessive external fat while keeping the connective tissues intact. Melts into fork-tender succulence when braised with wine and herbs.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '27.50',
    weightOptions: [
      { weight: '2 Shanks (~800g Pack)', serves: '2 serves', pricePlaceholder: '27.50' },
      { weight: '4 Shanks (~1.6kg Family Pack)', serves: '4 serves', pricePlaceholder: '52.00' },
      { weight: '6 Shanks (~2.4kg Feast Pack)', serves: '6 serves', pricePlaceholder: '76.00' }
    ],
    stockStatus: 'In Stock • Large Hindquarter Shanks',
    cutInformation: 'Primal hindquarter shank with bone marrow exposed and clean frenched knuckle.',
    storageInstructions: 'Refrigerate at 0–4°C or freeze up to 6 months.',
    cookingSuggestions: 'Dust in flour, brown deeply in a casserole pot, then braise with red wine, beef stock, garlic, and rosemary at 150°C for 3.5 hours.',
    allergensPlaceholder: '100% Australian Lamb. Nil allergens.',
    originPlaceholder: 'Pastoral Pasture-Fed Lamb — NSW 2642 Regional Supply.',
    badge: 'Slow Cooker Master',
    isFeatured: false
  },
  {
    id: 'lamb-butterflied-leg',
    name: 'Butterflied Leg of Lamb (Rosemary & Garlic BBQ Cut)',
    category: 'lamb',
    subCategory: 'Leg Roasts',
    shortDescription: 'Boneless pasture-fed lamb leg flattened for even, rapid barbecue cooking or oven roasting.',
    fullDescription: 'Our butchers remove the pelvic and femur bones, opening out the leg to an even thickness. Creates caramelized charred edges on the outside while maintaining juicy pink meat through the center.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '38.00',
    weightOptions: [
      { weight: 'Butterflied Leg (~1.5kg)', serves: '5–6 serves', pricePlaceholder: '38.00' },
      { weight: 'Large Butterflied Leg (~2.2kg)', serves: '8–10 serves', pricePlaceholder: '54.00' },
      { weight: 'Traditional Bone-In Leg Roast (~2.5kg)', serves: '8–10 serves', pricePlaceholder: '48.00' }
    ],
    stockStatus: 'In Stock • Boned & Flattened',
    cutInformation: 'Whole lamb leg with bone removed and scored for even heat distribution.',
    storageInstructions: 'Keep chilled below 4°C. Freeze at -18°C.',
    cookingSuggestions: 'Marinate in olive oil, lemon juice, crushed garlic, and fresh oregano. Grill over medium-hot BBQ for 18–20 mins per side, then rest for 10 minutes.',
    allergensPlaceholder: '100% Australian Lamb. Nil allergens.',
    originPlaceholder: 'Pasture-Fed Australian Lamb — NSW 2642.',
    badge: 'Aussie BBQ Favourite',
    isFeatured: true
  },
  {
    id: 'lamb-loin-chops',
    name: 'Pasture-Fed Lamb Loin Chops (T-Bone Chops)',
    category: 'lamb',
    subCategory: 'Lamb Chops',
    shortDescription: 'Tender miniature T-bone chops combining the sweet loin eye and tenderloin fillet.',
    fullDescription: 'The classic Australian weekday chop. Cut from the mid-loin section, featuring the characteristic T-bone bone structure that imparts rich roasted marrow depth when cooked over hot coals.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '18.50',
    weightOptions: [
      { weight: '4 Chops (~500g Pack)', serves: '2 serves', pricePlaceholder: '18.50' },
      { weight: '8 Chops (~1kg Family Pack)', serves: '4 serves', pricePlaceholder: '35.00' }
    ],
    stockStatus: 'In Stock • Classic Aussie Cut',
    cutInformation: 'Mid-loin chops with central T-bone and thin fat ribbon for natural basting.',
    storageInstructions: 'Refrigerate at 0–4°C.',
    cookingSuggestions: 'Sear on a smoking-hot BBQ or cast iron for 3 minutes per side for juicy medium-rare.',
    allergensPlaceholder: '100% Australian Lamb. Nil allergens.',
    originPlaceholder: 'NSW Pasture-Fed Flocks.',
    badge: 'Classic Aussie Chop',
    isFeatured: false
  },
  {
    id: 'lamb-shoulder-oyster-cut',
    name: 'Bone-In Lamb Shoulder (Oyster Cut for 12-Hour Roasting)',
    category: 'lamb',
    subCategory: 'Leg Roasts',
    shortDescription: 'Richly marbled bone-in lamb shoulder. The ultimate cut for fork-shredded Greek lamb roasts.',
    fullDescription: 'The forequarter oyster cut retains the blade bone, providing internal structure while rendering deep collagen throughout long, slow roasting. Seasoned simply with garlic and oregano, the meat collapses into tender shreds under a fork.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '36.00',
    weightOptions: [
      { weight: 'Bone-In Shoulder (~1.8kg)', serves: '5–6 serves', pricePlaceholder: '36.00' },
      { weight: 'Large Bone-In Shoulder (~2.4kg)', serves: '7–8 serves', pricePlaceholder: '47.00' }
    ],
    stockStatus: 'In Stock • High Natural Collagen',
    cutInformation: 'Oyster cut lamb forequarter shoulder with bone intact and fat cap lightly scored.',
    storageInstructions: 'Keep chilled below 4°C. Suitable for freezing.',
    cookingSuggestions: 'Slow roast at 140°C in a covered roasting pan with garlic, white wine, and rosemary for 4.5–5 hours until bone slides out effortlessly.',
    allergensPlaceholder: '100% Australian Lamb. Nil allergens.',
    originPlaceholder: 'Pasture-Fed Australian Lamb — NSW 2642.',
    badge: 'Fork-Tender Slow Roast',
    isFeatured: false
  },
  {
    id: 'grass-fed-lamb-mince',
    name: 'Grass-Fed Australian Lean Lamb Mince',
    category: 'lamb',
    subCategory: 'Mince',
    shortDescription: 'Freshly minced Australian pasture-fed lamb trims. Ideal for moussaka, koftas, and shepherd\'s pie.',
    fullDescription: 'Ground fresh daily from trimmed lamb leg and shoulder cuts. Clean, sweet lamb flavor without excessive grease. Perfect for Greek koftas, Middle Eastern kibbeh, and homemade burgers.',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '13.50',
    weightOptions: [
      { weight: '500g Pack', serves: '2–3 serves', pricePlaceholder: '13.50' },
      { weight: '1kg Family Pack', serves: '4–6 serves', pricePlaceholder: '25.50' },
      { weight: '2kg Bulk Pack', serves: '8–10 serves', pricePlaceholder: '48.00' }
    ],
    stockStatus: 'In Stock • Fresh Ground Daily',
    cutInformation: 'Trimmed lamb shoulder and leg muscle ground to medium coarse consistency.',
    storageInstructions: 'Keep refrigerated below 4°C. Freeze at -18°C.',
    cookingSuggestions: 'Combine with mint, garlic, ground cumin, and sea salt; shape around skewers for juicy char-grilled lamb koftas.',
    allergensPlaceholder: '100% Pure Australian Lamb. Nil allergens.',
    originPlaceholder: 'Pasture-Fed Australian Lamb — NSW 2642.',
    badge: 'Kofta & Pie Favourite',
    isFeatured: false
  },

  // ==========================================
  // FISH & FILLETS CATEGORY
  // ==========================================
  {
    id: 'atlantic-salmon-portions',
    name: 'Huon Tasmanian Atlantic Salmon Portions (Skin-On)',
    category: 'fish',
    subCategory: 'Salmon Portions',
    shortDescription: 'Pristine ocean salmon portions rich in healthy Omega-3 oils with crispy skin potential.',
    fullDescription: 'Portion-cut from ocean-farmed Tasmanian Atlantic salmon. Pin-bone removed and scaled, vacuum-packed fresh to preserve vibrant orange colour, delicate flaky texture, and rich taste.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '19.50',
    weightOptions: [
      { weight: '2 x 200g Portions (400g Pack)', serves: '2 serves', pricePlaceholder: '19.50' },
      { weight: '4 x 200g Portions (800g Family Pack)', serves: '4 serves', pricePlaceholder: '36.50' },
      { weight: 'Whole Side Fillet (~1.2kg Side)', serves: '6–8 serves', pricePlaceholder: '52.00' }
    ],
    stockStatus: 'Fresh Catch • In Stock',
    cutInformation: 'Centre-cut salmon portions, skin-on, scaled, and 100% pin-bone free.',
    storageInstructions: 'Keep refrigerated at 0–3°C. Consume within 3 days or freeze immediately.',
    cookingSuggestions: 'Pat skin bone-dry, season with flaky sea salt, and fry skin-side down in a hot skillet with olive oil for 4 mins, flip for 2 mins for medium-rare center.',
    allergensPlaceholder: 'Contains Fish (Atlantic Salmon).',
    originPlaceholder: 'Sustainably Farmed Huon Tasmanian Waters, Australia.',
    badge: 'Rich in Omega-3',
    isFeatured: true
  },
  {
    id: 'barramundi-fillets',
    name: 'Cone Bay Australian Saltwater Barramundi Fillets',
    category: 'fish',
    subCategory: 'Barramundi Fillets',
    shortDescription: 'Sweet, buttery Australian Barramundi fillets with tender flaky white flesh.',
    fullDescription: 'Iconic Australian saltwater fish raised in high-tidal ocean pens. Known for delicate sweetness, firm white flakes, and zero muddy undertones. Cleanly portioned with skin on for pan-frying or oven baking.',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '21.50',
    weightOptions: [
      { weight: '2 x 200g Portions (400g Pack)', serves: '2 serves', pricePlaceholder: '21.50' },
      { weight: '4 x 200g Portions (800g Pack)', serves: '4 serves', pricePlaceholder: '39.90' }
    ],
    stockStatus: 'In Stock • Saltwater Farmed',
    cutInformation: 'Ocean-farmed saltwater barramundi fillets, boneless and scaled.',
    storageInstructions: 'Refrigerate at 0–3°C or domestic freeze at -18°C.',
    cookingSuggestions: 'Score skin lightly, dust in cornflour, and sear in foamy butter with lemon slices and capers until skin is shattered-glass crispy.',
    allergensPlaceholder: 'Contains Fish (Barramundi).',
    originPlaceholder: 'Australian Ocean Aquaculture — Cone Bay WA.',
    badge: 'Crispy Skin Favourite',
    isFeatured: false
  },
  {
    id: 'wild-snapper-fillets',
    name: 'Wild-Caught Australian Ocean Snapper Fillets',
    category: 'fish',
    subCategory: 'Snapper & White Fish',
    shortDescription: 'Line-caught Australian pink snapper with mild, sweet white flesh and moist flakes.',
    fullDescription: 'Wild-caught from clean coastal reef waters. Hand-filleted by fishmongers, boneless with skin on. Highly versatile for steaming with ginger-shallot oil, grilling, or baking with Mediterranean tomatoes.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '24.00',
    weightOptions: [
      { weight: '2 x 180g Fillets (360g Pack)', serves: '2 serves', pricePlaceholder: '24.00' },
      { weight: '4 x 180g Fillets (720g Pack)', serves: '4 serves', pricePlaceholder: '45.00' }
    ],
    stockStatus: 'In Stock • Line Caught',
    cutInformation: 'Boneless snapper fillets, scaled with skin on.',
    storageInstructions: 'Keep chilled below 3°C. Consume within 2 days.',
    cookingSuggestions: 'Pan-fry in olive oil with garlic and cherry tomatoes for 3 minutes per side.',
    allergensPlaceholder: 'Contains Fish (Snapper).',
    originPlaceholder: 'Wild Caught Australian Coastal Waters.',
    badge: 'Wild Ocean Reef',
    isFeatured: false
  },
  {
    id: 'yellowfin-tuna-steaks',
    name: 'Yellowfin Tuna Loin Steaks (Sashimi Grade)',
    category: 'fish',
    subCategory: 'Tuna Steaks',
    shortDescription: 'Deep ruby-red Yellowfin Tuna steaks with firm meaty texture. Ideal for quick searing or poke bowls.',
    fullDescription: 'Sashimi-grade Yellowfin Tuna cut into thick loin steaks. Dense, meaty texture reminiscent of beef steak, with clean ocean flavor. Best enjoyed rare or medium-rare.',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '26.00',
    weightOptions: [
      { weight: '2 x 200g Steaks (400g Pack)', serves: '2 serves', pricePlaceholder: '26.00' },
      { weight: '4 x 200g Steaks (800g Pack)', serves: '4 serves', pricePlaceholder: '49.00' }
    ],
    stockStatus: 'In Stock • Sashimi Grade',
    cutInformation: 'Center-cut loin portion with all dark bloodline muscle trimmed away.',
    storageInstructions: 'Store on ice below 2°C or freeze at -18°C.',
    cookingSuggestions: 'Coat edges in toasted sesame seeds and flash-sear in a smoking pan for 45 seconds per side. Slice thin and serve with wasabi and ponzu.',
    allergensPlaceholder: 'Contains Fish (Tuna).',
    originPlaceholder: 'Wild Caught Australian Ocean Waters.',
    badge: 'Sashimi Grade',
    isFeatured: true
  },

  // ==========================================
  // SEAFOOD CATEGORY
  // ==========================================
  {
    id: 'australian-king-prawns',
    name: 'Australian Wild-Caught King Prawns (U10 Jumbo Raw)',
    category: 'seafood',
    subCategory: 'Australian Prawns',
    shortDescription: 'Jumbo wild ocean king prawns with firm, sweet meat and rich oceanic flavour.',
    fullDescription: 'Trawled from pristine Australian ocean currents and snap chilled to preserve crunch and natural sea sweetness. Thick shells and generous meat make these the ultimate prawn for sizzling garlic BBQ skewers or festive platters.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '46.00',
    weightOptions: [
      { weight: '1kg Box (Raw U10 Jumbo ~16–20 prawns)', serves: '3–4 serves', pricePlaceholder: '46.00' },
      { weight: '2kg Bulk Pack', serves: '6–8 serves', pricePlaceholder: '88.00' }
    ],
    stockStatus: 'In Stock • Jumbo U10 Grade',
    cutInformation: 'Whole shell-on raw jumbo king prawns with head intact.',
    storageInstructions: 'Store in freezer at -18°C or thaw in cold salted water immediately before cooking.',
    cookingSuggestions: 'Split down the back with a sharp knife, brush with garlic herb butter, and char on high BBQ heat for 2–3 minutes until shells turn vibrant coral pink.',
    allergensPlaceholder: 'Contains Crustacea (Wild Prawns).',
    originPlaceholder: 'Wild Caught Australian Ocean Waters.',
    badge: 'Wild Ocean Caught',
    isFeatured: true
  },
  {
    id: 'tasmanian-sea-scallops',
    name: 'Tasmanian Sea Scallops (Roe-Off Dry-Packed)',
    category: 'seafood',
    subCategory: 'Scallops',
    shortDescription: 'Plump, tender wild scallops harvested from pure cool Tasmanian coastal bays.',
    fullDescription: 'Chemical-free sea scallops with clean, translucent meat that caramelises beautifully in foaming butter without leaching water. No added water or chemical phosphates.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '26.00',
    weightOptions: [
      { weight: '500g Tub (~20–25 Scallops)', serves: '2–3 serves', pricePlaceholder: '26.00' },
      { weight: '1kg Value Tub (~40–50 Scallops)', serves: '4–6 serves', pricePlaceholder: '48.00' }
    ],
    stockStatus: 'In Stock • Dry Packed (No Water Added)',
    cutInformation: 'Fresh shucked sea scallops, dry-packed with roe removed.',
    storageInstructions: 'Keep chilled below 2°C or freeze at -18°C.',
    cookingSuggestions: 'Pat completely dry with paper towels. Sear in a screaming-hot cast iron pan with butter for 90 seconds per side until a golden crust forms with a translucent center.',
    allergensPlaceholder: 'Contains Molluscs (Scallops).',
    originPlaceholder: 'Tasmanian Australian Waters.',
    badge: 'Dry-Packed Sweetness',
    isFeatured: false
  },
  {
    id: 'australian-calamari-squid',
    name: 'Wild Australian Calamari Squid Tubes & Rings',
    category: 'seafood',
    subCategory: 'Squid & Calamari',
    shortDescription: 'Tender wild-caught Australian calamari tubes, cleaned and ready for salt & pepper dusting.',
    fullDescription: 'Freshly cleaned calamari with membrane and wings removed. Sliced into rings or scored into diamond patterns for flash frying. Naturally tender with zero rubberiness when cooked rapidly.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '18.50',
    weightOptions: [
      { weight: '500g Cleaned Tubes', serves: '2–3 serves', pricePlaceholder: '18.50' },
      { weight: '1kg Value Pack', serves: '4–6 serves', pricePlaceholder: '34.00' }
    ],
    stockStatus: 'In Stock • Hand Cleaned',
    cutInformation: 'Cleaned calamari tubes with quill and ink sac removed.',
    storageInstructions: 'Refrigerate below 3°C or freeze at -18°C.',
    cookingSuggestions: 'Score inside in a cross-hatch pattern, dust in seasoned cornflour with Szechuan pepper and sea salt, and flash-fry in hot oil for 60 seconds.',
    allergensPlaceholder: 'Contains Molluscs (Squid/Calamari).',
    originPlaceholder: 'Wild Caught Australian Coastal Waters.',
    badge: 'Salt & Pepper Favourite',
    isFeatured: false
  },
  {
    id: 'gourmet-seafood-marinara-mix',
    name: 'Fresh Gourmet Seafood Marinara Medley (500g / 1kg)',
    category: 'seafood',
    subCategory: 'Mixed Seafood Marinara',
    shortDescription: 'Premium ocean mix of king prawn pieces, tender calamari rings, salmon chunks, and plump scallops.',
    fullDescription: 'Hand-blended seafood medley prepared with real fillet chunks and whole shellfish. Perfect for rich tomato marinara pasta, Spanish paella, and seafood chowders.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '22.50',
    weightOptions: [
      { weight: '500g Fresh Medley Pack', serves: '2–3 serves', pricePlaceholder: '22.50' },
      { weight: '1kg Family Pasta Pack', serves: '4–6 serves', pricePlaceholder: '41.00' }
    ],
    stockStatus: 'In Stock • Hand Blended Fresh',
    cutInformation: 'Combination of salmon fillet bites, wild calamari rings, prawn cutlets, and sea scallops.',
    storageInstructions: 'Keep chilled below 3°C. Consume within 2 days or freeze immediately.',
    cookingSuggestions: 'Simmer in garlic, white wine, chili, and crushed San Marzano tomatoes for 4–5 minutes until just cooked through, toss with al dente linguine.',
    allergensPlaceholder: 'Contains Fish, Crustacea (Prawns), Molluscs (Squid, Scallops).',
    originPlaceholder: 'Australian & Sustainably Sourced Seafood.',
    badge: 'Pasta & Paella Master',
    isFeatured: false
  },

  // ==========================================
  // ARTISAN SAUSAGES CATEGORY
  // ==========================================
  {
    id: 'traditional-beef-bbq-snags',
    name: 'Traditional Butcher Beef BBQ Sausages (Natural Casings)',
    category: 'sausages',
    subCategory: 'Classic Beef BBQ',
    shortDescription: 'Australian butcher sausages made with coarse-ground beef in natural hog casings.',
    fullDescription: 'The quintessential Aussie barbecue staple. Coarsely ground Australian beef trim with cracked pepper, sea salt, and minimal breadcrumb in natural casings for great snap and zero bursting.',
    image: 'https://images.unsplash.com/photo-1597652758151-512918809489?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.50',
    weightOptions: [
      { weight: '1kg Pack (~12 Sausages)', serves: '4–6 serves', pricePlaceholder: '16.50' },
      { weight: '2kg Family BBQ Pack (~24 Sausages)', serves: '8–12 serves', pricePlaceholder: '30.00' },
      { weight: '5kg Club & Catering Box (~60 Sausages)', serves: '25+ serves', pricePlaceholder: '68.00' }
    ],
    stockStatus: 'In Stock • Hand Linked Daily',
    cutInformation: 'Natural hog casings linked by hand with coarse beef mince.',
    storageInstructions: 'Refrigerate at 0–4°C. Freeze within 3 days for up to 3 months.',
    cookingSuggestions: 'Cook gently on medium-low grill heat, turning frequently for 12–15 minutes to allow fat to render smoothly without splitting skins.',
    allergensPlaceholder: 'Contains Gluten (Wheat), Sulphites (Preservative 223).',
    originPlaceholder: '100% Australian Beef — Handcrafted in NSW 2642.',
    badge: 'Aussie BBQ Staple',
    isFeatured: true
  },
  {
    id: 'gourmet-italian-pork-sausages',
    name: 'Gourmet Italian Pork & Fennel Sausages (Tuscan Recipe)',
    category: 'sausages',
    subCategory: 'Gourmet Italian Pork',
    shortDescription: 'Rustic coarse pork sausages seasoned with whole toasted fennel seed and garlic.',
    fullDescription: 'Handcrafted artisan Italian snags. Made from prime Australian pork shoulder and belly cuts with cracked black pepper, toasted fennel seeds, and fresh garlic in natural casings.',
    image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '18.90',
    weightOptions: [
      { weight: '1kg Pack (~10 Thick Sausages)', serves: '4–5 serves', pricePlaceholder: '18.90' },
      { weight: '2kg Pack (~20 Thick Sausages)', serves: '8–10 serves', pricePlaceholder: '35.00' }
    ],
    stockStatus: 'In Stock • Artisan Tuscan Recipe',
    cutInformation: '100% Australian pork shoulder, natural casing, coarse grind.',
    storageInstructions: 'Keep chilled at 0–4°C. Freeze at -18°C.',
    cookingSuggestions: 'Grill whole on the barbecue, or squeeze meat out of casings to form rustic meatballs for authentic Italian pasta sauces and ragù.',
    allergensPlaceholder: 'Contains Sulphites. Gluten-Free Recipe.',
    originPlaceholder: 'Australian Farm-Raised Pork — NSW 2642 Butchery.',
    badge: 'Artisan Crafted',
    isFeatured: false
  },
  {
    id: 'lamb-rosemary-garlic-sausages',
    name: 'Pasture-Fed Lamb, Rosemary & Roasted Garlic Sausages',
    category: 'sausages',
    subCategory: 'Lamb, Mint & Rosemary',
    shortDescription: 'Sweet Australian lamb blended with fresh garden rosemary and roasted garlic cloves.',
    fullDescription: 'A sophisticated gourmet sausage. Ground from pasture-fed Australian lamb trim with aromatic rosemary, roasted garlic, and cracked pepper in natural sheep casings.',
    image: 'https://images.unsplash.com/photo-1597652758151-512918809489?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '19.50',
    weightOptions: [
      { weight: '1kg Pack (~10 Sausages)', serves: '4–5 serves', pricePlaceholder: '19.50' },
      { weight: '2kg Value Pack (~20 Sausages)', serves: '8–10 serves', pricePlaceholder: '36.50' }
    ],
    stockStatus: 'In Stock • Gourmet Blend',
    cutInformation: 'Coarsely minced Australian lamb trim in natural casings.',
    storageInstructions: 'Refrigerate at 0–4°C.',
    cookingSuggestions: 'Grill over medium heat and serve alongside creamy mashed potatoes and rich onion gravy.',
    allergensPlaceholder: 'Contains Sulphites. Gluten-Free recipe.',
    originPlaceholder: 'Pasture-Fed Australian Lamb — NSW 2642.',
    badge: 'Gourmet Selection',
    isFeatured: false
  },
  {
    id: 'honey-pork-chipolatas',
    name: 'Aussie Honey & Pork Breakfast Chipolatas',
    category: 'sausages',
    subCategory: 'Chipolatas',
    shortDescription: 'Thin breakfast chipolatas lightly sweetened with pure Australian honey.',
    fullDescription: 'A weekend breakfast and kid-friendly favorite. Thinly linked in delicate sheep casings with pure Australian clover honey and mild herbs.',
    image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '17.50',
    weightOptions: [
      { weight: '1kg Pack (~18–20 Chipolatas)', serves: '5–6 serves', pricePlaceholder: '17.50' },
      { weight: '2kg Family Pack (~38–40 Chipolatas)', serves: '10–12 serves', pricePlaceholder: '32.00' }
    ],
    stockStatus: 'In Stock • Kid-Friendly',
    cutInformation: 'Thin sheep casing chipolatas with lean Australian pork and natural honey.',
    storageInstructions: 'Refrigerate at 0–4°C. Freeze up to 3 months.',
    cookingSuggestions: 'Pan-fry in butter over medium heat for 6–8 minutes until golden.',
    allergensPlaceholder: 'Contains Gluten, Sulphites, Pure Australian Honey.',
    originPlaceholder: 'Australian Pork — NSW 2642.',
    badge: 'Breakfast Favourite',
    isFeatured: false
  },

  // ==========================================
  // CURATED MEAT PACKS CATEGORY
  // ==========================================
  {
    id: 'ultimate-family-essentials-pack',
    name: 'Ultimate Family Essentials Meat Box (~7.5kg Value Pack)',
    category: 'packs',
    subCategory: 'Family Weekday Essentials',
    shortDescription: 'Curated value box of everyday Australian butcher cuts for two weeks of family meals.',
    fullDescription: 'Includes: 2.0kg Grass-Fed Black Angus Beef Mince, 1.0kg Black Angus Rump Steaks (4 x 250g), 1.5kg Free-Range Chicken Breast Fillets, 1.0kg Traditional Beef BBQ Sausages, and 2.0kg Australian Pork Loin Cutlets. All cuts individually vacuum-sealed for modular freezer storage.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '169.00',
    weightOptions: [
      { weight: 'Standard Family Box (~7.5kg)', serves: '14+ family dinners', pricePlaceholder: '169.00' },
      { weight: 'Jumbo Mega Box (~12.5kg)', serves: '25+ family dinners', pricePlaceholder: '265.00' }
    ],
    stockStatus: 'In Stock • Best Value Box',
    cutInformation: 'Multi-cut bundle, individually labelled and vacuum sealed in leak-proof cryovac barrier pouches.',
    storageInstructions: 'Keep refrigerated or freeze portions immediately at -18°C.',
    cookingSuggestions: 'Versatile weekly rotation: spaghetti bolognese, Friday steak night, chicken schnitzels, and weekend barbecue.',
    allergensPlaceholder: 'See individual product packaging for allergen declarations (Sausages contain gluten/sulphites; whole cuts are allergen-free).',
    originPlaceholder: '100% Australian Sourced — Prepared in NSW 2642.',
    badge: 'Best Value Pack',
    isFeatured: true
  },
  {
    id: 'aussie-weekend-bbq-pack',
    name: 'Aussie Weekend BBQ Feast Box (~6.0kg)',
    category: 'packs',
    subCategory: 'Weekend BBQ Party Pack',
    shortDescription: 'Everything needed to feed a hungry gathering: burgers, steaks, wings, and sausages.',
    fullDescription: 'Includes: 4 x 350g Black Angus Ribeye Steaks (1.4kg), 8 x 160g Handcrafted Beef Burger Patties (1.28kg), 1.0kg Gourmet Italian Pork & Fennel Sausages, 1.0kg Traditional Beef BBQ Sausages, and 1.5kg Free-Range Chicken Wings & Drumettes. Packed with frozen gel packs for same-day weekend grilling.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '145.00',
    weightOptions: [
      { weight: 'BBQ Party Box (~6.0kg)', serves: '8–12 people', pricePlaceholder: '145.00' },
      { weight: 'Mega Entertainer Box (~10.0kg)', serves: '16–20 people', pricePlaceholder: '225.00' }
    ],
    stockStatus: 'In Stock • Weekend Ready',
    cutInformation: 'Fresh party portions trimmed for quick high-heat grilling.',
    storageInstructions: 'Chilled cold-chain delivery, ready to cook or freeze.',
    cookingSuggestions: 'Fire up the barbecue to medium-high heat with direct and indirect cooking zones. Cook steaks fast and sausages gently.',
    allergensPlaceholder: 'Contains Gluten & Sulphites in sausages and burger patties.',
    originPlaceholder: '100% Australian Beef, Pork & Poultry — NSW 2642.',
    badge: 'Entertainer Pick',
    isFeatured: false
  },
  {
    id: 'steak-connoisseur-pack',
    name: 'Steak Connoisseur Dry-Aged & Wagyu Tasting Box (~4.5kg)',
    category: 'packs',
    subCategory: 'Steak Connoisseur Pack',
    shortDescription: 'The ultimate luxury steak box featuring 21-day dry-aged Scotch Fillets, F1 Wagyu, and King T-Bones.',
    fullDescription: 'Includes: 2 x 350g Black Angus Scotch Fillets (700g), 2 x 300g F1 Wagyu Striploins MBS 6-7+ (600g), 2 x 450g King Cut T-Bone Steaks (900g), 2 x 200g Centre-Cut Eye Fillets (400g), and 1 x 1.3kg Giant F1 Wagyu Tomahawk Steak MBS 6+. Cut by master butchers.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '249.00',
    weightOptions: [
      { weight: 'Luxury Tasting Box (~4.5kg Prime Steaks)', serves: '10–12 steak lovers', pricePlaceholder: '249.00' }
    ],
    stockStatus: 'In Stock • Premium Reserve',
    cutInformation: 'Individually portioned steakhouse grade cuts, wet and dry-aged for optimal tenderness.',
    storageInstructions: 'Delivered in thermal packaging. Refrigerate at 0–3°C or freeze.',
    cookingSuggestions: 'Allow steaks to bloom at room temp for 20 mins. Sear in screaming-hot cast iron with butter and sea salt.',
    allergensPlaceholder: '100% Australian Beef & Wagyu. Nil allergens.',
    originPlaceholder: 'Black Angus & F1 Wagyu — NSW 2642 Pastoral Stations.',
    badge: 'Steakhouse Grade',
    isFeatured: true
  },
  {
    id: 'lean-meal-prep-box',
    name: 'High-Protein Lean Athlete & Meal Prep Box (~6.5kg)',
    category: 'packs',
    subCategory: 'Lean Meal Prep Box',
    shortDescription: 'Ultra-lean proteins for bodybuilders, athletes, and healthy weekly meal preppers.',
    fullDescription: 'Includes: 2.5kg Skinless Free-Range Chicken Breast Fillets, 2.0kg Extra Lean Beef Mince (90/10), 1.0kg Black Angus Beef Stir-Fry Strips, and 1.0kg Tasmanian Atlantic Salmon Portions (5 x 200g). Maximum protein yield, zero excess trim.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '155.00',
    weightOptions: [
      { weight: 'Weekly Athlete Box (~6.5kg)', serves: '18–22 high-protein meals', pricePlaceholder: '155.00' }
    ],
    stockStatus: 'In Stock • Extra Lean Trim',
    cutInformation: '100% skinless, lean-trimmed chicken, ultra-lean beef, and fresh salmon portions.',
    storageInstructions: 'Refrigerate at 0–3°C or batch cook and freeze meals.',
    cookingSuggestions: 'Batch bake chicken breasts with lemon pepper, brown lean mince with taco spices, and sear salmon fresh.',
    allergensPlaceholder: 'Contains Fish (Salmon). Poultry and beef are allergen-free.',
    originPlaceholder: '100% Australian Lean Meats — NSW 2642.',
    badge: 'Athlete Fuel',
    isFeatured: false
  },

  // ==========================================
  // RAW PET FOOD CATEGORY
  // ==========================================
  {
    id: 'pet-raw-beef-mince',
    name: '100% Preservative-Free Raw Beef Pet Mince (1kg / 5kg / 10kg)',
    category: 'pet-food',
    subCategory: 'Raw Beef Pet Mince',
    shortDescription: '100% preservative-free, chemical-free Australian raw beef pet mince freshly ground from lean trims.',
    fullDescription: 'Crafted specifically for raw-fed canine and feline health. Sourced from 100% Australian grass-fed beef trims with natural fat, sinew, and nutrient balance. Contains zero sulphur dioxide, colour enhancers, fillers, binders, or synthetic preservatives.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '8.50',
    weightOptions: [
      { weight: '1kg Roll / Tub', serves: 'Daily pet portion', pricePlaceholder: '8.50' },
      { weight: '5kg Value Box (5 x 1kg Rolls)', serves: 'Weekly pet supply', pricePlaceholder: '38.00' },
      { weight: '10kg Breeder Pack (10 x 1kg Rolls)', serves: 'Fortnightly supply', pricePlaceholder: '69.00' }
    ],
    stockStatus: 'In Stock • Fresh Ground Daily',
    cutInformation: 'Freshly minced Australian beef muscle trims, rich in natural proteins and enzymes with zero chemical washes.',
    storageInstructions: 'Refrigerate below 4°C for up to 3 days, or portion and freeze at -18°C for up to 6 months.',
    cookingSuggestions: 'Serve raw in accordance with canine BARF raw-feeding protocols. Thaw safely in the refrigerator.',
    allergensPlaceholder: '100% Natural Raw Beef Meat — Preservative-Free & Sulphur-Free Pet Food.',
    originPlaceholder: '100% Australian Grass-Fed Beef — NSW 2642.',
    badge: '100% Natural Raw',
    isFeatured: true
  },
  {
    id: 'pet-beef-marrow-bones',
    name: 'Raw Beef Marrow Recreational Bones (Clean Sawn)',
    category: 'pet-food',
    subCategory: 'Raw Marrow Bones',
    shortDescription: 'Clean-cut raw beef femur marrow bones for canine dental health, recreation, and mental enrichment.',
    fullDescription: 'Thick-walled Australian beef marrow bones machine-sawn into clean, accessible lengths. Natural raw bones provide essential bioavailable calcium, minerals, and rich marrow, while cleaning tartar and plaque from teeth under human supervision.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '12.00',
    weightOptions: [
      { weight: 'Pack of 3 Bones (~1.2kg)', serves: 'Recreational chews', pricePlaceholder: '12.00' },
      { weight: 'Bulk Bag of 8 Bones (~3.2kg)', serves: 'Multi-pet value bag', pricePlaceholder: '28.00' }
    ],
    stockStatus: 'In Stock • Sawn Daily',
    cutInformation: 'Centre-cut beef femur bones containing natural nutritious bone marrow.',
    storageInstructions: 'Keep frozen at -18°C. Can be fed frozen outdoors on warm days for a cooling treat.',
    cookingSuggestions: 'NEVER cook marrow bones. Always feed raw and supervised to prevent splintering.',
    allergensPlaceholder: '100% Natural Raw Beef Bone — Pet Animal Consumption Only.',
    originPlaceholder: 'Australian Beef Cattle — NSW 2642.',
    badge: 'Dental & Enrichment',
    isFeatured: true
  },
  {
    id: 'pet-chicken-necks',
    name: 'Fresh Raw Chicken Necks & Frames for Pets (1kg / 3kg)',
    category: 'pet-food',
    subCategory: 'Chicken Necks & Frames',
    shortDescription: 'Soft, digestible raw poultry bones rich in natural calcium and glucosamine for dogs and cats.',
    fullDescription: 'An ideal source of natural chondroitin, glucosamine, and calcium for puppies, adult dogs, and cats. Free from artificial preservatives and chemical washes, packed fresh daily.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '7.50',
    weightOptions: [
      { weight: '1kg Bag (~15–20 Necks)', serves: 'Daily raw feeding', pricePlaceholder: '7.50' },
      { weight: '3kg Bulk Value Pack', serves: 'Multi-meal feeding', pricePlaceholder: '19.50' },
      { weight: '5kg Breeder Carton', serves: 'Multi-pet supply', pricePlaceholder: '29.00' }
    ],
    stockStatus: 'In Stock • Fresh Arrivals Daily',
    cutInformation: 'Whole fresh Australian chicken necks with soft digestible cartilage and meat.',
    storageInstructions: 'Refrigerate below 4°C or domestic freeze at -18°C.',
    cookingSuggestions: 'Always feed raw. Cooked poultry bones can splinter and are dangerous. Feed raw only.',
    allergensPlaceholder: '100% Raw Australian Poultry — Preservative-Free.',
    originPlaceholder: 'Australian Free-Range Poultry — NSW Regional Supply.',
    badge: 'Joints & Calcium',
    isFeatured: false
  },
  {
    id: 'pet-raw-beef-liver-heart',
    name: 'Nutrient-Dense Raw Beef Liver & Heart Chunks (Canine Superfood)',
    category: 'pet-food',
    subCategory: 'Organ & Liver Treats',
    shortDescription: 'Fresh diced raw beef liver and heart packed with bioavailable Vitamin A, B-complex, and taurine.',
    fullDescription: 'Essential organ components for complete raw BARF feeding. 50/50 blend of freshly diced Australian grass-fed beef liver and ox heart. Packed with natural vitamins, minerals, and amino acids vital for canine vitality and shiny coats.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '9.50',
    weightOptions: [
      { weight: '1kg Diced Organ Tub', serves: '10–14 days raw organ supplement', pricePlaceholder: '9.50' },
      { weight: '3kg Bulk Value Tub', serves: 'Monthly supply', pricePlaceholder: '25.00' }
    ],
    stockStatus: 'In Stock • 100% Pure Organ',
    cutInformation: 'Freshly diced 50% beef liver and 50% beef heart muscle with zero fillers.',
    storageInstructions: 'Keep chilled below 4°C or freeze at -18°C.',
    cookingSuggestions: 'Incorporate as 10% of your dog\'s daily raw meal intake, or dehydrate into wholesome single-ingredient training treats.',
    allergensPlaceholder: '100% Raw Australian Beef Organ Meat. Nil additives.',
    originPlaceholder: 'Pasture-Fed Australian Cattle — NSW 2642.',
    badge: 'Canine Superfood',
    isFeatured: false
  },

  // ==========================================
  // BEEF & MEAT OFFAL / SPECIALTY CUTS
  // ==========================================
  {
    id: 'beef-cheeks-slow-cook',
    name: 'Australian Black Angus Beef Cheeks (Clean-Trimmed)',
    category: 'offal',
    subCategory: 'Beef Cheeks',
    shortDescription: 'Tender, collagen-dense Black Angus beef cheeks, trimmed and ready for slow braising.',
    fullDescription: 'Prized by high-end bistros and home chefs. Rich in natural gelatin and connective tissue that yields melting tenderness when braised low and slow with aromatics, garlic, and red wine for 3.5 to 4 hours.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '14.50',
    weightOptions: [
      { weight: '500g Pack (~2 Cheeks)', serves: '2 serves', pricePlaceholder: '14.50' },
      { weight: '1kg Pack (~4 Cheeks)', serves: '4–5 serves', pricePlaceholder: '26.90' },
      { weight: '2kg Bulk Pack (~8 Cheeks)', serves: '8–10 serves', pricePlaceholder: '51.00' }
    ],
    stockStatus: 'In Stock • Hand-Trimmed',
    cutInformation: 'Trimmed ox cheek, exterior silver skin cleaned, vacuum-sealed in barrier pouches.',
    storageInstructions: 'Refrigerate at 0–4°C or freeze up to 6 months.',
    cookingSuggestions: 'Brown deeply in a heavy Dutch oven, then slow braise for 3.5 hours at 150°C with red wine, beef stock, mirepoix vegetables, and fresh thyme.',
    allergensPlaceholder: '100% Australian Beef. Nil declared allergens.',
    originPlaceholder: 'Black Angus Beef — NSW 2642 Pastoral Stations.',
    badge: 'Slow-Cook Master',
    isFeatured: true
  },
  {
    id: 'pasture-fed-oxtail',
    name: 'Premium Australian Beef Oxtail (Cross-Cut Pieces)',
    category: 'offal',
    subCategory: 'Oxtail',
    shortDescription: 'Meaty, cross-cut beef oxtail sections for deeply rich stews, soups, and ragùs.',
    fullDescription: 'Hand-jointed by our butchers into uniform pieces. The center bone and rich marrow infuse cooking liquids with incredible depth, body, and glossy gelatin. The holy grail of cold-weather slow cooking.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '29.90',
    weightOptions: [
      { weight: '1kg Cross-Cut Pieces', serves: '3–4 serves', pricePlaceholder: '29.90' },
      { weight: '2kg Family Stew Pack', serves: '6–8 serves', pricePlaceholder: '57.00' }
    ],
    stockStatus: 'In Stock • Meaty Jointed Pieces',
    cutInformation: 'Cross-cut oxtail sections with excess exterior fat cleanly trimmed.',
    storageInstructions: 'Refrigerate at 0–4°C. Freeze at -18°C.',
    cookingSuggestions: 'Dust in seasoned flour, sear thoroughly until dark mahogany, and simmer gently in a rich tomato, red wine, and beef stock broth for 4 hours until meat slips off the vertebrae.',
    allergensPlaceholder: '100% Australian Bone-In Beef. Nil allergens.',
    originPlaceholder: 'Pasture-Fed Australian Cattle — NSW 2642.',
    badge: 'Rich & Gelatinous',
    isFeatured: true
  },
  {
    id: 'beef-marrow-bones-canoe',
    name: 'Artisan Canoe-Cut Beef Marrow Bones (Lengthwise Split)',
    category: 'offal',
    subCategory: 'Marrow Bones',
    shortDescription: 'Lengthwise split beef femur bones exposing pure, rich culinary bone marrow.',
    fullDescription: 'Lengthwise split (canoe cut) by our master butchers for effortless restaurant-style oven roasting with herbs or making rich, collagen-dense nutrient-packed bone broth.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '16.50',
    weightOptions: [
      { weight: '2 Split Bones (~700g)', serves: '2 serves', pricePlaceholder: '16.50' },
      { weight: '4 Split Bones (~1.4kg)', serves: '4 serves', pricePlaceholder: '31.00' },
      { weight: 'Round Cross-Cut Bones (2kg Soup Pack)', serves: 'Bone broth batch', pricePlaceholder: '19.90' }
    ],
    stockStatus: 'In Stock • Canoe Split Daily',
    cutInformation: 'Canoe split femur bones, washed and ready to roast.',
    storageInstructions: 'Keep chilled at 0–4°C or freeze for up to 6 months.',
    cookingSuggestions: 'Roast at 220°C for 18–20 minutes until marrow is golden, bubbling, and aromatic. Top with a fresh flat-leaf parsley and shallot salad, spread on toasted crusty sourdough with sea salt flakes.',
    allergensPlaceholder: '100% Australian Beef Marrow Bones.',
    originPlaceholder: 'Pastoral Australian Beef — NSW 2642.',
    badge: 'Steakhouse Classic',
    isFeatured: false
  },
  {
    id: 'grass-fed-beef-liver',
    name: 'Pasture-Raised Grass-Fed Beef Liver (Thin Slices)',
    category: 'offal',
    subCategory: 'Grass-Fed Liver',
    shortDescription: 'Thinly sliced, ultra-fresh Australian beef liver packed with bioavailable vitamins and iron.',
    fullDescription: 'The original nutrient superfood. Sourced from 100% grass-fed Australian cattle, membrane-stripped and portioned thinly for quick searing with sweet caramelized onions and bacon.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '12.90',
    weightOptions: [
      { weight: '500g Thin Slices', serves: '2–3 serves', pricePlaceholder: '12.90' },
      { weight: '1kg Pack', serves: '4–6 serves', pricePlaceholder: '24.00' }
    ],
    stockStatus: 'In Stock • Membrane Stripped',
    cutInformation: 'Membrane-stripped and thinly sliced across the grain.',
    storageInstructions: 'Refrigerate at 0–4°C and cook within 2 days, or freeze immediately.',
    cookingSuggestions: 'Flash fry for 90 seconds per side in hot butter and sage. Do not overcook—best enjoyed medium-rare to keep it tender and sweet.',
    allergensPlaceholder: '100% Pure Australian Beef Liver. Nil allergens.',
    originPlaceholder: '100% Grass-Fed Australian Beef — Riverina NSW 2642.',
    badge: 'Superfood Nutrition',
    isFeatured: false
  },
  {
    id: 'beef-heart-trimmed',
    name: 'Pasture-Fed Australian Beef Heart (Clean-Trimmed)',
    category: 'offal',
    subCategory: 'Beef Heart',
    shortDescription: 'Lean, mineral-rich whole muscle meat cut from Australian grass-fed cattle. Excellent for skewers or slow cooking.',
    fullDescription: 'High in natural CoQ10, iron, and lean protein with minimal fat. Cleaned and trimmed of exterior chambers and valves by our butchers. Slices like an ultra-lean steak for Peruvian anticuchos skewers or long, tender braises.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '11.50',
    weightOptions: [
      { weight: '500g Sliced Pack', serves: '2–3 serves', pricePlaceholder: '11.50' },
      { weight: 'Whole Trimmed Heart (~1.4kg)', serves: '5–6 serves', pricePlaceholder: '22.00' }
    ],
    stockStatus: 'In Stock • Clean-Trimmed',
    cutInformation: 'Whole ox heart trimmed of excess fat and valves.',
    storageInstructions: 'Refrigerate at 0–4°C. Freeze at -18°C.',
    cookingSuggestions: 'Marinate in red wine vinegar, garlic, and aji panca chili, thread onto skewers, and char on high BBQ heat for 2 minutes per side.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens.',
    originPlaceholder: 'Australian Grass-Fed Cattle — NSW 2642.',
    badge: 'High Mineral & CoQ10',
    isFeatured: false
  },

  // ==========================================
  // WHOLESALE & COMMERCIAL FOOD SERVICE CATEGORY
  // ==========================================
  {
    id: 'wholesale-whole-striploin-primal',
    name: 'Whole Black Angus Striploin Primal (Commercial Food Service Carton)',
    category: 'wholesale',
    subCategory: 'Primal Beef Cuts',
    shortDescription: 'Full vacuum-sealed primal striploin for restaurants, caterers, and steak enthusiasts.',
    fullDescription: 'Whole cryovac primal beef striploin with intact 6mm fat cap. Wet-aged in vacuum barrier film. Ideal for commercial kitchen portioning into NY Strip steaks or whole slow roasting on wood-fired rotisserie spits.',
    image: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '280.00',
    weightOptions: [
      { weight: 'Whole Striploin (~6.5kg Primal)', serves: 'Food service primal (~20–22 steaks)', pricePlaceholder: '280.00' },
      { weight: 'Commercial Carton of 2 (~13.0kg)', serves: 'Hospitality volume carton', pricePlaceholder: '530.00' }
    ],
    stockStatus: 'In Stock • Wholesale Carton Rate',
    cutInformation: 'Primal whole striploin (sirloin), vacuum wet-aged in commercial barrier shrink bag.',
    storageInstructions: 'Store sealed between 0°C and 2°C for optimal ageing.',
    cookingSuggestions: 'Slice with a sharp butchery knife into 250g, 300g, or 400g NY Strip steaks.',
    allergensPlaceholder: '100% Unprocessed Australian Beef. Nil allergens.',
    originPlaceholder: 'Australian Black Angus — NSW 2642 Pastoral Stations.',
    badge: 'Carton Buy Price',
    isFeatured: true
  },
  {
    id: 'wholesale-whole-scotch-cube-roll',
    name: 'Whole Black Angus Cube Roll / Scotch Fillet Primal (~7.5kg)',
    category: 'wholesale',
    subCategory: 'Primal Beef Cuts',
    shortDescription: 'Whole primal ribeye cube roll for high-end steakhouses, bistros, and bulk buyers.',
    fullDescription: 'The crown jewel of commercial beef primals. 21-day wet-aged Australian Black Angus cube roll. Yields approximately 20–22 thick 350g Scotch Fillet steaks with exceptional center-eye marbling.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '385.00',
    weightOptions: [
      { weight: 'Whole Cube Roll Primal (~7.5kg)', serves: '~20–22 Ribeye Steaks', pricePlaceholder: '385.00' },
      { weight: 'Carton of 2 Primals (~15kg)', serves: 'Commercial Hospitality Carton', pricePlaceholder: '740.00' }
    ],
    stockStatus: 'In Stock • Commercial Primal',
    cutInformation: 'Primal ribeye cube roll, ribs 6–12 denuded of feather bones and backstrap.',
    storageInstructions: 'Keep in commercial refrigeration at 0–2°C.',
    cookingSuggestions: 'Portion into thick steakhouse cuts or tie with butcher twine for a majestic prime rib standing roast.',
    allergensPlaceholder: '100% Australian Beef. Nil allergens.',
    originPlaceholder: 'Riverina Pastoral Stations NSW 2642.',
    badge: 'Steakhouse Primal',
    isFeatured: false
  },
  {
    id: 'wholesale-bulk-chicken-breast',
    name: 'Bulk Free-Range Chicken Breast Commercial Carton (10kg)',
    category: 'wholesale',
    subCategory: 'Bulk Poultry',
    shortDescription: '10kg food-service carton of skinless chicken breast fillets for hospitality operators.',
    fullDescription: 'Double-bagged commercial 10kg carton of calibrated free-range chicken breasts. Consistent portion sizing for meal delivery companies, cafes, pubs, and catering kitchens with zero added water.',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '140.00',
    weightOptions: [
      { weight: '10kg Commercial Carton (Double Liner)', serves: 'Commercial food service', pricePlaceholder: '140.00' },
      { weight: '2 x 10kg Cartons (20kg Bulk)', serves: 'Volume food service', pricePlaceholder: '265.00' }
    ],
    stockStatus: 'In Stock • Commercial Rate',
    cutInformation: 'Bulk calibrated fillets, double food-grade heavy barrier liner.',
    storageInstructions: 'Refrigerate at 0–2°C.',
    cookingSuggestions: 'Batch sous-vide, grill, or slice for commercial meal prep.',
    allergensPlaceholder: '100% Australian Chicken. Nil allergens.',
    originPlaceholder: 'Australian Free-Range Poultry — NSW Regional Supply.',
    badge: 'Commercial Rate',
    isFeatured: false
  },
  {
    id: 'wholesale-full-pork-belly-carton',
    name: 'Full Australian Pork Belly Commercial Case (~12kg Whole)',
    category: 'wholesale',
    subCategory: 'Custom Portioning',
    shortDescription: 'Whole unbroken Australian pork bellies with skin on for smokehouses, butchers, and restaurants.',
    fullDescription: 'Wholesale commercial case containing two full-sheet unbroken Australian pork bellies with flat fat distribution and firm rind. Perfect for artisan bacon curing, roasting, or commercial barbecue pitmasters.',
    image: 'https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=800&auto=format&fit=crop',
    defaultPrice: '210.00',
    weightOptions: [
      { weight: 'Commercial Case (~12kg / 2 Whole Bellies)', serves: 'Smokehouses & Caterers', pricePlaceholder: '210.00' }
    ],
    stockStatus: 'In Stock • Whole Case',
    cutInformation: 'Two full unbroken pork belly sheets with rind on, vacuum sealed.',
    storageInstructions: 'Store refrigerated at 0–2°C.',
    cookingSuggestions: 'Cure into house-made smoked bacon, score for crispy pork belly roasts, or roll into traditional Italian porchetta.',
    allergensPlaceholder: '100% Australian Pork. Nil allergens.',
    originPlaceholder: 'Australian Farm-Raised Pork — NSW/VIC Basin.',
    badge: 'Commercial Belly Case',
    isFeatured: false
  }
];

// Curated Featured Products highlighting Australian Carcass Shares across Beef, Lamb, Pork & Chicken
export const FEATURED_PRODUCTS: Product[] = [
  ALL_PRODUCTS.find((p) => p.id === 'quarter-black-angus')!,
  ALL_PRODUCTS.find((p) => p.id === 'half-black-angus')!,
  ALL_PRODUCTS.find((p) => p.id === 'quarter-pasture-lamb')!,
  ALL_PRODUCTS.find((p) => p.id === 'half-pasture-lamb')!,
  ALL_PRODUCTS.find((p) => p.id === 'quarter-australian-pork')!,
  ALL_PRODUCTS.find((p) => p.id === 'half-australian-pork')!,
  ALL_PRODUCTS.find((p) => p.id === 'quarter-freerange-chicken')!,
  ALL_PRODUCTS.find((p) => p.id === 'half-freerange-chicken')!,
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
