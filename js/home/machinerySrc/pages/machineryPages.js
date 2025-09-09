import { generateMachineryLayout } from '../layout/machineryLayout.js';

// Function to render dynamically the machinery section and all its html contents
export function renderMachineryPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// create the machinery div
	const machineryDiv = document.createElement('div');
	// Append machineryDiv to sectionElem
	sectionElem.appendChild(machineryDiv);
	// Add class to machineryDiv
	machineryDiv.className = 'my-0 mx-auto';

	// Create the machineryInner div
	const machineryInnerDiv = document.createElement('div');
	// Append machineryInnerDiv to machineryDiv
	machineryDiv.appendChild(machineryInnerDiv);
	// Add class to machineryInnerDiv
	machineryInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const machineryContents = generateMachineryLayout();

	// Set the machineryInnerDiv inner html
	machineryInnerDiv.innerHTML = `
          <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				  Industrial Plants, Machinery & Equipment
				</a>
			 </h2>
             ${machineryContents}
    `;
}
