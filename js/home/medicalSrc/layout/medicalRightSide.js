import { medicalDataRight } from '../data/medicalData.js';

// function to generate the medical right side html dynamically
function generateMedicalRightSide() {
	// Define an empty variable
	let medicalRight = '';

	// Loop through the medicalDataRight array
	medicalDataRight.forEach((data) => {
		medicalRight =
			medicalRight +
			` 
              	 <ul
                      class="border border-solid border-[#ebebeb h-full md:h-full lg:h-full"
                     >
                       <li
                             class="flex flex-col items-center lg:items-center lg:flex lg:flex-row gap-2 lg:gap-0 py-[12px] px-[10px] cursor-pointer md:h-full lg:h-full">
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
                             <div class="text-center lg:pl-[15px] lg:flex-1 lg:flex lg:flex-col lg:justify-center md:h-full lg:h-full">
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
								    title="${data.medicalPurposes.item1}"  
								   >
								       <a href="#">
									   ${data.medicalPurposes.item1}
									   </a>
									 </p> 
                                 <p
								  class="lg:text-left lg:mb-[10px] custom-color-p text-[14px] mb-[5px] hover:underline hover:text-[#2e3192]"
								     title="${data.medicalPurposes.item2}" 
								  >
								    <a href="#">
								    ${data.medicalPurposes.item2}
									</a>
									</p> 
                                 <p
								   class="lg:text-left lg:mb-[10px] custom-color-p text-[14px] mb-[5px] hover:underline hover:text-[#2e3192]"
								     title="${data.medicalPurposes.item3}"
									 >
									    <a href="#">
										${data.medicalPurposes.item3}
										</a>
									 </p> 
									   <p
								        class="lg:text-left lg:mb-[10px] custom-color-p text-[14px] mb-[5px] hover:underline hover:text-[#2e3192]"
								     title="${data.medicalPurposes.item4}"
									 >
									    <a href="#">
										${data.medicalPurposes.item4}
										</a>
									 </p> 
                             </div>
                        </li>
                       </ul> 
        `;
	});
	return medicalRight;
}

// Function to render the drug right side
export function renderMedicalRightSide() {
	// Render the right side
	const rightSideContents = generateMedicalRightSide();

	return `
       <article
          class="grid grid-cols-3 items-center gap-y-4 gap-x-4 md:gap-y-4 md:gap-x-4 lg:gap-y-4 lg:gap-x-4 md:h-full lg:h-full"
        >
          ${rightSideContents}
         </article>
    `;
}
