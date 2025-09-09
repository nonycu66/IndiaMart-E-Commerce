//  Function to generate the industrial chemicals contents
export function generateChemicalsLayoutHTML(product, index, totalLength) {
	const isLastItem = index === totalLength - 1;
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

	// Create the div element
	const card = document.createElement('div');
	// Assign it a class
	card.classList.add(
		'overflow-hidden',
		'lg:min-w-[225px]',
		'lg:max-w-[225px]',
		'rounded-[10px]',
		'shadow-featured-product-box-shadow',
		'border-t',
		'border-solid',
		'border-[#f7f4f4]',
		'relative',
		'transition-all',
		'duration-300',
		'ease-out',
		'pb-[30px]'
	);

	if (gridSpanClass) {
		gridSpanClass.split(' ').forEach((cls) => {
			card.classList.add(cls);
		});
	}

	card.innerHTML = ` 
    
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
                        class="block text-[#111] py-[15px] px-[10px]">
                        <p class="letter-spacing h-9 lg:text-ellipsis lg:line-clamp-2 text-center lg:text-start font-medium text-[15px]">${product.productName}</p>
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
    `;
	return card;
}
