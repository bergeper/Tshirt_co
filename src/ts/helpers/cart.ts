export function buttonAttributes() {
  let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
  clickOnCart.setAttribute("data-bs-toggle", "modal");
  clickOnCart.setAttribute("data-bs-target", "#exampleModal");
  clickOnCart.addEventListener("click", openCartModal);
}

export function openCartModal() {
  let modalContainer = document.getElementById("modal-body") as HTMLDivElement; ///hämtar modalbodyn från html
  modalContainer.innerHTML = ""; //tömmer inför varje gång
  let modalTitle = document.getElementById(
    //hämtar modaltiteln med id från html
    "exampleModalLabel"
  ) as HTMLHeadingElement;
  modalTitle.innerHTML = "Varukorg";
  let ptag: HTMLParagraphElement = document.createElement("p");
  ptag.innerHTML = "hejhej";

  modalContainer.appendChild(ptag);
}
