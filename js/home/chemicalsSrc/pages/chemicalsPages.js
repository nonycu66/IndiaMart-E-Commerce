import { generateChemicalsLayout } from '../layout/chemicalsLayout.js';

// Function to render dynamically the chemicals section and all its html contents
export function renderChemicalsPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// Create the chemicals div element
	const chemicalsDiv = document.createElement('div');
	// Append chemicalsDiv to sectionElem
	sectionElem.appendChild(chemicalsDiv);
	// Add class to chemicalsDiv
	chemicalsDiv.className = 'my-0 mx-auto';

	// Create the chemicalsInner div
	const chemicalsInnerDiv = document.createElement('div');
	// Append chemicalsInnerDiv to chemicalsDiv
	chemicalsDiv.appendChild(chemicalsInnerDiv);
	// Add class to chemicalsInnerDiv
	chemicalsInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const chemicalsContents = generateChemicalsLayout();

	// set the chemicalsInnerDiv inner html
	chemicalsInnerDiv.innerHTML = `
          <h2
             class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
             <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
             Chemicals, Dyes, Solvents & Allied Products
            </a>
            </h2>
            ${chemicalsContents}
    `;
}
