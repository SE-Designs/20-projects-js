// SIDETAG ANCHOR LINKS

// SMOOTH ANCHOR LINKS
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

hash = [
  "#hero-section",
  "#advantages-section",
  "#about-section",
  "#partners-section",
  "#tokenomics-section",
  "#contact-section",
];

let index = 0;
const sideTags = document.querySelectorAll("#sidetag");

// SCROLLBAR
const scrollBar = document.querySelector("#scrollbar");

// ON SCROLL
window.onwheel = (e) => {
  let windowHeight = window.innerHeight * index;
  let scrollBarY = Math.round(
    (windowHeight / document.body.offsetHeight) * 100
  );
  if (e.deltaY >= 0) {
    // Scroll Down:
    if (index == hash.length - 1) {
      index = hash.length - 1;
    } else {
      index++;
    }
  } else {
    // Scroll Up:
    if (index == 0) {
      index = 0;
    } else {
      index--;
    }
  }
  setActive();
  scrollTo(hash[index]);
  console.log(scrollBarY);
  scrollBar.style.top =
    Math.round(scrollBarY * (window.innerHeight / 100)) + "px";
};

// SET ACTIVE
function setActive() {
  sideTags.forEach((el, id) => {
    if (id == index) {
      el.classList.add("sideactive");
    } else {
      el.classList.remove("sideactive");
    }
  });
}

// SCROLL TO ANCHOR
function scrollTo(hash) {
  location.hash = hash;
}
