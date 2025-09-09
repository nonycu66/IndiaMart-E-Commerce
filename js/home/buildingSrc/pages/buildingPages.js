import { generateBuildingLayout } from '../layout/buildingLayout.js';

// Function to render dynamically the building section and all its html contents
export function renderBuildingPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// Create the building div
	const buildingDiv = document.createElement('div');
	// Append buildingDiv to sectionElem
	sectionElem.appendChild(buildingDiv);
	// Add class to buildingDiv
	buildingDiv.className = 'my-0 mx-auto';

	// Create the buildingInner div
	const buildingInnerDiv = document.createElement('div');
	// Append buildingInnerDiv to buildingDiv
	buildingDiv.appendChild(buildingInnerDiv);
	// Add class to buildingInnerDiv
	buildingInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const buildingContents = generateBuildingLayout();

	// Set the buildingInnerDiv inner html
	buildingInnerDiv.innerHTML = ` 
          
             <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				 Building Construction Material & Equipment
				</a>
			 </h2>
			 ${buildingContents}
             `;
}
