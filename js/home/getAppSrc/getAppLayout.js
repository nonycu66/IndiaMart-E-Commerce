import { getAppData } from './getAppData.js';

// function to generate the getApp layout html contents
export function generateGetAppLayoutHTML() {
	// Create the an empty variable
	let getAppHTML = '';

	// Loop through the getAppData array
	getAppData.forEach((data) => {
		getAppHTML =
			getAppHTML +
			` 
                      <div class="my-[50px] mx-[50px] md:mx-[30px] w-[250px] lg:w-[300px]">
                         <img
                           src="${data.image}"
                            class="h-auto w-full"
                           />
                        </div>
                
                    <div class="mx-[50px] my-[50px] md:mx-[30px]">
                        <h3
                           class="text-xl  lg:text-[28px] text-[#333]">
                             <b> ${data.heading}</b>
                           </h3>
						   <p class="my-[10px]">${data.paragraph}</p>
						   <div class="my-10 flex items-center">
						        <label for="" class="inline-block border border-solid border-[#c4c4c4] rounded-l-[4px] py-[8px] px-[10px] text-[#333333] text-sm lg:text-base">${data.label}</label>  
							      <input 
							        type="text" 
								    placeholder="Enter Mobile Number" 
							        class="outline-none flex-1 flex-shrink border border-solid border-[#c4c4c4] border-l-0 rounded-r-[4px] py-[8px] px-[10px] text-sm lg:text-base"
								   />
                               <button 
							       type="submit" 
								   id="sendBtn"
								    class="whitespace-nowrap text-nowrap text-white py-[8px] px-3 rounded bg-[#19a598] cursor-pointer text-sm lg:text-base border-none ml-1 hover:bg-white hover:text-[#2e3192]"  
								   >
							      ${data.link}  
							   </button>							
						   </div>
						     <p class="my-[10px]">${data.download}</p>
							 <div class="flex items-center justify-center md:flex-col md:gap-y-3 lg:flex-row lg:gap-0">
							    <a 
							      href="#">
								   <i class="block bg-[url('/build/img/home-sprite2.png')] bg-[position:-143px_-153px] w-[228px] h-[65px] bg-no-repeat scale-[0.7]"></i>
								  </a>
							    <a href="#">
								   <i class="block bg-[url('/build/img/home-sprite2.png')] bg-[position:-142px_-238px] w-[228px] h-[65px] bg-no-repeat scale-[0.8]"></i>  
							     </a>
							 </div>
                       </div>
        `;
	});
	return getAppHTML;
}
