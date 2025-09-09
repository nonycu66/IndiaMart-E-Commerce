import { pricingData } from '../data/pricingData.js';
import { pricingTemplate } from '../layout/pricinglayout.js';

function renderSection(items, containerId, templateFn) {
	const container = document.getElementById(containerId);
	if (!container) {
		console.warn(`Container with id ${containerId} not found`);
		return;
	}
	container.innerHTML = items.map(templateFn).join('');
}

// function to render dynamically the pricing layout section
export function renderPricingLayoutPages() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add id to sectionElem
	sectionElem.id = 'pricing';
	// Add class to sectionElem
	sectionElem.classList.add(
		'bg-[#f9fef9]',
		'overflow-hidden',
		'relative',
		'w-full',
		'pt-[30px]',
		'pb-[30px]',
		'md:pt-[22px]',
		'md:pb-[3px]'
	);

	// Create the first div element
	const firstDivElem = document.createElement('div');
	// Append firstDivElem to sectionElem
	sectionElem.appendChild(firstDivElem);
	// Add class to firstDivElem
	firstDivElem.classList.add('container', 'mx-auto', 'my-0', 'md:px-3', 'px-4');

	// set the inner html
	firstDivElem.innerHTML = ` 
	
	   <div
	      class="lg:w-4/6 w-full px-3 mx-auto"
	    >
		 
		<div
		    class="2xl:mb-[30px] mb-[10px] text-center" 
		  >
	     <h3
		    class="font-semibold xl:text-3xl text-[25px] md:mb-1.5 mb-[3px] text-black leading-normal"
		   >
		    Pricing
		   </h3>
		    <span
               class="bg-gradient-to-r from-[#5bbc21] to-[rgba(50,185,91,0)]
               h-[3px] w-[50px] mx-auto block"
              >
              </span>
		   </div>
         
		   <div>
		      <p
			      class="text-[#5b5b5b] text-sm mt-0 md:mb-4 mb-0 md:text-justify text-center font-medium" 
			    >
				 Choose a plan for 1 user 
			   </p>
		     </div>


             <div
			    class="md:p-2.5 p-2 md:bg-white bg-transparent border-0 md:border-2 border-[#7c7c7c] mb-2 xl:mb-2.5"
			   >
                 <ul
				   id="pricing-container"
			class="w-full md:flex justify-center list-none max-md:max-w-[500px] max-md:mx-auto p-0 m-0 mb-0 mt-0"
				  >

				  </ul>
			   </div>

               <div
			      class="mt-8 text-center"
			      >
			       <p
				       class="text-[#5b5b5b] 2xl:text-[13px] mb-4 text-xs" 
				     >
					 <span class="font-semibold text-black">ADDONS</span>
					  : eWay bills, eInvoices, Additional user.
					  <a
					    href="#"
						class="text-blue-800 font-semibold underline bg-transparent"
						rel="noopener noreferer"
						target="_blank">
						Buy Now
					   </a>
				    </p>
			    </div>
	     </div> 
	`;

	const demoBackgroundElem = document.createElement('div');
	demoBackgroundElem.classList.add(
		'bg-[size:cover]',
		'relative',
		'w-full',
		'bg-[position:right]',
		'py-[15px]',
		'md:py-4',
		'bg-[#00a228]',
		'text-center',
		'bg-no-repeat'
	);
	demoBackgroundElem.innerHTML = ` 
	     <div
			     class="w-full px-3 mx-auto md:max-w-[1200px] max-w-[720px]"
			    >
				<div
				     class="flex flex-wrap items-center md:w-3/4 m-auto max-md:px-6"
				   >
				      <div
					     class="flex-none w-full"
					    >
						  <h4 class="text-white text-lg font-medium">Book Free Demo Now</h4>
					   </div>

					   <div
					       class="flex-none w-full md:w-7/12 md:mx-auto"
					       >
						   <div
						   class="w-full relative">
						      <div
							     class="flex bg-white rounded-lg  md:justify-center" 
							    >
								  <span class="text-black text-sm p-3 border-r font-semibold border-[#3e9808]">
								    +91
								  </span>

								  <input 
								    type="text"
									 placeholder="Enter Mobile Number"
									 autocomplete="off"
									 inputmode="numeric"
									 maxlength="10"
									  class="text-[#5b5b5b] text-sm rounded-none outline-none px-2.5 bg-transparent border-none w-full m-0"
									   />
							    </div>
								<p class="hidden pt-1 text-[#ab0000] text-sm font-medium text-left">
								   Plaese enter a valid number
								</p>
								<button
								    class="flex h-11 bg-[#3e9808] py-3 px-[15px] rounded-tr-[5px] rounded-br-[5px] text-white text-sm font-semibold md:absolute top-0 right-0 border-none
									my-2.5 rounded-none max-md:justify-center max-md:rounded-[5px] md:m-0 mx-0 w-full md:w-auto"
								  >
								   Schedule a Demo
								 </button>
						     </div>
					    </div>
				  </div>
			   </div>
	`;

	sectionElem.appendChild(demoBackgroundElem);

	renderSection(pricingData, 'pricing-container', pricingTemplate);
}
