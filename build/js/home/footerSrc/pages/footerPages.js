import { generateFooterLayoutHTML } from '../layout/footerLayout.js';
import { generateFooterLayoutHTMLMiddle } from '../layout/footerLayout.js';
import { generateFooterLayoutHTMLLast } from '../layout/footerLayout.js';
import { generateFooterLayoutBottom } from '../layout/footerLayout.js';
import { footerDataFirst } from '../data/footerData.js';
import { footerDataSecond } from '../data/footerData.js';
import { footerDataThird } from '../data/footerData.js';
import { footerDataFourth } from '../data/footerData.js';

// Function to dynamically render the footer html
export function renderFooterLayoutHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the footer element
	const footerElem = document.createElement('footer');
	// Append footerElem to container
	container.appendChild(footerElem);

	// Create the first footer div element
	const firstFooterDiv = document.createElement('div');
	// Append firstFooterDiv to footerElem
	footerElem.appendChild(firstFooterDiv);
	// Add class to firstFooterDiv
	firstFooterDiv.classList.add(
		'border-y-[1px]',
		'border-y-[#fff]',
		'border-solid',
		'font-normal'
	);

	// Call the function and inject it into the variable
	const footerContentsFirst = generateFooterLayoutHTML(footerDataFirst);
	// Call the function and inject it into the variable
	const footerContentsSecond = generateFooterLayoutHTMLMiddle(footerDataSecond);
	// Call the function and inject it into the variable
	const footerContentsThird = generateFooterLayoutHTMLLast(footerDataThird);
	// Call the function and inject it into the variable
	const footerContentsFourth = generateFooterLayoutBottom(footerDataFourth);

	// Set the firstFooterDiv inner html
	firstFooterDiv.innerHTML = ` 
       <ul
          class="flex flex-col items-center md:flex-row md:justify-evenly md:items-center lg:flex-row lg:justify-evenly lg:items-center px-3 mb-5 bg-[#eeeeee]"
        >
           ${footerContentsFirst}
		   </ul>
		   <ul 
		   class="flex flex-col items-center lg:items-start justify-center lg:flex-row lg:justify-evenly" 
		   >
		   ${footerContentsSecond}
           ${footerContentsThird}
          </ul>
          <ul 
		    class="border-t-[1px] border border-solid border-t-[#e1e1e1] text-[#727272] px-[5px] py-[5px] text-[13px]"
		   >
            ${footerContentsFourth}
           </ul>
    `;
}
