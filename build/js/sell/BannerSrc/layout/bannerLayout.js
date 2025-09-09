// function to generate the banner dynamically
export function generateSellBanner(sellBannerData) {
	const { imageSrc, altText, title, bannerList } = sellBannerData[0];

	// Define an empty variable
	let listItemsHTML = '';

	// Loop through the bannerList array and collect all items
	for (let i = 0; i < bannerList.length; i++) {
		const item = bannerList[i];
		if (item.quantity && item.unit && item.demand && item.iconPosition) {
			// Insert all the list items into the listItemsHTML variable
			listItemsHTML =
				listItemsHTML +
				createListItem({
					quantity: item.quantity,
					unit: item.unit,
					demand: item.demand,
					iconPosition: item.iconPosition,
				});
		}
	}

	// Main banner section
	let html = `
    <img
       src="${imageSrc}"
         alt="${altText}"
         class="w-[100px] md:w-[150px] lg:w-[252px] h-auto block my-0 mx-auto mb-4 lg:mx-0"
      />

     <div class="lg:items-center"> 
        <h1 class="text-xl text-center mb-4">
          ${title}
        </h1>
       <ul
         class="flex items-center justify-center mb-7">
           ${listItemsHTML}
         </ul>
      </div>

       <div
          class="bg-[#eee] rounded-[11px] py-[37px] px-[27px] w-full lg:w-[346px] flex flex-col items-center" 
        >
          <p 
           class="text-[23px] text-[#343434] font-bold mb-[15px] text-center">
           Free Registration/Sign In
          </p>
          <div>
             <input 
               type="text" 
               placeholder="Enter 10 digit mobile number"
               maxlength="10"
                class="pr-[13px] pl-[99px] border-[1.5px] border-solid border-[#00a699] rounded-[4px] text-sm h-[55px] w-[293px] 
                sm:w-[400px] md:w-[500px] lg:w-[293px] my-0 mx-auto outline-none"
                />
          </div>
          <div>
              <button
                class="bg-[#00a699] sm:w-[400px] md:w-[500px] w-[293px] lg:w-[293px] text-lg py-[15px] mt-[15px] rounded-[4px] font-semibold text-white cursor-pointer border-none relative"
                >
                Start Selling
                <span class="absolute right-[37px] top-6">
                  <i 
                class="bg-[url('/build/img/login-sprite.png')] w-[18px] h-[9px] absolute -top-[2px] -right-[3px] inline-flex"
                     style="background-position: -2px -3px"
                    >
                   </i> 
                </span>
                </button>
            </div>
        </div>
    `;
	// return the full html string
	return html;
}

// Function for the list elements
function createListItem({ quantity, unit, demand, iconPosition }) {
	return ` 
      <li
         class="text-center w-[41%]"
        >
        <i class="my-0 mx-auto w-[55px] h-[55px] bg-[url('/build/img/login-sprite.png')] block"
          style="background-position: ${iconPosition}"
        >
        </i>
        <figcaption
           class="text-xl mt-[14px] text-[#000] font-bold"
         >
          <span class="">${quantity}</span>
          ${unit}
         </figcaption>
         <p
          class="text-[#343434] text-[17px] text-center mt-[10px]"
         >
          ${demand}
         </p>
        </li>
    `;
}
