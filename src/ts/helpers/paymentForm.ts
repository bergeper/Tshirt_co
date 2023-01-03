// Payment form here

import { ProductCart } from "../models/ProductCart";
import { getFromLocalStorage } from "./addToCart";

//let userName = "";
export function payoutForm() {
  let checkoutContainer: HTMLDivElement = document.getElementById(
    "payOutFormContainer"
  ) as HTMLDivElement;
  let checkoutForm: HTMLFormElement = document.createElement("form");
  let checkoutTitle: HTMLHeadingElement = document.createElement("h3");
  let labelFirstName: HTMLLabelElement = document.createElement("label");
  let fNameInput: HTMLInputElement = document.createElement("input"); // ska submitta value och använda senare
  let labelLastName: HTMLLabelElement = document.createElement("label");
  let lNameInput: HTMLInputElement = document.createElement("input");
  let labelEmail: HTMLLabelElement = document.createElement("label");
  let emailInput: HTMLInputElement = document.createElement("input");
  let labelCode: HTMLLabelElement = document.createElement("label");
  let codeInput: HTMLInputElement = document.createElement("input");
  let payButton: HTMLButtonElement = document.createElement("button");
  let paymentOptionLabel: HTMLLabelElement = document.createElement("label");
  let paymentOptionDiv: HTMLDivElement = document.createElement("div");
  let cardButton: HTMLInputElement = document.createElement("input");
  let invoiceButton: HTMLInputElement = document.createElement("input");
  let cardLabel: HTMLLabelElement = document.createElement("label");
  let invoiceLabel: HTMLLabelElement = document.createElement("label");
  let paymentLabel: HTMLLabelElement = document.createElement("label");
  let paymentInput: HTMLInputElement = document.createElement("input");
  let invoiceExtendedLabel: HTMLLabelElement = document.createElement("label");
  let invoicePersonalNumber: HTMLInputElement = document.createElement("input");

  fNameInput.setAttribute("name", "firstname");
  emailInput.setAttribute("placeholder", "james.bond@exampel.se");
  paymentInput.setAttribute("placeholder", "123456789 XXXX");
  emailInput.setAttribute("type", "email");
  cardButton.setAttribute("type", "radio");
  invoiceButton.setAttribute("type", "radio");
  cardButton.setAttribute("name", "paymentOptions");
  invoiceButton.setAttribute("name", "paymentOptions");
  payButton.setAttribute("type", "submit");
  fNameInput.setAttribute("value", "");

  checkoutForm.className = "payOutFormContainer__cartForm";
  paymentOptionDiv.className = "payOutFormContainer__paymentDiv";
  payButton.className = "payButton";

  checkoutTitle.innerHTML = "Betalning";
  labelFirstName.innerHTML = "Förnamn: ";
  labelLastName.innerHTML = "Efternamn: ";
  labelEmail.innerHTML = "Email: ";
  labelCode.innerHTML = "Rabattkod: ";
  payButton.innerHTML = "Gå Vidare";
  paymentOptionLabel.innerHTML = "Betalningsalternativ: ";
  cardLabel.innerHTML = "Kort";
  invoiceLabel.innerHTML = "Faktura";
  paymentLabel.innerHTML = "Kortnummer: ";

  checkoutContainer.appendChild(checkoutTitle);
  checkoutForm.appendChild(labelFirstName);
  checkoutForm.appendChild(fNameInput);
  checkoutForm.appendChild(labelLastName);
  checkoutForm.appendChild(lNameInput);
  checkoutForm.appendChild(labelEmail);
  checkoutForm.appendChild(emailInput);
  checkoutForm.appendChild(labelCode);
  checkoutForm.appendChild(codeInput);
  checkoutForm.appendChild(paymentOptionLabel);
  checkoutForm.appendChild(paymentOptionDiv);
  paymentOptionDiv.appendChild(cardLabel);
  paymentOptionDiv.appendChild(cardButton);
  paymentOptionDiv.appendChild(invoiceLabel);
  paymentOptionDiv.appendChild(invoiceButton);
  checkoutContainer.appendChild(checkoutForm);
  checkoutContainer.appendChild(paymentOptionDiv);

  //delivery form starts here
  let deliveryContainer: HTMLDivElement = document.getElementById(
    "deliveryFormContainer"
  ) as HTMLDivElement;
  let deliveryLabel: HTMLHeadingElement = document.createElement("h3");
  let deliveryForm: HTMLFormElement = document.createElement("form");
  let deliveryAdressLabel: HTMLLabelElement = document.createElement("label");
  let deliveryAdressInput: HTMLInputElement = document.createElement("input");
  let deliveryZipLabel: HTMLLabelElement = document.createElement("label");
  let deliveryZipInput: HTMLInputElement = document.createElement("input");
  let deliveryInputLabelOne: HTMLLabelElement = document.createElement("label");
  let deliveryInputLabelTwo: HTMLLabelElement = document.createElement("label");
  let deliveryinputOne: HTMLInputElement = document.createElement("input");
  let deliveryinputTwo: HTMLInputElement = document.createElement("input");

  deliveryLabel.innerHTML = "Fraktsätt";
  deliveryAdressLabel.innerHTML = "Adress: ";
  deliveryInputLabelOne.innerHTML = "Postombud: ";
  deliveryInputLabelTwo.innerHTML = "Brevlåda: ";
  deliveryZipLabel.innerHTML = "Postkod: ";

  deliveryForm.className = "deliveryForm";
  deliveryZipInput.className = "deliveryForm__zip";

  deliveryAdressInput.setAttribute("placeholder", "Medieinstitutsgatan 25");
  deliveryZipInput.setAttribute("placeholder", "123 45");
  deliveryinputOne.setAttribute("type", "radio");
  deliveryinputTwo.setAttribute("type", "radio");
  deliveryinputOne.setAttribute("name", "delivery");
  deliveryinputTwo.setAttribute("name", "delivery");

  deliveryForm.appendChild(deliveryAdressLabel);
  deliveryForm.appendChild(deliveryAdressInput);
  deliveryForm.appendChild(deliveryZipLabel);
  deliveryForm.appendChild(deliveryZipInput);
  deliveryForm.appendChild(deliveryInputLabelOne);
  deliveryForm.appendChild(deliveryinputOne);
  deliveryForm.appendChild(deliveryInputLabelTwo);
  deliveryForm.appendChild(deliveryinputTwo);
  deliveryContainer.appendChild(deliveryLabel);
  deliveryContainer.appendChild(deliveryForm);

  cardButton.addEventListener("click", () => {
    payWithCard(
      checkoutContainer,
      payButton,
      paymentLabel,
      paymentInput,
      fNameInput
    );
  });

  invoiceButton.addEventListener("click", () => {
    payWithInvoice(
      checkoutContainer,
      payButton,
      fNameInput,
      invoiceExtendedLabel,
      invoicePersonalNumber
    );
  });
}

////////payment form ends here

function payWithCard(
  checkoutContainer: HTMLDivElement,
  payButton: HTMLButtonElement,
  paymentLabel: HTMLLabelElement,
  paymentInput: HTMLInputElement,
  fNameInput: HTMLInputElement
) {
  payButton.addEventListener("click", (event) => {
    event.preventDefault();
    let userName: string = fNameInput.value;
    helloUser(userName);
  });
  let extendedDiv: HTMLDivElement = document.createElement("div");

  extendedDiv.className = "extendedDiv";

  extendedDiv.appendChild(paymentLabel);
  extendedDiv.appendChild(paymentInput);
  extendedDiv.appendChild(payButton);
  checkoutContainer.appendChild(extendedDiv);
}

function payWithInvoice(
  checkoutContainer: HTMLDivElement,
  payButton: HTMLButtonElement,
  fNameInput: HTMLInputElement,
  invoiceLabel: HTMLLabelElement,
  invoicePersonalNumber: HTMLInputElement
) {
  let extendedDiv: HTMLDivElement = document.createElement("div");
  extendedDiv.className = "extendedDiv";
  payButton.addEventListener("click", (event) => {
    event.preventDefault();
    let userName: string = fNameInput.value;
    helloUser(userName);
  });

  invoiceLabel.innerHTML = "Personnummer:";
  invoicePersonalNumber.setAttribute("placeholder", "XXXXXX - XXXX");

  extendedDiv.appendChild(invoiceLabel);
  extendedDiv.appendChild(invoicePersonalNumber);
  extendedDiv.appendChild(payButton);
  checkoutContainer.appendChild(extendedDiv);
}

function helloUser(userName: string) {
  let orderedItems: ProductCart[] = [];
  orderedItems = getFromLocalStorage();

  let mainWrapper: HTMLDivElement = document.getElementById(
    "orderConfirmation"
  ) as HTMLDivElement;
  mainWrapper.innerHTML = "";

  let orderContainer: HTMLDivElement = document.createElement("div");
  orderContainer.classList.add("checkoutContainer");

  let orderMessage: HTMLHeadingElement = document.createElement("h3");
  orderMessage.innerHTML = "Tack för din beställning " + userName;

  mainWrapper.appendChild(orderMessage);

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
  mainWrapper.appendChild(totalSum);
}
