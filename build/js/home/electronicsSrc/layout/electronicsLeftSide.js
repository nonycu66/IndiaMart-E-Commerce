// function to generate the electronics left side html dynamically
export function generateElectronicsLeftSide(electronicsDataLeft) {
	if (!Array.isArray(electronicsDataLeft) || electronicsDataLeft.length === 0) {
		console.warn('electronicsDataLeft is not an array or is empty');
		return '<!-- electronicsDataLeft is not available -->';
	}

	const { electronicsList, link } = electronicsDataLeft[0];

	// Define an empty variable
	let listItemsHTML = '';

	// Loop through the electronicsList and collect all list items
	for (let i = 0; i < electronicsList.length; i++) {
		const item = electronicsList[i];
		if (item.list) {
			// Insert all the list items into the listItemsHTML variable
			listItemsHTML = listItemsHTML + createListItem({ list: item.list });
		}
	}
	// Main electronics left side (electronicsList, link)
	// Declare the html variable and inject the string listItemsHTML, link
	let html = `
       <article 
         class="electronic-bg-image md:h-full md:w-[325px] lg:w-[325px] md:mx-[15px] lg:mx-[15px] md:mt-0 lg:mt-0"
          >
          <div
              class="py-[15px] px-[15px]  absolute  bottom-0 z-[20]"
             >
             <ul
                class="my-[15px] mx-0 text-white"
               >
                 ${listItemsHTML}
                </ul>
                   <a 
                    href="#" 
                         class="bg-[#19a598] block text-center text-[18px] lg:text-base py-[9px] my-5 mx-5 w-[120px] text-white border-none rounded-[4px]"
                        >
                     ${link}
                    </a>
             </div>
         </article>
          `;
	// return the full html string
	return html;
}

// Function for the list element
function createListItem({ list }) {
	return `
          <li>
            <a href="#" class="py-[5px] inline-block text-[18px] lg:text-base hover:underline"> 
                ${list}
            </a>
            </li>
    `;
}
