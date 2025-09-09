// Function to generate the listing dynamically
export function generateListingLayout(listingData) {
	const { leftTitle, rightTitle, leftListArray, rightListArray } =
		listingData[0];

	// Define an empty variable
	let listItemsFirstHTML = '';
	let listItemsSecondHTML = '';

	// Loop through the leftListArray and collect all items
	for (let i = 0; i < leftListArray.length; i++) {
		const item = leftListArray[i];
		if (item.imgSrc && item.heading && item.description) {
			// Insert all the list items into the listItemsHTML variable
			listItemsFirstHTML =
				listItemsFirstHTML +
				createListItemFirst({
					imgSrc: item.imgSrc,
					heading: item.heading,
					description: item.description,
				});
		}
	}

	// Loop through the rightListArray and collect all items
	for (let i = 0; i < rightListArray.length; i++) {
		const item = rightListArray[i];
		if (item.heading && item.description && item.iconPosition) {
			// Insert all the list items into the listItemsHTML variable
			listItemsSecondHTML =
				listItemsSecondHTML +
				createListItemSecond({
					heading: item.heading,
					description: item.description,
					iconPosition: item.iconPosition,
				});
		}
	}

	// Main section
	let html = ` 
    <div class="w-full lg:basis-[33%] lg:h-[280px]">
       <p
          class="text-xl text-center lg:text-left text-[#333] font-semibold pt-[5px] pb-[14px]">
       ${leftTitle}
        </p>
       <ul class="w-full bg-[#f5f4f4] lg:p-4 p-4 lg:h-[280px]">
          ${listItemsFirstHTML}
        </ul>
        </div>

         <div class="w-full lg:basis-[62%] lg:h-[280px]">
            <p 
               class="text-xl text-center lg:text-left text-[#333] font-semibold pt-[5px] pb-[14px]"
              >
               ${rightTitle}
               </p>
               <ul class="full bg-[url('/build/img/htgflnew.jpg')] bg-no-repeat bg-[size:100%_100%] lg:p-4 p-4 lg:flex lg:justify-center lg:h-[280px]">
                    ${listItemsSecondHTML}
                </ul>
           </div>
    `;
	return html;
}

// Function for the list elements
function createListItemFirst({ imgSrc, heading, description }) {
	return ` 
     
     <li
         class="mb-6 flex flex-col lg:flex-row lg:gap-x-6 lg:items-center items-center"
       >
         <img 
            class="relative w-[39px] block"
            src="${imgSrc}"
           /> 
         <div>
           <h3 
              class="mt-[9px] text-[#0453c7] text-lg text-center lg:text-left">
               ${heading}
               </h3>
               <p 
                  class="text-[15px] mt-3 text-black text-center lg:text-left"
                >
                  ${description}
                </p>
          </div>
     </li>
    `;
}

// Function for the list elements
function createListItemSecond({ heading, description, iconPosition }) {
	return ` 
         <li
         class="mb-6 lg:mb-0 flex flex-col lg:justify-center items-center lg:h-full"
       >
           <i class="w-[55px] h-[55px] block bg-[url('/build/img/login-sprite.png')]"
             style="background-position: ${iconPosition};"
           ></i>
         <div>
           <h3 
              class="mt-[9px] lg:mt-8 text-[#0453c7] text-lg text-center lg:text-center">
               ${heading}
               </h3>
               <p 
                  class="text-[15px] mt-3 text-black text-center lg:text-center lg:p-1 lg:mt-3"
                >
                  ${description}
                </p>
          </div>
     </li>
    `;
}
