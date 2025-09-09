// function to generate items for the ladies wear top left dynamically
export function generateLadiesWearTopLeft(product) {
	const card = document.createElement('ul');
	card.className = 'md:max-w-[256px] lg:mr-7 lg:mb-6';
	card.innerHTML = ` 
            <li>
               <div class="my-0 mx-auto shadow-none lg:min-w-[225px] lg:max-w-[225px] rounded-[10px] border-t border-solid border-[#f7f4f4]">
               <a href="#" class="flex justify-center overflow-hidden border border-solid border-[#eaeaea] rounded-lg lg:min-w-[225px] lg:max-w-[225px] lg:min-h-[225px] lg:max-h-[225px] max-w-[120px] min-w-[120px] min-h-[160px] max-h-[160px] my-0 mx-auto md:max-w-[180px] md:max-h-[240px]">
                <img
                    src="${product.imgSrc}"
                    alt="${product.altText}"
                    class="max-w-full max-h-full lg:max-h-[225px]"
                    loading="lazy"
                />
                </a>
                <div>
                <a href="#" class="block pt-[10px] text-[#111]">
                    <p class="letter-spacing h-12 font-medium text-[15px] line-clamp-2 text-ellipsis">
                        ${product.productName}
                    </p>
                    <p class="mt-[5px] font-normal text-[13px] text-[#454647] line-clamp-2 text-ellipsis">
                        ${product.storeName}
                    </p>
                </a>
                <span class="py-[15px] px-[10px]">
                   <a href="#" class="flex items-center text-[#111]">
                    <p class="letter-spacing-2 text-lg font-bold text-[#2e3192]">${product.price}</p>
                    <del class="text-base letter-spacing-2 ml-[10px] font-medium">${product.discountPrice}</del>
                    <span class="text-base text-[#f7a813] font-semibold ml-[10px]">${product.discountPercent}</span>
                    </a>
                    </span>
                </div>
                </div>
            </li>
        `;
	return card;
}
