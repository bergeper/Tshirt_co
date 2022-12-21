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
  let cartHeading: HTMLHeadingElement = document.createElement("h5");
  cartHeading.innerHTML = "hejhej";

  let informationDiv: HTMLDivElement = document.createElement("div");
  informationDiv.className = "cartDiv";
  informationDiv.innerHTML = "";

  let cartImage: HTMLImageElement = document.createElement("img");
  cartImage.className = "cartImage";
  cartImage.src =
    "https://www.shirtstore.se/pub_images/original/15348_r_20268.jpg?extend=copy&width=1280&method=fit&height=1280&type=webp";
  modalContainer.appendChild(cartHeading);
  modalContainer.appendChild(informationDiv);
  informationDiv.appendChild(cartImage);
}
