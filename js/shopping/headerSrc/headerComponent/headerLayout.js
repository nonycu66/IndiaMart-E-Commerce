export function headerHTML() {
	return ` 
       <nav class="px-2 flex flex-col justify-center  lg:flex-row lg:justify-normal bg-white">
		     <div class="mb-3 lg:mb-0">
			     <a
				   href="shopping.html"
				   class="text-[23px] font-medium text-[#7c7c7c] no-underline flex items-center">
				     <img
					   src="/build/img/im_logo.jpg"
					   alt="logo"
                       loading="lazy"
					 />
					  <span class="pt-[10px] pl-[4px]">Shopping</span>
				 </a>
			   </div>

			    <div class="flex items-center md:ml-[5%] md:flex-1 lg:flex-1">
           	         <div class="h-full flex  w-full relative bg-white border border-solid border-[rgba(0,0,0,0.19)] rounded-md py-[15px] px-[19px]">
			           <form
				         class="flex w-full items-center"
					      >
				         <span class="h-[37px] w-[55px] absolute left-0 rounded-t-md rounded-l-md border-r border-solid border-[#dddbdb] font-bold text-[15px] flex justify-center items-center">Shop</span>
						 <input
						    type="text"
						    name="searchString"
							 id="search_string1"
							 placeholder="What are you looking for?"
							 autocomplete="off"
							 class="w-full grow  outline-none pl-[55px] pr-[120px] text-[#333] text-base font-medium"
							 />
							 <button
							    type="submit"
							    class="border-none min-w-[110px] max-w-[110px] bg-[#2a6462] absolute top-0 bottom-0 rounded-r-md text-white  right-[-1px] cursor-pointer flex justify-center items-center px-5" 
								id="btnSearch">
								   <i class="bg-search-icon w-5 md:w-[18px] lg:w-[18px] h-[19px] md:h-[18px] lg:h-[18px] absolute bg-[position:-39px_-484px] left-[15px]"></i>
								   <span class="text-base font-semibold md:font-normal lg:font-normal indent-6">Search</span>
							   </button>
				         </form>
			            </div>

						 <div class="ml-[10px] text-nowrap shrink">
					        <span class="rounded-[4px] py-[17px] px-[26px] bg-[#2e3192] text-white cursor-pointer block">
							   <span class="text-base font-semibold md:font-normal lg:font-normal">Bulk Requirement</span>
							</span>
					       </div>

						</div> 
		            </nav>
    `;
}
