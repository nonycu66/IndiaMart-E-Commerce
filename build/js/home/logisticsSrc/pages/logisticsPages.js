import { generateLogisticsLayout } from '../layout/logisticsLayout.js';

// Function to render dynamically the logistics section and all its html contents
export function renderLogisticsPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// Create the logisticsDiv element
	const logisticsDiv = document.createElement('div');
	// Append  logisticsDiv to sectionElem
	sectionElem.appendChild(logisticsDiv);
	// Add class to logisticsDiv
	logisticsDiv.className = 'my-0 mx-auto';

	// Create the logisticsInner div
	const logisticsInnerDiv = document.createElement('div');
	// Append logisticsInnerDiv to logisticsDiv
	logisticsDiv.appendChild(logisticsInnerDiv);
	// Add class to logisticsInnerDiv
	logisticsInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const logisticsContents = generateLogisticsLayout();

	// Set the logisticsInnerDiv inner html
	logisticsInnerDiv.innerHTML = `  
    
             <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				    Transportation & Logistics
				</a>
			 </h2>
             ${logisticsContents}
    `;
}
