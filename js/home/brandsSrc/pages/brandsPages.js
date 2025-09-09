import { generateBrandsLayout } from '../layout/brandsLayout.js';
import { brandsData } from '../data/brandsData.js';

// function to dynamically generate the html for brands
export function renderBrandsPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append the sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'bg-white';
	// Create the brands div element
	const brandsDiv = document.createElement('div');
	// Append brandsDiv to sectionElem
	sectionElem.appendChild(brandsDiv);
	// Add class to brandsDiv
	brandsDiv.className = 'bg-white my-0 mx-auto';

	// Call the function and inject it into the variable
	const brandsContents = generateBrandsLayout(brandsData);

	// Set the brandsDiv inner html
	brandsDiv.innerHTML = `
      <div
         class="mt-5 py-[15px] px-[15px] bg-white"
         >
         ${brandsContents}
        </div>
    `;
}
