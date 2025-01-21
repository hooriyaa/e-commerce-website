export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
  color?: string;
  size?: string;
}