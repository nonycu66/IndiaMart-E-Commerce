import { generateFoodLayout } from '../layout/foodLayout.js';

// Function to render dynamically the food section  and all its html contents
export function renderFoodPagesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'my-[20px] mx-0 min-h-auto';

	// Create the food div
	const foodDiv = document.createElement('div');
	// Append foodDiv to sectionElem
	sectionElem.appendChild(foodDiv);
	// Add class to foodDiv
	foodDiv.className = 'my-0 mx-auto';

	// create the foodInner div
	const foodInnerDiv = document.createElement('div');
	// append foodInnerDiv to foodDiv
	foodDiv.appendChild(foodInnerDiv);
	// Add class to foodInnerDiv
	foodInnerDiv.classList.add(
		'bg-white',
		'px-[15px]',
		'border-t-[3px]',
		'border-solid',
		'border-t-[#2e3192]'
	);

	// Call the function and set it to the variable
	const foodContents = generateFoodLayout();

	// Set the foodInnerDiv inner html
	foodInnerDiv.innerHTML = ` 
          <h2
			    class="text-[22px] text-[#333] md:text-[24px] lg:text-[28px] font-bold py-[15px] px-[15px]">
			    <a class="cursor-pointer hover:underline hover:text-[#2e3192] text-[#333333]">
				   Food, Agriculture & Farming
				</a>
			 </h2>
             ${foodContents}
    `;
}
