import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes, openCartModal } from "./helpers/cart";
import { ProductCart } from "./models/ProductCart";
import { getFromLocalStorage } from "./helpers/addToCart";

buttonAttributes();
createHTMLForProducts();

let cartProducts: ProductCart[] = [];

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

    clothingImage.addEventListener("click", () => {
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

function createProductModal(product: Product) {
  let productToCart = product;
  let productDescContainer = document.getElementById(
    "productDescContainer"
  ) as HTMLDivElement;
  productDescContainer.innerHTML = "";

  let addToCartBtn = document.getElementById("addToCart") as HTMLButtonElement;

  // Title of modal will be product name
  let clothingName = document.getElementById(
    "productName"
  ) as HTMLHeadingElement;
  clothingName.innerHTML = product.name;

  let clothingImage: HTMLImageElement = document.createElement("img");
  let clothingSize: HTMLParagraphElement = document.createElement("p");
  let clothingPrice: HTMLParagraphElement = document.createElement("p");

  clothingName.classList.add("productmodal__title");
  clothingImage.classList.add("productmodal__image");
  clothingSize.classList.add("productmodal__size");
  clothingPrice.classList.add("productmodal__price");

  clothingImage.src = product.image;
  clothingImage.alt = product.name;
  clothingSize.innerHTML = "Storlek: " + product.size;
  clothingPrice.innerHTML = "Pris: " + product.price.toString() + " Kr";

  // Creating new object based on cart-class
  const cartProduct: ProductCart = new ProductCart(productToCart, 1);
  cartProducts = getFromLocalStorage();
  cartProducts.push(cartProduct);

  addToCartBtn.addEventListener("click", () => {
    // If( products in cart contains same ID, add one to quantity instead of pushing into list)
    console.log(cartProducts.length);
    localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
    openCartModal(cartProducts);
  });

  productDescContainer.appendChild(clothingImage);
  productDescContainer.appendChild(clothingSize);
  productDescContainer.appendChild(clothingPrice);
}
