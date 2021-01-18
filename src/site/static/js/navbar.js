let lastScrollTop = 0;
navbar = document.getElementById("navbar")
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-39px"   
  } else {
    navbar.style.top = "0"
  }
  lastScrollTop = scrollTop
})