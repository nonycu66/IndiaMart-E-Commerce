import { generateMedicalLayout } from '../layout/medicalLayout.js';

// Function to render dynamically the medical section and all its html contents
export function renderMedicalPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// create the medicalDiv element
	const medicalDiv = document.createElement('div');
	// Append  medicalDiv to sectionElem
	sectionElem.appendChild(medicalDiv);
	// Add class to medicalDiv
	medicalDiv.className = 'my-0 mx-auto';

	// Create the medicalInner div
	const medicalInnerDiv = document.createElement('div');
	// Append medicalInnerDiv to medicalDiv
	medicalDiv.appendChild(medicalInnerDiv);
	// Add class to medicalInnerDiv
	medicalInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const medicalContents = generateMedicalLayout();

	// Set the drugInnerDiv inner html
	medicalInnerDiv.innerHTML = `
  
             <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				    Hospital and Medical Equipment
				</a>
			 </h2>
             ${medicalContents}
    `;
}
