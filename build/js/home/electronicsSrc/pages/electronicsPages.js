import { generateElectronicsLayout } from '../layout/electronicsLayout.js';

// Function to render dynamically the electronics section and all its html contents
export function renderElectronicsPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// create the electronics div
	const electronicsDiv = document.createElement('div');
	// Append electronicsDiv to sectionElem
	sectionElem.appendChild(electronicsDiv);
	// Add class to electronicsDiv
	electronicsDiv.className = 'my-0 mx-auto';

	// Create the electronicsInner div
	const electronicsInnerDiv = document.createElement('div');
	// Append electronicsInnerDiv to electronicsDiv
	electronicsDiv.appendChild(electronicsInnerDiv);
	// Add class to electronicsInnerDiv
	electronicsInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const electronicsContents = generateElectronicsLayout();

	// Set the electronicsInnerDiv inner html
	electronicsInnerDiv.innerHTML = `
              <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				  Electronics & Electrical Goods Supplies
				</a>
			 </h2>
             ${electronicsContents}
    `;
}
