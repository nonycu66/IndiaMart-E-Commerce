import { generateBottomBannerLayout } from '../layout/bottomBannerLayout.js';
import { bottomBannerData } from '../data/bottomBannerData.js';

// Function to render dynamically the bottom htmk elements
export function renderBottomBannerLayout() {
	// Get the container where you want to append the dynamically content
	const container = document.getElementById('help_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add(
		'bg-[#f5f8fa]',
		'text-[#666]',
		'pt-[60px]',
		'pb-[10px]',
		'text-base'
	);
	// Call the function
	const bottomContents = generateBottomBannerLayout(bottomBannerData);

	// Set the sectionElem inner html
	sectionElem.innerHTML = ` 
       <div
          class="lg:w-[1100px] mx-auto my-0 px-[15px] lg:pl-[35px] lg:pr-[20px] lg:h-full h-auto lg:flex"
          >
            ${bottomContents}
         </div>
    `;
}
