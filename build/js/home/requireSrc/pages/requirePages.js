import { generateRequireLayout } from '../layout/requireLayout.js';

// Function to dynamically render the require section html elements
export function renderRequireLayout() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add('py-[15px]', 'px-[15px]', 'bg-[#fff]');

	// Set the requireDiv inner html
	sectionElem.innerHTML = `
         <div
            class="bg-[#fff] pt-[15px] pb-5 mx-auto my-0"
           >
           ${generateRequireLayout()}
            </div>
    `;
}
