import { productsData } from '../data/productLikeData.js';

//  Function to generate products like layout contents dynamically
export function generateProductLikeLayoutHTML() {
	let productsLikeHTML = '';

	// Loop through the productsData array
	productsData.forEach((product, index) => {
		productsLikeHTML =
			productsLikeHTML +
			`
             	   <li class="relative pb-[50px] border-[1px] border-[#dfdfdf] rounded-[12px] text-center custom-box-shadow"> 
	             	  <a href="#" class="block max-w-[150px] min-w-[100px] h-[150px]  mx-auto my-0 relative cursor-pointer">
				      <img
					  src="${product.image.src}"
					   alt="${product.image.alt}" 
                       loading="lazy"
					   class="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  h-auto max-w-full max-h-full" 
					   />
							</a>
							<a class="my-[15px] mx-0  text-left py-0 px-[12px] block w-[86%] text-[16px] lg:text-[15px] font-bold cursor-pointer">${product.title}</a>
							<a class="font-medium text-[16px] lg:text-[13px] block my-[15px] mx-[0] text-left py-0 px-[12px] cursor-pointer hover:underline">${product.company}</a>
							<span class="text-[15px] lg:text-[13px] text-[#767676] block text-left py-0 px-[12px] my-[15px]">${product.location}</span>
							<span class="text-[15px] h-[40px] text-[#767676] block text-left py-0 px-[12px] cursor-pointer">
								<span class="text-[18px] font-[700] text-[#000]">${product.price.amount}</span>
								<span class="text-[#767676] font-[400]">${product.price.quantity}</span> 
							</span>
								<span class="text-[15px] lg:text-sm h-[45px] block text-center py-0 px-[12px] text-wrap ">
								<span class="ml-[14%] text-[#d1c8c8] hidden">
									Call
									<span class="font-bold">07942554404</span>
								</span>
								<span class="py-[2px] px-[5px] bg-[#f3f3f3] text-[#2e3192] rounded-[3px] absolute my-0 mx-auto left-0 right-0 bottom-[63px] w-[86%] cursor-pointer text-[14px] lg:text-base font-bold before:content-[''] before:bg-[url('/build/icon/telephone.svg')] before:relative before:inline-block before:bg-no-repeat before:ml-[-6%] before:h-[22px] before:w-[22px] before:bg-[position:6px_2px] before:min-w-[22px] before:align-middle hover:underline">${product.phonetext}</span>  
								</span>
								<button
									type="button"
									class="button rounded-[3px] py-[8px] px-[5px] my-0 mx-auto left-0 right-0 cursor-pointer text-[14px] lg:text-base font-[600] w-[86%] border-[1px] bg-[#2e3192] text-white border-[#2e3192] absolute bottom-[15px]  text-wrap hover:bg-white hover:text-[#2e3192]"
									data-index="${index}" 
									data-modal-id="product_${index}">
									${product.button}
									</button>
					           </li>
        `;
	});
	return productsLikeHTML;
}
