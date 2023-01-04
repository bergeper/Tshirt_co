import { buttonAttributes } from "./helpers/cart";
import { getFromLocalStorage } from "./helpers/localStorage";
import { ProductCart } from "./models/ProductCart";
import { displayDeliveryMessage, paymentOption } from "./helpers/paymentForm";

buttonAttributes(); //anropar funktionen som i sin tur anropar funktionen som hämtar modalen
displayCart();
function displayCart() {
  let cartProducts: ProductCart[] = [];
  cartProducts = getFromLocalStorage();

  let checkoutContainer = document.getElementById(
    "checkout-cart"
  ) as HTMLDivElement;
  checkoutContainer.innerHTML = "";

  let cartContainer: HTMLDivElement = document.createElement("div");
  cartContainer.classList.add("checkoutContainer");

  let checkoutContainerTitle: HTMLHeadingElement = document.createElement("h3");
  checkoutContainerTitle.innerHTML = "Dina varor";
  checkoutContainerTitle.className = "checkout__title";
  checkoutContainer.appendChild(checkoutContainerTitle);

  for (let i = 0; i < cartProducts.length; i++) {
    let cart: HTMLDivElement = document.createElement("div");
    cart.className = "checkout";

    let procuctContainer: HTMLDivElement = document.createElement("div");
    procuctContainer.className = "checkout__product";

    let productName: HTMLParagraphElement = document.createElement("p");
    productName.className = "checkout__product--name";
    productName.innerHTML = cartProducts[i].product.name;

    let productSize: HTMLParagraphElement = document.createElement("p");
    productSize.className = "checkout__product--size";
    productSize.innerHTML = cartProducts[i].product.size.size;

    let productPrice: HTMLParagraphElement = document.createElement("p");
    productPrice.className = "checkout__product--price";
    productPrice.innerHTML = cartProducts[i].product.price.toString() + " kr";

    let cartImage: HTMLImageElement = document.createElement("img");
    cartImage.className = "checkout__cartImage";
    cartImage.src = cartProducts[i].product.image;

    let cartQuantity: HTMLParagraphElement = document.createElement("p");
    cartQuantity.innerHTML = cartProducts[i].quantity.toString();
    cartQuantity.className = "checkout__cartQuantity";

    let quantityDiv: HTMLDivElement = document.createElement("div");
    quantityDiv.className = "checkout__quantityDiv";

    //create - + buttons
    let removeButton: HTMLButtonElement = document.createElement("button");
    removeButton.className = "checkout__removeButton";
    removeButton.innerHTML = "-";

    let addButton: HTMLButtonElement = document.createElement("button");
    addButton.className = "checkout__addButton";
    addButton.innerHTML = "+";

    let removeAllButton: HTMLButtonElement = document.createElement("button");
    removeAllButton.className = "checkout__removeAllButton";
    removeAllButton.innerHTML = `<i class="bi bi-trash trashIcon"</i>`;

    //add quantity to cart
    addButton.addEventListener("click", () => {
      //cartProducts[i].quantity++;
      cartProducts[i].quantityPlus(1);
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      displayCart();
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
      displayCart();
    });

    //Remove item for Cart
    removeAllButton.addEventListener("click", () => {
      cartProducts.splice(i, 1);
      localStorage.setItem("Cart", JSON.stringify(cartProducts) || "");
      displayCart();
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
    cartContainer.appendChild(cart);
  }
  checkoutContainer.appendChild(cartContainer);
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
  totalSum.className = "checkout__totalSum";
  // totalSum.innerHTML = "";
  if (cartProducts.length > 0) {
    for (let i = 0; i < cartProducts.length; i++) {
      sum += cartProducts[i].product.price * cartProducts[i].quantity;
    }
    totalSum.innerHTML = "Total: " + sum.toString() + " Kr";
  } else {
    totalSum.innerHTML = "Varukorgen är tom.";
  }
  checkoutContainer.appendChild(totalSum);
}
//payoutForm();
// Getting Form
let checkOutForm: HTMLFormElement = document.getElementById(
  "checkoutForm"
) as HTMLFormElement;
let checkOutFormfName: HTMLFormElement = document.getElementById(
  "input"
) as HTMLFormElement;

checkOutForm.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  paymentOption();
});
