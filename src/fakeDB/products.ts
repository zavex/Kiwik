export interface ProductData {
  _id: string;
  title: string;
  imgUrl: string;
  price: number;
  discountPercent: number;
  discountPrice: number;
  offerText: string;
  inStock: boolean;
  category: string;
  ratings: {
    star: number;
    totalReviews: number;
  };
}

const products: ProductData[] = [
  {
    _id: '1',
    title: 'iPhone 13 Pro',
    imgUrl: 'https://kuub-archivos.s3.us-east-2.amazonaws.com/assets/iphone.jpg',
    price: 999,
    discountPercent: 899,
    discountPrice: 899,
    offerText: 'The iPhone 13 Pro is a powerful device with an advanced camera system and A15 Bionic chip',
    inStock: true,
    category: "Electronicos",
    ratings: {
      totalReviews: 1200,
      star: 4.7,
    },
  },
  {
    _id: '2',
    title: 'iPhone 13 Pro',
    imgUrl: 'https://kuub-archivos.s3.us-east-2.amazonaws.com/assets/iphone.jpg',
    price: 999,
    discountPercent: 899,
    discountPrice: 899,
    offerText: 'The iPhone 13 Pro is a powerful device with an advanced camera system and A15 Bionic chip',
    inStock: true,
    category: "Electronicos",
    ratings: {
      totalReviews: 1200,
      star: 4.7,
    },
  },
  {
    _id: '3',
    title: 'iPhone 13 Pro',
    imgUrl: 'https://kuub-archivos.s3.us-east-2.amazonaws.com/assets/iphone.jpg',
    price: 999,
    discountPercent: 899,
    discountPrice: 899,
    offerText: 'The iPhone 13 Pro is a powerful device with an advanced camera system and A15 Bionic chip',
    inStock: true,
    category: "Electronicos",
    ratings: {
      totalReviews: 1200,
      star: 4.7,
    },
  },
  {
    _id: '4',
    title: 'iPhone 13 Pro',
    imgUrl: 'https://kuub-archivos.s3.us-east-2.amazonaws.com/assets/iphone.jpg',
    price: 999,
    discountPercent: 899,
    discountPrice: 899,
    offerText: 'The iPhone 13 Pro is a powerful device with an advanced camera system and A15 Bionic chip',
    inStock: true,
    category: "Electronicos",
    ratings: {
      totalReviews: 1200,
      star: 4.7,
    },
  },
  {
    _id: '5',
    title: 'iPhone 13 Pro',
    imgUrl: 'https://kuub-archivos.s3.us-east-2.amazonaws.com/assets/iphone.jpg',
    price: 999,
    discountPercent: 899,
    discountPrice: 899,
    offerText: 'The iPhone 13 Pro is a powerful device with an advanced camera system and A15 Bionic chip',
    inStock: true,
    category: "Electronicos",
    ratings: {
      totalReviews: 1200,
      star: 4.7,
    },
  }  
];

export default products;
