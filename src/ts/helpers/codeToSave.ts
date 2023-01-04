/*
//let userName = "";
export function payoutForm() {
  let checkoutContainer: HTMLDivElement = document.getElementById(
    "checkout-form"
  ) as HTMLDivElement;
  //delivery form
  let deliveryLabel: HTMLHeadingElement = document.createElement("h3");
  let deliveryAdressLabel: HTMLLabelElement = document.createElement("label");
  let deliveryAdressInput: HTMLInputElement = document.createElement("input");
  let deliveryZipLabel: HTMLLabelElement = document.createElement("label");
  let deliveryZipInput: HTMLInputElement = document.createElement("input");
  let deliveryInputLabelOne: HTMLLabelElement = document.createElement("label");
  let deliveryInputLabelTwo: HTMLLabelElement = document.createElement("label");
  let deliveryinputOne: HTMLInputElement = document.createElement("input");
  let deliveryinputTwo: HTMLInputElement = document.createElement("input");
  // payment form
  let checkoutForm: HTMLFormElement = document.createElement("form");
  let checkoutTitle: HTMLHeadingElement = document.createElement("h3");
  let labelFirstName: HTMLLabelElement = document.createElement("label");
  let fNameInput: HTMLInputElement = document.createElement("input");
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

  //delivery
  deliveryAdressInput.setAttribute("placeholder", "Medieinstitutsgatan 25");
  deliveryZipInput.setAttribute("placeholder", "123 45");
  deliveryinputOne.setAttribute("type", "radio");
  deliveryinputTwo.setAttribute("type", "radio");
  deliveryinputOne.setAttribute("name", "delivery");
  deliveryinputTwo.setAttribute("name", "delivery");

  //payment
  fNameInput.setAttribute("name", "firstname");
  fNameInput.type = "text";
  fNameInput.required = true;
  emailInput.setAttribute("placeholder", "james.bond@exampel.se");
  emailInput.setAttribute("type", "email");
  cardButton.setAttribute("type", "radio");
  invoiceButton.setAttribute("type", "radio");
  cardButton.setAttribute("name", "paymentOptions");
  invoiceButton.setAttribute("name", "paymentOptions");
  payButton.setAttribute("type", "submit");
  fNameInput.setAttribute("value", "");

  //delivery
  deliveryLabel.innerHTML = "Fraktsätt";
  deliveryAdressLabel.innerHTML = "Adress: ";
  deliveryInputLabelOne.innerHTML = "Postombud: ";
  deliveryInputLabelTwo.innerHTML = "Brevlåda: ";
  deliveryZipLabel.innerHTML = "Postkod: ";

  //payment
  checkoutForm.className = "payOutFormContainer__cartForm";
  paymentOptionDiv.className = "payOutFormContainer__paymentDiv";
  payButton.className = "payOutFormContainer__extendendDiv--payButton";
  //delivery

  deliveryZipInput.className = "deliveryForm__zip";
  //payment
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

  //delivery
  checkoutForm.appendChild(deliveryAdressLabel);
  checkoutForm.appendChild(deliveryAdressInput);
  checkoutForm.appendChild(deliveryZipLabel);
  checkoutForm.appendChild(deliveryZipInput);
  checkoutForm.appendChild(deliveryInputLabelOne);
  checkoutForm.appendChild(deliveryinputOne);
  checkoutForm.appendChild(deliveryInputLabelTwo);
  checkoutForm.appendChild(deliveryinputTwo);

  //payment

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
  paymentOptionDiv.appendChild(cardButton);
  paymentOptionDiv.appendChild(invoiceButton);
  checkoutForm.appendChild(paymentOptionDiv);
  checkoutContainer.appendChild(checkoutForm);

  let extendedDivCard: HTMLDivElement = document.createElement("div");
  let extendedDivInvoice: HTMLDivElement = document.createElement("div");

  if (cardButton.checked === true) {
    cardButton.addEventListener("click", () => {
      extendedDivCard.className = "payOutFormContainer__extendedDiv";
      paymentInput.setAttribute("placeholder", "123456789 XXXX");
      paymentInput.required = true;
      extendedDivCard.appendChild(paymentLabel);
      extendedDivCard.appendChild(paymentInput);
      extendedDivCard.appendChild(payButton);
      checkoutForm.appendChild(extendedDivCard);
    });
  }

  if (invoiceButton.checked === true) {
    invoiceButton.addEventListener("click", () => {
      extendedDivInvoice.className = "payOutFormContainer__extendedDiv";
      invoiceLabel.innerHTML = "Personnummer:";
      invoicePersonalNumber.setAttribute("placeholder", "XXXXXX - XXXX");
      invoicePersonalNumber.required = true;

      extendedDivInvoice.appendChild(invoiceLabel);
      extendedDivInvoice.appendChild(invoicePersonalNumber);
      extendedDivInvoice.appendChild(payButton);
      checkoutForm.appendChild(extendedDivInvoice);
    });
  }

  payButton.addEventListener("click", () => {
    let userName: string = fNameInput.value;
    helloUser(userName);
  });
}
*/
