// function to generate the connect left side html dynamically
export function generateConnectLeftSide(connectData) {
	if (!Array.isArray(connectData) || connectData.length === 0) {
		console.warn('connectData is not an array or is empty');
		return '<!--  connectData is not available -->';
	}

	const { title, describe, connectObjects } = connectData[0];

	// Define an empty variable
	let articlesHTML = '';

	// Loop through the connectObjects and collect all article elements
	for (let i = 0; i < connectObjects.length; i++) {
		const item = connectObjects[i];
		if (item.text && item.connectIconPosition) {
			// Insert all the article elements into the articlesHTML variable
			articlesHTML =
				articlesHTML +
				createArticle({
					text: item.text,
					connectIconPosition: item.connectIconPosition,
				});
		}
	}

	// Main section (title, description, articlesHTML)
	// Declare the html variable and inject the string for title, description and articlesHTML
	let html = `
        <li
           class="list-none justify-items-center lg:basis-[30%] lg:ml-[20px]"
          >
            <h2 class="text-[22px] lg:text-[37px]">${title}</h2>
            <p class="my-[25px]">${describe}</p>
			<div
			    class="grid gap-6 grid-cols-3 justify-items-center lg:flex lg:items-center lg:justify-center whitespace-nowrap"
			  >
               ${articlesHTML}
			</div>
        </li>
   `;
	// return the full html string
	return html;
}

// Function for the article element
function createArticle({ text, connectIconPosition }) {
	return `
         <article class="w-[100%]">
			<i class="bg-[url('/img/home-sprite2.png')] w-[60px] h-[30px] my-0 mx-auto block bg-no-repeat"
			style="background-position: ${connectIconPosition}">
			</i>
			<p class="text-[14px] my-[12px] mx-0 lg:text-left">
			 ${text}  
			</p>
			</article>
    `;
}
