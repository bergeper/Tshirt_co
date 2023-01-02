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
  let EmailInput: HTMLInputElement = document.createElement("input");

  fNameInput.setAttribute("name", "firstname");
  fNameInput.setAttribute("placeholder", "Förnamn");

  checkoutForm.className = "cartForm";

  checkoutTitle.innerHTML = "Betalning";
  labelFirstName.innerHTML = "Förnamn: ";
  labelLastName.innerHTML = "Efternamn: ";
  labelEmail.innerHTML = "Email: ";

  checkoutForm.appendChild(checkoutTitle);
  checkoutForm.appendChild(labelFirstName);
  checkoutForm.appendChild(fNameInput);
  checkoutForm.appendChild(labelLastName);
  checkoutForm.appendChild(lNameInput);
  checkoutForm.appendChild(labelEmail);
  checkoutForm.appendChild(EmailInput);
  checkoutContainer.appendChild(checkoutForm);

  console.log("hej");
}
