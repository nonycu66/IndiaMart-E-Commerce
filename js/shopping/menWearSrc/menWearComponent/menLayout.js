import { mensWearData } from '../data/menData.js';

//  Function to generate the mens wear products layout contents dynamically
export function generateMensLayoutHTML() {
	let mensWearHTML = '';

	mensWearData.forEach((product, index) => {
		const isLastItem = index === mensWearData.length - 1;
		const isFourthItem = index === 3;

		// Mobile screen: Span full width (grid-cols-2)
		// Medium screen: Place the 4th and 5th items side by side in row 2
		let gridSpanClass = '';
		if (isLastItem) {
			gridSpanClass =
				'col-span-2 col-start-1 col-end-3 md:col-span-2 md:col-start-3 md:row-start-2';
		} else if (isFourthItem) {
			gridSpanClass = 'md:col-span-2 md:col-start-1 md:row-start-2';
		}

		mensWearHTML =
			mensWearHTML +
			` 
                   <div class="overflow-hidden lg:min-w-[225px] lg:max-w-[225px] rounded-[10px] border-t border-solid border-[#f7f4f4] relative transition-all duration-300 ease-out pb-[30px] shadow-mens-wear-box-shadow ${gridSpanClass}">
                     <a href="/products/?id=${product.id}" 
                     class="flex items-center justify-center w-[110px] h-[110px] lg:min-w-[225px] lg:max-w-[225px] lg:min-h-[225px] lg:max-h-[225px] my-0 mx-auto">
                     <img src="${product.imgSrc}" 
                       alt="${product.altText}"
                         class="max-w-[110px] max-h-[110px] lg:max-w-full lg:max-h-full"
                         loading="lazy"
                       />
                </a>
                <div>
                    <a href="/products/?id=${product.id}" 
                        class="block text-[#111] py-[24px] px-[10px]">
                        <p class="letter-spacing lg:h-12 lg:text-ellipsis lg:line-clamp-2 text-center lg:text-start featured-line-height font-medium text-[15px]">${product.productName}</p>
                        <p class="mt-[5px] font-normal text-[13px] lg:line-clamp-1 text-[#454647] text-center lg:text-start">
                            <span class="block">${product.storeName}</span>
                        </p>
                    </a>
                </div>
                <div class="absolute px-[10px] pb-[15px] block left-0 right-0 bottom-[1px]">
                    <span>
                        <a href="/products/?id=${product.id}" class="flex items-center justify-center lg:justify-start">
                            <p class="font-bold text-[20px] text-[#2e3192] letter-spacing-2" onclick="GATrack('CTA_Clicked',
                            'Featured_Product_Homepage_PriceClicked',
                              '${product.store}', '');">
                                ${product.price}</p>
                            <del class=" text-base ml-[10px] letter-spacing-2 font-medium">${product.discountPrice}</del>
                            <span class="ml10 fs16 fw6 dscnt text-base text-[#f7a813] font-semibold ml-[10px]">${product.discountPercent}</span>
                        </a>
                    </span>
                </div>  
               </div> 
            `;
	});
	return mensWearHTML;
}
