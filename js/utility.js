class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="nav-container">
    <h1 class="navlogo"><a href="/home/index.html">Matthew</a></h1>
    <div class="navbar">
        <nav class="navbar-text">
            <ul>
                <li id="home">
                    <a href="/home/index.html">Home</a>
                    <img class="icon" src="./icons/active page.svg">
                </li>
                <li id="about-me">
                    <a href="/about-me/about-me.html">About Me</a>
                    <img class="icon" src="./icons/active page.svg">
                </li>
                <li id="projects">
                    <a href="/projects/projects.html">Projects</a>
                    <img class="icon" src="./icons/active page.svg">
                </li>
                <li id="contact-me">
                    <a href="/contact-me/contact-me.html">Contact Me</a>
                    <img class="icon" src="./icons/active page.svg">
                </li>
            </ul>
        </nav>
    </div>
</div>


        `;
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="footer-container close">
      <!-- Hamburger button to toggle the drawer -->
      <button class="hamburger-menu" aria-label="Menu">
        <img src="/icons/hamburger.svg" alt="Menu" />
      </button>

      <!-- Static footer links (email, GitHub, etc.) -->
      <ul class="footerlinks static-links">
        <li class="mail-icon-wrapper">
          <a href="mailto:mattfaghiri@gmail.com">
            <img
              tabindex="0"
              role="button"
              class="mail-icon icon"
              src="/icons/email.svg"
              alt="Email"
            />
          </a>
        </li>
        <h1 class="navlogo-footer"><a href="#">Matthew</a></h1>
        <li class="divider"></li>
        <li class="github-icon-wrapper">
          <a
            href="https://github.com/harobmikonam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              tabindex="0"
              role="button"
              class="github-icon icon"
              src="/icons/github.svg"
              alt="GitHub"
            />
          </a>
        </li>
      </ul>

      <!-- Navigation links in the drawer -->
      <ul class="m-navbar">
        <li id="home">
          <a href="/home/index.html">Home</a>
          <img class="M-icon" src="./icons/active page.svg" />
        </li>
        <li id="about-me">
          <a href="/about-me/about-me.html">About Me</a>
          <img class="M-icon" src="./icons/active page.svg" />
        </li>
        <li id="projects">
          <a href="/projects/projects.html">Projects</a>
          <img class="M-icon" src="./icons/active page.svg" />
        </li>
        <li id="contact-me">
          <a href="/contact-me/contact-me.html">Contact Me</a>
          <img class="M-icon" src="./icons/active page.svg" />
        </li>
      </ul>
    </footer>
        `;
  }
}

customElements.define("portfolio-navbar", Navbar);
customElements.define("portfolio-footer", Footer);

const drawer = document.querySelector(".footer-container");
const button = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".m-navbar");

button.addEventListener("click", () => {
  drawer.classList.toggle("open");
  navbar.classList.toggle("openm");
});
