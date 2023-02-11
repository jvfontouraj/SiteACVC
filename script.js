const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const contador = document.querySelector('.contador')

let i = 0

leftArrow.addEventListener("click", () => {
  i--
  contador.textContent = i
})

rightArrow.addEventListener("click", () => {
  i++
  contador.textContent = i
})
