import { generateHeroMobileHiddenDataLayout } from '../layout/heroMobileHidden.js';
import { heroMobileHiddenData } from '../data/heroData.js';
import { generateHeroDesktopHiddenDataLayout } from '../layout/heroDesktopHidden.js';

// function to render dynamically the hero layout section
export function renderHeroPages() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add(
		'w-full',
		'relative',
		'h-auto',
		'pt-10',
		'flex',
		'flex-col',
		'justify-between',
		'mt-[30px]',
		'lg:mt-[50px]',
		'overflow-hidden'
	);
	// Create the first div element
	const firstDivElem = document.createElement('article');
	// Append firstDivElem to sectionElem
	sectionElem.appendChild(firstDivElem);
	// Add class to firstDivElem
	firstDivElem.classList.add(
		'px-3',
		'w-full',
		'mx-auto',
		'max-w-[720px]',
		'md:max-w-[1200px]'
	);

	// Create the sub div element
	const subDivElem = document.createElement('ul');
	// Append subDivElem to firstDivElem
	firstDivElem.appendChild(subDivElem);
	// Assign class to subDivElem
	subDivElem.classList.add(
		'flex',
		'flex-wrap',
		'-mt-0',
		'-mr-[0.75rem]',
		'ml-[0.75rem]',
		'list-none'
	);

	// Call the function
	const heroMobileHiddenContents =
		generateHeroMobileHiddenDataLayout(heroMobileHiddenData);

	const heroDesktopHiddenContents = generateHeroDesktopHiddenDataLayout();

	// Create the first inner div element
	const firstInnerDiv = document.createElement('li');
	// Append firstInnerDiv to firstDivElem
	subDivElem.appendChild(firstInnerDiv);
	// Assign class to firstInnerDiv
	firstInnerDiv.classList.add('w-full', 'md:w-1/2', 'px-2.5');
	// Set the inner html
	firstInnerDiv.innerHTML = `
	  <div
	     class="text-center px-5 w-full my-2.5 lg:my-[35px] lg:px-0"
	     >
	      <picture>
		     <source
			    media="(min-width:768px)"
			   srcset="/build/icon/desktop-tally-mobile-web.svg"
			 >
			   <source
			   srcset="/build/icon/desktop-tally-mobile-web.svg"
			 >
		      <img data-v-e2bff904=""
			    src="/build/icon/desktop-tally-mobile-web.svg"
				width="510"
				height="144"
				alt="Tally-Logo"
			  class="w-auto xl:max-w-[85%] 2xl:max-w-[unset] h-auto border-none align-middle mx-auto lg">
		    </picture>
	     </div>

		 <div
		    class="flex items-center justify-center 2xl:my-[25px] max-md:hidden my-2.5"
		   >
             ${heroMobileHiddenContents}
		  </div>

		 <div
		    class="relative mt-5 cursor-pointer text-center max-md:hidden"
		  > 
		     <button 
			    type="button"
			     class="bg-[#1a1a1a] px-[25px] py-[13px] rounded-md shadow-[1.114px_4.458px_11.145px_00000066] border-none text-inherit normal-case w-[72%] md:w-[55%] text-lg 2xl:text-[21px] text-white flex items-center my-0 mx-auto justify-between"
				  aria-label="Download Free Guide | Livekeeping"
			    > 
				  <span>
				    FREE DOWNLOAD
				    </span>
				    <img 
					     src="/build/icon/download-arrow.svg"
						   alt="download-logo"
						   class="w-auto h-auto"
					  />
			  </button>
			    <div
				    class="absolute md:left-[60px] left-0 md:-top-7 -top-11"
				  >
				     <img 
					     src="/build/icon/only-arrow-image.png"
						  alt="Arrow"
						  class="w-auto h-auto border-none"
					   />
				  </div>
		      </div>

			  <div
			       class="m-[10px] mx-auto w-[56%] max-md:hidden" 
			      >
			      <p 
				      class="mb-0 mt-0 text-[13px] text-center text-[#3f930d] bg-[#f0ffe3] px-[5px] py-[3px] font-medium" 
				    > 
					 Access your Tally data anytime from mobile 
				    </p>
					<p 
					    class="text-[13px] text-[#1a1a1a] pt-6 font-medium text-center"
					  >
					    Integrated with TallyPrime and Tally ERP9 *
					  </p>
			    </div>

			  <div 
			    class="max-md:block hidden"
			   >
			       <ul
				      class="flex justify-around items-center"
				      > 
				     ${heroDesktopHiddenContents}
				     </ul>

                   <div
				      class="px-5 py-6 mt-2.5 border border-[#ddd] 
					  rounded-[10px] bg-[#f8fff3]"   
				    > 
				      <h5 
					   class="text-center text-lg sm:text-xl mb-[8px] font-medium"  
					   > 
					    Get Started
					   </h5>
					      <div
					        class="sm:w-1/2 mx-auto" 
					       >
						     <div
							    class="relative flex">
								 <span
								    class="inline-flex items-center justify-center font-semibold h-[51px] 
									w-[51px] border-2 border-r-0 border-[#888] rounded-s text-[13px] bg-white"
								   >
								    +91
								  </span>
								  <input 
								      type="text"
									  placeholder="Enter Your Mobile Number"
									  inputmode="numeric"
									  name="mobile_number"
									  id="mobile_code"
									  maxlength="10"
									  autocomplete="off"
									  class="h-[51px] border-[#888] 
									  border-2 rounded-e p-4 text-black focus:border focus:outline-none text-[13px] placeholder:bg-gray-50 flex-grow"
								     />
							  </div>
							  <span
							      class="text-[#ff0000] text-[13px] text-center block mt-2 font-medium hidden"
							    >
							     Please enter a valid number
							   </span>
					      </div>
						  <button
						     type="button"
						     class="text-white bg-black py-3 mx-auto px-10 mb-4 table mt-6 rounded-md font-medium" 
						    >
						     FREE DOWNLOAD
						   </button>
				     </div>

					  <div
					      class="bg-[size:cover] rounded-[20px] mt-5"
					     >  
						 <h5
						   class="text-center text-[17px] sm:text-xl mb-3"
						   >
						    <strong class="font-semibold">Trusted</strong>
							 By
							  <strong class="font-semibold">50,000+</strong>
							   Businesses
						   </h5>
						    
						   <ul
						      class="flex justify-center items-center text-xs font-medium" 
						     >

						      <li
							     class="flex items-center justify-center p-1.5 border-r border-[#ddd]" 
							    >
								<img 
								    src="/build/icon/secure.png"
									 alt="secure & certified"
									  class="mr-1"
								  /> 
								   100% secure
							    </li>

								 <li 
								    class="flex items-center justify-center p-1.5"
								   >
								   	<img 
								      src="/build/icon/iso.png"
									   alt="ISO certified"
									    class="mr-1"
								    /> 
									 ISO 27701 & 27001 Certified
							    </li>
						     </ul>
					   </div>
               

			       </div>
	`;

	// Create the second inner div element
	const secondInnerDiv = document.createElement('li');
	// Append secondInnerDiv to subDivElem
	subDivElem.appendChild(secondInnerDiv);
	// Add class to secondInnerDiv
	secondInnerDiv.classList.add('relative', 'w-1/2', 'md:block', 'hidden');
	// Set the inner html
	secondInnerDiv.innerHTML = ` 
	    <div
		    class="right-0 absolute top-0 2xl:-right-[100px]"
		   >
		       <img 
			       src="/build/img/new-banner-image.svg"
				    alt="Web Dashboard"
					class="w-auto h-auto border-none xl:max-w-[90%]"
			      />
		   </div>
	`;

	// Create the second div element
	const secondDivElem = document.createElement('article');
	// Append secondDivElem to sectionElem
	sectionElem.appendChild(secondDivElem);
	// Assign class to secondDivElem
	secondDivElem.classList.add(
		'text-center',
		'bg-[#5bbc21]',
		'py-[10px]',
		'mt-[48px]',
		'xl:mt-[36px]',
		'2xl:mt-[97px]',
		'max-md:hidden'
	);

	// set the secondDivElem inner html
	secondDivElem.innerHTML = ` 
	    <div
		    class="max-w-[1200px] w-full px-[0.75rem]  mx-auto"
		   >
		      <ul
			     class="flex items-center justify-center list-none m-0 p-0"
			    >
			      <li
				      class="text-white px-[10px] border-r border-white text-sm flex items-center font-medium"
				    >
				     <img 
					     src="/build/icon/shield-check.svg"
						 alt="Security Icon | Livekeeping"
						 class="mr-[10px] w-auto h-auto border-none"
					   />
					    <span>Trusted by 50000+ Businesses</span>
				    </li>

					  <li
				      class="text-white px-[10px] border-r-0 border-white text-sm flex items-center font-medium"
				    >
				     <img 
					     src="/build/icon/iso-image-white.png"
						 alt="ISO Certification Icon | Livekeeping"
						 class="mr-[10px] w-auto h-auto border-none"
					   />
					    <span>ISO 27701 & 27001 Certified</span>
				    </li>
			    </ul>
		      </div>
	`;
}
