import { generateNavLinksLayout } from '../headerComponents/navLinksLayout.js';
import { homeHandleDropdown } from '../../../control/headerControl.js';

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
		'bg-[size:235%]',
		'mr-[30px]'
	);

	// Create the Mobile Navigation div
	const mobileNavDiv = document.createElement('div');
	// Append the mobileNavDiv to the section
	section.appendChild(mobileNavDiv);
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
				class=" md:hidden  cursor-pointer"
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

	// Create the Menu Nav element
	const menuNav = document.createElement('nav');
	// Append the menuNav to the section
	section.appendChild(menuNav);
	// Add class to menuNav
	menuNav.classList.add(
		'hidden',
		'md:flex',
		'md:justify-end',
		'md:mt-2',
		'md:relative',
		'md:w-[calc(100%-180px)]',
		'text-[0.75rem]'
	);

	// Call the generateNavLinks function and insert it into the variable
	const navLinksContents = generateNavLinksLayout();
	// Set the inner html of menuNav to navLinksContents
	menuNav.innerHTML = navLinksContents;
	homeHandleDropdown();
}
