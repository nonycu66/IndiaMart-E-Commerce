import { headerData } from '../data/headerData.js';
import { renderFeaturesDropdownData } from './featuresDropdown.js';

// function to generate the nav links html dynamically
export function generateNavLinksLayout() {
	// Set the variable to an empty string
	let navLinksHTML = '';

	// Loop through the headerData array
	headerData.forEach((data, index) => {
		// Determine if the current link has index 1
		const isSecondLink = index === 1;
		// Define the features dropdown variable
		let isSecondLinkDropdownHTML = '';

		if (isSecondLink) {
			const secondLinkDropdown = renderFeaturesDropdownData();
			isSecondLinkDropdownHTML = ` 
			
		 <div
          class="hidden md:absolute md:top-full h-0 left-0 md:bg-white rounded-lg z-50 text-[13px] md:text-[15px] md:w-72 text-[#000000] md:h-64 md:tally-navlink-box-shadow features-dropdown"
         >
		    ${secondLinkDropdown}
		   </div>
			`;
		}

		// Define SVGs for first and second links
		let svgIcon = '';
		if (index === 0) {
			svgIcon = `
               <svg data-v-70bc5242="" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" x="0" y="0" viewBox="0 0 25.625 25.625" xml:space="preserve" class="w-4 mr-1 group-hover:fill-primary duration-500"><g><path d="M22.079 17.835c-1.548-1.324-3.119-2.126-4.648-.804l-.913.799c-.668.58-1.91 3.29-6.712-2.234-4.801-5.517-1.944-6.376-1.275-6.951l.918-.8c1.521-1.325.947-2.993-.15-4.71l-.662-1.04C7.535.382 6.335-.743 4.81.58l-.824.72c-.674.491-2.558 2.087-3.015 5.119-.55 3.638 1.185 7.804 5.16 12.375 3.97 4.573 7.857 6.87 11.539 6.83 3.06-.033 4.908-1.675 5.486-2.272l.827-.721c1.521-1.322.576-2.668-.973-3.995l-.931-.801z" class=""></path></g></svg>
            `;
		} else if (index === 1) {
			svgIcon = `
               <svg data-v-70bc5242="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4"><path d="M7 10L12 15L17 10" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            `;
		}

		// Construct the HTML for the navigation link
		const extraClass = index === 1 ? 'features-dropdown-trigger' : '';

		navLinksHTML =
			navLinksHTML +
			` 
             <a
              href="${data.navLink.href}"
               class="inline-block relative text-[13px] lg:text-base mr-8 duration-[0.5s] text-left cursor-pointer hover:text-[#5bbc21] 
			    ${extraClass}
			   ">
                <div class="flex items-center md:py-3">
                  ${svgIcon}
                   ${data.navLink.text}
                  </div>
				  ${isSecondLinkDropdownHTML}
              </a>
            `;
	});
	return navLinksHTML;
}
