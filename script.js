const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const contador = document.querySelector('.contador')

let i = 0

let pastImg 
let nextImg

leftArrow.addEventListener("click", () => {
  i--

  if(i>=0 && i<5){
    pastImg = document.querySelector(`.img-${i+1}`)
    nextImg = document.querySelector(`.img-${i}`)

    pastImg.classList.add("hide")
    nextImg.classList.remove("hide")

  } else if(i<0){
    pastImg = document.querySelector('.img-0')
    nextImg = document.querySelector('.img-4')

    pastImg.classList.add("hide")
    nextImg.classList.remove("hide")

    i=4
  }
})

rightArrow.addEventListener("click", () => {
  i++

  if(i>0 && i<5){
    pastImg = document.querySelector(`.img-${i-1}`)
    nextImg = document.querySelector(`.img-${i}`)

    pastImg.classList.add("hide")
    nextImg.classList.remove("hide")

  } else{
    i = 0
    pastImg = document.querySelector('.img-4')
    nextImg = document.querySelector('.img-0')

    pastImg.classList.add("hide")
    nextImg.classList.remove("hide")
  }
})
