const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");
const images = document.querySelector("img");
const svg = document.querySelector("svg");
blue.addEventListener("click", () => {
    setTimeout(()=>{
        images.src = "Blue umbrella.png";
        svg.style.display="none"
        document.body.style.background="blue"
    },3000)
    svg.style.display="block"
    svg.style.fill="blue"
    images.src=""
});
pink.addEventListener("click", () => {
  setTimeout(() => {

    images.src = "Pink umbrella.png";
    svg.style.display="none"
    document.body.style.background="pink"

  }, 3000);
  svg.style.display="block"
  svg.style.fill="pink"
  images.src=""

});
yellow.addEventListener("click", () => {
    setTimeout(()=>{
        images.src = "Yello umbrella.png";
        svg.style.display="none"
        document.body.style.background="yellow"
    },3000)
    svg.style.display="block"
    svg.style.fill="yellow"
    images.src=""
});
