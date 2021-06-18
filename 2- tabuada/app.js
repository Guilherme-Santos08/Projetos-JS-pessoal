const timesTable = document.querySelector(".tables")
const input = document.querySelector(".input")
const btnSubmit = document.querySelector(".btn")
// const spanCreate = document.createElement("span")

let targetInput = input;

const createMulti = (e) => {
   for(let i = 0; i <= 10; i++) {
      let result = e * i
      timesTable.innerHTML`
      <span> ${e} x ${i} = ${result}</span>
      `
   }
}

console.log(createMulti(1))

// timesTable.innerHTML = `
//    <span>${a} x ${}</span>
// `


// timesTable.appendChild(spanCreate)

btnSubmit.addEventListener("click", () => {
   console.log(input.value)
})