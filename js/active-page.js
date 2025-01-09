// ACTIVE PAGE CODE
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar-text ul li");

  navLinks.forEach((link) => {
    const linkPath = link.querySelector("a").getAttribute("href");
    if (path.includes(linkPath)) {
      link.classList.add("active");
    }
  });
});
