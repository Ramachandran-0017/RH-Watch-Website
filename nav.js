let navbarShow = document.querySelector(".navbarShow"),
  secondNav = document.querySelector(".secondNav"),
  navbarHide = document.querySelector(".navbarHide");

function navShow() {
  navbarShow.style = "display : none";
  navbarHide.style = "display : flex";
  secondNav.style.right = "0";
}

function navHide() {
  secondNav.style.right = "100%";
  navbarShow.style = "display : flex";
  navbarHide.style = "display : none";
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 830) {
    secondNav.style.right = "0";
    navbarShow.style.display = "none";
    navbarHide.style.display = "none";
  } else {
    secondNav.style.right = "100%";
    navbarShow.style.display = "flex";
    navbarHide.style.display = "none";
  }
});

const siteNav = document.querySelector(".navContainer");

if (siteNav) {
  let lastScrollY = window.scrollY;
  const NAV_SCROLL_THRESHOLD = 80;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > NAV_SCROLL_THRESHOLD) {
      siteNav.classList.add("nav-solid");

      if (currentScrollY > lastScrollY) {
        siteNav.classList.add("nav-hidden");
      } else {
        siteNav.classList.remove("nav-hidden");
      }
    } else {
      siteNav.classList.remove("nav-solid");
      siteNav.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
  });
}
