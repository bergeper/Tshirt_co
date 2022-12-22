import { ProductCart } from "../models/ProductCart";

export function getFromLocalStorage() {
  let objectsFromLS: ProductCart[] = JSON.parse(
    localStorage.getItem("Cart") || "[]"
  );
  /*
  objectsFromLS.map((cartProducts) => {
    return new ProductCart()
  })
  */
}
