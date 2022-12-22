import { Product } from "./Products";

export class ProductCart {
  quantity: number;
  constructor(
    public articleId: number,
    public name: string,
    public image: string,
    public price: number,
    public size: string // public product: Product[] = []
  ) {
    this.quantity = 1;
  }
  quantityPlus(add: number) {
    this.quantity += 1;
  }
  quantityMinus(remove: number) {
    this.quantity -= 1;
  }
}
