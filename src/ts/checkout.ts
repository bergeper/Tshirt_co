let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
clickOnCart.addEventListener("click", openModal);

function openModal() {
  console.log("hejhej");
  let modalContainer = document.createElement("div") as HTMLDivElement;

  modalContainer.setAttribute("data-bs-toggle", "modal");
  modalContainer.setAttribute("data-bs-target", "#exampleModal");

  document.body.appendChild(modalContainer);
  let modalTitle = document.getElementById(
    "exampleModalLabel"
  ) as HTMLHeadingElement;
  modalTitle.innerHTML = "här sätter vi titel";

  let modalBody = document.getElementById("modal-body") as HTMLDivElement;
  modalBody.innerHTML = " ";
}
