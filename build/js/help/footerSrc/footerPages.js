import { yearIncrement } from '../../control/footerControl.js';

// function to render dynamically the footer html
export function renderFooterLayoutHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('help_container');
	// Create the footer element
	const footerElem = document.createElement('footer');
	// Append footerElem to container
	container.appendChild(footerElem);
	// Add class to footerElem
	footerElem.className = 'py-[30px] text-[#666]';
	// Create the footer div element
	const footerDiv = document.createElement('div');
	// Append footerDiv to footerElem
	footerElem.appendChild(footerDiv);
	// Add class to footerDiv
	footerDiv.className = 'lg:w-[1100px] my-0 mx-auto text-center text-sm';
	footerDiv.innerHTML = ` 
      <p>
        Copyright &copy; <span>1996</span>-<span id="year"></span> IndiaMART InterMESH Ltd. All rights reserved.
        </p>
        
    `;
	yearIncrement();
}
