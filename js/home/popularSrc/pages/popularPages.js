import { generatePopularLayout } from '../layout/popularLayout.js';
import { popularData } from '../data/popularData.js';

export function renderPopularLayoutPages() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'bg-white';

	// Call the function
	const popularContents = generatePopularLayout(popularData);

	// Set the inner html of sectionElem
	sectionElem.innerHTML = `
    
       <div
           class="mx-auto my-0 bg-white"
          >
           ${popularContents}
         </div>
    `;
}
