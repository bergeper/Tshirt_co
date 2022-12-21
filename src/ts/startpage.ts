import { openCartModal } from "./helpers/cart";

let clickOnCart = document.getElementById("cart__icon") as HTMLButtonElement;
clickOnCart.setAttribute("data-bs-toggle", "modal");
clickOnCart.setAttribute("data-bs-target", "#exampleModal");

clickOnCart.addEventListener("click", openCartModal); ///hämtar knappen och gör ett click-event.

openCartModal();
