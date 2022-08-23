hashes = [
  "#hero-section",
  "#advantages-section",
  "#about-section",
  "#partners-section",
  "#tokenomics-section",
  "#contact-section",
];

let isScrollable = true;
let isWheelable = true;
let index = 0;
const sideTags = document.querySelectorAll("#sidetag");
const navTabs = document.querySelectorAll("#nav-tab");

// SCROLLBAR
const scrollBar = document.querySelector("#scrollbar");

// ONCHANGE / ONCLICK
window.onscroll = () => {
  if (isScrollable) {
    // let windowHeight = window.innerHeight * id;
    // let scrollBarY = Math.round(
    //   (windowHeight / document.body.offsetHeight) * 100
    // );
    isScrollable = false;
    let url = window.top.location.hash.substring(1);
    hashes.forEach((hash, id) => {
      if (hash == "#" + url) {
        index = id;

        sideTags[id].classList.add("sideactive");
        navTabs[id].classList.add("g-text");
      } else {
        sideTags[id].classList.remove("sideactive");
        navTabs[id].classList.remove("g-text");
      }
    });
    // console.log(scrollBarY);
    // scrollBar.style.top =
    //   Math.round(scrollBarY * (window.innerHeight / 100)) + "px";
  }
  setTimeout(() => (isScrollable = true), 500);
};

// ON SCROLL
window.onwheel = (e) => {
  if (isWheelable) {
    isWheelable = false;
    if (e.deltaY >= 0) {
      // Scroll Down:
      if (index == hashes.length - 1) {
        index = hashes.length - 1;
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
    scrollTo(hashes[index]);

    setTimeout(() => (isWheelable = true), 300);
  }
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

  navTabs.forEach((el, id) => {
    if (id == index) {
      el.classList.add("g-text");
    } else {
      el.classList.remove("g-text");
    }
  });
}

// SCROLL TO ANCHOR
function scrollTo(hash) {
  location.hash = hash;
}
