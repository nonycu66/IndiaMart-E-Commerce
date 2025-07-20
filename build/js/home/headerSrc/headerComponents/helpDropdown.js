// Function to generate the help dropdown html dynamically
export function generateHelpDropdownHTML(helpDropDownData) {
	if (!Array.isArray(helpDropDownData) || helpDropDownData.length === 0) {
		console.warn('helpDropDownData is not an array or is empty');
		return '<!-- helpdropdown data is not available -->';
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

	// Hendle buy and sell
	const buySellGroup = dropDownObjects[0];

	// Check if the first object has buy and sell properties
	if (buySellGroup.buy && buySellGroup.sell) {
		html =
			html +
			`
			    <span class="flex"> 
			   `;

		for (const item of buySellGroup.buy) {
			html = html + createLink(item, true);
		}
		for (const item of buySellGroup.sell) {
			html = html + createLink(item, true);
		}
		html = html + `</span>`;
	}

	// Loop through the rest of the dropdownObjects
	for (let i = 1; i < dropDownObjects.length; i++) {
		const item = dropDownObjects[i];
		const isAnchor =
			item.href && item.text.toLowerCase().includes('http') === false;

		if (isAnchor) {
			html = html + createLink(item);
		} else {
			html = html + createSpan(item);
		}
	}
	return html;
}

// Function  for the anchor element
function createLink({ text, href, helpIconPosition }, isFlex = false) {
	return `
	    <a
			href='${href}'
			 class=" ${isFlex ? 'flex-1' : 'block w-full'}  text-[#333]  text-[13px] text-left  bg-[#fff]  py-[9px]  pl-8  relative no-underline before:absolute  before:content-[''] before:bg-[url('/build/icon/home-new-icon16.png')] before:top-[7px]  before:left-[7px]  before:h-[18px] before:w-[39px]  before:bg-no-repeat  before:bg-[position:${helpIconPosition}] hover:bg-[#f2f0f0]"
			>
			 ${text}
			</a>
	 `;
}

// Function for the span element
function createSpan({ text, helpIconPosition }) {
	return `
	  	<span class="text-[#333] text-[13px]  text-left bg-white  block  relative  py-[9px]  pl-8  w-full  before:content-[''] before:bg-[/build/icon/home-new-icon16.png] before:absolute  before:h-[18px]  before:w-[39px]  before:top-[7px]  before:left-[7px]  before:bg-[position:${helpIconPosition}]  before:bg-no-repeat  hover:bg-[#f2f0f0]">
			${text}
		</span>

	`;
}
