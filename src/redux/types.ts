export interface CartItem {
    id: number;
    quantity: number;
    price: number;
    name: string;  // Add the missing properties
    image: string; // Add the missing properties
  }  
  export interface CartState {
    items: CartItem[];
    coupon: string | null;
  }
  