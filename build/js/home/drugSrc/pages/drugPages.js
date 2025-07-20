import { generateDrugLayout } from '../layout/drugLayout.js';

// Function to render dynamically the drug section and all its html contents
export function renderDrugPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// create the drugDiv element
	const drugDiv = document.createElement('div');
	// Append drugDiv to sectionElem
	sectionElem.appendChild(drugDiv);
	// Add class to drugDiv
	drugDiv.className = 'my-0 mx-auto';

	// Create the drugInner div
	const drugInnerDiv = document.createElement('div');
	// Append drugInnerDiv to drugDiv
	drugDiv.appendChild(drugInnerDiv);
	// Add class to electronicsInnerDiv
	drugInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const drugContents = generateDrugLayout();

	// Set the drugInnerDiv inner html
	drugInnerDiv.innerHTML = `
           <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				   Pharmaceutical Drug, Medicine, Medical Care and Consultation
				</a>
			 </h2>
             ${drugContents}
    `;
}
