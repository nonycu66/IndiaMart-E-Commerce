import { topBrandsData } from '../data/topBrandsData.js';

// function to generate html for the topbrands layout
export function topBrandsLayoutHTML() {
	let topbrandsHTML = '';

	topBrandsData.forEach((topbrand) => {
		topbrandsHTML =
			topbrandsHTML +
			` 
              <ul class="flex items-center justify-center min-w-[100px] max-w-[100px] md:max-w-[200px] lg:min-w-60 lg:max-w-60 lg:min-h-40 lg:max-h-40 bg-[url('/build/img/bnr_bx_bg.webp')] m-[10px] p-[10px] overflow-hidden">
                <li class="h-auto">
				    <img
					   src="${topbrand.imgSrc}"
					   alt="${topbrand.altText}"
                       loading="lazy"
					   class="overflow-hidden h-auto min-w-full max-w-full"
					 />
					 <span
					   class=""  
					 >
					 </span>
				</li>
             </ul>
        `;
	});
	return topbrandsHTML;
}
