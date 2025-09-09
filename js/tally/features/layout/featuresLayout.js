// import { featuresData } from '../data/featuresData.js';

// export function renderFeaturesLayout() {
// 	const container = document.getElementById('features-container');
// 	container.innerHTML = featuresData
// 		.map(
// 			(feature) => `

//           <div
//             id="${feature.id}"
//               class="md:flex items-center mx-auto py-10 md:space-x-5"
//               >

//           <!-- Left Image -->
//              <div
//                  class="md:w-1/2 text-center"
//                >
//                  <img
//                      src="${feature.img}"
//                        alt="${feature.alt}"
//                        class="w-auto h-auto max-w-full border-0 align-middle"
//                   />
//                </div>

//             <!-- Right Content -->
//                <div
//                    class="md:w-1/2"
//                  >
//                     <h2
//                         class="font-semibold max-md:text-xl md:text-[32px] leading-[42px] mb-5 text-black"
//                       >
//                        ${feature.title}
//                       </h2>

//                       <p
//                          class="font-normal md:text-lg leading-8 text-black mt-0 mb-4"
//                         >
//                         ${feature.description}
//                       </p>

//                    <!-- Input + Button -->

//                     <div
//                        class="inline-flex justify-start items-center bg-white rounded-md border border-gray-800 relative"
//                        >
//                        <span
//                           class="text-gray-800 text-sm px-3 py-2 font-semibold border-r border-gray-800 bg-gray-100 rounded-l-md"
//                         >
//                            +91
//                         </span>
//                        <input
//                           type="text"
//                           placeholder="Enter Mobile Number"
//                           autocomplete="off"
//                            inputmode="numeric"
//                            maxlength="10"
//                            class="text-gray-600 text-sm px-2 w-full sm:w-44 outline-none"
//                           />
//                        <button
//                            class="bg-black px-4 py-2 rounded-r-md text-white text-xs sm:text-sm font-semibold flex items-center max-md:min-h-9 max-md:min-w-[100px]"
//                          >
//                            Know More
//                          </button>
//                      </div>
//                   </div>
//               </div>
//         `
// 		)
// 		.join(''); // Join array into string
// }

export function featuresTemplate(feature, index) {
	return ` 
   
         <li
            id="${feature.id}"
              class="md:flex items-center mx-auto py-10 md:space-x-5
              ${[1, 3, 5].includes(index) ? 'lg:flex-row-reverse' : ''}"
              >
            
          <!-- Left Image -->
             <div
                 class="md:w-1/2 text-center"                 
               >
                 <img 
                     src="${feature.img}"
                       alt="${feature.alt}"
                       class="w-auto h-auto max-w-full border-0 align-middle"
                  />
               </div>    

            <!-- Right Content -->
               <div
                   class="md:w-1/2"
                 > 
                    <h2
                        class="font-semibold max-md:text-xl md:text-[32px] leading-[42px] mb-5 text-black"
                      > 
                       ${feature.title}
                      </h2>

                      <p
                         class="font-normal md:text-lg leading-8 text-black mt-0 mb-4"
                        > 
                        ${feature.description}
                      </p>

                   <!-- Input + Button -->

                  <div> 
                    <div
                       class="inline-flex justify-start items-center bg-white rounded-md border border-gray-800 relative"
                       > 
                       <span
                          class="text-gray-800 text-sm px-3 py-2 font-semibold border-r border-gray-800 bg-gray-100 rounded-l-md"
                        > 
                           +91
                        </span>
                       <input 
                          type="text"
                          placeholder="Enter Mobile Number"
                          autocomplete="off"
                           inputmode="numeric"
                           maxlength="10"
                           class="text-gray-600 text-sm px-2 w-full sm:w-44 outline-none"
                          />
                       <button
                           class="bg-black px-4 py-2 rounded-r-md text-white text-xs sm:text-sm font-semibold flex items-center max-md:min-h-9 max-md:min-w-[100px]"
                         >
                           Know More
                         </button>
                     </div>
                      <p 
                       class="mt-0 text-red-500 font-semibold absolute text-[13px] hidden">
                        Please enter a valid number
                        </p>
                    </div> 


                  </div>
              </li>
   `;
}
