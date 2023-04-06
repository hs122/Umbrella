const umbrellaColors = document.querySelectorAll("span");
const umbrellaImages = document.querySelector("img");
const loadingIcon = document.querySelector(".rotate");
const uploadButtton = document.querySelector("#upload");
const outputLogo = document.querySelector("output");
const label = document.querySelector("label");
const icon = document.querySelector("#button__icon");
console.log(uploadButtton);
let imagesArray = [];

const getSpecificImages = (color) => {
  setTimeout(() => {
    umbrellaImages.src = `${color} umbrella.png`;
    loadingIcon.style.display = "none";
    outputLogo.style.display ="block"
  }, 3000);
  outputLogo.style.display ="none"
  loadingIcon.style.display = "block";
  document.body.style.background = `linear-gradient(${color} 0%, 0%, rgb(221 227 229 / 20%) 100%)`;
  loadingIcon.style.fill = `${color}`;
  umbrellaImages.src = "";
};

function displayImages() {
  let images = "";
  imagesArray.forEach((image, index) => {

    images += `<div class="image">
                        <img src="${URL.createObjectURL(image)}" >
                      </div>`;
    label.innerHTML = image.name;
  });
  setTimeout(() => {
    loadingIcon.style.display = "none";
    outputLogo.innerHTML = images;
    umbrellaImages.style.display ='block';

  }, 3000);

  loadingIcon.style.display = "block";
  icon.innerHTML = loadingIcon.innerHTML;
  umbrellaImages.style.display ='none';
}

umbrellaColors.forEach((item) => {
  item.addEventListener("click", () => {
    getSpecificImages(item.getAttribute("class"));
  });
});
uploadButtton.addEventListener("change", () => {
  const file = uploadButtton.files;
  imagesArray.push(file[0]);
  displayImages();
});
