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

        const boxes = document.querySelectorAll('.container'); // selecting all boxes in the container

        const centerIndex = 4 // defining the center of index as 4, so we skip over it since it doesnt have a box-behind

        boxes.forEach((box, index) => {
            console.log(box.className)
        });

            }
        
    }

customElements.define('project-setion', ProjectSection);
