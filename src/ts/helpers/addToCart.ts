import { ProductCart } from "../models/ProductCart";
import { Product } from "../models/Products";
import { getFromLocalStorage } from "./localStorage";

// Add product to cart
export function cartProductToCart(cartProduct: Product) {
  // getting list from localStorage
  let cartProducts: ProductCart[] = [];
  cartProducts = getFromLocalStorage();

  // Creating a new object based on class ProductCart
  const cartProductToLS: ProductCart = new ProductCart(1, cartProduct);

  // checking if list of products is empty.
  let found: boolean = false;
  if (cartProducts.length === 0) {
    found = false;
  } else {
    for (let i = 0; i < cartProducts.length; i++) {
      if (
        // if the same product exists with the same size

        cartProducts[i].product.size.size ===
          cartProductToLS.product.size.size &&
        cartProducts[i].product.articleId === cartProductToLS.product.articleId
      ) {
        // changing the quantity instead of adding another of the same item.
        cartProducts[i].quantity++;
        localStorage.setItem("Cart", JSON.stringify(cartProducts));
        found = true;
        return;
      }
    }
  }
  // if the product does not exist in localStorage
  if (found === false) {
    cartProducts.push(cartProductToLS);
    localStorage.setItem("Cart", JSON.stringify(cartProducts));
  }
}
