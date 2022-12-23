import { ProductCart } from "../models/ProductCart";
import { getFromLocalStorage } from "./addToCart";

// cart List
let cartProducts: ProductCart[] = [];

//connect the cart button to the modal
export function buttonAttributes() {
  let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
  clickOnCart.setAttribute("data-bs-toggle", "modal");
  clickOnCart.setAttribute("data-bs-target", "#exampleModal");
  cartProducts = JSON.parse(localStorage.getItem("Cart") || "[]");
  clickOnCart.addEventListener("click", () => {
    openCartModal(cartProducts);
  });
}

export function openCartModal(cartProducts: ProductCart[]) {
  // LOCALSTORAGE
  cartProducts = getFromLocalStorage();

  let modalContainer = document.getElementById("modal-body") as HTMLDivElement; //get modalbody from html
  modalContainer.innerHTML = ""; //empty the container before loop

  let totalAmount: HTMLParagraphElement = document.createElement("p");
  totalAmount.innerHTML = "Totalt Summa:....";
  totalAmount.className = "cart__totalAmount";

  //Loop for cartProducts
  for (let i = 0; i < cartProducts.length; i++) {
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

    let quantityDiv: HTMLDivElement = document.createElement("div");
    quantityDiv.className = "cart__quantityDiv";

    //create - + buttons
    let removeButton: HTMLButtonElement = document.createElement("button");
    removeButton.className = "cart__removeButton";
    removeButton.innerHTML = "-";

    let addButton: HTMLButtonElement = document.createElement("button");
    addButton.className = "cart__addButton";
    addButton.innerHTML = "+";

    let removeAllButton: HTMLElement = document.createElement("button");
    removeAllButton.className = "cart__removeAllButton";
    removeAllButton.innerHTML = "Rensa";
    //add to cart

    addButton.addEventListener("click", () => {
      // addQuantity(cartProducts[i]);
      console.log(cartProducts[i]);
      cartProducts[i].quantityPlus(1);
      console.log(cartProducts[i]);
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      openCartModal(cartProducts);
    });

    //add from cart

    removeButton.addEventListener("click", () => {
      // addQuantity(cartProducts[i]);
      if (cartProducts[i].quantity === 1) {
        cartProducts[i].quantityPlus(-1);
        console.log(cartProducts[i]);
        localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
        openCartModal(cartProducts);
      }
    });

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
