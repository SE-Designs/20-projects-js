hashes = [
  "#hero-section",
  "#advantages-section",
  "#about-section",
  "#partners-section",
  "#tokenomics-section",
  "#contact-section",
];

let isScrollable = true;
let index = 0;
const sideTags = document.querySelectorAll("#sidetag");
const navTabs = document.querySelectorAll("#nav-tab");

// SCROLLBAR
const scrollBar = document.querySelector("#scrollbar");

// NAVBAR
const toggleNav = document.querySelector("#toggle-nav");
const mobileNav = document.querySelector("#mobile-nav");

// MOBILE MENU HIGHLIGHT
const mobileNavTabs = document.querySelectorAll("#mobile-nav-tab");
const mobileLinks = document.querySelectorAll("#mobile-link");
const mobileSocialLinks = document.querySelectorAll("#mobile-social-link");

// TOGGLE NAV
toggleNav.addEventListener("click", toggleMobile);

function toggleMobile() {
  if (mobileNav.classList.contains("active")) {
    mobileNav.classList.remove("active");
    toggleNav.classList.remove("active");
    document.body.style.overflowY = "auto";
  } else {
    mobileNav.classList.add("active");
    toggleNav.classList.add("active");
    document.body.style.overflowY = "hidden";
  }
}

// DARK MODE
const toggleMode = document.querySelector("#toggle-mode");
const lightMode = "<i class='bx bx-moon' ></i>";
const darkMode = "<i class='bx bx-sun'></i>";
toggleMode.innerHTML = lightMode;

function switchTheme() {
  if (toggleMode.classList.contains("dark")) {
    toggleMode.innerHTML = "";
    toggleMode.innerHTML = lightMode;
    toggleMode.classList.remove("dark");
    toggleMode.classList.add("light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    toggleMode.innerHTML = "";
    toggleMode.innerHTML = darkMode;
    toggleMode.classList.add("dark");
    toggleMode.classList.remove("light");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

toggleMode.addEventListener("click", switchTheme);

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
        mobileNavTabs[id].classList.add("g-text");
        sideTags[id].classList.add("sideactive");
        navTabs[id].classList.add("g-text");
      } else {
        mobileNavTabs[id].classList.remove("g-text");
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
if (window.innerWidth >= 992) {
  let isWheelable = true;
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

  // MOVE BY KEYBOARD
  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowUp" || e.code === "ArrowLeft") {
      console.log("Up Arrow");
      // IF FIRST - JUMP TO BOTTOm
      if (index == 0) {
        index = hashes.length - 1;
        scrollTo(hashes[index]);
      } else {
        scrollTo(hashes[index - 1]);
      }
    }

    if (e.code === "ArrowDown" || e.code === "ArrowRight") {
      console.log("Down Arrow");
      // IF LAST - JUMP TO TOP
      if (index == hashes.length - 1) {
        index = 0;
        scrollTo(hashes[index]);
      } else {
        scrollTo(hashes[index + 1]);
      }
    }

    switch (e.code) {
      case "Digit1":
        scrollTo(hashes[0]);
        break;
      case "Digit2":
        scrollTo(hashes[1]);
        break;
      case "Digit3":
        scrollTo(hashes[2]);
        break;
      case "Digit4":
        scrollTo(hashes[3]);
        break;
      case "Digit5":
        scrollTo(hashes[4]);
        break;
      case "Digit6":
        scrollTo(hashes[5]);
        break;
    }
  });
}

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
