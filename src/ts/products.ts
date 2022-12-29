import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes, openCartModal } from "./helpers/cart";
import { ProductCart } from "./models/ProductCart";
import { getFromLocalStorage } from "./helpers/addToCart";

buttonAttributes();
createHTMLForProducts();
// remove when done.
//localStorage.clear();
// Getting products from localStorage
let cartProducts: ProductCart[] = [];
//JSON.parse(localStorage.getItem("product") || "[]");
cartProducts = getFromLocalStorage();

function createHTMLForProducts() {
  for (let i = 0; i < products.length; i++) {
    let productsContainer = document.getElementById(
      "productsContainer"
    ) as HTMLDivElement;

    let clothingDiv: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;

    let clothingName: HTMLHeadingElement = document.createElement(
      "h2"
    ) as HTMLHeadingElement;

    let clothingImage: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;

    let clothingPrice: HTMLImageElement = document.createElement(
      "p"
    ) as HTMLImageElement;

    let clothingSize: HTMLImageElement = document.createElement(
      "p"
    ) as HTMLImageElement;

    let clothingBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    clothingName.innerHTML = products[i].name;
    clothingImage.src = products[i].image;
    clothingImage.alt = products[i].name;
    clothingPrice.innerHTML = products[i].price.toString() + " Kr";
    clothingBtn.innerHTML = "Lägg till i varukorg";

    clothingDiv.classList.add("productDiv");
    clothingName.classList.add("productDiv__title");
    clothingImage.classList.add("productDiv__image");
    clothingPrice.classList.add("productDiv__price");

    clothingBtn.addEventListener("click", () => {
      cartProductToCart(products[i]);
    });

    //clothingImage.setAttribute("data-bs-toggle", "modal");
    //clothingImage.setAttribute("data-bs-target", "#productModal");

    clothingDiv.appendChild(clothingName);
    clothingDiv.appendChild(clothingImage);
    clothingDiv.appendChild(clothingPrice);
    clothingDiv.appendChild(clothingBtn);
    productsContainer.appendChild(clothingDiv);
    //console.log(products);
  }
}
// Hur ska vi lösa detta? Bara köra produktbeskrivning?
// function createProductModal(productItem: Product) {
//   let productToCart = productItem;
//   let productDescContainer = document.getElementById(
//     "productDescContainer"
//   ) as HTMLDivElement;
//   productDescContainer.innerHTML = "";

//   let addToCartBtn = document.getElementById("addToCart") as HTMLButtonElement;

//   // Title of modal will be productItem name
//   let clothingName = document.getElementById(
//     "productName"
//   ) as HTMLHeadingElement;
//   clothingName.innerHTML = productItem.name;

//   let clothingImage: HTMLImageElement = document.createElement("img");
//   let clothingSize: HTMLParagraphElement = document.createElement("p");
//   let clothingPrice: HTMLParagraphElement = document.createElement("p");

//   clothingName.classList.add("productmodal__title");
//   clothingImage.classList.add("productmodal__image");
//   clothingSize.classList.add("productmodal__size");
//   clothingPrice.classList.add("productmodal__price");

//   clothingImage.src = productItem.image;
//   clothingImage.alt = productItem.name;
//   clothingSize.innerHTML = "Storlek: " + productItem.size;
//   clothingPrice.innerHTML = "Pris: " + productItem.price.toString() + " Kr";

//   // Creating new object based on cart-class
//   // cartProducts.push(newCartProduct);

//   addToCartBtn.addEventListener("click", () => {
//     //localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
//     cartProductToCart(productToCart);
//     //cartProductToCart(productToCart);
//   });

//   productDescContainer.appendChild(clothingImage);
//   productDescContainer.appendChild(clothingSize);
//   productDescContainer.appendChild(clothingPrice);
// }

function cartProductToCart(cartProduct: Product) {
  const cartProductToLSt: ProductCart = new ProductCart(1, cartProduct);
  let found = false;

  if (cartProducts.length === 0) {
    found = false;
  } else {
    for (let i = 0; i < cartProducts.length; i++) {
      if (
        cartProducts[i].product.articleId === cartProductToLSt.product.articleId
      ) {
        console.log(cartProducts);
        cartProducts[i].quantity++;
        localStorage.setItem("Cart", JSON.stringify(cartProducts));
        console.log("den finns i listan");
        found = true;
        return;
      }
    }
  }

  if (found === false) {
    console.log("hittar inte id");
    cartProducts.push(cartProductToLSt);
    localStorage.setItem("Cart", JSON.stringify(cartProducts));
  }
}
