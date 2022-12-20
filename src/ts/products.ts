import { products } from "./services/productList";

for (let i = 0; i < products.length; i++) {
  let div = document.getElementById("container") as HTMLDivElement;
  let clothingName: HTMLHeadingElement = document.createElement(
    "h2"
  ) as HTMLHeadingElement;
  let clothingImage: HTMLImageElement = document.createElement(
    "img"
  ) as HTMLImageElement;

  clothingName.innerHTML = products[i].name;
  clothingImage.src = products[i].image;
  clothingImage.alt = products[i].name;

  div.appendChild(clothingName);
  div.appendChild(clothingImage);
  document.body.appendChild(div);
}
