// function to generate the bottomBannerData array
export function generateBottomBannerLayout(bottomBannerData) {
	if (!Array.isArray(bottomBannerData) || bottomBannerData.length === 0) {
		console.warn('bottomBannerData is not an array or is empty');
		return 'bottomBannerData is not available';
	}

	const { listItemsFirst } = bottomBannerData[0];
	const { listItemsSecond } = bottomBannerData[1];

	// Define an empty variable
	let listItemsFirstHTML = '';
	let listItemsSecondHTML = '';

	// Loop through the listItemsFirst array and collect all the list items
	for (let i = 0; i < listItemsFirst.length; i++) {
		// Get all the objects of listItemsFirst by its index
		const item = listItemsFirst[i];
		if (item.list) {
			// Insert all the list items into the listItemsFirstHTML variable
			listItemsFirstHTML =
				listItemsFirstHTML +
				createListFirst({
					list: item.list,
				});
		}
	}

	// Loop through the listItemsSecond array and collect all the list items
	for (let i = 0; i < listItemsSecond.length; i++) {
		// Get all the objects of listItemsSecond by its index
		const item = listItemsSecond[i];
		if (item.list) {
			// Insert all the list items into the listItemsSecondHTML variable
			listItemsSecondHTML =
				listItemsSecondHTML +
				createListSecond({
					list: item.list,
				});
		}
	}

	// Declare the html variable and inject it
	let html = `
      
       <article
          class="lg:w-[33.3%] mb-[30px] p-5 mx-auto my-0"
         >
           <div
		     class="grid grid-cols-2 md:grid-cols-3 justify-items-center lg:flex lg:flex-col">
              ${listItemsFirstHTML}
             </div>
         </article>

		<article
          class="lg:w-[33.3%] mb-[30px] p-5 mx-auto my-0"
         >
           <div
		     class="grid grid-cols-2 md:grid-cols-3 justify-items-center lg:flex lg:flex-col">
              ${listItemsSecondHTML}
             </div>
          </article>

		 <article
		     class="lg:w-[33.3%] mb-[30px] p-5 mx-auto my-0"
		   >
		    <div>
			    <a
				  href="#"
				  class="text-xs flex items-center justify-between 
				  bg-[#2e3192] bg-[size:300%] py-[9px] 
					px-[10px] h-[70px] font-medium lg:w-[70%]
					rounded-[22px] my-[10px]">
				   <p
				    class="text-left  text-xs text-white">
					
					 Whatsapp:
					  <br>
					  +91-9696969696
				     </p>

					 <img
					   src="/build/img/whatsapp.png"
					    alt="whatsapp icon"
						class="w-[45px] h-[45px]" 
					 /> 
				  </a>

				<a
				  href="#"
				  class="text-xs flex items-center justify-between 
				  bg-[#2e3192] bg-[size:300%] py-[9px] 
					px-[10px] h-[70px] font-medium lg:w-[70%] 
					rounded-[22px] my-[10px]">
				   <p
				    class="text-left  text-xs text-white">
					
					  Email us:
					  <br>
					   customercare@indiamart.com
				     </p>
				  </a>

				<a
				  href="#"
				  class="text-xs flex items-center justify-between 
				  bg-[#2e3192] bg-[size:300%] py-[9px] 
					px-[10px] h-[70px] font-medium lg:w-[70%] 
					rounded-[22px] my-[10px]">
				   <p
				    class="text-left  text-xs text-white">
					
					   Call us:
					  <br>
					    096-9696-9696
				     </p>
				  </a>
				 
			 </div>
		   </article>
    `;
	// Return the html
	return html;
}

// Function for the first list elements
function createListFirst({ list }) {
	return `
      <a
        class="text-xs text-[#666] block mb-3 hover:underline"
		href="#" 
      >
        ${list}
       </a>
    `;
}

// Function for the second list elements
function createListSecond({ list }) {
	return ` 
	   <a
        class="text-xs text-[#666] block mb-3 hover:underline"
		href="#" 
      >
        ${list}
       </a>
	`;
}
