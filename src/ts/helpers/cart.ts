import { ProductCart } from "../models/ProductCart";
import { getFromLocalStorage } from "./addToCart";

export function buttonAttributes() {
  let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
  clickOnCart.setAttribute("data-bs-toggle", "modal");
  clickOnCart.setAttribute("data-bs-target", "#exampleModal");
  clickOnCart.addEventListener("click", openCartModal);
}

export function openCartModal() {
  let modalContainer = document.getElementById("modal-body") as HTMLDivElement; //get modalbody from html
  modalContainer.innerHTML = ""; //empty container
  let modalTitle = document.getElementById(
    "exampleModalLabel"
  ) as HTMLHeadingElement;
  modalTitle.innerHTML = "Varukorg";

  let productName: HTMLParagraphElement = document.createElement("p");
  productName.className = "modal-body__priceName";
  productName.innerHTML = "NAMNET:...";

  let productPrice: HTMLParagraphElement = document.createElement("p");
  productPrice.className = "modal-body__priceText";
  productPrice.innerHTML = "PRISET...";

  let cartImage: HTMLImageElement = document.createElement("img");
  cartImage.className = "modal-body__cartImage";
  cartImage.src =
    "https://www.shirtstore.se/pub_images/original/15348_r_20268.jpg?extend=copy&width=1280&method=fit&height=1280&type=webp";

  let cartQuantity: HTMLParagraphElement = document.createElement("p");
  cartQuantity.innerHTML = "Antal:";
  cartQuantity.className = "modal-body__cartQuantity";
  let totalAmount: HTMLParagraphElement = document.createElement("p");
  totalAmount.innerHTML = "Totalt Summa:....";
  totalAmount.className = "modal-body__totalAmount";

  let quantityDiv: HTMLDivElement = document.createElement("div");
  quantityDiv.className = "cartDiv__quantityDiv";

document.getElementById
  

  productAttributes.appendChild(productName);
  productAttributes.appendChild(productPrice);
  modalContainer.appendChild(cartHeading);
  modalContainer.appendChild(informationDiv);
  informationDiv.appendChild(productAttributes);
  informationDiv.appendChild(cartImage);
  informationDiv.appendChild(quantityDiv);
  quantityDiv.appendChild(cartQuantity);
  quantityDiv.appendChild(totalAmount);

  let productsInCart: ProductCart = getFromLocalStorage();
  ///console.log(cartAttributes);
  
  for (let i = 0; i < productsInCart.length; i++) {
    let cartArticleId: number = productsInCart[i].product;
    let cartImage: string = productsInCart[i]
    let cartProductName: string = productsInCart[i].;
    let cartProductPrice: number = productsInCart[i].price;
    let cartProductSize: string = productsInCart[i].size;
    let cartQuantity: number = productsInCart[i].quantity;
  }
  
}
