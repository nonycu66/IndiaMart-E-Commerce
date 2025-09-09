import { categoriesData } from '../data/categoriesData.js';

// function to generate html for the categories layout
export function categoriesLayoutHTML() {
	let categoriesHTML = '';

	categoriesData.forEach((category) => {
		categoriesHTML =
			categoriesHTML +
			`
         <li
              class="lg:max-w-[100px] lg:min-w-[100px] text-center list-none"
           >
              <a
			    href="#"
                 class="text-[#454647]"
              >
                  <span
                      class="w-[60px] h-[60px] rounded-[50%] shadow-[0px_1px_4px_rgba(0,0,0,0.15)] flex  items-center justify-center my-0  mx-auto"
                  >
                      <picture
					      class="w-[60px] h-[60px] flex items-center justify-center">
					     <source
						   media="(min-width:650px)"
						   srcset="${category.imgSrc}">
						 <img
						   src="${category.imgSrc}" 
						   alt="${category.altText}" 
                           loading="lazy"
						  />
					  </picture>
                  </span>
                  <span
				     class="text-base mt-[10px] block font-medium" 
				  >
				    ${category.name}
				  </span>
              </a>
           </li>
        `;
	});
	return categoriesHTML;
}
