import { ProductCart } from "../models/ProductCart";

//let newProductsInCart: ProductCart[] = [];
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
//gör en ny tom lista, skicka in ohc returna
//productsInCart
