const products = [
  {
    id: 1,
    name: "Teclado",
    img: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?cs=srgb&dl=pexels-karol-d-841228.jpg&fm=jpg",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio necessitatibus veniam iusto reiciendis eius ex sed facere esse, quisquam eos.",
  },
  {
    id: 2,
    name: "Fone",
    img: "https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?cs=srgb&dl=pexels-moose-photos-1037999.jpg&fm=jpg",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio necessitatibus veniam iusto reiciendis eius ex sed facere esse, quisquam eos.",
  },
  {
    id: 3,
    name: "Monitor",
    img: "https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?cs=srgb&dl=pexels-josh-sorenson-1714202.jpg&fm=jpg",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio necessitatibus veniam iusto reiciendis eius ex sed facere esse, quisquam eos.",
  },
];

const title = document.querySelector(".title");
const productImg = document.querySelector(".buys__imgs--img");
const productInfo = document.querySelector(".buys__info--p");

const productNext = document.querySelector(".buys__btns--next");
const productPrev = document.querySelector(".buys__btns--prev");

const openCar = document.querySelector("buys__btns--add");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  productShow(currentItem);
});

const productShow = (product) => {
  const item = products[product];
  title.innerHTML = item.name;
  productImg.src = item.img;
  productInfo.textContent = item.info;
};

productNext.addEventListener("click", () => {
  currentItem++;
  if (currentItem > products.length - 1) {
    currentItem = 0;
  }
  productShow(currentItem);
});

productPrev.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = 0
  }
  productShow(currentItem);
});


// Montar o modal
// Criar lógica para mostrar o modal ao clicar no carrinho.
// Quando clicar no + o produto vai ser mandado para modal de compras.
// Mostrar pequena sinalização de quantos produto tem no carrinho