const umbrellaColors = document.querySelectorAll("span");
const umbrellaImages = document.querySelector("img");
const loadingIcon = document.querySelector(".rotate");
const uploadButtton = document.querySelector("#upload");
const outputLogo = document.querySelector("output");
const label = document.querySelector("label");
const deleteImage = document.querySelector(".delete_image");


let imagesArray = [];
// Loading And Umbrella Change
const getSpecificImages = (color,value) => {

  setTimeout(() => {
    umbrellaImages.src = `images/${color} umbrella.png`;
    loadingIcon.setAttribute("style", "display:none");
    outputLogo.setAttribute("style", "display:block");

  }, 2000);

  loadingIcon.setAttribute("style", "display:block");
  document.body.style.background = `linear-gradient(${color} 0%, 5%, rgb(221 227 229 / 20%) 100%)`;
  loadingIcon.style.fill = `${value}`;
  umbrellaImages.setAttribute("src", "");
  outputLogo.setAttribute("style", "display:none");
 label.style.background= `${value}`;
};
//Click Upload Button - Show Image
function displayImages() {
  let images = "";
  imagesArray.forEach((image) => {
    images += `<div class="image">
                        <img src="${URL.createObjectURL(image)}">
                      </div>`;
    label.innerHTML = image.name;
    deleteImage.style.display = "block";
  });
  setTimeout(() => {
    loadingIcon.setAttribute("style", "display:none");
    outputLogo.innerHTML = images;
    umbrellaImages.setAttribute("style", "display:block");
  }, 2000);

  loadingIcon.setAttribute("style", "display:block");
  umbrellaImages.setAttribute("style", "display:none");


}
//Event-Listener(Click) - Umbrella Color
umbrellaColors.forEach((item) => {
  item.addEventListener("click", (event) => {
let color = item.attributes.class.value
let value = item.attributes.value.value
    event.preventDefault();
    getSpecificImages(color,value);

  });
});
//Event-Listener(Change) -Upload Logo
uploadButtton.addEventListener("change", (event) => {
  event.preventDefault();
  const file = uploadButtton.files;
  imagesArray.push(file[0]);
  displayImages();
});
