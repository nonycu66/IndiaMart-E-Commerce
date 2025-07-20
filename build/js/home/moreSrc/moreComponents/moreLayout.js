import { moreData } from '../data/moreData.js';

// function to generate html for the main more html dynamically
export function generateMoreLayoutHTML() {
	// Set av variable to an empty string
	let moreLayoutHTML = '';

	// Array containing background positions for different icons
	const iconBackgroundPositions = [
		'-470px -399px',
		'-480px -482px',
		'-379px -459px',
		'-476px -89px',
		'-389px -349px',
	];

	// Loop over the moreData array
	moreData.forEach((more, index) => {
		// Dynamically insert background positions for each icon based on the index
		// Use the index to get the corresponding background position from the array
		const iconPosition = iconBackgroundPositions[index];

		// Insert the looped elements into moreLayoutHTML
		moreLayoutHTML =
			moreLayoutHTML +
			`
                         <ul class="mt-[30px] mb-[15px] text-center">
                             <li 
                                  class="h-[200px] relative after:absolute after:inline-block after:content-[''] after:bg-[#333] after:w-[1px] after:h-[100%] after:top-[15px] after:right-0">
                                  <p>
                                    <i class="bg-[url('/build/img/home-sprite2.png')] bg-no-repeat w-[60px] h-[60px] my-0 mx-auto block"
                                     style="background-position: ${iconPosition}"
									>
                                    </i>
                                    <b>
                                      <a
                                        href="#"
                                         data-index="${index}"
                                         class="text-sm"     
                                        >
                                       ${more.service}
                                      </a>
                                    </b>
                                  </p>
                                  <p class="text-[#888] px-[15px] mt-[10px] mb-[25px] text-sm">${more.description}</p>
                                  <span class="absolute left-0 right-0 bottom-0 flex justify-center">
                                      <a 
                                       href="#" 
                                         class="more_links py-[10px] px-6  border  border-solid border-[#2e3192] text-[#2e3192] bg-white text-sm rounded-[21px] hover:bg-[#2e3192] hover:text-white" 
                                          data-index="${index}">
                                             ${more.link}
                                          </a>
                                  </span>
                               </li>
                               </ul>
            `;
	});
	return moreLayoutHTML;
}
