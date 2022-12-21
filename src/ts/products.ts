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

  let productName = document.getElementById(
    //hämtar modaltiteln med id från html
    "productName"
  ) as HTMLHeadingElement;

  productName.innerHTML = product.name;

  let clothingDescImage: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  clothingDescImage.src = product.image;
  clothingDescImage.alt = product.name;

  productDescContainer.appendChild(clothingDescImage);

  console.log(product);
}
