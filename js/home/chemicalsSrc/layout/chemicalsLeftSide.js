// function to generate the chemicals left html dynamically
export function generateChemicalsLeftSide(chemicalsDataLeft) {
	if (!Array.isArray(chemicalsDataLeft) || chemicalsDataLeft.length === 0) {
		console.warn('chemicalsDataLeft is not an array or is empty');
		return 'chemicalsDataLeft is not available';
	}

	const { chemicalsList, link } = chemicalsDataLeft[0];

	// define an empty variable
	let listItemsHTML = '';

	// Loop through the the chemicalsList array and collect all the list items
	for (let i = 0; i < chemicalsList.length; i++) {
		// Get all the objects of chemicalsList by its index
		const item = chemicalsList[i];
		if (item.list) {
			// Insert all the list items into the listItemsHTML variable
			listItemsHTML = listItemsHTML + createListItems({ list: item.list });
		}
	}

	// Main chemicals left side (chemicalsList, link)
	// Declare the html variable and inject the string chemicalsList by listitemsHTML, link
	let html = ` 
    
       <article 
            class="chemicals-bg-image md:h-full md:w-[325px] lg:w-[325px] md:mx-[15px] lg:mx-[15px] md:mt-0 lg:mt-0"
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
function createListItems({ list }) {
	return ` 
          <li>
            <a href="#" class="py-[5px] inline-block text-[18px] lg:text-base hover:underline"> 
                ${list}
             </a>
            </li>
    `;
}
