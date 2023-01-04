import { Size } from "./Size";

export class Product {
  constructor(
    public articleId: number,
    public name: string,
    public image: string,
    public price: number,
    public desc: string,
    public releaseYear: string,
    public fitting: string,
    public size: Size
  ) {
    this.size = size;
  }
  /*
  this.size = size;
  sizeSmall() {
    this.size = "Small";
  }
  sizeMediun() {
    this.size = "Medium";
  }
  sizeLarge() {
    this.size = "Large";
  }
  */
}
