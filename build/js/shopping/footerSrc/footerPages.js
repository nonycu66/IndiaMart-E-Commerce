import { generateFooterLayoutHTML } from './footerLayout.js';

// function to render the footer contents layout
export function renderFooterLayoutHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('footer_container');
	// Create the footer div element
	const footerDiv = document.createElement('div');
	// Append footerElem to container
	container.appendChild(footerDiv);
	// Assign class to footerElem
	footerDiv.classList.add(
		'w-full',
		'text-[14px]',
		'bg-[#232324]',
		'text-[#aaaaab]'
	);

	// Call the generateFooterlayoutHTML function to get the footer content and insert it into the variable
	const footerContent = generateFooterLayoutHTML();
	// Append the generated footer content to the footer element
	footerDiv.appendChild(footerContent);
}
