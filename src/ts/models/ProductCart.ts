import { Product } from "./Products";

export class ProductCart {
  constructor(public product: Product, public quantity: number) {
    this.quantity = quantity;
  }
  quantityPlus(add: number) {
    this.quantity += 1;
  }
  quantityMinus(remove: number) {
    this.quantity -= 1;
  }
}
