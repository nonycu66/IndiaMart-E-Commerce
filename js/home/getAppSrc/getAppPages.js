import { generateGetAppLayoutHTML } from './getAppLayout.js';

// Function to dynamically render the getApp section
export function renderGetApp() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'mt-5 bg-white';

	// create the getApp div element
	const getAppDiv = document.createElement('div');
	// Append getAppDiv to sectionElem
	sectionElem.appendChild(getAppDiv);
	// Add class to getAppDiv
	getAppDiv.className = 'bg-white my-0 mx-auto';

	// Call the function and inject it into getApp variable
	const getAppContents = generateGetAppLayoutHTML();

	// Set the getAppDiv inner html
	getAppDiv.innerHTML = ` 
        <div
           class="grid grid-cols-1 md:grid-cols-[35%_55%] items-center justify-items-center md:justify-center"
          >
          ${getAppContents}
          </div>
    `;
}
