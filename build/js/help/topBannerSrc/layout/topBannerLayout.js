export function generateTopBannerLayout(topBannerData) {
	if (!Array.isArray(topBannerData) || topBannerData.length === 0) {
		console.warn('topBannerData is not an array or is empty');
		return 'topBannerData is not available';
	}

	const { listArray } = topBannerData[0];

	// Define an empty variable
	let listItemsHTML = '';

	// Loop through the listArray array and collect all its contents
	for (let i = 0; i < listArray.length; i++) {
		const item = listArray[i];
		if (item.heading && item.quantity) {
			// Insert all the list items into the listItemsHTML variable
			listItemsHTML =
				listItemsHTML +
				createListItems({
					heading: item.heading,
					quantity: item.quantity,
				});
		}
	}

	// Inject listItemsHTML here
	let html = ` 
      <ul
         class="flex flex-col gap-y-4 md:flex-row md:items-center"
        >
         ${listItemsHTML}
        </ul>
    `;
	// return the full html string
	return html;
}

// Function to create the list elements
function createListItems({ heading, quantity }) {
	return ` 
       <li
          class="lg:w-[33.3%] px-5 group" 
        >
          <a
            href="#"
            class="text-[#2e3192]"
          >
             <div
               class="px-[25px] py-[25px] bg-white text-center flex items-center justify-evenly group-hover:bg-[#434345]"
              >
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" height="2rem" width="2rem" viewBox="0 0 384 512"
              class="fill-[#2e3192]">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"></path>
                </svg>
                </i>

              <div> 
                <h4
                   class="text-[22px] mb-[10px] text-[#2e3192] group-hover:text-white"
                 >
                   ${heading}
                 </h4>
                <h5 
                    class="text-[#999] text-sm"
                  >
                   ${quantity}
                  </h5>
               </div>

               </div>
          </a>
         </li>
    `;
}
