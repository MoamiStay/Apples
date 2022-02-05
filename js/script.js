const myImg = document.querySelectorAll(".galleryImg");
const photo = document.querySelectorAll(".photo");
const text = document.querySelectorAll(".text");

for (let node of myImg) {
node.addEventListener("click", flipMe);
node.addEventListener("click", switchImg);
node.addEventListener("click", reset);
}

function flipMe() {
    for (let node of myImg) {
  node.style.animationName = "flip";
  node.style.animationDuration = "1000ms";
  node.style.animationTimingFunction = "ease-in-out";
}}

// I think that I need to make a function that targets each individual photo upon click,
// rather than the current code that target all photos equally. 
// combine the element to switch the image into one function that takes a parameter. the parameter being the specific image clicked on.

// function switchImages(parameter) {}
// myImg.addEventListener("click", getMyId);
// function getMyId() {
// *Save index of this image and store it as a const to use as parameter, maybe? What are parameters again.. ? 
// } 

function switchImg() {
  setTimeout(() => {
    for (let node of photo) {
    node.classList.toggle("hidden");
    }
    for (let node of text) {
    node.classList.toggle("hidden")
  }}, 500);
}

function reset() {
  setTimeout(() => {
    for (let node of myImg) {
  node.style.animationName = "none";
  node.style.animationDuration = "0ms";
  node.style.animationTimingFunction = "ease-in"; }
  }, 1000);
}