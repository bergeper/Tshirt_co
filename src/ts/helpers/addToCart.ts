import { ProductCart } from "../models/ProductCart";

export function getFromLocalStorage() {
  let objectsFromLS: ProductCart[] = JSON.parse(
    localStorage.getItem("Cart") || ""
  );
  for (let i = 0; i < objectsFromLS.length; i++) {
    let cartObjectArticleId: number = objectsFromLS[i].articleId;
    let cartObjectName: string = objectsFromLS[i].name;
    let cartObjectImage: string = objectsFromLS[i].image;
    let cartObjectPrice: number = objectsFromLS[i].price;
    //här ska size vara.
  }
}
//gör en ny tom lista, skicka in ohc returna
