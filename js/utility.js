class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="nav-container">
    <h1 class="navlogo"><a href="#">Matthew</a></h1>
    <div class="navbar">
        <nav class="navbar-text">
            <ul>
                <li id="home">
                    <a href="home.html">Home</a>
                    <img class="icon" src="./icons/active page.svg">
                </li>
                <li id="about-me">
                    <a href="about-me.html">About Me</a>
                    <img class="icon" src="./icons/active page.svg">
                </li>
                <li id="projects">
                    <a href="projects.html">Projects</a>
                    <img class="icon" src="./icons/active page.svg">
                </li>
                <li id="contact-me">
                    <a href="contact-me.html">Contact Me</a>
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
        <footer class="footer-container">
    <ul class="footerlinks">
      <li class="mail-icon-wrapper">
          <a href="mailto:mattfaghiri@gmail.com">
              <img tabindex="0" role="button" class="mail-icon icon" src="/icons/email.svg" alt="Email">
          </a>
      </li>
      <li><div class="divider"></div></li>
      <li class="github-icon-wrapper">
          <a href="https://github.com/harobmikonam" target="_blank" rel="noopener noreferrer">
              <img tabindex="0" role="button" class="github-icon icon" src="/icons/github.svg" alt="GitHub">
          </a>
      </li>
    </ul>
  </footer>
        `;
  }
}

customElements.define("portfolio-navbar", Navbar);
customElements.define("portfolio-footer", Footer);
