import { generateListingLayout } from '../layout/listingLayout.js';
import { listingData } from '../data/listingData.js';

// function to render dynamically the listing section
export function renderListingLayout() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('sell_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'mt-3 mb-20';

	// Call the function
	const sellContents = generateListingLayout(listingData);

	// Set the sectionElem inner html
	sectionElem.innerHTML = ` 
     <div
       class="px-[15px] py-[15px] lg:w-[94%] lg:mx-auto flex flex-col items-center lg:flex-row gap-x-5 lg:h-[280px]"
      >
       ${sellContents}
      </div>
    `;
}
