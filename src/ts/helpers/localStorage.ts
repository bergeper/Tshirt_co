import { ProductCart } from "../models/ProductCart";

let cartProductsFromLS: ProductCart[] = [];

export function getFromLocalStorage(): ProductCart[] {
  cartProductsFromLS = JSON.parse(localStorage.getItem("Cart") || "[]");
  let cartProducts = cartProductsFromLS.map((product) => {
    return new ProductCart(product.quantity, product.product);
  });
  return cartProducts;
}

export function clearLocalStorage() {
  window.localStorage.clear();
}
