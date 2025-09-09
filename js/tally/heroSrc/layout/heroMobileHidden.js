// function to generate the heroHiddenData array
export function generateHeroMobileHiddenDataLayout(heroMobileHiddenData) {
	if (
		!Array.isArray(heroMobileHiddenData) ||
		heroMobileHiddenData.length === 0
	) {
		console.warn('heroMobileHiddenData is not an array or is empty');
		return 'heroMobileHiddenData is not available';
	}

	const { listItemsFirst } = heroMobileHiddenData[0];
	const { listItemsSecond } = heroMobileHiddenData[1];

	// Define an empty variable
	let listItemsFirstHTML = '';
	let listItemsSecondHTML = '';

	// Loop through the listItemsFirst array
	for (let i = 0; i < listItemsFirst.length; i++) {
		// Get all the objects of listItemsFirst by its index
		const item = listItemsFirst[i];
		if (item.text) {
			// Insert all the text items into the listItemsFirstHTML variable
			listItemsFirstHTML =
				listItemsFirstHTML +
				createListFirst({
					text: item.text,
				});
		}
	}

	// Loop through the listItemsFirst array
	for (let i = 0; i < listItemsSecond.length; i++) {
		// Get all the objects of listItemsSecond by its index
		const item = listItemsSecond[i];
		if (item.text) {
			// Insert all the text items into the listItemsSecondHTML variable
			listItemsSecondHTML =
				listItemsSecondHTML +
				createListSecond({
					text: item.text,
				});
		}
	}

	// Declare the html variable and inject it
	let html = ` 
	
	      <ul
			  class="mr-5 mb-4 list-none p-0 font-medium"
			  >
			   ${listItemsFirstHTML}
			 </ul>

			<ul
			  class="mr-5 list-none mb-4 p-0"
			  >
			      ${listItemsSecondHTML}
			 </ul>
	`;
	// Return the html
	return html;
}

// Function for the first list elements
function createListFirst({ text }) {
	return `
	          <li
				   class="text-black text-sm mb-2.5 2xl:text-base font-medium flex items-center"
				  >
				  <svg data-v-e2bff904="" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve" class="mr-2 2xl:w-4 2xl:h-4"><g><path d="M444.176 0 183.305 242.012 72.98 124.277 0 192.664l178.234 190.207L512 73.52zm0 0" fill="#0ebe35" opacity="1" data-original="#000000" stroke-width="10" stroke="#0ebe35" class=""></path></g></svg>
                   ${text}
			    </li>
	`;
}

// Function for the second list elements
function createListSecond({ text }) {
	return ` 
  	         <li
				   class="text-black text-sm mb-2.5 2xl:text-base font-medium flex items-center"
				  >
				  <svg data-v-e2bff904="" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve" class="mr-2 2xl:w-4 2xl:h-4"><g><path d="M444.176 0 183.305 242.012 72.98 124.277 0 192.664l178.234 190.207L512 73.52zm0 0" fill="#0ebe35" opacity="1" data-original="#000000" stroke-width="10" stroke="#0ebe35" class=""></path></g></svg>
                   ${text}
			    </li>
	`;
}
