class ProjectSection extends HTMLElement {
    connectedCallback() {
        const maincontainer = document.createElement('div');
        maincontainer.className = 'main-container';
        const max_projects = 5

        for (let i = 1; i <= max_projects; i++) {
            const project = document.createElement('div');
            project.className = "container";

            const boxBehind = document.createElement('div');
            boxBehind.className = 'box-behind';
            project.appendChild(boxBehind);

            const box = document.createElement('div');
            box.className = 'box';
            project.appendChild(box);

            maincontainer.appendChild(project);
        }

        this.appendChild(maincontainer);
    }
}

customElements.define('project-setion', ProjectSection);