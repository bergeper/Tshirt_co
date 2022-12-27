import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes, openCartModal } from "./helpers/cart";
import { ProductCart } from "./models/ProductCart";
import { getFromLocalStorage } from "./helpers/addToCart";

buttonAttributes();
createHTMLForProducts();

// Getting products from localStorage
let cartProducts: ProductCart[] = [];
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

    clothingName.innerHTML = products[i].name;
    clothingImage.src = products[i].image;
    clothingImage.alt = products[i].name;
    clothingPrice.innerHTML = products[i].price.toString() + " Kr";

    clothingDiv.classList.add("productDiv");
    clothingName.classList.add("productDiv__title");
    clothingImage.classList.add("productDiv__image");
    clothingPrice.classList.add("productDiv__price");

    clothingDiv.addEventListener("click", () => {
      createProductModal(products[i]);
    });

    clothingImage.setAttribute("data-bs-toggle", "modal");
    clothingImage.setAttribute("data-bs-target", "#productModal");

    clothingDiv.appendChild(clothingName);
    clothingDiv.appendChild(clothingImage);
    clothingDiv.appendChild(clothingPrice);
    productsContainer.appendChild(clothingDiv);
    //console.log(products);
  }
}

function createProductModal(productItem: Product) {
  let productToCart = productItem;
  let productDescContainer = document.getElementById(
    "productDescContainer"
  ) as HTMLDivElement;
  productDescContainer.innerHTML = "";

  let addToCartBtn = document.getElementById("addToCart") as HTMLButtonElement;

  // Title of modal will be productItem name
  let clothingName = document.getElementById(
    "productName"
  ) as HTMLHeadingElement;
  clothingName.innerHTML = productItem.name;

  let clothingImage: HTMLImageElement = document.createElement("img");
  let clothingSize: HTMLParagraphElement = document.createElement("p");
  let clothingPrice: HTMLParagraphElement = document.createElement("p");

  clothingName.classList.add("productmodal__title");
  clothingImage.classList.add("productmodal__image");
  clothingSize.classList.add("productmodal__size");
  clothingPrice.classList.add("productmodal__price");

  clothingImage.src = productItem.image;
  clothingImage.alt = productItem.name;
  clothingSize.innerHTML = "Storlek: " + productItem.size;
  clothingPrice.innerHTML = "Pris: " + productItem.price.toString() + " Kr";

  // Creating new object based on cart-class
  const cartProduct: ProductCart = new ProductCart(productToCart, 1);
  cartProducts = getFromLocalStorage();
  cartProducts.push(cartProduct);
  // localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
  // openCartModal(cartProducts);

  addToCartBtn.addEventListener("click", () => {
    //cartProductToCart(productToCart);
    localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
    openCartModal(cartProducts);
  });

  productDescContainer.appendChild(clothingImage);
  productDescContainer.appendChild(clothingSize);
  productDescContainer.appendChild(clothingPrice);
}
/*
function cartProductToCart(productToCart: Product) {
  let quantity: number = 1;
  if (cartProducts.length > 0) {
    for (let i = 0; i < cartProducts.length; i++) {
      if (productToCart.articleId == cartProducts[i].product.articleId) {
        let quantity: number = 0;
        const cartProduct: ProductCart = new ProductCart(
          productToCart,
          quantity
        );
        cartProducts.push(cartProduct);
        localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      } else {
        const cartProduct: ProductCart = new ProductCart(
          productToCart,
          quantity
        );
        cartProducts.push(cartProduct);
        localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      }
    }
  }
}
*/
