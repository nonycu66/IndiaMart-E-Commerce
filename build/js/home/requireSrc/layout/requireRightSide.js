// Function to generate require right side html dynamically
function generateRequireRightSide({
	title,
	productPlaceHolder,
	emailPlaceHolder,
	countryText,
	country,
	caretdownicon,
	namePlaceHolder,
	submitBtn,
}) {
	return ` 
            <h4 class="text-center lg:text-left text-[20px] font-bold">${title}</h4> 
               <div class="relative">
                     <form 
                          name="to401_bl_form"
                          id="to401_bl_form" 
                           class="relative">

                           <div 
                             class="relative">
                             <input  
                             type="text" 
                             class="my-[15px] w-[100%] lg:w-[85%] h-[34px] align-top pl-[8px] border border-solid border-[#c9c6c6] rounded-sm bg-white text-base lg:text-[15px] outline-none"  
                             autocomplete="off"
                              placeholder="${productPlaceHolder}"
                              id="to401prodtitle"
                            />
                         </div>

                         <div class="min-h-[38px]">
                             <div class="relative  before:absolute before:block before:content-[''] before:bg-[url('/build/icon/messsage-box.png')] before:left-[5px] before:top-[10px] before:w-[28px] before:h-[20px] before:bg-no-repeat"></div>
                             <input 
                              type="text"  
                              class="text-base lg:text-[15px] w-[100%] lg:w-[469px] pl-[40px] rounded-[2px] h-[34px] align-top border border-solid border-[#c9c6c6] bg-white outline-none"
                              name="login_field"
                              id="input"
                              placeholder="${emailPlaceHolder}"/>
                         </div>

                          <div class="flex items-center mt-[5px] text-[#698181] text-[12px]">

                              <i class="w-[14px] h-[14px] bg-[url('/build/icon/globe.png')] mr-[5px] bg-no-repeat flex-shrink-0"></i>

                                <div 
                                   class="flex-shrink-0 text-[14px] lg:text-xs"
                                 >
                                 ${countryText}
                              </div>

                               <div class="pr-[15px] ml-[5px] font-bold cursor-pointer underline relative">
                                 ${country}
                               </div> 
                                       <a>
                                         <img  
                                         src="${caretdownicon}"
                                         alt=""
                                          class=" w-[11px] h-[11px]"
                                         />
                                       </a>
                                  </div>
                            <div class="mt-[10px] mb-[15px]">
                              <input 
                              type="text"
                              placeholder="${namePlaceHolder}"
                              class="h-[34px] w-full lg:w-[30%] lg:text-[15px] align-top pl-[8px] border border-solid border-[#c9c6c6] rounded-[2px] bg-white outline-none"
                              />
                            </div>
                        </form>
                        <div class="flex justify-center">
                             <button 
                             type="submit"
                              class="lg:py-[10px] lg:px-5 py-[20px] lg:text-[22px] lg:font-normal px-[10px] rounded-[4px] text-white bg-[#00a699] cursor-pointer mt-[5px] font-bold "
                             >
                               ${submitBtn}
                             </button>
                        </div>
                   </div>
                
    `;
}

export function renderRequireRightSide(dataObj) {
	// Render the right side
	const rightSideContents = generateRequireRightSide(dataObj);

	return ` 
        <div
            class="lg:pt-[35px] lg:pl-[90px] basis-[60%]"
         >
          ${rightSideContents}
          </div>
    `;
}
