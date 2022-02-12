const myImg = document.querySelectorAll(".galleryImg");
const photos = document.querySelectorAll(".photo");
const texts = document.querySelectorAll(".text");


myImg.forEach((img) => {
  // console.log(img);
img.addEventListener("click", flipMe);
img.addEventListener("click", switchImg);
img.addEventListener("click", reset);
});

function flipMe() {
  this.style.animationName = "flip";
  this.style.animationDuration = "1000ms";
  this.style.animationTimingFunction = "ease-in-out";
}

// THIS ONE JUST NEED TO TARGET ITSELF! 
// XXX[0] NEED TO SOMEHOW TARGET IT's OWN INDEX
function switchImg() {
  setTimeout(() => {
    for(let i = 0; i < myImg.length; i++)
    photos[i].classList.toggle("hidden");
    {
    for(let i = 0; i < myImg.length; i++)
    texts[i].classList.toggle("hidden"); 
  }}, 500);
}


function reset() {
  setTimeout(() => {
  this.style.animationName = "none";
  this.style.animationDuration = "0ms";
  this.style.animationTimingFunction = "ease-in";
  }, 1000);
}






// function flipMe() {
//   for (let node of myImg) {
// node.style.animationName = "flip";
// node.style.animationDuration = "1000ms";
// node.style.animationTimingFunction = "ease-in-out";
// }}

// function switchImg() {
//   setTimeout(() => {
//     for (let node of photos) {
//     node.classList.toggle("hidden");
//     }
//     for (let node of texts) {
//     node.classList.toggle("hidden")
//   }}, 500);
// }

// function reset() {
//   setTimeout(() => {
//     for (let node of myImg) {
//   node.style.animationName = "none";
//   node.style.animationDuration = "0ms";
//   node.style.animationTimingFunction = "ease-in"; }
//   }, 1000);
// }
