import { Product } from "./models/Products";
let product: Product;

product = JSON.parse(sessionStorage.getItem("Product") || "{}");

export function createProductModal(product: Product) {
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
window.location.replace("http://localhost:1234/pages/productDesc.html");
