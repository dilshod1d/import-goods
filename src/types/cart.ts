import { TieredPrice } from './tieredPrice';

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  moq: number;
  tieredPricing: TieredPrice[];
  unitPrice: number;
  totalPrice: number;
}
