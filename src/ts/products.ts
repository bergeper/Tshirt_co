import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes } from "./helpers/cart";

buttonAttributes();
createHTMLForProducts();

function createHTMLForProducts() {
  for (let i = 0; i < products.length; i++) {
    let div = document.getElementById("productsContainer") as HTMLDivElement;

    let clothingName: HTMLHeadingElement = document.createElement(
      "h2"
    ) as HTMLHeadingElement;

    let clothingImage: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;

    clothingName.innerHTML = products[i].name;
    clothingImage.src = products[i].image;
    clothingImage.alt = products[i].name;

    clothingImage.addEventListener("click", () => {
      createProductModal(products[i]);
    });

    clothingImage.setAttribute("data-bs-toggle", "modal");
    clothingImage.setAttribute("data-bs-target", "#productModal");

    div.appendChild(clothingName);
    div.appendChild(clothingImage);
  }
}

function createProductModal(product: Product) {
  let productDescContainer = document.getElementById(
    "productDescContainer"
  ) as HTMLDivElement;
  productDescContainer.innerHTML = "";

  // Title of modal will be product name
  let productName = document.getElementById(
    //hämtar modaltiteln med id från html
    "productName"
  ) as HTMLHeadingElement;
  productName.innerHTML = product.name;

  let clothingImage: HTMLImageElement = document.createElement("img");
  let clothingSize: HTMLParagraphElement = document.createElement("p");
  let clothingPrice: HTMLParagraphElement = document.createElement("p");

  clothingImage.classList.add("productmodal__image");
  clothingSize.classList.add("productmodal__size");
  clothingPrice.classList.add("productmodal__price");

  clothingImage.src = product.image;
  clothingImage.alt = product.name;
  clothingSize.innerHTML = "Storlek: " + product.size;
  clothingPrice.innerHTML = "Pris: " + product.price.toString() + " Kr";

  productDescContainer.appendChild(clothingImage);
  productDescContainer.appendChild(clothingSize);
  productDescContainer.appendChild(clothingPrice);
}
