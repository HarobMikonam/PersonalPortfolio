class ProjectSection extends HTMLElement {
    connectedCallback() {
        const maincontainer = document.createElement('div');
        maincontainer.className = 'main-container';
        const max_projects = 8

        for (let i = 0; i <= max_projects; i++) {
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

        // CSS BOX-BEHIND MANIPULATION
        const container = document.querySelectorAll('.container');
        const centerIndex = 4

        container.forEach((box, index) => {
            const boxBehind = box.querySelector('.box-behind');

            //if its 4 skip over the middle box and remove the box behind it.
            if (index === centerIndex) {
                if (boxBehind) {
                    boxBehind.remove(); 
                }
                return;
            }
            // get row and column position
            const row = Math.floor(index / 3);
            const column = index % 3;

            // calculating how far away (rows) the box is from the center
            const rowDistance = row - 1;
            const columnDistance = column - 1;

            //adjusting position
            if (boxBehind){
                boxBehind.style.top = `${-7 * rowDistance}px`;
                boxBehind.style.left = `${-7 * columnDistance}px`;
            }

        });

        }
    }

customElements.define('project-setion', ProjectSection);
