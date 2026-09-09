export interface Product {
  id: string;
  name: string;
  slug?: string;
  category: 'beef' | 'chicken' | 'fish' | 'pork' | 'lamb' | 'seafood' | 'sausages' | 'packs' | 'wholesale' | 'pet-food' | 'offal';
  subCategory?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  weightOptions: {
    weight: string;
    serves: string;
    pricePlaceholder: string;
  }[];
  defaultPrice: string;
  stockStatus: string;
  cutInformation: string;
  storageInstructions: string;
  cookingSuggestions: string;
  allergensPlaceholder: string;
  originPlaceholder: string;
  badge?: string;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  selectedWeight: string;
  quantity: number;
  pricePerUnit: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  slug: string;
  excerpt: string;
  readingTime: string;
  image: string;
  content: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  image: string;
  shortDescription: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  introCopy: string;
  subcategories: string[];
  faqSuggestions: { question: string; answer: string }[];
}

export interface TrustpilotReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  content: string;
  productCut?: string;
  helpfulCount?: number;
}
