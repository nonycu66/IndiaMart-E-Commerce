import { generatePackagingLayout } from '../layout/packagingLayout.js';

// Function to render dynamically the packaging section and all its html contents
export function renderPackagingPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// Create the packaging div element
	const packagingDiv = document.createElement('div');
	// Append packagingDiv to sectionElem
	sectionElem.appendChild(packagingDiv);
	// Add class to packagingDiv
	packagingDiv.className = 'my-0 mx-auto';

	// Create the packagingInner div
	const packagingInnerDiv = document.createElement('div');
	// Append packagingInnerDiv to packagingDiv
	packagingDiv.appendChild(packagingInnerDiv);
	// Add class to packagingInnerDiv
	packagingInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const packagingContents = generatePackagingLayout();

	// Set the packagingInnerDiv inner html
	packagingInnerDiv.innerHTML = ` 
    
            <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				  Packaging Material, Supplies & Machines
				</a>
			 </h2>
             ${packagingContents}
    `;
}
