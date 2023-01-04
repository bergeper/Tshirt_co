import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes } from "./helpers/cart";
import { cartProductToCart } from "./helpers/addToCart";

function sortProducts() {
  //choose filter
  let heroSection: HTMLDivElement = document.getElementById(
    "heroProducts"
  ) as HTMLDivElement;
  let filterForm: HTMLFormElement = document.createElement("form");
  let chooseFilter: HTMLSelectElement = document.createElement("select");
  let chooseFilterOpt1: HTMLOptionElement = document.createElement("option");
  let chooseFilterOpt2: HTMLOptionElement = document.createElement("option");
  let chooseFilterOpt3: HTMLOptionElement = document.createElement("option");
  let chooseFilterOpt4: HTMLOptionElement = document.createElement("option");
  let chooseFilterOpt5: HTMLOptionElement = document.createElement("option");
  let chooseFilterOpt6: HTMLOptionElement = document.createElement("option");
  let chooseFilterLabel: HTMLLabelElement = document.createElement("label");

  let filterBtn: HTMLButtonElement = document.createElement("button");
  filterBtn.type = "submit";
  filterBtn.innerHTML = "Sortera";

  chooseFilter.name = "chooseFilter";
  chooseFilter.id = "chooseFilter";

  chooseFilterOpt1.value = "1";
  chooseFilterOpt1.text = "Pris -fallande";
  chooseFilterOpt2.value = "2";
  chooseFilterOpt2.text = "Pris -ökande";
  chooseFilterOpt3.value = "3";
  chooseFilterOpt3.text = "Alla T-shirts";
  chooseFilterOpt4.value = "4";
  chooseFilterOpt4.text = "Baggy T-shirts";
  chooseFilterOpt5.value = "5";
  chooseFilterOpt5.text = "Slim T-shirts";
  chooseFilterOpt6.value = "6";
  chooseFilterOpt6.text = "Loose T-shirts";

  filterForm.classList.add("productDiv__form");
  chooseFilterLabel.classList.add("productDiv__form--choose");
  chooseFilter.classList.add("productDiv__form--select");
  filterBtn.classList.add("productDiv__form--btn");

  chooseFilterLabel.innerHTML = "Välj filter: ";
  filterForm.appendChild(chooseFilterLabel);
  chooseFilter.appendChild(chooseFilterOpt1);
  chooseFilter.appendChild(chooseFilterOpt2);
  chooseFilter.appendChild(chooseFilterOpt3);
  chooseFilter.appendChild(chooseFilterOpt4);
  chooseFilter.appendChild(chooseFilterOpt5);
  chooseFilter.appendChild(chooseFilterOpt6);
  filterForm.appendChild(chooseFilter);
  filterForm.appendChild(filterBtn);
  heroSection.appendChild(filterForm);

  let baggyProducts: Product[] = products.filter(function (products) {
    return products.fitting == "baggy";
  });
  let slimProducts: Product[] = products.filter(function (products) {
    return products.fitting == "slim";
  });
  let looseProducts: Product[] = products.filter(function (products) {
    return products.fitting == "loose";
  });

  filterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (chooseFilter.value === "1") {
      // Classic sort by price
      products.sort((a, b) => (a.price < b.price ? 1 : -1));
      createHTMLForProducts(products);
    }
    if (chooseFilter.value === "2") {
      products.sort((a, b) => (a.price > b.price ? 1 : -1));
      createHTMLForProducts(products);
    }
    // choose by filter
    if (chooseFilter.value === "3") {
      createHTMLForProducts(products);
    }
    if (chooseFilter.value === "4") {
      createHTMLForProducts(baggyProducts);
    }
    if (chooseFilter.value === "5") {
      createHTMLForProducts(slimProducts);
    }
    if (chooseFilter.value === "6") {
      createHTMLForProducts(looseProducts);
    }
  });
}

let productsContainer = document.getElementById(
  "productsContainer"
) as HTMLDivElement;

// Create HTML for products
function createHTMLForProducts(products: Product[]) {
  productsContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
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
  let clothingFitting: HTMLParagraphElement = document.createElement("p");
  let clothingRelYear: HTMLParagraphElement = document.createElement("p");

  clothingName.classList.add("productmodal__title");
  clothingImage.classList.add("productmodal__image");
  clothingPrice.classList.add("productmodal__price");
  clothingDesc.classList.add("productmodal__desc");
  clothingRelYear.classList.add("productmodal__desc");
  clothingFitting.classList.add("productmodal__desc");

  clothingImage.src = productItem.image;
  clothingImage.alt = productItem.name;
  clothingDesc.innerHTML = productItem.desc;
  clothingRelYear.innerHTML =
    "Den här produkten släpptes " + productItem.releaseYear;
  clothingFitting.innerHTML =
    "Denna t-shirt har " + productItem.fitting + " som passform!";
  clothingPrice.innerHTML = "Pris: " + productItem.price.toString() + " Kr";

  productDescContainer.appendChild(clothingImage);
  productDescContainer.appendChild(clothingDesc);
  productDescContainer.appendChild(clothingFitting);
  productDescContainer.appendChild(clothingRelYear);
  productDescContainer.appendChild(clothingPrice);
}
buttonAttributes();
createHTMLForProducts(products);
sortProducts();
