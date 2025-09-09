// Function to generate the require left side html dynamically
export function generateRequireLeftSide(requireDataLeft) {
	if (!Array.isArray(requireDataLeft) || requireDataLeft.length === 0) {
		console.log('requireDataLeft is not an array or is empty');
		return `<!-- requireDataLeft is not available -->`;
	}

	const { title, requireObjects } = requireDataLeft[0];

	// Define an empty variable
	let articlesHTML = '';

	// Loop through the requireText and collect all text elements
	for (let i = 0; i < requireObjects.length; i++) {
		const item = requireObjects[i];
		if (item.iconPosition && item.requireText) {
			// Insert all the requireObjects elements into the articlesHTML variable
			articlesHTML =
				articlesHTML +
				createTextElem({
					iconPosition: item.iconPosition,
					requireText: item.requireText,
				});
		}
	}
	// Main require left side (title, articlesHTML)
	// Declare the html variable and inject the string for title, articlesHTML
	let html = `
       <div
         class="lg:mt-8 lg:ml-[60px] lg:p-[15px] basis-[33.333333%]"
        >
          <h2
             class="text-center lg:text-left text-[22px] lg:text-[37px] text-[#333]" 
           >
            ${title}
            </h2>
            <ul
               class="mt-[25px] mb-[10px] ml-[-30px] flex items-center justify-evenly"
             >
               ${articlesHTML}
              </ul>
         </div>
    `;
	return html;
}

// Function for the text element
function createTextElem({ requireText, iconPosition }) {
	return `
       <li
          class="inline-block w-[32%] text-center relative"
        >
          <i class="bg-[url('/build/img/home-sprite2.png')] block h-[100px] w-[120px] -top-[5px] absolute left-[10px] my-0 mx-auto bg-no-repeat scale-[0.9]"
		  style="background-position: ${iconPosition}">
		  </i>
         <p class="text-[14px] mt-[120px]">${requireText}</p>
         </li>
    `;
}
