"use strict";

const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const contador = document.querySelector('.contador')

let i = 0

let pastImg 
let nextImg
let timeoutId

leftArrow.addEventListener("click", () => {
  clearTimeout(timeoutId)
  previousPicture()
  setTimeoutToChange()
})

rightArrow.addEventListener("click", () => {
  clearTimeout(timeoutId)
  nextPicture()
  setTimeoutToChange()
})

function setTimeoutToChange() {
  timeoutId = setTimeout(() => {
    nextPicture();
    setTimeoutToChange();
  }, 5000);
}

function nextPicture(){
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
}

function previousPicture(){
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
}

setTimeoutToChange();


///////////////////////////
////Change arrow position and size

const pictures = document.querySelector('.pictures')
let lastWidth = window.innerWidth;

function changeArrow(picturesHeight, divisor){
  leftArrow.style.height = picturesHeight + 'px';
  rightArrow.style.height = picturesHeight + 'px';

  leftArrow.style.fontSize = `${picturesHeight/divisor + 'px'}`
  rightArrow.style.fontSize = `${picturesHeight/divisor + 'px'}`
}

if(lastWidth < 900){
  window.onload = function() {
    let picturesHeight = pictures.offsetHeight;
    changeArrow(picturesHeight, 10)
  };
  
  window.addEventListener("resize", function() {
    if (lastWidth !== window.innerWidth) {
      let picturesHeight = pictures.offsetHeight
      changeArrow(picturesHeight, 10)
    }
  });
}else{
  window.onload = function() {
    let picturesHeight = pictures.offsetHeight;
    changeArrow(picturesHeight, 15)
  };
  
  window.addEventListener("resize", function() {
    if (lastWidth !== window.innerWidth) {
      let picturesHeight = pictures.offsetHeight
      changeArrow(picturesHeight, 15)
    }
  });
}
  

/////////////////////////////
//MOBILE NAVIGATION

const btnNavEl = document.querySelector(".btn-menu");
const headerEl = document.querySelector(".header");
const imgEl = document.querySelector("IMG")
const mestrePicEl = document.querySelector(".mestre-pic")
const sectionEl = document.querySelector("SECTION")

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  sectionEl.classList.toggle("go-back")
  mestrePicEl.classList.toggle("go-back")
});


/////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/////////////////////////////
// STICKY NAVIGATION

const carrossel = document.querySelector(".carrossel");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(carrossel);


