import { generateIndustrialLayout } from '../layout/industrialLayout.js';

// Function to render dynamically the industrial section  and all its html contents
export function renderIndustrialPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// Create the industrial div
	const industrialDiv = document.createElement('div');
	// Append industrialDiv to sectionElem
	sectionElem.appendChild(industrialDiv);
	// Add class to industrialDiv
	industrialDiv.className = 'my-0 mx-auto';

	// create the industrialInner div
	const industrialInnerDiv = document.createElement('div');
	// append industrialInnerDiv to industrialDiv
	industrialDiv.appendChild(industrialInnerDiv);
	// Add class to industrialInnerDiv
	industrialInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const industrialContents = generateIndustrialLayout();

	// Set the industrialInnerDiv inner html
	industrialInnerDiv.innerHTML = `
                <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				  Industrial & Engineering Products, Spares and Supplies
				</a>
			 </h2>
             ${industrialContents}
     `;
}
