document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname; // Get full path
  const navLinks = document.querySelectorAll(".m-navbar li, .navbar-text li");

  navLinks.forEach((link) => {
    const linkPath = link.querySelector("a").getAttribute("href");

    if (path === linkPath) {
      link.classList.add("active");
    }
  });
});
