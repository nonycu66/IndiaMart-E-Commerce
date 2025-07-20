// function to generate the footer html dynamically
export function generateFooterLayoutHTML(footerDataFirst) {
	if (!Array.isArray(footerDataFirst) || footerDataFirst.length === 0) {
		console.warn('footerDataFirst is not an array or is empty');
		return 'footerDataFirst is not available';
	}

	const { heading, mobileText, firstFooter, socialText, secondFooter } =
		footerDataFirst[0];

	// Define an empty variable
	let listItemsHTMLFirst = '';
	let listItemsHTMLSecond = '';

	// Loop through the firstFooter array and collect all the list items
	for (let i = 0; i < firstFooter.length; i++) {
		// Get all the objects of firstFooter by its index
		const item = firstFooter[i];
		if (item.imgSrc && item.iconPosition) {
			// Insert all the list items into the listItemsHTMLFirst variable
			listItemsHTMLFirst =
				listItemsHTMLFirst +
				createFirstFooterList({
					imgSrc: item.imgSrc,
					iconPosition: item.iconPosition,
				});
		}
	}

	// Loop through the secondFooter array and collect all the list items
	for (let i = 0; i < secondFooter.length; i++) {
		// Get all the objects of SecondFooter by its index
		const item = secondFooter[i];
		if (item.imgSrc && item.iconPosition) {
			// Insert all the list items into the listItemsHTMLFirst variable
			listItemsHTMLSecond =
				listItemsHTMLSecond +
				createSecondFooterList({
					imgSrc: item.imgSrc,
					iconPosition: item.iconPosition,
				});
		}
	}

	// Declare the html variable and inject listItemsHTMLFirst
	let html = ` 
      <li>
          <span
             class="text-[18px] text-[#2e3192]"
            >
             ${heading}
            </span>
        </li>
       <li>
          <div
              class="flex items-center gap-2" 
            >
             ${mobileText}
            ${listItemsHTMLFirst}
            </div>
        </li>
         <li>
            <div
              class="flex items-center gap-2" 
            >
             ${socialText}
            ${listItemsHTMLSecond}
            </div>
         </li>
    `;
	// Return the full html
	return html;
}

// function for the first footer list items
function createFirstFooterList({ imgSrc, iconPosition }) {
	return ` 
           <a 
              href="#"
                  class="inline-block w-6 h-[42px] indent-[-99999px] bg-no-repeat"
                  style="background-image: url('${imgSrc}');
                background-position: ${iconPosition};
                  "
                >
            </a>  
     `;
}

// function for the second footer list items
function createSecondFooterList({ imgSrc, iconPosition }) {
	return ` 
     
           <a 
              href="#"
                  class="inline-block w-[31px] h-[42px] indent-[-99999px] bg-no-repeat"
                  style="background-image: url('${imgSrc}');
                background-position: ${iconPosition};
                  "
                >
            </a>  
    `;
}

////////////////////////////////////////////////////////////////////////
// function to generate the footer html dynamically
export function generateFooterLayoutHTMLMiddle(footerDataSecond) {
	if (!Array.isArray(footerDataSecond) || footerDataSecond.length === 0) {
		console.warn('footerDataSecond is not an array or is empty');
		return 'footerDataSecond is not available';
	}

	const { firstFooter, secondFooter } = footerDataSecond[0];

	// Define an empty variable
	let listItemsHTMLFirst = '';
	let listItemsHTMLSecond = '';

	// Loop through the firstFooter array and collect all the list items
	for (let i = 0; i < firstFooter.length; i++) {
		// Get all the objects of firstFooter by its index
		const item = firstFooter[i];
		if (item.link) {
			listItemsHTMLFirst =
				listItemsHTMLFirst +
				createListFirst({
					link: item.link,
				});
		}
	}

	// Loop through the secondFooter array and collect all the list items
	for (let i = 0; i < secondFooter.length; i++) {
		// Get all the objects of secondFooter by its index
		const item = secondFooter[i];
		if (item.link) {
			listItemsHTMLSecond =
				listItemsHTMLSecond +
				createListSecond({
					link: item.link,
				});
		}
	}

	// Declare the html variable and inject listItemsHTMLFirst
	let html = ` 
        <li
           class="flex flex-col items-center mt-[7px]"
           >
            ${listItemsHTMLFirst}
          </li>
		  <li
		     class="flex flex-col items-center mt-[7px]"
		     >
		     ${listItemsHTMLSecond}
		   </li>
    
    `;
	return html;
}

// function for the list items
function createListFirst({ link }) {
	return ` 
          <a
           href="#"
              class="py-[2px] text-[#727272] hover:text-[#2e3192]"
            >
            ${link}
            </a>
    `;
}

// function for the list items
function createListSecond({ link }) {
	return ` 
          <a
           href="#"
              class="py-[2px] text-[#727272] hover:text-[#2e3192]"
            >
            ${link}
            </a>
    `;
}

////////////////////////////////////////////////////////////////////////
// function to generate the footer html dynamically
export function generateFooterLayoutHTMLLast(footerDataThird) {
	if (!Array.isArray(footerDataThird) || footerDataThird.length === 0) {
		console.warn('footerDataThird is not an array or is empty');
		return 'footerDataThird is not available';
	}

	const {
		boldLinkFirst,
		firstFooter,
		boldLinkSecond,
		secondFooter,
		boldLinkThird,
		thirdFooter,
	} = footerDataThird[0];

	// Define an empty variable
	let listItemsHTMLFirst = '';
	let listItemsHTMLSecond = '';
	let listItemsHTMLThird = '';

	// Loop through the firstFooter array and collect all the list items
	for (let i = 0; i < firstFooter.length; i++) {
		// Get all the objects of firstFooter by its index
		const item = firstFooter[i];
		if (item.link) {
			listItemsHTMLFirst =
				listItemsHTMLFirst +
				createLastListFirst({
					link: item.link,
				});
		}
	}

	// Loop through the secondFooter array and collect all the list items
	for (let i = 0; i < secondFooter.length; i++) {
		// Get all the objects of secondFooter by its index
		const item = secondFooter[i];
		if (item.link) {
			listItemsHTMLSecond =
				listItemsHTMLSecond +
				createLastListSecond({
					link: item.link,
				});
		}
	}

	// Loop through the thirdFooter array and collect all the list items
	for (let i = 0; i < thirdFooter.length; i++) {
		// Get all the objects of thirdFooter by its index
		const item = thirdFooter[i];
		if (item.link) {
			listItemsHTMLThird =
				listItemsHTMLThird +
				createLastListThird({
					link: item.link,
				});
		}
	}

	let html = ` 
	     <li
		    class="flex flex-col items-center mt-[7px]"
		   >
		     <a 
			   class="py-[2px] text-[#000] hover:text-[#2e3192] text-[17px]">
		     ${boldLinkFirst}
			  </a>
		      ${listItemsHTMLFirst}
		   </li>
		
	      <li
		    class="flex flex-col items-center mt-[7px]"
		     >
			  <a
			     class="py-[2px] text-[#000] hover:text-[#2e3192] text-[17px]" 
			   >
		      ${boldLinkSecond}
			   </a>
		      ${listItemsHTMLSecond}
		   </li>

		    <li
		    class="flex flex-col items-center mt-[7px]"
		     >
			  <a 
			    class="py-[2px] text-[#000] hover:text-[#2e3192] text-[17px]" 
			    >
		      ${boldLinkThird}
			    </a>
		      ${listItemsHTMLThird}
		   </li>
	`;
	return html;
}

// function for the list items
function createLastListFirst({ link }) {
	return ` 
	     <a
            href=""
             target="_blank"
              class="py-[2px] text-[#727272] hover:text-[#2e3192]"
            >
            ${link}
            </a>
	`;
}

// function for the list items
function createLastListSecond({ link }) {
	return ` 
	     <a
            href=""
             target="_blank"
              class="py-[2px] text-[#727272] hover:text-[#2e3192]"
            >
            ${link}
            </a>
	`;
}

// function for the list items
function createLastListThird({ link }) {
	return ` 
	     <a
            href=""
             target="_blank"
              class="py-[2px] text-[#727272] hover:text-[#2e3192]"
            >
            ${link}
            </a>
	`;
}

////////////////////////////////////////////////////////////////////////
// function to generate the footer html dynamically
export function generateFooterLayoutBottom(footerDataFourth) {
	if (!Array.isArray(footerDataFourth) || footerDataFourth.length === 0) {
		console.warn('footerDataFourth is not an array or is empty');
		return 'footerDataFourth is not available';
	}

	const { copyRightText, legality } = footerDataFourth[0];

	// Define an empty variable
	let listItemsHTML = '';
	for (let i = 0; i < legality.length; i++) {
		const item = legality[i];
		if (item.text) {
			listItemsHTML =
				listItemsHTML +
				createTextElem({
					text: item.text,
				});
		}
	}

	let html = ` 
	  <li
	     class="mx-auto my-0 flex flex-col items-center lg:flex-row lg:justify-evenly"
	     >
	  <span
	       class="text-center"
	     >
	     ${copyRightText}
	    </span>
		<span
		  > 
		  ${listItemsHTML}
		  </span>
		  </li>
	`;
	// Return the full html
	return html;
}

// Function to the text items
function createTextElem({ text }) {
	return ` 
	   <a
	     href="#"
	      class="mx-5 cursor-pointer" 
	     >
          ${text}
	    </a>
	`;
}
