import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes } from "./helpers/cart";

buttonAttributes();
createHTMLForProducts();

let cartProducts: Product[] = [];

function createHTMLForProducts() {
  for (let i = 0; i < products.length; i++) {
    let clothingDiv = document.getElementById(
      "productsContainer"
    ) as HTMLDivElement;

    let clothingName: HTMLHeadingElement = document.createElement(
      "h2"
    ) as HTMLHeadingElement;

    let clothingImage: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;

    clothingName.innerHTML = products[i].name;
    clothingImage.src = products[i].image;
    clothingImage.alt = products[i].name;

    clothingDiv.classList.add("productDiv");
    clothingName.classList.add("productDiv__title");
    clothingImage.classList.add("productDiv__image");

    clothingImage.addEventListener("click", () => {
      createProductModal(products[i]);
    });

    clothingImage.setAttribute("data-bs-toggle", "modal");
    clothingImage.setAttribute("data-bs-target", "#productModal");

    clothingDiv.appendChild(clothingName);
    clothingDiv.appendChild(clothingImage);
  }
}

function createProductModal(product: Product) {
  let newProduct = product;

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

  addToCartBtn.addEventListener("click", (product) => {
    cartProducts.push(newProduct);
    localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
  });

  productDescContainer.appendChild(clothingImage);
  productDescContainer.appendChild(clothingSize);
  productDescContainer.appendChild(clothingPrice);
}
