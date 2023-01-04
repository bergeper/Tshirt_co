// Payment form here

import { ProductCart } from "../models/ProductCart";
import { getFromLocalStorage } from "./localStorage";

// Display Delivery Message
export function displayDeliveryMessage(userName: string) {
  let orderedItems: ProductCart[] = [];
  orderedItems = getFromLocalStorage();

  let mainWrapper: HTMLDivElement = document.getElementById(
    "payment"
  ) as HTMLDivElement;
  mainWrapper.innerHTML = "";

  let orderContainer: HTMLDivElement = document.createElement("div");
  orderContainer.classList.add("orderContainer");

  let orderMessage: HTMLHeadingElement = document.createElement("h3");
  orderMessage.innerHTML = "Tack för din beställning " + userName;

  orderContainer.appendChild(orderMessage);

  for (let i = 0; i < orderedItems.length; i++) {
    let orderDiv: HTMLDivElement = document.createElement("div");
    let orderTitle: HTMLHeadElement = document.createElement("h3");
    let orderImage: HTMLImageElement = document.createElement("img");
    let orderPrice: HTMLHeadingElement = document.createElement("h3");

    orderDiv.classList.add("checkout");
    orderTitle.classList.add("checkout__product--name");
    orderImage.classList.add("checkout__cartImage");
    orderPrice.classList.add("checkout__product--price");

    orderTitle.innerHTML = orderedItems[i].product.name;
    orderImage.src = orderedItems[i].product.image;
    orderPrice.innerHTML = orderedItems[i].product.price.toString();

    orderDiv.appendChild(orderTitle);
    orderDiv.appendChild(orderImage);
    orderDiv.appendChild(orderPrice);
    orderContainer.appendChild(orderDiv);
  }
  mainWrapper.appendChild(orderContainer);
  // totalsum here
  let sum = 0;
  let totalSum: HTMLParagraphElement = document.createElement(
    "totalsum"
  ) as HTMLParagraphElement;
  totalSum.className = "checkout__totalSum";
  // totalSum.innerHTML = "";
  if (orderedItems.length > 0) {
    for (let i = 0; i < orderedItems.length; i++) {
      sum += orderedItems[i].product.price * orderedItems[i].quantity;
    }
    totalSum.innerHTML = "Total: " + sum.toString() + " Kr";
  } else {
    totalSum.innerHTML = "Varukorgen är tom.";
  }
  orderContainer.appendChild(totalSum);
}

export function paymentOption() {
  let paymentChoice: HTMLDivElement = document.getElementById(
    "payment__choice"
  ) as HTMLDivElement;
  paymentChoice.innerHTML = "hejhjehe";
  // klicka på krot eller faktura
}

export function paymentChoosen() {
  // beroende vad man klickat på
}
