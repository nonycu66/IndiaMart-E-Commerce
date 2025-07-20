import { generateCitiesLayoutHTML } from './citiesLayout.js';
import { citiesData } from './citiesData.js';

export function renderCitiesLayoutHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add('my-[20px]', 'mx-0', 'bg-white');

	// Call the function and inject it into the variable
	const citiesContents = generateCitiesLayoutHTML(citiesData);

	// Set the sectionElem inner html
	sectionElem.innerHTML = ` 
        <div
            class="my-0 mx-auto bg-white" 
          >
           ${citiesContents}
          </div>
    `;
}
