// function to generate items for the ladies wear center top dynamically
export function generateLadiesWearCenterTop(product) {
	const card = document.createElement('ul');
	card.classList.add(
		'max-w-[213px]',
		'md:max-w-[256px]',
		'lg:min-w-[475px]',
		'lg:max-w-[475px]',
		'shadow-none',
		'lg:mr-7',
		'lg:mb-6',
		'rounded-[10px]',
		'border-t',
		'border-solid',
		'border-[#f7f4f4]'
	);
	card.innerHTML = `
           
          <a href="#" class="df aic jcc ofh max-w-[120px] min-w-[120px] min-h-[150px] max-h-[150px] th3 lg:min-w-[475px] lg:max-w-[475px] lg:min-h-[475px] lg:max-h-[475px] rounded-lg border border-solid border-[#eaeaea] flex items-center justify-center overflow-hidden my-0 mx-auto md:max-w-[180px] md:max-h-[240px]">
           <img
             src="${product.imgSrc}"
             alt="${product.altText}"
			 class="max-w-full max-h-full"
             loading="lazy"
           />
         </a>
         <div class="catg_card_txt">
           <a href="#" class="block pt-[10px] text-[#111]">
             <p class="letter-spacing h-12 font-medium text-[15px] line-clamp-2 text-ellipsis">
                 ${product.productName}
             </p>
             <p class="mt-[5px] font-normal text-[13px] text-[#454647] line-clamp-2 text-ellipsis">
               <span class="db">${product.storeName}</span>
             </p>
           </a>
           <span class="py-[15px] px-[10px]">
             <a href="#" class="flex items-center text-[#111]">
               <p class="letter-spacing-2 text-lg font-bold text-[#2e3192]">${product.price}</p>
             </a>
           </span>
         </div>
           `;
	return card;
}
