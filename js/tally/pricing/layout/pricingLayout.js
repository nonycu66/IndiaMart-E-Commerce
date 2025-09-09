export function pricingTemplate(pricing, index) {
	return ` 
	 
	   <li
	    class="${
				pricing.recommended
					? 'relative bg-white border border-[#5bbc21] rounded-lg text-center md:w-[42%] lg:w-[45%] w-full 2xl:p-[30px_15px_15px_15px] p-[25px_15px_15px_15px] transform md:scale-x-[1.22] md:scale-y-[1.18] shadow-[0_0_5px_2px_#00000040] -mr-[22px] md:mb-0 md:mt-0 mt-[30px] mb-5 lg:mr-0'
					: 'md:px-4 px-[15px] md:py-1.5 py-5 md:w-[45%] lg:w-1/2 w-full md:mb-0 mb-5 border md:mr-2.5 md:border-none text-center'
			}"   
	   >
	    
	   ${
				[0].includes(index)
					? `
				<div class="flex flex-col items-center">
					<h4 class="text-[#5b5b5b] font-semibold xl:text-lg mt-0 mb-[3px] leading-tight">
		             ${pricing.duration}
					</h4>
		           <span class="inline-block h-0.5 mt-[3px] w-[50px] bg-gradient-to-r from-[#737373] to-[rgba(255,255,255,1)]">
				   </span>		
				  <h3 class="text-black font-semibold my-4 2xl:my-5 md:text-lg xl:text-[22px] text-3xl leading-[1.2]">
				  ${pricing.price}
				  </h3> 	
		       </div>`
					: `<img src ="/build/icon/recommended-overlay.png" alt="Pattern" class="w-[30px] absolute -right-5 -top-5 transform rotate-6 max-w-full h-auto border-none align-middle hidden md:block"/> <span class="absolute -top-[15px] left-0 right-0 bg-[#eeffee] p-[5px_10px] border border-[#2e7b01] text-[#2e7b01] font-semibold rounded w-3/5 mx-auto text-xs" > RECOMMENDED</span> 
			 <div class="flex flex-col items-center">		
		     <h4 class="text-[#5b5b5b] text-sm font-semibold xl:text-base mt-0 mb-[3px] leading-tight">${pricing.duration}</h4> 
					<span class="inline-block h-0.5 mt-[3px] w-[50px] bg-gradient-to-r from-[#737373] to-[rgba(255,255,255,1)]">
				   </span>	
				   <h3 
				     class="text-black font-semibold my-4 2xl:my-5 md:text-lg xl:text-[22px] text-3xl leading-[1.2]" 
				     >
				    ${pricing.price}
				    </h3>
				   </div>`
			}
		   
	       ${
						pricing.oldPrice
							? `
		   <div class="flex items-center justify-center"> 
		     <p class="text-[#5b5b5b] line-through text-[13px] font-medium leading-[1.2]">${pricing.oldPrice}</p>  
			 <p class="text-xs ml-2 text-white p-[3px_5px] bg-[#0ebe35] rounded-[5px] leading-[1.2] font-medium">${pricing.discount}</p>
		   </div>`
							: ''
					}

		<ul
		   class=" ${[0].includes(index) ? 'text-left md:h-[175px] h-auto md:mt-8 mt-5 max-md:m-5' : 'text-left md:mt-4 mt-5 max-md:m-5'}"
		  >
		  ${pricing.features
				.map(
					(feature) => `
		  
		   <li
		     class="flex items-center text-black mb-3 md:mb-1.5 xl:mb-2 md:text-[11px] xl:text-xs max-md:text-base" 
		    >
			 <svg data-v-e2bff904="" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="11" height="11" x="0" y="0" viewBox="0 0 512 512" xml:space="preserve" class="mr-2 flex-[0_0_16px] w-4 h-4 md:w-2 md:h-2"><g><path d="M444.176 0 183.305 242.012 72.98 124.277 0 192.664l178.234 190.207L512 73.52zm0 0" fill="#0ebe35" opacity="1" data-original="#000000" stroke-width="10" stroke="#0ebe35" class=""></path></g></svg>
			  <span>${feature}</span>
		     </li>
		  `
				)
				.join('')}
		 </ul>

		 ${
				[0].includes(index)
					? `<div>
		      <a
			     href="${pricing.buttonUrl}"
				 target="_blank"
				 rel="noopener noreferer"
				 class="bg-transparent text-[#6c756e] no-underline" 
			    >
				   <button
				       class="text-black border border-[#1a1a1a] px-5 py-1.5 font-semibold text-[13px] lg:text-base rounded md:w-[90%] lg:w-4/5 w-full bg-transparent uppercase" 
				      >
					   buy now
				      </button>
			    </a>
		  </div>`
					: `<div
		   class="-mt-1"			
		 >
					<a
					   href="${pricing.buttonUrl}"
					   target="_blank"
					   rel="noopener noreferer"
					   class="bg-transparent text-[#6c756e] no-underline"
					 >
                        <button
						   class="text-white border border-[#00a228] bg-[#00a228] px-5 py-1.5 font-semibold text-[13px] lg:text-sm rounded lg:w-[90%] w-full my-2.5 uppercase" 
						  > 
						    buy now
						  </button>
				     	</a>
					  </div>`
			}


	   </li>
	 `;
}
