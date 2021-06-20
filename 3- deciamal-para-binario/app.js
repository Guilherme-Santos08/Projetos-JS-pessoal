const input = document.querySelector(".input");
const bntSubmit = document.querySelector(".converter__input--btn");
const showResult = document.querySelector(".result__span");

const checkLength = (teste) => {
  for (let i = 0; i < teste.length; i++) {
    if (teste[i] != 1 && teste[i] != 0) {
      return false;
    }
  }
  return true;
};

input.oninput = function () {
  if (this.value.length > 8) {
    this.value = this.value.slice(0, 8);
    alert("Por favor, digite apenas 8 digitos");
  }
};

const binToDec = (value) => {
  if (value === "") {
    alert("Preencha o campo, Por favor!");
  } else {
    let teste = checkLength(value);
    if (teste === true) {
      showResult.innerText = parseInt(value, 2);
    } else {
      alert("Por favor, digite apenas 0 e 1");
      input.value = "";
    }
  }
};

bntSubmit.addEventListener("click", () => {
  binToDec(input.value);
});
