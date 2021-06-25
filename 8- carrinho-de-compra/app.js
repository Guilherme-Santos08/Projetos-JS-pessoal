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

function addShop() {
  const carItem = [];
  const carModal = document.querySelector(".car-modal");
  const containerModal = document.createElement("div");
  // containerModal.classList.add("products");

  const addItems = () => {
    for (let i = 0; i < products.length - 2; i++)
      carItem.push(products[currentItem]);
    containerModal.innerHTML += `
      <div class="products">
        <div class="products__img">
          <img
            src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?cs=srgb&dl=pexels-karol-d-841228.jpg&fm=jpg"
            alt="Foto do produto"
          />
        </div>
        <div class="products__info">
          <span class="products__info--span"> Teclado </span>
        </div>
        <div class="products__bnt">
          <div class="products__btn--unidade">
            <span>1</span>
          </div>
          <div class="products__btn">
            <button class="products__bnt--remove">
              <i class="far fa-minus-square"></i>
            </button>
            <button class="products__bnt--add">
              <i class="far fa-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
        `;
    carModal.appendChild(containerModal);
    console.log(carItem);
  };

  addInCar.addEventListener("click", addItems);

  openModal.addEventListener("click", () => {
    modaToggle.classList.toggle("active");
  });
}
addShop();

// Montar o modal
// Criar lógica para mostrar o modal ao clicar no carrinho.
// Quando clicar no + o produto vai ser mandado para modal de compras.
// Mostrar pequena sinalização de quantos produto tem no carrinho
