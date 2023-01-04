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
  // klicka på kort eller faktura
  let paymentCard: HTMLDivElement = document.createElement("div");
  let paymentInvoice: HTMLDivElement = document.createElement("div");

  let cardLabel: HTMLLabelElement = document.createElement("label");
  let cardRadioBtn: HTMLInputElement = document.createElement("input");

  let invoiceLabel: HTMLLabelElement = document.createElement("label");
  let invoiceRadioBtn: HTMLInputElement = document.createElement("input");

  paymentCard.classList.add("m-3");
  paymentInvoice.classList.add("m-3");

  cardLabel.innerHTML = "- Betalkort";
  cardLabel.setAttribute("for", "card");
  cardLabel.classList.add("form-check-label");

  cardRadioBtn.type = "radio";
  cardRadioBtn.setAttribute("name", "choosePayment");
  cardRadioBtn.setAttribute("id", "card");
  cardRadioBtn.classList.add("form-check-input");

  invoiceLabel.innerHTML = "- Faktura";
  invoiceLabel.setAttribute("for", "invoice");
  invoiceLabel.classList.add("form-check-label");

  invoiceRadioBtn.type = "radio";
  invoiceRadioBtn.setAttribute("name", "choosePayment");
  invoiceRadioBtn.setAttribute("id", "invoice");
  invoiceRadioBtn.classList.add("form-check-input");

  if (cardRadioBtn.checked) {
    paymentCardChosen();
  }

  cardRadioBtn.addEventListener("click", () => {
    paymentCardChosen();
  });

  invoiceRadioBtn.addEventListener("click", () => {
    paymentInvoiceChosen();
  });

  paymentCard.appendChild(cardRadioBtn);
  paymentCard.appendChild(cardLabel);
  paymentInvoice.appendChild(invoiceRadioBtn);
  paymentInvoice.appendChild(invoiceLabel);
  paymentChoice.appendChild(paymentCard);
  paymentChoice.appendChild(paymentInvoice);
}

let paymentChosen: HTMLDivElement = document.getElementById(
  "payment__chosen"
) as HTMLDivElement;
paymentChosen.innerHTML = "";

export function paymentCardChosen() {
  //form
  let formForCard: HTMLFormElement = document.createElement("form");
  //formForCard.classList.add("form-check");

  //container for inputs n labels
  let paymentCard: HTMLDivElement = document.createElement("div");

  // Cardnumber
  let numberDiv: HTMLDivElement = document.createElement("div");
  let cardNumber: HTMLInputElement = document.createElement("input");
  let cardNumberLabel: HTMLLabelElement = document.createElement("label");
  numberDiv.classList.add("m-3");

  cardNumberLabel.innerHTML = "Kortnummer: ";
  cardNumberLabel.setAttribute("for", "cardnumber");
  cardNumberLabel.classList.add("form-label");
  cardNumber.classList.add("form-control");
  cardNumber.setAttribute("id", "cardnumber");
  cardNumber.setAttribute("placeholder", "Kortnummer");
  cardNumber.type = "number";
  cardNumber.required = true;

  // utgångsdatum
  let dateDiv: HTMLDivElement = document.createElement("div");
  let cardDate: HTMLInputElement = document.createElement("input");
  let cardDateLabel: HTMLLabelElement = document.createElement("label");
  dateDiv.classList.add("m-3");

  cardDateLabel.innerHTML = "Utgångsdatum: ";
  cardDateLabel.setAttribute("for", "carddate");
  cardDateLabel.classList.add("form-label");
  cardDate.classList.add("form-control", "col-xs-2");
  cardDate.setAttribute("id", "carddate");
  cardDate.setAttribute("placeholder", "Utgångsdatum");
  cardDate.type = "number";
  cardDate.required = true;

  // security code - nummer
  let CVCDiv: HTMLDivElement = document.createElement("div");
  let cardCVC: HTMLInputElement = document.createElement("input");
  let cardCVCLabel: HTMLLabelElement = document.createElement("label");
  CVCDiv.classList.add("m-3");

  cardCVCLabel.innerHTML = "CVC: ";
  cardCVCLabel.setAttribute("for", "cardcvc");
  cardCVCLabel.classList.add("form-label");
  cardCVC.classList.add("form-control");
  cardCVC.setAttribute("id", "cardcvc");
  cardCVC.setAttribute("placeholder", "CVC nummer");
  cardCVC.type = "number";
  cardCVC.required = true;

  // Namn
  let nameDiv: HTMLDivElement = document.createElement("div");
  let cardName: HTMLInputElement = document.createElement("input");
  let cardNameLabel: HTMLLabelElement = document.createElement("label");
  nameDiv.classList.add("m-3");

  cardNameLabel.innerHTML = "Namn: ";
  cardNameLabel.setAttribute("for", "cardname");
  cardNameLabel.classList.add("form-label");
  cardName.classList.add("form-control");
  cardName.setAttribute("id", "cardname");
  cardName.setAttribute("placeholder", "Namnet angivet på kortet");
  cardName.type = "text";
  cardName.required = true;

  // knapp för beställa

  let orderBtn: HTMLButtonElement = document.createElement("button");
  orderBtn.type = "submit";
  orderBtn.classList.add("productDiv__form--btn", "m-3");
  orderBtn.innerHTML = "Betala";

  numberDiv.appendChild(cardNumberLabel);
  numberDiv.appendChild(cardNumber);
  dateDiv.appendChild(cardDateLabel);
  dateDiv.appendChild(cardDate);
  CVCDiv.appendChild(cardCVCLabel);
  CVCDiv.appendChild(cardCVC);
  nameDiv.appendChild(cardNameLabel);
  nameDiv.appendChild(cardName);
  paymentCard.appendChild(numberDiv);
  paymentCard.appendChild(dateDiv);
  paymentCard.appendChild(CVCDiv);
  paymentCard.appendChild(nameDiv);
  formForCard.appendChild(paymentCard);
  formForCard.appendChild(orderBtn);
  paymentChosen.appendChild(formForCard);
}

export function paymentInvoiceChosen() {
  let paymentInvoice: HTMLDivElement = document.createElement("div");
  // hämta - info från LS
  // personnummer

  paymentChosen.appendChild(paymentInvoice);
}
