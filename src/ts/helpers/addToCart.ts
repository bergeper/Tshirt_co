import { ProductCart } from "../models/ProductCart";

export function getFromLocalStorage() {
  let objectsFromLS: ProductCart[] = JSON.parse(
    localStorage.getItem("Cart") || "[]"
  );
  return objectsFromLS;
}

/*
  for (let i = 0; i < objectsFromLS.length; i++) {
    let cartObjectArticleId: number = objectsFromLS[i].articleId;
    let cartObjectName: string = objectsFromLS[i].name;
    let cartObjectImage: string = objectsFromLS[i].image;
    let cartObjectPrice: number = objectsFromLS[i].price;
    let cartObjectSize: string = objectsFromLS[i].size;
    let newProductsInCart: ProductCart[] = [];
    newProductsInCart = new ProductCart(cartObjectArticleId,cartObjectImage,cartObjectName,cartObjectPrice,cartObjectSize)
    productsInCart
   //newProductsInCart.push(cartObjectArticleId,cartObjectImage,c)
   return productsInCart
}
//gör en ny tom lista, skicka in ohc returna
//productsInCart
*/
