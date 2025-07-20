// Function to generate the cities html dynamically
export function generateCitiesLayoutHTML(citiesData) {
	if (!Array.isArray(citiesData) || citiesData.length === 0) {
		console.warn('citiesData is not an array or is empty');
		return 'citiesData is not available';
	}

	const { title, cityListFirst, cityListSecond } = citiesData[0];

	// Define an empty variable
	let listItemsHTMLFirst = '';
	let listItemsHTMLSecond = '';
	// Loop through the cityListFirst array and collect all the list items
	for (let i = 0; i < cityListFirst.length; i++) {
		// Get all the objects of cityListFirst by its index
		const item = cityListFirst[i];
		if (item.iconPosition && item.city && item.imageSrc) {
			// Insert all the list items into the listItemsHTMLFirst variable
			listItemsHTMLFirst =
				listItemsHTMLFirst +
				createCityListFirst({
					iconPosition: item.iconPosition,
					city: item.city,
					imageSrc: item.imageSrc,
				});
		}
	}
	// Loop through the the cityListSecond array and collect all the list items
	for (let i = 0; i < cityListSecond.length; i++) {
		// Get all the objects of cityListSecond by its index
		const item = cityListSecond[i];
		if (item.iconPosition && item.city && item.imageSrc) {
			// Insert all the list items into the listItemsHTMLSecond variable
			listItemsHTMLSecond =
				listItemsHTMLSecond +
				createCityListSecond({
					iconPosition: item.iconPosition,
					city: item.city,
					imageSrc: item.imageSrc,
				});
		}
	}

	// Declare the html variable and inject cityList and title
	let html = ` 
        <div
           class="py-[15px] px-[15px] bg-white" 
          >
          <h3
            class="text-[22px] md:text-[24px] lg:text-[28px] text-[#333]"
            >
            ${title}
            </h3>
             <div
               class="grid grid-cols-2 items-center md:grid-cols-3 lg:flex lg:justify-evenly"
              >
                ${listItemsHTMLFirst}
              </div>
			    <div
               class="grid grid-cols-2 items-center md:grid-cols-3 lg:flex lg:justify-evenly"
              >
                ${listItemsHTMLSecond}
              </div>
           </div>
    `;
	// return the full html string
	return html;
}

// Function for the first city list elements
function createCityListFirst({ imageSrc, iconPosition, city }) {
	return ` 
        <div class="mt-[30px] mb-[15px] text-center hover:scale-[1.3] duration-[0.4s]">
		   <a
			href="#"
			target="blank"
			 class="block w-[125px] my-0 mx-auto">
			<i class="block my-0 mx-auto h-[72px] w-[72px]"
			  style="background-image: url('${imageSrc}'); 
			  background-position:${iconPosition}; "
			 >
			</i>
			<span class="inline-block mt-[3px] mb-[10px] text-base text-[#333333]">${city}</span>  
			 </a>
		</div>
  `;
}

// function for the second city list elements
function createCityListSecond({ imageSrc, iconPosition, city }) {
	return ` 
         <div class="mt-[30px] mb-[15px] text-center hover:scale-[1.3] duration-[0.4s]">
		   <a
			href="#"
			target="blank"
			 class="block w-[125px] my-0 mx-auto">
			<i class="block my-0 mx-auto h-[72px] w-[72px]"
			   style="background-image: url('${imageSrc}'); 
			   background-position:${iconPosition}; "
			>
			</i>
			<span class="inline-block mt-[3px] mb-[10px] text-base text-[#333333]">${city}</span>  
			 </a>
		</div>
   `;
}
