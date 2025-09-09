import { featuresDropdownData } from '../data/headerData.js';

// Function to generate the features dropdown html dynamically
function generateFeaturesDropdownData() {
	// Define an empty variable
	let featuresDropdownHTML = '';

	// Loop through the featuresDropdownData array
	featuresDropdownData.forEach((data) => {
		featuresDropdownHTML =
			featuresDropdownHTML +
			`
         <li
           class="group"
            >
          <button
             type="button"
                class="text-left py-2 block cursor-pointer
                group-hover:text-[#5bbc21]"
              >
                ${data.text}
            </button>
        </li>
         `;
	});
	// Return the featuresdropdownHTML variable
	return featuresDropdownHTML;
}

// function to render the featuresDropdownData function
export function renderFeaturesDropdownData() {
	// Call the featuresDropdownData function and assign it to a variable
	const featuresDropdownContents = generateFeaturesDropdownData();
	return ` 
    
       <ul
         class="md:min-w-60 py-2 px-4"
         >
           ${featuresDropdownContents}
        </ul>
      
     `;
}
