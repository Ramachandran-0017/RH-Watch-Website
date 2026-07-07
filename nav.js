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
