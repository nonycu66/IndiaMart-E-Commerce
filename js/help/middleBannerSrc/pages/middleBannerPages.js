import { generateMiddleBannerLayout } from '../layout/middleBannerLayout.js';
import { middleBannerData } from '../data/middleBannerData.js';

// function to render dynamically the middle html elements
export function renderMiddleBannerLayout() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('help_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add('pt-[1px]', 'mb-4', 'bg-[#f5f8fa]');

	// Call the function
	const middleContents = generateMiddleBannerLayout(middleBannerData);
	// Set the sectionElem inner html
	sectionElem.innerHTML = `
       <div
          class="lg:w-[1100px] mx-auto my-0 px-[15px] lg:px-[35px] lg:pr-5 lg:h-full h-auto bg-[#f5f8fa] lg:flex"
         >
            ${middleContents}
        <div>
    `;
}
