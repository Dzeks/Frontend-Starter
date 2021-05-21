export type ProductDto = {
  id: number;
  name: string;
  description: string;
  defaultImage: string;
  images: string[];
  price: number;
  discount: number;
}

export type UserDto = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  avatar: string;
  email: string;
  address: {
    country: string;
    city: string;
    zip: string;
    street: string;
  };
  orders: {
    id: number;
    products: {
      id: number;
      quantity: number;
    }[];
  };
  role: 'ADMIN' | 'CUSTOMER'; // Role is based on i % 2
};

export type CartDto = {
  id: number; // User id
  products: {
    id: number;
    quantity: number;
  }[];
};

export type ProductFilterDto = {
  q: string;
  _page: number;
  _limit: number;
}
