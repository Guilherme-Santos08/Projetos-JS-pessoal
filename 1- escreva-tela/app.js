const input = document.querySelector(".input");
const btnSubmit = document.querySelector(".btn-write");
const writeUl = document.querySelector(".write-ul");

const inputPrint = () => {
   let createLi = document.createElement("li")
   createLi.innerHTML = input.value
   input.value = ""

   if(!createLi.classList.contains("completed")) {
      createLi.addEventListener("click", () => {
         createLi.classList.add("completed")
      })
   }else {
      createLi.addEventListener("dblclick", () => {
         createLi.remove()
      })
   }

   writeUl.appendChild(createLi)
}


btnSubmit.addEventListener("click", inputPrint) 