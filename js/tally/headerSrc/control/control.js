////////////////////////////////////////////////////////////////////
// function showNavLink(navLink, crossBtnElem, hamburgerBtnElem) {
// 	navLink.classList.remove('max-md:opacity-0');
// 	crossBtnElem.classList.remove('hidden');
// 	hamburgerBtnElem.style.display = 'none';
// }

// function hideNavLink(navLink, crossBtnElem, hamburgerBtnElem) {
// 	navLink.classList.add('max-md:opacity-0');
// 	crossBtnElem.classList.add('hidden');
// 	hamburgerBtnElem.style.display = 'block';
// }

let isMobileMenuOpen = false;

export function tallyNavClick({
	menuBtnId = 'menu-burger-btn',
	crossBtnId = 'cross-btn',
	navLinkSelector = '.nav-link',
	navDivSelector = '.nav-div',
	breakpoint = 768,
} = {}) {
	const menuBtn = document.getElementById(menuBtnId);
	const crossBtn = document.getElementById(crossBtnId);
	const navLink = document.querySelector(navLinkSelector);
	const navDiv = document.querySelector(navDivSelector);

	if (!menuBtn || !crossBtn || !navLink || !navDiv) return;

	// Initial state
	closeMobileNav();

	menuBtn.addEventListener('click', openMobileNav);
	crossBtn.addEventListener('click', closeMobileNav);

	window.addEventListener('resize', () => {
		const isMobile = window.innerWidth <= breakpoint;
		if (!isMobile) {
			resetNavForDesktop();
		} else {
			isMobileMenuOpen ? openMobileNav() : closeMobileNav();
		}
	});

	function openMobileNav() {
		const navHeight = navLink.scrollHeight + 'px';
		navLink.style.maxHeight = navHeight;
		navLink.classList.add('max-md:opacity-100', 'max-md:h-auto');
		navLink.classList.remove('max-md:opacity-0');
		navDiv.classList.remove('max-md:h-0');
		menuBtn.classList.add('hidden');
		crossBtn.classList.remove('hidden');
		isMobileMenuOpen = true;
	}

	function closeMobileNav() {
		navLink.style.maxHeight = '0';
		navLink.classList.remove('max-md:opacity-100', 'max-md:h-auto');
		navLink.classList.add('max-md:opacity-0');
		navDiv.classList.add('max-md:h-0');
		crossBtn.classList.add('hidden');
		menuBtn.classList.remove('hidden');
		isMobileMenuOpen = false;
	}

	function resetNavForDesktop() {
		navLink.style.maxHeight = '';
		navLink.classList.remove('max-md:opacity-0', 'max-md:opacity-100');
		navDiv.classList.remove('max-md:h-0');
		menuBtn.classList.remove('hidden');
		crossBtn.classList.add('hidden');
		isMobileMenuOpen = false;
	}
}

// export function tallyNavClick() {
// 	const menuBtn = document.getElementById('menu-burger-btn');
// 	const crossBtn = document.getElementById('cross-btn');
// 	const navLink = document.querySelector('.nav-link');
// 	const navDiv = document.querySelector('.nav-div');

// 	menuBtn.addEventListener('click', () => {
// 		const navHeight = navLink.scrollHeight + 'px';
// 		navLink.style.maxHeight = navHeight;
// 		navLink.classList.add('max-md:opacity-100', 'max-md:h-auto');
// 		navLink.classList.remove('max-md:opacity-0');
// 		navDiv.classList.remove('max-md:h-0');
// 		menuBtn.classList.add('hidden');
// 		crossBtn.classList.remove('hidden');
// 		isMobileMenuOpen = true;
// 	});

// 	crossBtn.addEventListener('click', () => {
// 		navLink.style.maxHeight = '0';
// 		navLink.classList.remove('max-md:opacity-100', 'max-md:h-auto');
// 		navLink.classList.add('max-md:opacity-0');
// 		navDiv.classList.add('max-md:h-0');
// 		crossBtn.classList.add('hidden');
// 		menuBtn.classList.remove('hidden');
// 		isMobileMenuOpen = false;
// 	});

// 	window.addEventListener('resize', () => {
// 		const isMobile = window.innerWidth <= 768;

// 		// Restore styles for desktop
// 		if (!isMobile) {
// 			navLink.style.maxHeight = '';
// 			navLink.classList.remove(
// 				'max-md:opacity-0',
// 				'max-md:opacity-100',
// 				'max-md:h-auto'
// 			);
// 			navDiv.classList.remove('max-md:h-0');
// 			menuBtn.classList.remove('hidden');
// 			crossBtn.classList.add('hidden');
// 			isMobileMenuOpen = false;
// 		} else {
// 			// Restore mobile state
// 			if (isMobileMenuOpen) {
// 				const navHeight = navLink.scrollHeight + 'px';
// 				navLink.style.maxHeight = navHeight;
// 				navLink.classList.add('max-md:opacity-100', 'max-md:h-auto');
// 				navLink.classList.remove('max-md:opacity-0');
// 				navDiv.classList.remove('max-md:h-0');
// 				menuBtn.classList.add('hidden');
// 				crossBtn.classList.remove('hidden');
// 			} else {
// 				navLink.style.maxHeight = '0';
// 				navLink.classList.remove('max-md:opacity-100', 'max-md:h-auto');
// 				navLink.classList.add('max-md:opacity-0');
// 				navDiv.classList.add('max-md:h-0');
// 				crossBtn.classList.add('hidden');
// 				menuBtn.classList.remove('hidden');
// 			}
// 		}
// 	});

// const navDiv = document.querySelector('.nav-link').parentElement;
// Select the nav element
// const navLink = document.querySelector('.nav-link');
// Select the hamburger button from the document
// const hamburgerBtnElem = document.querySelector('.hamburger-btn');
// Select the cross button from the document
// const crossBtnElem = document.querySelector('.cross-btn');

// Helper to open nav
// function openNav() {
// 	navLink.classList.remove('max-md:h-0', 'max-md:opacity-0');
// 	navLink.classList.add('max-md:h-auto', 'max-md:opacity-100');
// 	hamburgerBtnElem.classList.add('hidden');
// 	crossBtnElem.classList.remove('hidden');
// }

// Helper to close nav
// function closeNav() {
// 	navLink.classList.add('max-md:h-0', 'max-md:opacity-0');
// 	navLink.classList.remove('max-md:h-auto', 'max-md:opacity-100');
// 	hamburgerBtnElem.classList.remove('hidden');
// 	crossBtnElem.classList.add('hidden');
// }

// Initial state: closed
// closeNav();
// hamburgerBtnElem.addEventListener('click', openNav);
// crossBtnElem.addEventListener('click', closeNav);

// hamburgerBtnElem.addEventListener('click', () => {
// 	showNavLink(navLink, crossBtnElem, hamburgerBtnElem);
// });
// crossBtnElem.addEventListener('click', () => {
// 	hideNavLink(navLink, crossBtnElem, hamburgerBtnElem);
// });
// }

//////////////////////////////////////////////////////////////////////

export function tallyFeaturesDropdown({
	triggerSelector = '.features-dropdown-trigger',
	dropdownSelector = '.features-dropdown',
	activeClass = 'show-dropdown',
	hideDelay = 200,
	breakpoint = 768,
	navDivSelector = '.nav-div',
} = {}) {
	const trigger = document.querySelector(triggerSelector);
	const dropdown = document.querySelector(dropdownSelector);
	const navDiv = document.querySelector(navDivSelector);

	if (!trigger || !dropdown) return;

	let hideTimeout;

	// Hide dropdown initially
	dropdown.classList.remove(activeClass);

	const showDropdown = () => {
		clearTimeout(hideTimeout);
		dropdown.classList.add(activeClass);
	};

	const hideDropdown = () => {
		hideTimeout = setTimeout(() => {
			dropdown.classList.remove(activeClass);
		}, hideDelay);
	};

	// Hover events for desktop
	trigger.addEventListener('mouseenter', () => {
		if (window.innerWidth > breakpoint) showDropdown();
	});
	trigger.addEventListener('mouseleave', () => {
		if (window.innerWidth > breakpoint) hideDropdown();
	});
	dropdown.addEventListener('mouseenter', () => {
		if (window.innerWidth > breakpoint) showDropdown();
	});
	dropdown.addEventListener('mouseleave', () => {
		if (window.innerWidth > breakpoint) hideDropdown();
	});

	// Click toggle for mobile only
	trigger.addEventListener('click', (e) => {
		if (window.innerWidth < breakpoint) {
			e.preventDefault();
			clearTimeout(hideTimeout);
			dropdown.classList.toggle(activeClass);
			navDiv.classList.remove('max-md:h-0');
		}
	});
}

// export function tallyFeaturesDropdown() {
// 	// Select the nav element from the document
// 	const navLink = document.querySelectorAll('nav a');

// 	// Check or ensure if navLink is not null or undefined
// 	if (!navLink) return;

// 	// Select the dropdown element from the second nav link
// 	const dropdownFeatures = navLink[1].querySelector('.features-dropdown');

// 	// Check or Ensure if dropdown is not null or undefined or exist
// 	// If dropdown is null or undefined then return early
// 	if (!dropdownFeatures) return;

// 	// Initially hide dropdown
// 	dropdownFeatures.style.display = 'none';

// 	// Store timeout reference
// 	let hideTimeout;

// 	// Function to show only the hovered dropdown
// 	const showDropdown = (dropdown) => {
// 		//Clear any existing timeout to prevent flickering
// 		clearTimeout(hideTimeout);

// 		// hide dropdown
// 		dropdownFeatures.style.display = 'none';

// 		// Show the targeted dropdown
// 		dropdown.style.display = 'block';
// 	};

// 	// Function to hide dropdown after display
// 	const hideDropdown = (dropdown) => {
// 		hideTimeout = setTimeout(() => {
// 			dropdown.style.display = 'none';
// 		}, 200); // Delay in milliseconds (200ms)
// 	};

// 	// Add event listeners for the dropdownFeatures
// 	navLink[1]?.addEventListener('mouseenter', () =>
// 		showDropdown(dropdownFeatures)
// 	);
// 	dropdownFeatures?.addEventListener('mouseenter', () =>
// 		showDropdown(dropdownFeatures)
// 	);
// 	navLink[1].addEventListener('mouseleave', () =>
// 		hideDropdown(dropdownFeatures)
// 	);
// 	dropdownFeatures?.addEventListener(
// 		'mouseleave',
// 		hideDropdown(dropdownFeatures)
// 	);
// }
