// function to generate the popular html dynamically
export function generatePopularLayout(popularData) {
	if (!Array.isArray(popularData) || popularData.length === 0) {
		console.warn('popularData is not an array or is empty');
		return 'popularData is not available';
	}

	const { title, popularList } = popularData[0];

	// Define an empty variable
	let listItemsHTML = '';
	// Loop through the popularList and collect all the list items
	for (let i = 0; i < popularList.length; i++) {
		// Get all the objects of popularList by its index
		const item = popularList[i];
		// Use if statement for conditional
		if (
			item.image &&
			item.nameItem &&
			item.description &&
			item.material &&
			item.price &&
			item.quantity
		) {
			// Insert all the list items into the listItemsHTML variable
			listItemsHTML =
				listItemsHTML +
				createListItem({
					image: item.image,
					nameItem: item.nameItem,
					description: item.description,
					material: item.material,
					price: item.price,
					quantity: item.quantity,
				});
		}
	}

	// Inject it into the html (medicalList, link)
	let html = ` 
        <div
           class="px-[15px] py-[15px]"  
         >
          <h3
             class="text-xl md:text-[23px] lg:text-[25px] font-bold pb-[10px] text-[#333333]"
            >
            ${title}
           </h3>
         <article
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-x-4 gap-y-4"
           >
            ${listItemsHTML}
           </article>
           </div>
    `;
	// return the full html string
	return html;
}

// Function to list elements
function createListItem({
	image,
	nameItem,
	description,
	material,
	price,
	quantity,
}) {
	return ` 
             <ul
              class="relative border border-solid border-[#dfdfdf] rounded-xl text-center max-w-full custom-box-shadow"
              >
              <a
                    href="#"
                    class="block mx-auto my-0  w-[100px] h-[100px] md:w-[178px] md:h-[170px] relative">
                     <img
                      class="max-w-full max-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                      src="${image.src}"
                      alt="${image.alt}"
                      loading="lazy"
                     />
                   </a>
                   <a
                    href="#" 
                     target="_blank"
                   class="block my-[15px] mx-0 text-black no-underline text-[15px] text-left py-0 px-3 font-bold line-clamp-2 text-ellipsis text-nowrap"
                   > 
                     ${nameItem}
                   </a>
                   <a 
                   href="#"
                    target="_blank"
                    class="block h-[29px] text-left text-black my-[15px] mx-0 text-[13px] py-0 px-3 text-ellipsis line-clamp-2"
                    >
                       ${description}
                   </a>
                   <span class="text-[13px] h-11 text-[#767676] material-line-height block text-left py-0 px-3">
                       ${material}
                   </span>
                   <span>
                       <a 
                       href="#"
                       class="text-[15px] h-10 block cursor-pointer text-left py-0 px-3 text-[#000] price-quantity"
                       >
                          <span class="text-lg font-bold">
                             ${price}  
                          </span>
                          <span class="text-[#767676] font-normal">
                             ${quantity}
                          </span>
                       </a>
                   </span>
                </ul>

     `;
}
