export interface Product {
    id: number;
    name: string;
     category:string;
    price: number;
    specs:string;
    image:string;
    description:string;
    rating:number;
    inStock?:boolean;
}
export const products:Product[] = [
  // Smartphones
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    category: 'smartphone',
    price: 1150000,
    specs: '256GB',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg',
    description: 'The ultimate iPhone with Pro camera system, A16 Bionic chip, and stunning Super Retina XDR display.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23 Ultra',
    category: 'smartphone',
    price: 980000,
    specs: '12GB/512GB',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
    description: 'Premium Android flagship with S Pen, advanced camera system, and powerful performance.',
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: 'Infinix Zero Ultra',
    category: 'smartphone',
    price: 420000,
    specs: 'Standard',
    image: 'https://skit.ng/wp-content/uploads/2022/11/Infinix-Zero-Ultra-X6820-8GB-RAM-256GB-ROM-Skitstore.jpg.webp',
    description: 'Affordable flagship with premium features and excellent camera performance.',
    rating: 4.3,
    inStock: true
  },
  {
    id: 4,
    name: 'Tecno Phantom X2 Pro',
    category: 'smartphone',
    price: 550000,
    specs: 'Standard',
    image: 'https://www.naijaandroidarena.com/wp-content/uploads/2024/07/tecno-phantom-x2-pro-full-specs-naija-android-arena-copy.jpg',
    description: 'Advanced photography smartphone with portrait retractable lens and premium design.',
    rating: 4.4,
    inStock: true
  },
  {
    id: 5,
    name: 'Xiaomi 13 Pro',
    category: 'smartphone',
    price: 870000,
    specs: 'Standard',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-pro-black.jpg',
    description: 'Flagship smartphone with Leica cameras, Snapdragon 8 Gen 2, and fast charging.',
    rating: 4.6,
    inStock: true
  },
  // Laptops
  {
    id: 6,
    name: 'Apple MacBook Pro 14"',
    category: 'laptop',
    price: 1850000,
    specs: 'M2 Pro, 512GB',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    description: 'Professional laptop with M2 Pro chip, stunning Liquid Retina XDR display, and all-day battery.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 7,
    name: 'Dell XPS 13',
    category: 'laptop',
    price: 1200000,
    specs: 'Core i7, 16GB RAM, 512GB SSD',
    image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=678&qlt=100,1&resMode=sharp2&size=678,402&chrss=full',
    description: 'Premium ultrabook with InfinityEdge display, powerful performance, and sleek design.',
    rating: 4.6,
    inStock: true
  },
  {
    id: 8,
    name: 'HP Spectre x360',
    category: 'laptop',
    price: 1450000,
    specs: 'Core i7, 16GB RAM, 1TB SSD',
    image: 'https://hp.widen.net/content/phufha01v0/webp/phufha01v0.png?dpi=72&color=ffffff00&w=270',
    description: 'Convertible laptop with 360-degree hinge, premium materials, and long battery life.',
    rating: 4.5,
    inStock: true
  },
  {
    id: 9,
    name: 'Asus ZenBook 14',
    category: 'laptop',
    price: 1050000,
    specs: 'Ryzen 7, 16GB RAM, 512GB SSD',
    image: 'https://dlcdnwebimgs.asus.com/files/media/ea5bde46-a344-49d0-8bcc-befd7351d88b/v2/features/images/large/2x/kv/kv.webp',
    description: 'Powerful and portable laptop with AMD Ryzen processor and stunning display.',
    rating: 4.4,
    inStock: true
  },
  {
    id: 10,
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptop',
    price: 1380000,
    specs: 'Business Laptop',
    image: 'https://p3-ofp.static.pub//fes/cms/2024/07/05/umcrxcnsm2br1itju6gvundeb9s6tf364734.png',
    description: 'Business-grade laptop with legendary durability, security features, and professional design.',
    rating: 4.7,
    inStock: true
  }
];