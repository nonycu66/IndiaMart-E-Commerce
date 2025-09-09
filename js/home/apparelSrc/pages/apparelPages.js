import { generateApparelLayout } from '../layout/apparelLayout.js';

// Function to render dynamically the apparel section  and all its html contents
export function renderApparelPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// Create the apparel div
	const apparelDiv = document.createElement('div');
	// Append apparelDiv to sectionElem
	sectionElem.appendChild(apparelDiv);
	// Add class to apparelDiv
	apparelDiv.className = 'my-0 mx-auto';

	// create the apparelInner div
	const apparelInnerDiv = document.createElement('div');
	// append apparelInnerDiv to apparelDiv
	apparelDiv.appendChild(apparelInnerDiv);
	// Add class to foodInnerDiv
	apparelInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const apparelContents = generateApparelLayout();
	// Set the apparelInnerDiv inner html
	apparelInnerDiv.innerHTML = ` 
            <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				   Apparel, Clothing & Garments
				</a>
			 </h2>
             ${apparelContents}
    `;
}
