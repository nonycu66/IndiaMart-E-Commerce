import { categoriesData } from '../data/categoriesData.js';

//  Function to generate categories like layout contents dynamically
export function generateCategoriesLikeLayoutHTML() {
	let categoriesLikeHTML = '';

	// Loop through the categoriesData array
	categoriesData.forEach((category, index) => {
		categoriesLikeHTML =
			categoriesLikeHTML +
			`  	  <li class="relative pb-[50px] border border-[#dfdfdf] rounded-[12px] text-center custom-box-shadow">
		           <a
                     href="#"
                     class="block max-w-[178px] min-w-[100px] max-h-[170px] min-h-[170px] mx-auto my-0 relative cursor-pointer">
                      <img
                      src="${category.image.src}" 
                       alt="${category.image.alt}" 
                       class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-auto max-w-full max-h-full"
                         loading="lazy"
                       />
                   </a>
                   <a 
                     href="#" 
                     class="w-[86%] h-[42px] block my-[15px] mx-auto text-[#333] text-[18px]">
                      ${category.name}
                     </a>
					   <button 
					    class="button font-medium text-[17px] cursor-pointer rounded-[3px] border border-solid border-[#2e3192] py-[8px] px-[5px] bg-[#2e3192] text-[#fff] hover:bg-white hover:text-[#2e3192] w-[86%] my-0 mx-auto"
					     data-index="${index}"
                           data-modal-id="category_${index}"
                         >
					      ${category.button}
					     </button>
				    	</li> 
            `;
	});
	return categoriesLikeHTML;
}
