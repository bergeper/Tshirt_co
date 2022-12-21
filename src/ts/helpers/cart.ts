// create Menu
export const createCart = () => {
  // menu
  // TESTKÅD
  const menuContainer: HTMLDivElement = document.querySelector(
    ".cart__menu"
  ) as HTMLDivElement;

  let isHidden = menuContainer.style.display === "none";
  if (isHidden) {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
};
