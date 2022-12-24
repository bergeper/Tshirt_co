import { ProductCart } from "../models/ProductCart";

let cartProductsFromLS: ProductCart[] = [];

export function getFromLocalStorage(): ProductCart[] {
  cartProductsFromLS = JSON.parse(localStorage.getItem("Cart") || "[]");
  let cartProducts = cartProductsFromLS.map((product) => {
    return new ProductCart(product.product, product.quantity);
  });
  return cartProducts;
}

function totalsum() {
  let sum = 0;
  let totalSum = document.getElementById("totalsum") as HTMLParagraphElement;
  for (let i = 0; i < cartProductsFromLS.length; i++) {
    console.log(cartProductsFromLS[i]);
    sum += cartProductsFromLS[i].price * cartProductsFromLS[i].quantity;
    totalSum.innerHTML = sum.toString();
  }
}
