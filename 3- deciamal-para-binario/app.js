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

const maxNumber = 8;

const binToDec = (value) => {
  if (value === "") {
    alert("Preencha o campo, Por favor!");
  } else {
    let teste = checkLength(value);
    if (teste === true) {
      alert("Foi");
    } else {
      alert("Por favor, digite apenas 0 e 1");
      input.value = "";
    }
  }

  if (input.value > 8) {
    alert("teste");
  }
};

bntSubmit.addEventListener("click", (e) => {
  console.log(input.value);
  binToDec(input.value);
});
