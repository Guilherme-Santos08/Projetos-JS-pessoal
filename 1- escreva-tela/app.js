const input = document.querySelector(".input");
const btnSubmit = document.querySelector(".btn-write");
const writeUl = document.querySelector(".write-ul");

const inputPrint = () => {
  let createLi = document.createElement("li");

  if (!input.value) {
    return alert("Por favor, preencha o campo");
  } else {
    createLi.innerHTML = input.value;
    input.value = "";
  }

  const haveOrNot = createLi.classList.contains("completed");
  if (!haveOrNot) {
    createLi.addEventListener("click", () => {
      createLi.classList.add("completed");
      console.log("add");
    });
  }
  if (!haveOrNot) {
    createLi.addEventListener("dblclick", () => {
      createLi.remove();
      console.log("remove");
    });
  }

  writeUl.appendChild(createLi);
};

btnSubmit.addEventListener("click", inputPrint);
