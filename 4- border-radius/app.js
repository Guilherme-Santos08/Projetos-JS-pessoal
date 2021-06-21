const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");
const bottomLeft = document.querySelector(".bottom-left");
const bottomRight = document.querySelector(".bottom-right");

const inputs = document.querySelectorAll(".inputs");
const inputColor = document.querySelector(".input-color");

const showRadius = document.querySelector(".show-radius");
const viewsRadius = document.querySelector(".view-radius");
const copyRadius = document.querySelector(".copy");

// viewsRadius.textContent = topLeft.value

const generateShow = () => {
  const radiusTl =
    (showRadius.style.borderTopLeftRadius = `${topLeft.value}px`);
  const radiusTr =
    (showRadius.style.borderTopRightRadius = `${topRight.value}px`);
  const radiusBl =
    (showRadius.style.borderBottomLeftRadius = `${bottomLeft.value}px`);
  const radiusBr =
    (showRadius.style.borderBottomRightRadius = `${bottomRight.value}px`);

  viewsRadius.innerHTML = `border-radius: ${radiusTl} ${radiusTr} ${radiusBl} ${radiusBr}`;
};

copyRadius.addEventListener("click", () => {
  let textArea = document.createElement("textarea");
  textArea.value = viewsRadius.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
});

inputs.forEach(() => {
  this.addEventListener("keyup", () => {
    generateShow();
  });
});

inputColor.addEventListener("input", () => {
  showRadius.style.backgroundColor = inputColor.value;
});
