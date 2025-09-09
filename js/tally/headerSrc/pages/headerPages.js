import { generateNavLinksLayout } from '../components/navLinksLayout.js';
import { tallyFeaturesDropdown } from '../control/control.js';
import { tallyNavClick } from '../control/control.js';

// Function to render the header html elements dynamically
export function renderHeaderHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('header-container');

	// Create the header element
	const header = document.createElement('header');
	// Append the header to the container
	container.appendChild(header);
	// Add class to header
	header.classList.add(
		'py-1.5',
		'shadow',
		'min-h-[70px]',
		'fixed',
		'top-0',
		'left-0',
		'w-full',
		'z-10',
		'bg-white'
	);

	// Create the section element
	const sectionElem = document.createElement('section');
	// Append the section to the header
	header.appendChild(sectionElem);
	// Add class to section
	sectionElem.classList.add(
		'px-4',
		'lg:px-7',
		'flex',
		'items-center',
		'justify-between',
		'max-md:flex-wrap'
	);

	// Create the Logo div
	const logoDiv = document.createElement('div');
	// Append the logoDiv to the section
	sectionElem.appendChild(logoDiv);
	// Add class to logoDiv
	logoDiv.className = 'z-10 outline-none';
	// Set the logoDiv inner html
	logoDiv.innerHTML = ` 
	    <a href="#">
		  <picture>
         <source media="(min-width: 768px)"
         srcset="/build/icon/livekeeping-website-logo.svg">
          <source 
              srcset="/build/icon/SquareLogo.svg"
            >  
            <img
                src="/build/icon/livekeeping-website-logo.svg"
                alt="livekeeping-logo"
                class="max-md:h-auto w-full h-16"
              />
            </picture>
		  </a>
	`;

	// Create navDiv element
	const navDiv = document.createElement('div');
	// Append navElem to sectionElem
	sectionElem.appendChild(navDiv);
	// Assign class to navDiv
	navDiv.classList.add(
		'md:flex',
		'items-center',
		'justify-self',
		'max-md:w-full',
		'max-md:h-0',
		'max-md:duration-500',
		'max-md:order-3',
		'nav-div'
	);
	// Set the inner html of navDiv
	// Call the generateNavLinks function and insert it into the nav element
	const navLinksContents = generateNavLinksLayout();
	navDiv.innerHTML = ` 
	  <nav
	      class="flex max-md:flex-col max-md:space-y-5 max-md:my-5 max-md:pl-2 max-sm:items-start md:items-center max-md:duration-500 nav-link max-md:opacity-0" 
	    >
          ${navLinksContents}
		  
		  </nav>
		  
		  <button 
		  type="button"
		  class="bg-[#5bbc21] text-white font-semibold py-1.5 px-4 md:px-6 border-0 rounded cursor-pointer text-sm md:text-base max-md:hidden"
			 > 
		     Login
		   </button>
	`;

	tallyFeaturesDropdown({
		triggerSelector: '.features-dropdown-trigger',
		dropdownSelector: '.features-dropdown',
	});

	// Create the nav button div
	const navBtnDiv = document.createElement('div');
	// Append navBtnDiv to sectionElem
	sectionElem.appendChild(navBtnDiv);
	// Add class to navBtnDiv
	navBtnDiv.classList.add('flex', 'items-center', 'md:hidden');
	// Set the navBtnDiv inner html
	navBtnDiv.innerHTML = ` 
	
	  <button 
	    type="button"
		 class="border border-[#bababa] px-4 py-1.5 rounded-md font-semibold text-[13px] mr-2">
	      Login
	    </button>

		<a 
		  href="#"
		   class="inline-block border border-[#bababa] px-4 py-1.5 rounded-md font-semibold text-[13px]"
		    >
			 Help
		  </a> 
 
		  <div class="ml-2">
		    <button
				id="menu-burger-btn"
				class="md:hidden cursor-pointer hamburger-btn"
			>
				<img
					src="/build/icon/menu-burger.svg"
					alt="menu-burger-icon"
					class="w-6 outline-none"
				/>
			</button>

              <button
				id="cross-btn"
				class="hidden cross-btn cursor-pointer"
			>
				<img
					src="/build/icon/cross.svg"
					alt="cross-icon"
					class="w-6 h-6 outline-none"
				/>
			  </button>
		  </div>	
	`;
	tallyNavClick();
}
