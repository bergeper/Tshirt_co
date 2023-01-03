import { ProductCart } from "../models/ProductCart";
import { clearLocalStorage, getFromLocalStorage } from "./localStorage";

// cart List
let cartProducts: ProductCart[] = [];

//connect the cart button to the modal
// Change function name.
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

  let cartFooter: HTMLDivElement = document.getElementById(
    "cart-footer"
  ) as HTMLDivElement;

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

    let procuctContainer: HTMLDivElement = document.createElement("div");
    procuctContainer.className = "cart__product";

    let productName: HTMLParagraphElement = document.createElement("p");
    productName.className = "cart__product--name";
    productName.innerHTML = cartProducts[i].product.name;

    let productSize: HTMLParagraphElement = document.createElement("p");
    productSize.className = "cart__product--size";
    productSize.innerHTML = cartProducts[i].product.size.size;

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.className = "cart__product--price";
    productPrice.innerHTML = cartProducts[i].product.price.toString() + " kr";

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

    let removeAllButton: HTMLButtonElement = document.createElement("button");
    removeAllButton.className = "cart__removeAllButton";
    removeAllButton.innerHTML = `<i class="bi bi-trash trashIcon"</i>`;

    //add quantity to cart
    addButton.addEventListener("click", () => {
      //cartProducts[i].quantity++;
      cartProducts[i].quantityPlus(1);
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      openCartModal(cartProducts);
    });

    //remove quantity to cartitem
    removeButton.addEventListener("click", () => {
      //cartProducts[i].quantity--;
      cartProducts[i].quantityMinus(1);
      if (cartProducts[i].quantity < 1) {
        // Adds one quantity so it wont go negative.
        // Dont want it to be removed.
        cartProducts[i].quantityPlus(1);
      }
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      openCartModal(cartProducts);
    });

    //Remove item for Cart
    removeAllButton.addEventListener("click", () => {
      cartProducts.splice(i, 1);
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      openCartModal(cartProducts);
    });

    procuctContainer.appendChild(productName);
    procuctContainer.appendChild(productSize);
    procuctContainer.appendChild(productPrice);
    cart.appendChild(procuctContainer);
    cart.appendChild(cartImage);
    cart.appendChild(addButton);
    cart.appendChild(cartQuantity);
    cart.appendChild(removeButton);
    cart.appendChild(removeAllButton);
    modalContainer.appendChild(cart);
  }

  //Put erase all here.
  let removeAllProducts = document.getElementById(
    "removeAllProducts"
  ) as HTMLDivElement;
  removeAllProducts.addEventListener("click", () => {
    clearLocalStorage();
    openCartModal(cartProducts);
  });

  // totalsum here
  let sum = 0;
  let totalSum: HTMLParagraphElement = document.createElement(
    "totalsum"
  ) as HTMLParagraphElement;
  totalSum.className = "cart__totalSum";
  // totalSum.innerHTML = "";
  if (cartProducts.length > 0) {
    for (let i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].product.price * cartProducts[i].quantity;
    }
    totalSum.innerHTML = "Total: " + sum.toString() + " Kr";
  } else {
    totalSum.innerHTML = "Varukorgen är tom.";
  }
  modalContainer.appendChild(totalSum);
}

//hello
