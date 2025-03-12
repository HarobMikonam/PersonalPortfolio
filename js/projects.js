class ProjectSection extends HTMLElement {
  async connectedCallback() {
    const maincontainer = document.createElement("div");
    maincontainer.className = "main-container";

    try {
      // Fetch project data from JSON file
      const response = await fetch("../content/projects.json");
      const projects = await response.json();

      // Limit the number of projects displayed
      const max_projects = Math.min(projects.length, 6); // Adjust max projects as needed

      for (let i = 0; i < max_projects; i++) {
        const projectData = projects[i];

        const project = document.createElement("div");
        project.className = "container";

        const boxBehind = document.createElement("div");
        boxBehind.className = "box-behind";
        project.appendChild(boxBehind);

        const box = document.createElement("div");
        box.className = "box";

        // Adding project details inside box
        box.innerHTML = `
        <a href="${projectData.link}" target="_blank" class="project-text">
          <h3>${projectData.title}</h3>
          <p>${projectData.description}</p>
        </a>
      `;

        project.appendChild(box);
        maincontainer.appendChild(project);
      }

      this.appendChild(maincontainer);
    } catch (error) {
      console.error("Error loading projects:", error);
    }

    // CSS BOX-BEHIND MANIPULATION
    const container = document.querySelectorAll(".container");
    // const mainContainer = document.querySelector('.main-container');
    // const styles = window.getComputedStyle(mainContainer);
    // const rows = styles.getPropertyValue('grid-template-rows').split(' ').length;
    // const columns = styles.getPropertyValue('grid-template-columns').split(' ').length;
    const centerIndex = 4;
    const centerRow = 1;
    const centerCol = 1;
    const style = {
      top: -8,
      left: -8,
    };

    // console.log(mainContainer);

    // let iteration = 0;
    // for (let i = -1; i < rows - 1; i++) {
    //     for (let j = -1; j < columns - 1; j++) {
    //         const container = mainContainer.children[iteration];
    //         const boxBehind = container.children[0];

    //         boxBehind.style.top = `${style.top * i}px`;
    //         boxBehind.style.left = `${style.left * j}px`;
    //         iteration++;

    //     }
    // }

    container.forEach((box, index) => {
      const boxBehind = box.querySelector(".box-behind");

      // get row and column position
      const row = Math.floor(index / 3);
      const column = index % 3;

      // calculating how far away (rows) the box is from the center
      const rowDistance = row - centerRow;
      const columnDistance = column - centerCol;

      //if its 4 skip over the middle box and remove the box behind it.
      if (index === centerIndex) {
        box.id = "center-box";
        if (boxBehind) boxBehind.remove();
        return;
      }

      //adjusting position
      if (boxBehind) {
        boxBehind.style.top = `${style.top * rowDistance}px`;
        boxBehind.style.left = `${style.left * columnDistance}px`;
      }
    });
  }
}

customElements.define("project-setion", ProjectSection);
