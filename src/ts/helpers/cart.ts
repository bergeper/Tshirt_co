export function openCartModal() {
  let modalContainer = document.getElementById("modal-body") as HTMLDivElement; ///hämtar modalbodyn från html
  modalContainer.innerHTML = ""; //tömmer inför varje gång
  let modalTitle = document.getElementById(
    //hämtar modaltiteln med id från html
    "exampleModalLabel"
  ) as HTMLHeadingElement;
  modalTitle.innerHTML = "här sätter vi titel";
  let ptag: HTMLParagraphElement = document.createElement("p");
  ptag.innerHTML = "hejhej";

  modalContainer.appendChild(ptag);
}
