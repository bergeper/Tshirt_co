import { ProductCart } from "../models/ProductCart";

export function getFromLocalStorage(): ProductCart[] {
  let cartProducts: ProductCart[] = JSON.parse(
    localStorage.getItem("Cart") || "[]"
  );
  cartProducts.map((product) => {
    return new ProductCart(product.product, product.quantity);
  });
  return cartProducts;
}
//gör en ny tom lista, skicka in ohc returna
//productsInCart
