const dado = document.querySelector(".dado__numero");
const btnRandom = document.querySelector(".gerar-dado");

// Fazer lógica do dado
const createDiv = document.createElement("div");
createDiv.classList.add("dado__numero--teste")
dado.appendChild(createDiv);

const dadoRandom = (e) => {
  for (let i = 1; i <= e; i++) {
      createDiv.classList.add(`dado__numero--${e}`);
      createDiv.innerHTML += `<div></div>`;
      console.log(i);
  }
};

btnRandom.addEventListener("click", () => {
  const numberRandom = Math.floor(Math.random() * 6) + 1;
  createDiv.innerHTML = "";
  dadoRandom(numberRandom);
});

// Caso seja true adicione um innerHtml

// Fazer a lógica dos numero aleatório
