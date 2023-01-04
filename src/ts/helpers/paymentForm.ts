// Payment form here

import { Customer } from "../models/customer";
import { getCustomerFromLocalStorage } from "./customerLS";

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

export function paymentCardChosen() {
  paymentChosen.innerHTML = "";
  //form
  let formForCard: HTMLFormElement = document.createElement("form");
  //formForCard.classList.add("form-check");

  //container for inputs n labels
  let paymentCard: HTMLDivElement = document.createElement("div");

  //Container for date and cvc
  let dateAndCVC: HTMLDivElement = document.createElement("div");
  dateAndCVC.classList.add("form-row");

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
  cardNumber.type = "text";
  cardNumber.required = true;

  // utgångsdatum
  let dateDiv: HTMLDivElement = document.createElement("div");
  let cardDate: HTMLInputElement = document.createElement("input");
  let cardDateLabel: HTMLLabelElement = document.createElement("label");
  dateDiv.classList.add("m-3", "form-group", "col-4");

  cardDateLabel.innerHTML = "Utgångsdatum: ";
  cardDateLabel.setAttribute("for", "carddate");
  cardDateLabel.classList.add("form-label");
  cardDate.classList.add("form-control");
  cardDate.setAttribute("id", "carddate");
  cardDate.setAttribute("placeholder", "Ex: 08-25");
  cardDate.setAttribute("maxlength", "5");
  cardDate.type = "text";
  cardDate.required = true;
  cardDate.pattern = "[0-9]{2}+-[0-9]{2}";

  // security code - nummer
  let CVCDiv: HTMLDivElement = document.createElement("div");
  let cardCVC: HTMLInputElement = document.createElement("input");
  let cardCVCLabel: HTMLLabelElement = document.createElement("label");
  CVCDiv.classList.add("m-3", "form-group", "col-4");

  cardCVCLabel.innerHTML = "CVC: ";
  cardCVCLabel.setAttribute("for", "cardcvc");
  cardCVCLabel.classList.add("form-label");
  cardCVC.classList.add("form-control");
  cardCVC.setAttribute("id", "cardcvc");
  cardCVC.setAttribute("placeholder", "Ex: 323");
  cardCVC.type = "text";
  cardCVC.setAttribute("maxlength", "3");
  cardCVC.required = true;
  cardCVC.pattern = "[0-9]{3}";

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
  orderBtn.innerHTML = "Lägg order";

  orderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:1234/pages/delivery.html";
  });

  numberDiv.appendChild(cardNumberLabel);
  numberDiv.appendChild(cardNumber);

  dateDiv.appendChild(cardDateLabel);
  dateDiv.appendChild(cardDate);

  CVCDiv.appendChild(cardCVCLabel);
  CVCDiv.appendChild(cardCVC);

  nameDiv.appendChild(cardNameLabel);
  nameDiv.appendChild(cardName);

  dateAndCVC.appendChild(CVCDiv);
  dateAndCVC.appendChild(dateDiv);

  paymentCard.appendChild(numberDiv);
  paymentCard.appendChild(dateAndCVC);
  paymentCard.appendChild(nameDiv);
  formForCard.appendChild(paymentCard);
  formForCard.appendChild(orderBtn);
  paymentChosen.appendChild(formForCard);
}

export function paymentInvoiceChosen() {
  paymentChosen.innerHTML = "";
  let formForInvoice: HTMLFormElement = document.createElement("form");
  let paymentInvoice: HTMLDivElement = document.createElement("div");
  //formForCard.classList.add("form-check");

  // hämta - info från LS
  let newCustomer: Customer[] = [];
  newCustomer = getCustomerFromLocalStorage();

  // personnummer
  // Cardnumber
  let pnDiv: HTMLDivElement = document.createElement("div");
  let pnNumber: HTMLInputElement = document.createElement("input");
  let pnNumberLabel: HTMLLabelElement = document.createElement("label");
  pnDiv.classList.add("m-3");

  pnNumberLabel.innerHTML = "Personummer: ";
  pnNumberLabel.setAttribute("for", "personalnumber");
  pnNumberLabel.classList.add("form-label");
  pnNumber.classList.add("form-control");
  pnNumber.setAttribute("id", "personalnumber");
  pnNumber.setAttribute("placeholder", "Personummer");
  pnNumber.type = "text";
  pnNumber.required = true;

  let orderBtn: HTMLButtonElement = document.createElement("button");
  orderBtn.type = "submit";
  orderBtn.classList.add("productDiv__form--btn", "m-3");
  orderBtn.innerHTML = "Lägg order";

  orderBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:1234/pages/delivery.html";
  });

  pnDiv.appendChild(pnNumberLabel);
  pnDiv.appendChild(pnNumber);
  paymentInvoice.appendChild(pnDiv);
  formForInvoice.appendChild(paymentInvoice);
  formForInvoice.appendChild(orderBtn);
  paymentChosen.appendChild(formForInvoice);
}
