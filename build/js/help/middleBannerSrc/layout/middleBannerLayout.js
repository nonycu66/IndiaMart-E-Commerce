// Function to generate the middleBannerData array
export function generateMiddleBannerLayout(middleBannerData) {
	if (!Array.isArray(middleBannerData) || middleBannerData.length === 0) {
		console.log('middleBannerData is not an array or is empty');
		return 'middleBannerData is not available';
	}

	const { headingFirst, listItemsFirst } = middleBannerData[0];
	const { headingSecond, listItemsSecond } = middleBannerData[1];
	const { headingThird, listItemsThird } = middleBannerData[2];

	// Define an empty variable
	let listItemsFirstHTML = '';
	let listItemsSecondHTML = '';
	let listItemsThirdHTML = '';

	// Loop through the listItemsFirst array and collect all the list items
	for (let i = 0; i < listItemsFirst.length; i++) {
		// Get all the objects of listItemsFirst by its index
		const item = listItemsFirst[i];
		if (item.items) {
			// Insert all the list items into the listItemsFirstHTML variable
			listItemsFirstHTML =
				listItemsFirstHTML +
				createListFirst({
					items: item.items,
				});
		}
	}

	// Loop through the listItemsSecond array and collect all the list items
	for (let i = 0; i < listItemsSecond.length; i++) {
		// Get all the objects of listItemsSecond by its index
		const item = listItemsSecond[i];
		if (item.items) {
			// Insert all the list items into the listItemsSecondHTML variable
			listItemsSecondHTML =
				listItemsSecondHTML +
				createListSecond({
					items: item.items,
				});
		}
	}

	// Loop through the listItemsThird array and collect all the list items
	for (let i = 0; i < listItemsThird.length; i++) {
		// Get all the objects of listItemsThird by its index
		const item = listItemsThird[i];
		if (item.items) {
			// Insert all the list items into the listItemsThirdHTML variable
			listItemsThirdHTML =
				listItemsThirdHTML +
				createListThird({
					items: item.items,
				});
		}
	}

	// Declare the html variable and inject it
	let html = ` 
             <article 
                    class="lg:w-[33.333%] p-5 mx-auto my-0"
                >
                <h4
                    class="text-[17px] mb-5"
                    >
                    ${headingFirst}
                </h4>
                    <ul>
                        ${listItemsFirstHTML}
                    <ul>
                    </article> 


                <article 
                    class="lg:w-[33.333%] p-5 mx-auto my-0"
                   >
                   <h4
                    class="text-[17px] mb-5"
                    >
                    ${headingSecond}
                  </h4>
                    <ul>
                        ${listItemsSecondHTML}
                    <ul>
                </article> 

                <article 
                    class="lg:w-[33.333%] p-5 mx-auto my-0"
                >
                <h4
                    class="text-[17px] mb-5"
                    >
                    ${headingThird}
                </h4>
                    <ul>
                        ${listItemsThirdHTML}
                    <ul>
                    </article> 
    `;
	// return the html
	return html;
}

// Fucntion for the first list elements
function createListFirst({ items }) {
	return ` 
     <li
        class="mb-[8px] pb-[8px] border-b-[1px] border-solid
        border-[#00000014] pl-[25px] relative"
      >
       <svg xmlns="http://www.w3.org/2000/svg" height="1rem" width="1rem" viewBox="0 0 576 512" class="absolute top-[2px] left-0">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                </svg>
                <a
                  href="#"
                  class="block mb-1 text-sm text-[#333] hover:underline"
                 >
                    ${items}
                 </a>
             </li>
    `;
}

// Fucntion for the second list elements
function createListSecond({ items }) {
	return ` 
    <li
        class="mb-[8px] pb-[8px] border-b-[1px] border-solid
        border-[#00000014] pl-[25px] relative"
      >
       <svg xmlns="http://www.w3.org/2000/svg" height="1rem" width="1rem" viewBox="0 0 576 512" class="absolute top-[2px] left-0">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                </svg>
                <a
                  href="#"
                  class="block mb-1 text-sm text-[#333] hover:underline"
                 >
                    ${items}
                 </a>
      </li>
    `;
}

// Fucntion for the third list elements
function createListThird({ items }) {
	return ` 
               <li
        class="mb-[8px] pb-[8px] border-b-[1px] border-solid
        border-[#00000014] pl-[25px] relative"
      >
       <svg xmlns="http://www.w3.org/2000/svg" height="1rem" width="1rem" viewBox="0 0 576 512" class="absolute top-[2px] left-0">
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
                </svg>
                <a
                  href="#"
                  class="block mb-1 text-sm text-[#333] hover:underline"
                 >
                    ${items}
                 </a>
      </li>
    `;
}
