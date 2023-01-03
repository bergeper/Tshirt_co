import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes, openCartModal } from "./helpers/cart";
import { ProductCart } from "./models/ProductCart";
import { getFromLocalStorage } from "./helpers/localStorage";
import { Size } from "./models/Size";

buttonAttributes();
createHTMLForProducts();

function createHTMLForProducts() {
  for (let i = 0; i < products.length; i++) {
    let productsContainer = document.getElementById(
      "productsContainer"
    ) as HTMLDivElement;

    let clothingDiv: HTMLDivElement = document.createElement(
      "div"
    ) as HTMLDivElement;

    let clothingName: HTMLHeadingElement = document.createElement(
      "h2"
    ) as HTMLHeadingElement;

    let clothingImage: HTMLImageElement = document.createElement(
      "img"
    ) as HTMLImageElement;

    let clothingPrice: HTMLImageElement = document.createElement(
      "p"
    ) as HTMLImageElement;

    let clothingBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    let clothingDescBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    // Choose size
    let sizeForm: HTMLFormElement = document.createElement(
      "form"
    ) as HTMLFormElement;
    let chooseSize: HTMLSelectElement = document.createElement(
      "select"
    ) as HTMLSelectElement;
    let chooseSizeOpt1: HTMLOptionElement = document.createElement(
      "option"
    ) as HTMLOptionElement;
    let chooseSizeOpt2: HTMLOptionElement = document.createElement(
      "option"
    ) as HTMLOptionElement;
    let chooseSizeOpt3: HTMLOptionElement = document.createElement(
      "option"
    ) as HTMLOptionElement;
    let chooseSizeLabel: HTMLLabelElement = document.createElement(
      "label"
    ) as HTMLLabelElement;
    chooseSizeLabel.innerHTML = "Välj Storlek: ";
    chooseSize.name = "chooseSize";
    chooseSize.id = "chooseSize";

    chooseSizeOpt1.value = "1";
    chooseSizeOpt1.text = "Small";
    chooseSizeOpt2.value = "2";
    chooseSizeOpt2.text = "Medium";
    chooseSizeOpt3.value = "3";
    chooseSizeOpt3.text = "Large";

    clothingName.innerHTML = products[i].name;
    clothingImage.src = products[i].image;
    clothingImage.alt = products[i].name;
    clothingPrice.innerHTML = "Pris: " + products[i].price.toString() + " Kr";
    clothingBtn.innerHTML = "Lägg till i varukorg";
    clothingDescBtn.innerHTML = "Produktbeskrivning";

    clothingDiv.classList.add("productDiv");
    clothingName.classList.add("productDiv__title");
    clothingImage.classList.add("productDiv__image");
    clothingPrice.classList.add("productDiv__price");
    clothingBtn.classList.add("productDiv__btn--add");
    clothingDescBtn.classList.add("productDiv__btn--desc");

    sizeForm.classList.add("productDiv__form");
    chooseSizeLabel.classList.add("productDiv__form--label");
    chooseSize.classList.add("productDiv__form--select");
    clothingBtn.classList.add("productDiv__form--btn");

    // Product to cart
    clothingBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (chooseSize.value === "1") {
        products[i].size.sizeSmall();
      }
      if (chooseSize.value === "2") {
        products[i].size.sizeMedium();
      }
      if (chooseSize.value === "3") {
        products[i].size.sizeLarge();
      }
      cartProductToCart(products[i]);
    });

    // Product Desc
    clothingDescBtn.addEventListener("click", () => {
      createProductModal(products[i]);
    });
    clothingDescBtn.setAttribute("data-bs-toggle", "modal");
    clothingDescBtn.setAttribute("data-bs-target", "#productModal");

    clothingDiv.appendChild(clothingName);
    clothingDiv.appendChild(clothingImage);
    clothingDiv.appendChild(clothingPrice);

    chooseSize.appendChild(chooseSizeOpt1);
    chooseSize.appendChild(chooseSizeOpt2);
    chooseSize.appendChild(chooseSizeOpt3);
    sizeForm.appendChild(chooseSizeLabel);
    sizeForm.appendChild(chooseSize);
    sizeForm.appendChild(clothingBtn);

    clothingDiv.appendChild(sizeForm);
    clothingDiv.appendChild(clothingDescBtn);
    productsContainer.appendChild(clothingDiv);
    //console.log(products);
  }
}
// Product Desc
function createProductModal(productItem: Product) {
  let productDescContainer = document.getElementById(
    "productDescContainer"
  ) as HTMLDivElement;
  productDescContainer.innerHTML = "";

  // Title of modal will be productItem name
  let clothingName = document.getElementById(
    "productName"
  ) as HTMLHeadingElement;
  clothingName.innerHTML = productItem.name;

  let clothingImage: HTMLImageElement = document.createElement("img");
  let clothingPrice: HTMLParagraphElement = document.createElement("p");
  let clothingDesc: HTMLParagraphElement = document.createElement("p");

  clothingName.classList.add("productmodal__title");
  clothingImage.classList.add("productmodal__image");
  clothingPrice.classList.add("productmodal__price");
  clothingDesc.classList.add("productmodal__desc");

  clothingImage.src = productItem.image;
  clothingImage.alt = productItem.name;
  clothingDesc.innerHTML = productItem.desc;
  clothingPrice.innerHTML = "Pris: " + productItem.price.toString() + " Kr";

  productDescContainer.appendChild(clothingImage);
  productDescContainer.appendChild(clothingDesc);
  productDescContainer.appendChild(clothingPrice);
}

// Add product to cart
function cartProductToCart(cartProduct: Product) {
  // getting list from localStorage
  let cartProducts: ProductCart[] = [];
  cartProducts = getFromLocalStorage();

  // Creating a new object based on class ProductCart
  const cartProductToLS: ProductCart = new ProductCart(1, cartProduct);

  // checking if list of products is empty.
  let found: boolean = false;
  if (cartProducts.length === 0) {
    found = false;
  } else {
    for (let i = 0; i < cartProducts.length; i++) {
      if (
        // if the same product exists with the same size

        cartProducts[i].product.size.size ===
          cartProductToLS.product.size.size &&
        cartProducts[i].product.articleId === cartProductToLS.product.articleId
      ) {
        // changing the quantity instead of adding another of the same item.
        cartProducts[i].quantity++;
        localStorage.setItem("Cart", JSON.stringify(cartProducts));
        found = true;
        return;
      }
    }
  }
  // if the product does not exist in localStorage
  if (found === false) {
    cartProducts.push(cartProductToLS);
    localStorage.setItem("Cart", JSON.stringify(cartProducts));
  }
}
