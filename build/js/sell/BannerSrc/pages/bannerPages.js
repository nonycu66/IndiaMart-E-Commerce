import { generateSellBanner } from '../layout/bannerLayout.js';
import { sellBannerData } from '../data/bannerData.js';

// function to render dynamically the banner section
export function renderSellBanner() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('sell_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'mt-3';

	// Call the function
	const sellContents = generateSellBanner(sellBannerData);

	// Set the sectionElem inner html
	sectionElem.innerHTML = ` 
       <div class="py-[15px] px-[15px] flex flex-col lg:flex-row lg:justify-between">
	    ${sellContents}
		 </div>
    `;
}
