import { drugDataRight } from '../data/drugData.js';

// function to generate the drug right side html dynamically
function generateDrugRightSide() {
	// Define an empty variable
	let drugRight = '';

	drugDataRight.forEach((data) => {
		drugRight =
			drugRight +
			`
               	 <ul
                      class="border border-solid border-[#ebebeb h-full md:h-full lg:h-full"
                     >
                       <li
                             class="flex flex-col items-center lg:flex lg:flex-row gap-2 lg:gap-0 py-[12px] px-[10px] cursor-pointer h-[100%] lg:h-[100%]">
                             <div class="w-[100px] lg:relative">
                                <a
								   href="#"
								   class="block my-0 mx-auto w-[100px] lg:w-[100px] lg:h-auto">
                                   <img
								      src="${data.thumbnail}" 
									  alt="" 
									  class="max-w-full max-h-full lg:max-w-[100px] lg:max-h-[100px] lg:absolute lg:top-1/2 lg:translate-x-0 lg:translate-y-[-50%] lg:overflow-hidden" 
									  />
                                </a>
                             </div>
                             <div class="text-center lg:pl-[15px] lg:flex-1 lg:h-[100%] lg:flex lg:flex-col lg:justify-center">
                                 <h3 class="lg:text-left font-bold text-[14px] mb-[5px] lg:mb-3  hover:underline hover:text-[#2e3185]">
								    <a 
									 href="#"
									    class="text-[#333]"
									  >
									${data.title}
									</a>
								 </h3>
                                 <p
								   class=" lg:text-left lg:mb-[10px] custom-color-p text-[14px] mb-[5px] hover:underline hover:text-[#2e3185]"
								    title="${data.drugPurposes.item1}"  
								   >
								       <a href="#">
									   ${data.drugPurposes.item1}
									   </a>
									 </p> 
                                 <p
								  class="lg:text-left lg:mb-[10px] custom-color-p text-[14px] mb-[5px] hover:underline hover:text-[#2e3192]"
								     title="${data.drugPurposes.item2}" 
								  >
								    <a href="#">
								    ${data.drugPurposes.item2}
									</a>
									</p> 
                                 <p
								   class="lg:text-left lg:mb-[10px] custom-color-p text-[14px] mb-[5px] hover:underline hover:text-[#2e3192]"
								     title="${data.drugPurposes.item3}"
									 >
									    <a href="#">
										${data.drugPurposes.item3}
										</a>
									 </p> 
									   <p
								         class="lg:text-left lg:mb-[10px] custom-color-p text-[14px] mb-[5px] hover:underline hover:text-[#2e3192]"
								     title="${data.drugPurposes.item4}"
									 >
									    <a href="#">
										${data.drugPurposes.item4}
										</a>
									 </p> 
                             </div>
                        </li>
                       </ul> 
        `;
	});
	// return the drugRight variable
	return drugRight;
}

// Function to render the drug right side
export function renderDrugRightSide() {
	// Render the right side
	const rightSideContents = generateDrugRightSide();

	return `
    
       <article
          class="grid grid-cols-3 items-center gap-y-4 gap-x-4 md:gap-y-4 md:gap-x-4 lg:gap-y-4 lg:gap-x-4 md:h-full lg:h-full"
        >
          ${rightSideContents}
         </article>
    `;
}
