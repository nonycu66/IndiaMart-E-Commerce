import { generateNavLinksLayout } from '../headerComponents/navLinksLayout.js';
import { sellHandleDropdown } from '../../../control/headerControl.js';
import { displayLeads } from '../control/sellControl.js';

// Function to render the header html elements dynamically
export function renderHeaderHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('header_container');

	// Create the header element
	const header = document.createElement('header');
	// Append the header to the container
	container.appendChild(header);
	// Add class to header
	header.classList.add('pb-[55px]', 'relative', 'text-white');
	// Create the section element
	const section = document.createElement('section');
	// Append the section to the header
	header.appendChild(section);
	// Add class to section
	section.classList.add(
		'flex',
		'justify-between',
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
	section.appendChild(logoDiv);
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
		'bg-[size:235%]'
		// 'mr-[30px]'
	);

	// Create the nav element
	const navElem = document.createElement('nav');
	// Append navElem to section
	section.appendChild(navElem);
	// Add class to navElem
	navElem.classList.add('flex', 'items-center', 'justify-between', 'w-full');

	const navContents = document.createElement('div');
	navElem.appendChild(navContents);
	navContents.classList.add(
		'flex',
		'items-center',
		'w-full',
		'h-[36px]',
		'mt-2',
		'lg:w-[570px]',
		'relative',
		'rounded-tr-[5px]',
		'rounded-br-[5px]',
		'overflow-hidden'
	);

	navContents.innerHTML = ` 
	
	   <div
	      id="leads_container"
	     class="cursor-pointer text-[#333] text-sm pt-[7px] pr-[7px]
		 pl-[10px] w-[180px] border border-solid border-[#a7a7a7] rounded-tl-[5px] rounded-bl-[5px] h-[35px] relative bg-white ml-[20px]"
	    >
	       <span 
	     class="text-[#333] text-sm"  
	    >
	      Buy Leads
	      </span>
		   <i
			   class="absolute border-r-2 border-b-2 border-solid
			   border-[#00a699] bottom-[14px] right-[9px] px-[3px] py-[3px]
			   rotate-[45deg]"
			   id="down_icon"
			 >
			 </i>
			<div
			    class="absolute top-10 right-0 left-0 bg-white rounded-[4px] shadow-buy-leads-shadow z-[999999] hidden"
				id="leads_div"
			   >
			   <div
			     class="p-[10px] text-[#757575] text-xs mt-[10px] shadow-buy-leads-shadow-dropdown"
			      >
			      Products
			   </div>
			     <div
			     class="p-[10px] text-[#757575] text-xs mt-[10px] shadow-buy-leads-shadow-dropdown"
			      >
			       Company
			   </div>
			     <div
			     class="p-[10px] text-[#757575] text-xs mt-[10px] shadow-buy-leads-shadow-dropdown"
			      >
			       Buy Leads
			   </div>
			    <div
			     class="p-[10px] text-[#757575] text-xs mt-[10px] shadow-buy-leads-shadow-dropdown"
			      >
			       Tenders
			   </div>
			</div>
	    </div>

		   <form
		     class="-ml-[1px] w-full relative rounded-tr-[5px] rounded-br-[5px] "
		     name="searform"
			 method="get"
			 onsubmit="return validator(document.searform)"
			 autocomplete="off"
			 action="//seller.indiamart.com/bltxn/buyersearch/?">
                 <input
				    placeholder="Enter product / service to search"
					id="search_string"
					name="ss"
					role="textbox"
					autocomplete="off"
					aria-autocomplete="list"
					aria-haspopup="true"
					class="w-full py-0 px-[10px]
					h-[35px] text-sm outline-none grow"
				 />
				 <input
				   type="submit"
				   id="btnSearch"
				   value="Search"
				    data-click="search_button|header"
					 class="w-[80px] min-w-[80px] lg:w-[100px] lg:min-w-[100px] absolute h-[35px] text-[#fff]
					 bg-[#00a699] right-0 lg:right-0 pl-[25px] cursor-pointer text-xs lg:text-base font-semibold rounded-tr-[5px] rounded-br-[5px] grow"
				  />
				
				       <span
					     class="absolute">
							<img src="/build/img/hrd-sp-v32.png"
							    class="h-5 w-5"
							  />
					    </span>
		           </form>
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
	// Render the Mobile Mavigation inner html
	mobileNavDiv.innerHTML = `
    
        	<button
				id="hamburger-btn"
				class="md:hidden cursor-pointer"
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
					class="w-7 h-7 custom-img-filter"
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
	sellHandleDropdown();
	displayLeads();
}
