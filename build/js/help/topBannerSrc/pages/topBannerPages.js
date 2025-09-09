import { generateTopBannerLayout } from '../layout/topBannerLayout.js';
import { topBannerData } from '../data/topBannerData.js';

// function to render dynamically the top banner section
export function renderTopBannerLayout() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('help_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add('bg-[#f5f8fa]', 'h-auto', 'lg:h-[249px]');

	// Call the function
	const helpContents = generateTopBannerLayout(topBannerData);

	// Set the sectionElem inner html
	sectionElem.innerHTML = ` 
    
      <div 
	    class="lg:w-[1100px] mx-auto my-0 px-[15px] pt-[57px] pl-[35px] pr-5"
	    >
          ${helpContents}
       </div>
    `;
}
