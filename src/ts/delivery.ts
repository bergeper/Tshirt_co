import { getCustomerFromLocalStorage } from "./helpers/customerLS";
import { clearLocalStorage, getFromLocalStorage } from "./helpers/localStorage";
import { Customer } from "./models/Customer";
import { ProductCart } from "./models/ProductCart";

let mainWrapper: HTMLDivElement = document.getElementById(
  "displayDeliveryMessage"
) as HTMLDivElement;
let orderContainer: HTMLDivElement = document.createElement("div");
let orderMessage: HTMLHeadingElement = document.createElement("h3");

// Getting products and customer name from paymentform
let orderedItems: ProductCart[] = [];
orderedItems = getFromLocalStorage();
let customer: Customer[] = [];
customer = getCustomerFromLocalStorage();
export function displayDeliveryMessage() {
  mainWrapper.innerHTML = "";

  let confirmBtn: HTMLButtonElement = document.createElement("button");
  confirmBtn.innerHTML = "Bekräfta och lägg order";
  confirmBtn.classList.add("productDiv__form--btn");

  orderContainer.classList.add("orderContainer");

  orderMessage.classList.add("orderContainer__title");
  orderMessage.innerHTML =
    customer[0].customerFirstname + "<br>Här är din beställning";

  orderContainer.appendChild(orderMessage);

  for (let i = 0; i < orderedItems.length; i++) {
    let orderDiv: HTMLDivElement = document.createElement("div");
    let orderTitle: HTMLHeadElement = document.createElement("h3");
    let orderImage: HTMLImageElement = document.createElement("img");
    let orderPrice: HTMLHeadingElement = document.createElement("h3");

    orderDiv.classList.add("delivery");
    orderTitle.classList.add("delivery__product--name");
    orderImage.classList.add("delivery__cartImage");
    orderPrice.classList.add("delivery__product--price");

    orderTitle.innerHTML = orderedItems[i].product.name;
    orderImage.src = orderedItems[i].product.image;
    orderPrice.innerHTML = orderedItems[i].product.price.toString();

    orderDiv.appendChild(orderTitle);
    orderDiv.appendChild(orderImage);
    orderDiv.appendChild(orderPrice);
    orderContainer.appendChild(orderDiv);
  }
  // totalsum here
  let sum = 0;
  let totalSum: HTMLParagraphElement = document.createElement(
    "totalsum"
  ) as HTMLParagraphElement;
  totalSum.className = "delivery__totalSum";
  // totalSum.innerHTML = "";
  if (orderedItems.length > 0) {
    for (let i = 0; i < orderedItems.length; i++) {
      sum += orderedItems[i].product.price * orderedItems[i].quantity;
    }
    totalSum.innerHTML = "Total: " + sum.toString() + " Kr";
  } else {
    totalSum.innerHTML = "Varukorgen är tom.";
  }

  confirmBtn.addEventListener("click", () => {
    clearOrder();
  });

  orderContainer.appendChild(totalSum);
  orderContainer.appendChild(confirmBtn);
  mainWrapper.appendChild(orderContainer);
}

function clearOrder() {
  orderContainer.innerHTML = "";
  orderContainer.appendChild(orderMessage);
  orderMessage.innerHTML =
    "Tack för din order<br>" +
    customer[0].customerFirstname +
    " " +
    customer[0].customerLastname;
  clearLocalStorage();

  let backToStartPageBtn: HTMLButtonElement = document.createElement("button");
  backToStartPageBtn.type = "submit";
  backToStartPageBtn.innerHTML = "Tillbaka till startsidan";
  backToStartPageBtn.classList.add("productDiv__form--btn");

  backToStartPageBtn.addEventListener("click", () => {
    window.location.href = "http://localhost:1234/index.html";
  });
  orderContainer.appendChild(backToStartPageBtn);
  mainWrapper.appendChild(orderContainer);
}

displayDeliveryMessage();
