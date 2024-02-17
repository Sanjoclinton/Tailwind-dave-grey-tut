const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu"); 
  const hamburgerLines = document.getElementsByClassName("hamburger-line");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    // hamburgerLines[0].classList.toggle('top-line');
    // hamburgerLines[1].classList.toggle('middle-line');
    // hamburgerLines[2].classList.toggle('bottom-line');
    hamburgerBtn.classList.toggle('toggle-btn');
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
