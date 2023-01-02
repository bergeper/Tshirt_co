// Payment form here

export function payoutForm() {
  let checkoutContainer: HTMLDivElement = document.getElementById(
    "payOutForm"
  ) as HTMLDivElement;

  let checkoutForm: HTMLFormElement = document.createElement("form");
  let checkoutTitle: HTMLHeadingElement = document.createElement("h3");
  let labelFirstName: HTMLLabelElement = document.createElement("label");
  let fNameInput: HTMLInputElement = document.createElement("input"); // ska submitta value och använda senare
  let labelLastName: HTMLLabelElement = document.createElement("label");
  let lNameInput: HTMLInputElement = document.createElement("input");
  let labelEmail: HTMLLabelElement = document.createElement("label");
  let emailInput: HTMLInputElement = document.createElement("input");
  let labelAdress: HTMLLabelElement = document.createElement("label");
  let adressInput: HTMLInputElement = document.createElement("input");
  let labelCode: HTMLLabelElement = document.createElement("label");
  let codeInput: HTMLInputElement = document.createElement("input");
  let payButton: HTMLButtonElement = document.createElement("button");
  let paymentOptionLabel: HTMLLabelElement = document.createElement("label");
  let paymentOptionDiv: HTMLDivElement = document.createElement("div");
  let cardButton: HTMLInputElement = document.createElement("input");
  let invoiceButton: HTMLInputElement = document.createElement("input");
  let cardLabel: HTMLLabelElement = document.createElement("label");
  let invoiceLabel: HTMLLabelElement = document.createElement("label");

  fNameInput.setAttribute("name", "firstname");
  fNameInput.setAttribute("placeholder", "Förnamn");
  emailInput.setAttribute("type", "email");
  cardButton.setAttribute("type", "radio");
  invoiceButton.setAttribute("type", "radio");
  cardButton.setAttribute("name", "paymentOptions");
  invoiceButton.setAttribute("name", "paymentOptions");

  checkoutForm.className = "cartForm";

  checkoutTitle.innerHTML = "Betalning";
  labelFirstName.innerHTML = "Förnamn: ";
  labelLastName.innerHTML = "Efternamn: ";
  labelEmail.innerHTML = "Email: ";
  labelAdress.innerHTML = "Adress: ";
  labelCode.innerHTML = "Rabattkod: ";
  payButton.innerHTML = "Betala";
  paymentOptionLabel.innerHTML = "Betalningsalternativ: ";
  cardLabel.innerHTML = "Kort";
  invoiceLabel.innerHTML = "Faktura";

  checkoutForm.appendChild(checkoutTitle);
  checkoutForm.appendChild(labelFirstName);
  checkoutForm.appendChild(fNameInput);
  checkoutForm.appendChild(labelLastName);
  checkoutForm.appendChild(lNameInput);
  checkoutForm.appendChild(labelEmail);
  checkoutForm.appendChild(emailInput);
  checkoutForm.appendChild(labelAdress);
  checkoutForm.appendChild(adressInput);
  checkoutForm.appendChild(labelCode);
  checkoutForm.appendChild(codeInput);
  checkoutForm.appendChild(paymentOptionLabel);
  paymentOptionDiv.appendChild(cardLabel);
  paymentOptionDiv.appendChild(cardButton);
  paymentOptionDiv.appendChild(invoiceLabel);
  paymentOptionDiv.appendChild(invoiceButton);
  checkoutContainer.appendChild(checkoutForm);
  checkoutContainer.appendChild(paymentOptionDiv);
  checkoutContainer.appendChild(payButton);
}
