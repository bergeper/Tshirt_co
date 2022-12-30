const cartProducts = getFromLocalStorage();

import { buttonAttributes } from "./helpers/cart";
import { getFromLocalStorage } from "./helpers/addToCart";
import { ProductCart } from "./models/ProductCart";

buttonAttributes(); //anropar funktionen som i sin tur anropar funktionen som hämtar modalen

function render() {
  let cartProducts: ProductCart[] = [];
  cartProducts = getFromLocalStorage();

  let sumContainer = document.getElementById(
    "checkout-container"
  ) as HTMLDivElement;

  sumContainer.innerHTML = "";

  for (let i = 0; i < cartProducts.length; i++) {
    let checkoutContainer = document.getElementById(
      "checkout-container"
    ) as HTMLDivElement;

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
    removeAllButton.innerHTML = `<i class="bi bi-trash trashIcon"</i>`;

    //add quantity to cart
    addButton.addEventListener("click", () => {
      //cartProducts[i].quantity++;
      cartProducts[i].quantityPlus(1);
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      render();
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
      render();
    });

    //Remove item for Cart
    removeAllButton.addEventListener("click", () => {
      cartProducts.splice(i, 1);
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      render();
    });

    cart.appendChild(productName);
    cart.appendChild(productPrice);
    cart.appendChild(cartImage);
    cart.appendChild(addButton);
    cart.appendChild(cartQuantity);
    cart.appendChild(removeButton);
    cart.appendChild(removeAllButton);
    console.log("tjooo", cart);
    checkoutContainer.appendChild(cart);
  }

  //Put erase all here.
  let removeAllProducts = document.getElementById(
    "removeAllProducts"
  ) as HTMLDivElement;
  removeAllProducts.addEventListener("click", () => {});

  // totalsum here
  let sum = 0;
  let totalSum: HTMLParagraphElement = document.createElement(
    "totalsum"
  ) as HTMLParagraphElement;
  // totalSum.innerHTML = "";
  if (cartProducts.length > 0) {
    for (let i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].product.price * cartProducts[i].quantity;
    }
    totalSum.innerHTML = "Total: " + sum.toString() + " Kr";
  } else {
    totalSum.innerHTML = "Här vare tomt";
  }
  sumContainer.appendChild(totalSum);
}

render();
