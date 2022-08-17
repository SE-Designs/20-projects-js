const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loading-container");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
let count = 5;
const apiKey = "BuK2UoRbuxadweVUE5GZ7FcRvgHndhlDVo9zzMvxpSw";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Image Loading
function imageLoading() {
  setTimeout(() => {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      count = 2;
      ready = true;
      loader.style.display = "none";
      console.log("ready: " + ready);
    }
  }, 1000);
}

function setAttribute(el, att) {
  for (const key in att) {
    el.setAttribute(key, att[key]);
  }
}

// Display Photos
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log("totalImages: " + totalImages);
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
    // EVENT:
    img.addEventListener("load", imageLoading());

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

// Scroll event
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

getPhotos();
