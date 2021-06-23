const btnPt = document.querySelector(".btn-pt");
const btnEn = document.querySelector(".btn-en");

const inputGoogle = document.querySelector(".input-search");

const search = (e) => {
  if (inputGoogle.value) {
    btnPt.setAttribute("href", `https://www.google.com/search?q=${e}&hl=pt-BR`);
    btnEn.setAttribute("href", `https://www.google.com/search?q=${e}&hl=en`);
  }
};

inputGoogle.addEventListener("keyup", () => {
  search(inputGoogle.value);
});
