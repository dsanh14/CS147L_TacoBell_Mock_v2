import type { ImageSourcePropType } from 'react-native';

export type MenuItem = {
  id: string;
  restaurant: {
    name: string;
    cuisine: string;
    distance: string;
    logo: ImageSourcePropType;
  };
  name: string;
  description: string;
  calories: number;
  price: number;
  protein: string;
  image: ImageSourcePropType;
};

export const menuItem: MenuItem = {
  id: '1',
  restaurant: {
    name: 'Taco Bell',
    cuisine: 'Mexican · Fast Food',
    distance: '0.3 mi',
    logo: { uri: 'https://raw.githubusercontent.com/dsanh14/CS147L_TacoBell_Mock_v2/media/assets/taco-bell-logo.png' },
  },
  name: 'Cheesy Double Beef Burrito',
  description: 'A warm flour tortilla filled with seasoned beef, nacho cheese, reduced-fat sour cream, and crunchy red strips.',
  calories: 520,
  price: 3.99,
  protein: 'Beef',
  image: { uri: 'https://raw.githubusercontent.com/dsanh14/CS147L_TacoBell_Mock_v2/media/assets/burrito.jpg' },
};
