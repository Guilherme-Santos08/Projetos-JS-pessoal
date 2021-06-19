const timesTable = document.querySelector(".tables");
const input = document.querySelector(".input");
const btnSubmit = document.querySelector(".btn");
// const spanCreate = document.createElement("span")

let targetInput = input.value;

const createMulti = (e) => {
  for (let i = 0; i <= 10; i++) {
    let result = e * i;
    timesTable.innerHTML += `
      <span>${e} x ${i} = ${result}</span>
      `;
  }
};

btnSubmit.addEventListener("click", () => {
  timesTable.innerHTML = "";
  createMulti(input.value);

  if (input.value === "") {
    alert("Por favor, preencha o campo para obter o valor!");
    timesTable.innerHTML = "";
  } else {
    input.value = "";
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    timesTable.innerHTML = "";
    createMulti(input.value);

    if (input.value === "") {
      alert("Por favor, preencha o campo para obter o valor!");
      timesTable.innerHTML = "";
    } else {
      input.value = "";
    }
  }
});
