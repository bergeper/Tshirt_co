let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
clickOnCart.setAttribute("data-bs-toggle", "modal");
clickOnCart.setAttribute("data-bs-target", "#exampleModal");

clickOnCart.addEventListener("click", openModal); ///hämtar knappen och gör ett click-event.

function openModal() {
  let modalContainer = document.getElementById("modal-body") as HTMLDivElement; ///hämtar modalbodyn från html
  //modalContainer.innerHTML = " "; //tömmer inför varje gång
  //funktion för modalen.
  console.log("hejhej");

  //modalContainer.setAttribute("data-bs-toggle", "modal"); //sätter alla attribut som är utkommenderade i html
  //modalContainer.setAttribute("data-bs-target", "#exampleModal");

  let modalTitle = document.getElementById(
    //hämtar modaltiteln med id från html
    "exampleModalLabel"
  ) as HTMLHeadingElement;
  modalTitle.innerHTML = "här sätter vi titel";

  document.body.appendChild(modalContainer);
  modalContainer.appendChild(modalTitle);
}
