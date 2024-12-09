export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'curtains' | 'accessories';
  description: string;
  features: string[];
  material?: string;
  dimensions?: {
    width: number;
    height: number;
    unit: 'cm' | 'inches';
  };
  images: string[];
  colors: string[];
  reviews: Review[];
  relatedProducts: string[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ConsultationType {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
}

export interface BookingSlot {
  date: string;
  time: string;
  available: boolean;
}