import { products } from "./services/productList";

for (let i = 0; i < products.length; i++) {
  let div = document.getElementById("container") as HTMLDivElement;
  let clothingName: HTMLHeadingElement = document.createElement(
    "h2"
  ) as HTMLHeadingElement;
  console.log(products[i].name);

  clothingName.innerHTML = products[i].name;

  div.appendChild(clothingName);
  document.body.appendChild(div);
}
