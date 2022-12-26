import { Product } from "./Products";

export class ProductCart {
  /*  price: number;  */
  constructor(public product: Product, public quantity: number) {
    this.quantity = quantity;
  }
  quantityPlus(add: number) {
    this.quantity += add;
  }
  quantityMinus(remove: number) {
    this.quantity -= remove;
  }
}
