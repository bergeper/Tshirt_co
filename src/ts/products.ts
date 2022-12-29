import { Product } from "./models/Products";
import { products } from "./services/productList";
import { buttonAttributes, openCartModal } from "./helpers/cart";
import { ProductCart } from "./models/ProductCart";
import { getFromLocalStorage } from "./helpers/addToCart";

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

    let clothingSize: HTMLImageElement = document.createElement(
      "p"
    ) as HTMLImageElement;

    let clothingBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    let clothingDescBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;

    clothingName.innerHTML = products[i].name;
    clothingImage.src = products[i].image;
    clothingImage.alt = products[i].name;
    // add this
    clothingSize.innerHTML = "Storlek: " + products[i].size;
    clothingPrice.innerHTML = products[i].price.toString() + " Kr";
    clothingBtn.innerHTML = "Lägg till i varukorg";
    clothingDescBtn.innerHTML = "Produkt Beskrivning";

    clothingDiv.classList.add("productDiv");
    clothingName.classList.add("productDiv__title");
    clothingImage.classList.add("productDiv__image");
    clothingPrice.classList.add("productDiv__price");
    clothingBtn.classList.add("productDiv__btn--add");
    clothingDescBtn.classList.add("productDiv__btn--desc");

    // Product to cart
    clothingBtn.addEventListener("click", () => {
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
    clothingDiv.appendChild(clothingBtn);
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
        cartProducts[i].product.articleId === cartProductToLS.product.articleId
      ) {
        // changing the quantity instead of adding another of the same item.
        console.log("Om id hittas: ", cartProducts);
        cartProducts[i].quantity++;
        localStorage.setItem("Cart", JSON.stringify(cartProducts));
        console.log("den finns i listan");
        found = true;
        return;
      }
    }
  }
  // if the product does not exist in localStorage
  if (found === false) {
    console.log("Om id inte hittas: ", cartProducts);
    cartProducts.push(cartProductToLS);
    localStorage.setItem("Cart", JSON.stringify(cartProducts));
  }
}
