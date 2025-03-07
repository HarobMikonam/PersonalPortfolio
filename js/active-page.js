document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/").pop(); // Get only the page name
  const navLinks = document.querySelectorAll(".m-navbar li");

  navLinks.forEach((link) => {
    const linkPath = link
      .querySelector("a")
      .getAttribute("href")
      .split("/")
      .pop();

    if (path === linkPath) {
      link.classList.add("active");
    }
  });
});
