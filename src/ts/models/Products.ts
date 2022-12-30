import { Size } from "./Size";

export class Product {
  constructor(
    public articleId: number,
    public name: string,
    public image: string,
    public price: number,
    // Lägg till listan om tid finns. public size: Size,
    public size: string,
    public desc: string
  ) {}
}
