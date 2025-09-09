// Function to generate the help dropdown html dynamically
export function generateHelpDropdownHTML(helpDropDownData) {
	if (!Array.isArray(helpDropDownData) || helpDropDownData.length === 0) {
		console.warn('helpDropDownData is not an array');
		return '<!-- helpDropDownData data is not available';
	}

	const { title, dropDownObjects } = helpDropDownData[0];

	// Declare the html variable and insert the paragraph element
	let html = ` 
        <p
		    class="text-[#999] text-left  px-3  py-3 text-[13px] mt-[11px] mb-[-2px]"
		    >
			  ${title}
		  </p>
    `;
	//  Handle buy and sell
	const buySellGroup = dropDownObjects[0];

	// Check if the first objects has buy and sell properties
	if (buySellGroup.buy && buySellGroup.sell) {
		html =
			html +
			`   <span class="flex"> 
              `;

		for (const item of buySellGroup.buy) {
			html = html + createLink(item, true);
		}
		for (const item of buySellGroup.sell) {
			html = html + createLink(item, true);
		}
		html = html + `</span>`;
	}

	// Loop through the rest of the dropDownObjects
	for (let i = 1; i < dropDownObjects.length; i++) {
		const item = dropDownObjects[i];
		const isAnchor =
			item.href &&
			item.helpIconPosition &&
			item.text.toLowerCase().includes('http') === false;

		if (isAnchor) {
			html = html + createLink(item);
		} else {
			html = html + createSpan(item);
		}
	}
	return html;
}

// Function for the anchor element
function createLink({ text, href, helpIconPosition }, isFlex = false) {
	return ` 
           <a
			href='${href}'
			 class=" ${isFlex ? 'flex-1' : 'block w-full'}  text-[#333]  text-[13px] text-left  bg-[#fff]  py-[9px]  pl-8  relative no-underline hover:bg-[#f2f0f0]"
			>
			 <span class="absolute top-[7px] left-[7px] h-[18px] w-[39px] bg-no-repeat bg-[url('/build/icon/home-new-icon16.png')]"
			   style="background-position: ${helpIconPosition}"
			 >
			 </span>
			 ${text}
			</a>
     `;
}

// Function for the span element
function createSpan({ text, helpIconPosition }) {
	return ` 
       	<span class="text-[#333] text-[13px] text-left bg-white  block  relative py-[9px] pl-8 w-full hover:bg-[#f2f0f0]">
		  <span class="absolute h-[18px] w-[39px] top-[7px] left-[7px] bg-no-repeat bg-[url('/build/icon/home-new-icon16.png')]"
		    style="background-position: ${helpIconPosition}"
		    >
		  </span>
			${text}
		</span>
    `;
}
