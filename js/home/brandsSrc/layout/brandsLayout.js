// Function to generate the brands html dynamically
export function generateBrandsLayout(brandsData) {
	if (!Array.isArray(brandsData) || brandsData.length === 0) {
		console.warn('brandsData is not an array or is empty');
		return 'brandsData is not available';
	}

	const { title, brandsList } = brandsData[0];
	// Define an empty variable
	let listItemsHTML = '';
	// Loop through the brandsList and collect all the list items
	for (let i = 0; i < brandsList.length; i++) {
		const item = brandsList[i];
		// Use if statement for conditional
		if (item.imgSrc && item.iconPosition) {
			// Insert all the list items into the listItemsHTML variable
			listItemsHTML =
				listItemsHTML +
				createBrandsList({
					imgSrc: item.imgSrc,
					iconPosition: item.iconPosition,
				});
		}
	}
	// Inject it into the html (brandsList, link)
	let html = `
      <h3 class="text-xl md:text-2xl lg:text-[28px] font-bold text-[#333]">${title}</h3>
       <div
          class="grid grid-cols-2 items-center justify-center sm:grid-cols-3 lg:grid-cols-6"  
       >
          ${listItemsHTML}
        <div>
   `;
	// return the full html string
	return html;
}

// Function for the brands list items
function createBrandsList({ imgSrc, iconPosition }) {
	return ` 
              <div class="mt-[30px] mb-[15px] flex justify-center">
                    <a 
                    href="#"
                    >
                      <span class="block h-[100px] w-[205px] bg-no-repeat"
                         style="background-image: url('${imgSrc}'); 
                          background-position: ${iconPosition}
                         "
                       >
                      </span>
                    </a>
                </div>
    `;
}
