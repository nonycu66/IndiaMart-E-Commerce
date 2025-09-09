// import { renderFeaturesLayout } from '../layout/featuresLayout.js';
import { featuresData } from '../data/featuresData.js';
import { featuresTemplate } from '../layout/featuresLayout.js';

function renderSection(items, containerId, templateFn) {
	const container = document.getElementById(containerId);
	if (!container) {
		console.warn(`Container with id ${containerId} not found`);
		return;
	}
	container.innerHTML = items.map(templateFn).join('');
}

// function to render dynamically the features layout section
export function renderFeaturesLayoutPages() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add id to sectionElem
	sectionElem.id = 'features';
	// Add class to sectionElem
	sectionElem.classList.add('pt-10', 'pb-10', 'overflow-hidden');

	// Create the first div element
	const firstDivElem = document.createElement('div');
	// Append firstDivElem to sectionElem
	sectionElem.appendChild(firstDivElem);
	// Add class to firstDivElem
	firstDivElem.className = 'max-w-[1200px] my-0 mx-auto px-3 w-full';
	// Set the inner html
	firstDivElem.innerHTML = ` 
    
       <div class="mb-2.5">
          <h3
              class="font-semibold xl:text-3xl text-[25px] text-center mb-1.5 p-0 text-black leading-normal"
             >
             Features
            </h3>
            <span
               class="bg-gradient-to-r from-[#5bbc21] to-[rgba(50,185,91,0)]
               h-[3px] w-[50px] mx-auto block"
              >
              </span>
         </div>


         <div>
            <div
                class="mx-auto w-full lg:w-[83.3333%]"
              >  
                    <ul
                      id="features-container"
                     >
                     </ul>
                 
              </div>
           </div>
    `;
	renderSection(featuresData, 'features-container', featuresTemplate);

	// renderFeaturesLayout();
}
