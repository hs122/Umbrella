const umbrellaColors = document.querySelectorAll("span");
const umbrellaImages = document.querySelector("img");
const loadingIcon = document.querySelector(".rotate");
const uploadButtton = document.querySelector("#upload");
const outputLogo = document.querySelector("output");
const label = document.querySelector("label");
const deleteImage = document.querySelector(".delete_image");


let imagesArray = [];

const getSpecificImages = (color) => {
  setTimeout(() => {
    umbrellaImages.src = `images/${color} umbrella.png`;
    loadingIcon.setAttribute("style", "display:none");
    outputLogo.setAttribute("style", "display:block");

  }, 2000);

  loadingIcon.setAttribute("style", "display:block");
  document.body.style.background = `linear-gradient(${color} 0%, 5%, rgb(221 227 229 / 20%) 100%)`;
  loadingIcon.style.fill = `${color}`;
  umbrellaImages.setAttribute("src", "");
  outputLogo.setAttribute("style", "display:none");
 label.style.background= `${color}`;
};

function displayImages(color) {
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

umbrellaColors.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    getSpecificImages(item.getAttribute("class"));

  });
});
uploadButtton.addEventListener("change", (event) => {
  event.preventDefault();
  const file = uploadButtton.files;
  imagesArray.push(file[0]);
  displayImages();
});
