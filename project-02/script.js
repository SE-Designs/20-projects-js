const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loading-container");

const portrait = document.getElementById("portrait");
const landscape = document.getElementById("landscape");
const squarish = document.getElementById("squarish");

let photosArray = [];

// Unsplash API
function setNewState() {
  let orient = document.querySelector(".active-btn").id;

  const count = 10;
  const apiKey = "BuK2UoRbuxadweVUE5GZ7FcRvgHndhlDVo9zzMvxpSw";
  const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orient}`;

  // Display Photos
  function displayPhotos() {
    setNewState();
    photosArray.forEach((photo) => {
      // LINK:
      const item = document.createElement("a");
      item.setAttribute("href", photo.links.html);
      item.setAttribute("target", "_blank");
      // IMAGE:
      const img = document.createElement("img");
      img.setAttribute("src", photo.urls.regular);
      img.setAttribute("alt", photo.alt_description);
      img.setAttribute("title", photo.alt_description);
      // INHERIT:
      item.appendChild(img);
      imageContainer.appendChild(item);
    });
  }

  // Get Photos
  async function getPhotos() {
    try {
      const resp = await fetch(apiURL);
      photosArray = await resp.json();
      displayPhotos();
    } catch (err) {}
  }

  getPhotos();
}
window.onload = (event) => {
  portrait.classList.add("active-btn");
};

// Event Listeners
portrait.addEventListener("click", () => {
  portrait.classList.add("active-btn");
  landscape.classList.remove("active-btn");
  squarish.classList.remove("active-btn");
});

landscape.addEventListener("click", () => {
  landscape.classList.add("active-btn");
  portrait.classList.remove("active-btn");
  squarish.classList.remove("active-btn");
});

squarish.addEventListener("click", () => {
  squarish.classList.add("active-btn");
  landscape.classList.remove("active-btn");
  portrait.classList.remove("active-btn");
});
