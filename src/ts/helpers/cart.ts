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
  cartProducts = getFromLocalStorage();
  // LOCALSTORAGE
  console.log(cartProducts);

  //Loop for cartProducts
  for (let i = 0; i < cartProducts.length; i++) {
    let modalContainer = document.getElementById("cart") as HTMLDivElement; //get modalbody from html
    modalContainer.innerHTML = ""; //empty container
    let modalTitle = document.getElementById(
      "exampleModalLabel"
    ) as HTMLHeadingElement;
    modalTitle.innerHTML = "Varukorg";

    let cart: HTMLDivElement = document.createElement("div");
    cart.className = "cart";

    let productName: HTMLParagraphElement = document.createElement("p");
    productName.className = "cart__priceName";
    productName.innerHTML = cartProducts[i].product.name;

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.className = "cart__priceText";
    productPrice.innerHTML = cartProducts[i].product.price.toString();

    let cartImage: HTMLImageElement = document.createElement("img");
    cartImage.className = "cart__cartImage";
    cartImage.src = cartProducts[i].product.image;
    let cartQuantity: HTMLParagraphElement = document.createElement("p");
    cartQuantity.innerHTML = cartProducts[i].quantity.toString();
    cartQuantity.className = "cart__cartQuantity";
    let totalAmount: HTMLParagraphElement = document.createElement("p");
    totalAmount.innerHTML = "Totalt Summa:....";
    totalAmount.className = "cart__totalAmount";

    let quantityDiv: HTMLDivElement = document.createElement("div");
    quantityDiv.className = "cartDiv__quantityDiv";

    //create - + buttons
    let removeButton: HTMLButtonElement = document.createElement("button");
    let addButton: HTMLButtonElement = document.createElement("button");
    let removeAllButton: HTMLElement = document.createElement("button");
    removeAllButton.className = "cart__removeAllButton";
    removeButton.className = "cart__removeButton";
    addButton.className = "cart__addButton";
    removeAllButton.innerHTML = "Rensa";
    removeButton.innerHTML = "-";
    addButton.innerHTML = "+";

    cart.appendChild(productName);
    cart.appendChild(productPrice);
    cart.appendChild(cartImage);
    cart.appendChild(addButton);
    cart.appendChild(cartQuantity);
    cart.appendChild(removeButton);
    cart.appendChild(removeAllButton);
    cart.appendChild(quantityDiv);
    quantityDiv.appendChild(totalAmount);
    modalContainer.appendChild(cart);
  }
}
