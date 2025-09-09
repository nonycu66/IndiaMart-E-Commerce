import { headerData } from '../data/headerData.js';
import { generateHelpDropdownHTML } from './helpDropdown.js';
import { generateSignInDropdownHTML } from './signInDropdown.js';
import { helpDropDownData } from '../data/headerData.js';
import { signInDropDownData } from '../data/headerData.js';

// function to generate the nav links html dynamically
export function generateNavLinksLayout() {
	// Set the variable to an empty string
	let navLinksHTML = '';

	// Array containing background positions for different icons
	const iconBackgroundPositions = [
		'-331px -231px',
		'-305px -14px',
		'-357px -14px',
		'-406px -14px',
		'-280px -125px',
	];

	// Loop through the headerData array
	headerData.forEach((data, index) => {
		// Dynamically insert background positions for each icon based on the index
		// Use the index to get the corresponding background position from the array
		const backgroundPosition = iconBackgroundPositions[index];

		// Determine if the current item is the third item
		const isThirdItem = index === 2;
		// Determine if the current item is the last item
		const isLastItem = index === 4;
		// Generate the HTML for the help and sign-in dropdowns if applicable
		let helpDropdownHTML = '';
		let signInDropdownHTML = '';
		let dropdownIcon = '';
		// If the current item is the third item, generate the help dropdown HTML
		if (isThirdItem) {
			const dropdownHTML = generateHelpDropdownHTML(helpDropDownData);
			helpDropdownHTML = `
			  <div
			    class="hidden absolute w-[260px] bg-white top-[45px] right-[-68px] rounded-[3px] border border-solid border-[#dddfe5] z-[99] help-box-shadow before:contents-[''] before:absolute before:border-r-[2px] before:border-b-[2px] before:border-solid before:border-[#212b3626] before:px-[3px] before:py-[3px] before:bg-[#fff] before:top-[-5px] before:right-[86px] before:rotate-[-135deg]"
			    >
                  ${dropdownHTML}
			    </div>
			`;
			// If the current item is the last item, generate the sign-in dropdown HTML
		} else if (isLastItem) {
			const dropdown = generateSignInDropdownHTML(signInDropDownData);
			signInDropdownHTML = `
			     <div
				    class="hidden absolute w-[263px] top-[45px] right-[-1px] z-[99] bg-white rounded-[3px] border border-solid border-[#dddfe5] border-t-0 signin-box-shadow before:contents-[' '] before:absolute before:border-r-[2px] before:border-b-[2px] before:border-solid before:border-[#212b3626] before:px-[3px] before:py-[3px] before:bg-[#fff] before:top-[-5px] before:right-[15px] before:rotate-[-135deg]"
				  >
                    ${dropdown}
				  </div>
			`;
			dropdownIcon = `

			      <svg xmlns="http://www.w3.org/2000/svg"
					  class="w-[14px] h-[14px] absolute  fill-white bottom-[2px] right-[-10px] cursor-pointer"
				   viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by
					@fontawesome - https://fontawesome.com License
					- https://fontawesome.com/license/free Copyright 2025
					Fonticons, Inc.--><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3
					0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224
					306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
					</svg>
			`;
		}

		// Construct the HTML for the navigation link
		navLinksHTML =
			navLinksHTML +
			`
			  <li
			     class="mt-0 ml-[5px] mr-[5px] py-0 px-2 custom-line-height relative list-none cursor-pointer"
			      >
                  <a
					class="text-white pt-5 block relative custom-text-decoration"
					href="${data.navLink.href}"
					
			     	>
					<span
					   class="absolute -top-1 left-1/2 w-6 h-5 bg-[url('${data.navLink.imgSrc}')] z-[9999999] -translate-x-1/2 bg-no-repeat"
					   style="background-position: ${backgroundPosition}"
					 >
					</span>
					${data.navLink.text}
				    </a>
					${helpDropdownHTML}
					${signInDropdownHTML}
					${dropdownIcon}
				</li>
            `;
	});
	return navLinksHTML;
}
