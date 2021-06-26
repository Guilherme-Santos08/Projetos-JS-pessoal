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

const addInCar = document.querySelector(".buys__btns--add");
const openModal = document.querySelector(".open-modal");
const modaToggle = document.querySelector(".modal");

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
    currentItem = 0;
  }
  productShow(currentItem);
});

function shopList() {
  const carItem = [];
  const carModal = document.querySelector(".car-modal");
  const shopSpan = document.querySelector(".items__span--number");
  const productsSize = document.querySelectorAll(".products");

  let itemSize = 0;

  const addItems = () => {
    const carName = products.map((p) => p.name);
    const carImg = products.map((p) => p.img);
    carModal.innerHTML += `
      <div class="products">
        <div class="products__img">
          <img
            src="${carImg[currentItem]}"
            alt="Foto do produto"
          />
        </div>
        <div class="products__info">
          <span class="products__info--span"> ${carName[currentItem]} </span>
        </div>
        <div class="products__bnt">
          <div class="products__btn--unidade">
            <span>1</span>
          </div>
          <div class="products__btn">
            <button class="products__btn--remove">
              <i class="far fa-minus-square"></i>
            </button>
            <button class="products__btn--add">
              <i class="far fa-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
        `;

    if (productsSize.length >= 0) {
      itemSize++;
      shopSpan.innerHTML = itemSize;
    } else if (productsSize.length < itemSize) {
      itemSize--;
      shopSpan.innerHTML = itemSize;
    }
  };
  addInCar.addEventListener("click", addItems);
  openModal.addEventListener("click", () => {
    modaToggle.classList.toggle("active");
  });
}
shopList();

// Mostrar pequena sinalização de quantos produto tem no carrinho
// Mostrar as informações de cada item no modal ao adicionar
// Remover o item do carrinho
// Quando se o mesmo produto se repetir ele não adicionar em baixo e sim mostra as quantidade ali do lado
