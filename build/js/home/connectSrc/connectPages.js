import { generateConnectLayout } from './connectLayout.js';

// Function to render dynamically the connect section
export function renderConnectPagestHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append container to sectionElem
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add('py-[15px]', 'px-0', 'my-[1px]', 'mx-auto');
	// Create the connect div element
	const connectDiv = document.createElement('div');
	// Append connectDiv to sectionElem
	sectionElem.appendChild(connectDiv);
	// Add class to connectDiv
	connectDiv.className = 'bg-white mx-auto my-0';

	// Call the generateConnectLayout function and insert it into the variable
	const connectContents = generateConnectLayout();
	// Set the inner html of connectInnerDiv to connectContents
	connectDiv.innerHTML = connectContents;
}
