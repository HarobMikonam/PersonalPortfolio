document.addEventListener("DOMContentLoaded", function () {
  let path = window.location.pathname;

  if (path !== "/") {
    path = path.replace(/\/$/, "");
  }

  const navLinks = document.querySelectorAll(".m-navbar li, .navbar-text li");

  navLinks.forEach((link) => {
    let linkPath = link.querySelector("a").getAttribute("href");

    if (linkPath !== "/") {
      linkPath = linkPath.replace(/\/$/, "");
    }

    if (path === linkPath) {
      link.classList.add("active");
    }
  });
});
