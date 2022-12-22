import { ProductCart } from "../models/ProductCart";
import { getFromLocalStorage } from "./addToCart";

let cartProducts: ProductCart[] = [];

export function buttonAttributes() {
  let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
  clickOnCart.setAttribute("data-bs-toggle", "modal");
  clickOnCart.setAttribute("data-bs-target", "#exampleModal");
  clickOnCart.addEventListener("click", openCartModal);
}

export function openCartModal() {
  // LOCALSTORAGE
  cartProducts = getFromLocalStorage();
  console.log(cartProducts);

  //Loop for cartProducts
  for (let i = 0; i < cartProducts.length; i++) {
    let modalContainer = document.getElementById(
      "modal-body"
    ) as HTMLDivElement; //get modalbody from html
    modalContainer.innerHTML = ""; //empty container
    let modalTitle = document.getElementById(
      "exampleModalLabel"
    ) as HTMLHeadingElement;
    modalTitle.innerHTML = "Varukorg";

    let productName: HTMLParagraphElement = document.createElement("p");
    productName.className = "modal-body__priceName";
    productName.innerHTML = cartProducts[i].product.name;

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.className = "modal-body__priceText";
    productPrice.innerHTML = cartProducts[i].product.price.toString();

    let cartImage: HTMLImageElement = document.createElement("img");
    cartImage.className = "modal-body__cartImage";
    cartImage.src = cartProducts[i].product.image;
    let cartQuantity: HTMLParagraphElement = document.createElement("p");
    cartQuantity.innerHTML = cartProducts[i].quantity.toString();
    cartQuantity.className = "modal-body__cartQuantity";
    let totalAmount: HTMLParagraphElement = document.createElement("p");
    totalAmount.innerHTML = "Totalt Summa:....";
    totalAmount.className = "modal-body__totalAmount";

    let quantityDiv: HTMLDivElement = document.createElement("div");
    quantityDiv.className = "cartDiv__quantityDiv";

    //create - + buttons
    let removeButton: HTMLButtonElement = document.createElement("button");
    let addButton: HTMLButtonElement = document.createElement("button");
    let removeAllButton: HTMLElement = document.createElement("button");
    removeAllButton.className = "modal-body__removeAllButton";
    removeButton.className = "modal-body__removeButton";
    addButton.className = "modal-body__addButton";
    removeAllButton.innerHTML = "Rensa";
    removeButton.innerHTML = "-";
    addButton.innerHTML = "+";

    modalContainer.appendChild(productName);
    modalContainer.appendChild(productPrice);
    modalContainer.appendChild(cartImage);
    modalContainer.appendChild(addButton);
    modalContainer.appendChild(cartQuantity);
    modalContainer.appendChild(removeButton);
    modalContainer.appendChild(removeAllButton);
    modalContainer.appendChild(quantityDiv);
    quantityDiv.appendChild(totalAmount);
  }
}
