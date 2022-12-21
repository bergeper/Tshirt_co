import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes } from "./helpers/cart";

buttonAttributes();

function createHTMLForProducts() {
  for (let i = 0; i < products.length; i++) {
    let div = document.getElementById("productContainer") as HTMLDivElement;

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

    div.appendChild(clothingName);
    div.appendChild(clothingImage);
  }
}

function createProductModal(product: Product) {
  let div = document.getElementById("productDescContainer") as HTMLDivElement;

  let clothingName: HTMLHeadingElement = document.createElement(
    "h2"
  ) as HTMLHeadingElement;

  let clothingImage: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  clothingName.innerHTML = product.name;
  clothingImage.src = product.image;
  clothingImage.alt = product.name;

  div.appendChild(clothingName);
  div.appendChild(clothingImage);
}

createHTMLForProducts();
