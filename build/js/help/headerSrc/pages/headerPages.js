import { generateNavLinksLayout } from '../headerComponents/navLinksLayout.js';
import { helpHandleDropdown } from '../../../control/headerControl.js';

// Function to render the header html elements dynamically
export function renderHeaderHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('header_container');

	// Create the header element
	const headerElem = document.createElement('header');
	// Append the header to the container
	container.appendChild(headerElem);
	// Add class to header
	headerElem.classList.add('pb-[55px]', 'relative', 'text-white', 'w-full');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append the section to the header
	headerElem.appendChild(sectionElem);
	// Add class to section
	sectionElem.classList.add(
		'flex',
		'items-center',
		'pr-[2rem]',
		'pl-[2rem]',
		'bg-[#2e3192]',
		'w-full',
		'z-50',
		'h-[3.5rem]',
		'fixed'
	);

	// Create the Logo div
	const logoDiv = document.createElement('div');
	// Append the logoDiv to the section
	sectionElem.appendChild(logoDiv);
	// Create the logo  anchor element
	const logoAnchor = document.createElement('a');
	logoAnchor.href = 'https://www.indiamart.com/';
	// Append the logoAnchor to the logoDiv
	logoDiv.appendChild(logoAnchor);
	// Add class to logoAnchor
	logoAnchor.classList.add(
		'h-[2.5rem]',
		'w-[9.375rem]',
		'bg-home-logo',
		'block',
		'bg-no-repeat',
		'indent-[-9999px]',
		'bg-[size:235%]',
		'mr-[30px]'
	);

	// Create the nav element
	const navElem = document.createElement('nav');
	// Append navElem to sectionElem
	sectionElem.appendChild(navElem);
	// Add class to navElem
	navElem.classList.add('flex', 'items-center', 'justify-between', 'w-full');
	// Set the navElem inner html
	navElem.innerHTML = ` 
	<div
	    class="flex items-center h-[36px] mt-2 w-full"
	 >
	  <form
	     class="w-full h-full lg:w-[545px] text-xs"
	  >
	    <div
		  class="w-auto whitespace-nowrap relative"
		>
		  <label class="absolute w-[1px] h-[1px]
		  -m-[1px] inline-block font-bold overflow-hidden">
            Search For
		  </label>
		    <input
		     type="text"
			 placeholder="Enter question or keyword. Example: Buylead"
			  class="text-[13px] text-[#020202] border border-solid border-[#ebebeb] absolute min-h-[35px] lg:min-w-[82%] min-w-[80%] pl-[13px] pr-[13px] rounded-tl-[3px] rounded-bl-[3px] outline-none grow"
		    /> 
  
			  <div
			     class="relative lg:right-[107px] lg:-left-[64%] lg:top-[7px] -left-8"
			    >
				<img
				   src="/build/img/download.png"
				    alt="microphone"
					class="absolute lg:left-[139%] w-[30px] lg:-mt-1"
				  />
			   </div>

			  <button
			      class="bg-[#19a598] px-[3px] py-[3px] lg:px-[9px] lg:py-[9px] rounded-tr-[3px]
				   rounded-br-[3px] absolute top-0 right-0 md:right-10 lg:right-[2px] text-right md:text-center h-[35px] z-50 
				   lg:w-[18%] w-[20%]
				   text-sm text-[#fff]
				  "
			    >
				     <span id="searchhelp" class="flex relative lg:-top-[2px]   lg:-left-[8px]">
                          <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon fill-white w-6 h-6 relative left-1 -top-[2px]" style="pointer-events: none; display: block ">
                            <g class="style-scope yt-icon">
                              <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" class="style-scope yt-icon"></path>
                            </g>
                          </svg>
                          <span id="help"
						     class="text-[13px] md:ml-3" 
						    >
						    Help
						    </span>
                        </span>
			    </button>
		</div>
	  </form>
	  
	   <a
		href='#'
		class='inline-block h-9 lg:w-[140px] w-[18%] text-center
			 text-[#2e3192] text-[10px] lg:text-sm md:font-extrabold lg:font-semibold rounded-sm bg-white align-middle lg:px-[9px]
			 lg:py-[9px] px-[3px] py-[3px]'
	>
		Get Best Price
	</a>
	</div>
	`;

	// Create the Mobile Navigation div
	const mobileNavDiv = document.createElement('div');
	// Append the mobileNavDiv to the section
	navElem.appendChild(mobileNavDiv);
	// Add class to mobileNavdiv
	mobileNavDiv.classList.add(
		'cursor-pointer',
		'flex',
		'items-center',
		'justify-center',
		'w-[45px]',
		'h-[45px]',
		'bg-auto',
		'cursor-pointer'
	);
	// Render the Mobile Navigation inner html
	mobileNavDiv.innerHTML = `
    
        	<button
				id="hamburger-btn"
				class="lg:hidden cursor-pointer"
			>
				<img
					src="/build/icon/menu-burger.svg"
					alt="menu-burger"
					class="w-7 custom-img-filter"
				/>
			</button>

            <button
				id="close-btn"
				class="hidden cursor-pointer"
			>
				<img
					src="/build/icon/cross.svg"
					alt="cross"
					class="hidden w-7 h-7 custom-img-filter"
				/>
			</button>
    `;

	// Call the generateNavLinks function and insert it into the variable
	const navLinksContents = generateNavLinksLayout();
	// Create the ul element for the links
	const navLinksContainer = document.createElement('ul');
	// Assign class to ul element
	navLinksContainer.classList.add(
		'hidden',
		'lg:flex',
		'lg:justify-end',
		'lg:mt-2'
	);
	// Append the ul element to navElem
	navElem.appendChild(navLinksContainer);
	// Set the inner html of navLinksCont to navLinksContents
	navLinksContainer.innerHTML = ` 
	     ${navLinksContents}
	`;

	helpHandleDropdown();
}
