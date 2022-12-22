import { ProductCart } from "../models/ProductCart";
import { getFromLocalStorage } from "./addToCart";

export function buttonAttributes() {
  let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
  clickOnCart.setAttribute("data-bs-toggle", "modal");
  clickOnCart.setAttribute("data-bs-target", "#exampleModal");
  clickOnCart.addEventListener("click", openCartModal);
}

export function openCartModal() {
  let modalContainer = document.getElementById("modal-body") as HTMLDivElement; //get modalbody from html
  modalContainer.innerHTML = ""; //empty container
  let modalTitle = document.getElementById(
    //gets the modaltitle from html
    "exampleModalLabel"
  ) as HTMLHeadingElement;
  modalTitle.innerHTML = "Varukorg";

  let cartHeading: HTMLHeadingElement = document.createElement("h5");
  cartHeading.innerHTML = "Dina Varor:";

  let informationDiv: HTMLDivElement = document.createElement("div");
  informationDiv.className = "cartDiv";
  informationDiv.innerHTML = "";

  let productName: HTMLParagraphElement = document.createElement("p");
  productName.className = "priceName";
  productName.innerHTML = "NAMNET";

  let productPrice: HTMLParagraphElement = document.createElement("p");
  productPrice.className = "priceText";
  productPrice.innerHTML = "PRISET";

  let productAttributes: HTMLDivElement = document.createElement("div");
  productAttributes.className = "cartDiv__productAttributesDiv";

  let cartImage: HTMLImageElement = document.createElement("img");
  cartImage.className = "cartDiv__cartImage";
  cartImage.src =
    "https://www.shirtstore.se/pub_images/original/15348_r_20268.jpg?extend=copy&width=1280&method=fit&height=1280&type=webp";

  let cartQuantity: HTMLParagraphElement = document.createElement("p");
  cartQuantity.innerHTML = "Antal:.........";
  let totalAmount: HTMLParagraphElement = document.createElement("p");
  totalAmount.innerHTML = "Total Summa:........";

  let quantityDiv: HTMLDivElement = document.createElement("div");
  quantityDiv.className = "cartDiv__quantityDiv";

  document.createElement;

  productAttributes.appendChild(productName);
  productAttributes.appendChild(productPrice);
  modalContainer.appendChild(cartHeading);
  modalContainer.appendChild(informationDiv);
  informationDiv.appendChild(productAttributes);
  informationDiv.appendChild(cartImage);
  informationDiv.appendChild(quantityDiv);
  quantityDiv.appendChild(cartQuantity);
  quantityDiv.appendChild(totalAmount);

  let cartAttributes: ProductCart[] = getFromLocalStorage();
  console.log(cartAttributes);
}
