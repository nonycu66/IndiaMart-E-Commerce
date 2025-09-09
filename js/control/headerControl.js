export function homeHandleDropdown() {
	// Select the nav element from the document
	const navLinks = document.querySelectorAll('nav li');

	// Check or Ensure if navLinsks is not null or undefined
	if (!navLinks) return;

	// Select the dropdown element from the third nav link
	const dropdownHelp = navLinks[2].querySelector('div');

	// Select the dropdown element from the fifth nav link
	const dropdownSignIn = navLinks[4].querySelector('div');

	// Check or Ensure if dropdown is not null or undefined or exist
	// If dropdown is null or undefined then return early
	if (!dropdownHelp || !dropdownSignIn) return;

	// Initially hide both dropdown
	dropdownHelp.style.display = 'none';
	dropdownSignIn.style.display = 'none';

	// Store timeout reference
	let hideTimeout;

	// Function to show only the hovered dropdown
	const showDropdown = (dropdown) => {
		//Clear any existing timeout to prevent flickering
		clearTimeout(hideTimeout);

		// Hide dropdownHelp
		dropdownHelp.style.display = 'none';
		// Hide dropdownSignIn
		dropdownSignIn.style.display = 'none';

		// Show the targeted dropdown
		dropdown.style.display = 'block';
	};

	// Function to hide dropdown after delay
	const hideDropdown = (dropdown) => {
		hideTimeout = setTimeout(() => {
			dropdown.style.display = 'none';
		}, 200); // Delay in milliseconds (200ms)
	};

	// Add event listeners for the help dropdown
	navLinks[2]?.addEventListener('mouseenter', () => showDropdown(dropdownHelp));
	dropdownHelp?.addEventListener('mouseenter', () =>
		showDropdown(dropdownHelp)
	);
	navLinks[2]?.addEventListener('mouseleave', () => hideDropdown(dropdownHelp));
	dropdownHelp?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownHelp)
	);

	// Add event listeners for the signin dropdown
	navLinks[4]?.addEventListener('mouseenter', () =>
		showDropdown(dropdownSignIn)
	);
	dropdownSignIn?.addEventListener('mouseenter', () => {
		showDropdown(dropdownSignIn);
	});
	navLinks[4]?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownSignIn)
	);
	dropdownSignIn?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownSignIn)
	);
}

//////////////////////////////////////////////////////////
export function sellHandleDropdown() {
	// Select the nav element from the document
	const navLinks = document.querySelectorAll('nav li');

	// Check or Ensure if navLinks is not null or undefined
	if (!navLinks) return;

	// Select the dropdown element from the fifth nav link
	const dropdownHelp = navLinks[5].querySelector('div');

	// Select the dropdown element from the sixth nav link
	const dropdownSignIn = navLinks[6].querySelector('div');

	// Check or Ensure if dropdown is not null or undefined or exist
	// If dropdown is null or undefined then return early
	if (!dropdownHelp || !dropdownSignIn) return;

	// Initially hide both dropdown
	dropdownHelp.style.display = 'none';
	dropdownSignIn.style.display = 'none';

	// Store timeout reference
	let hideTimeout;

	// Function to show only the hovered dropdown
	const showDropdown = (dropdown) => {
		clearTimeout(hideTimeout); //Clear any existing timeout to prevent flickering

		// Hide dropdownHelp
		dropdownHelp.style.display = 'none';
		// Hide dropdownSignIn
		dropdownSignIn.style.display = 'none';

		// Show the targeted dropdown
		dropdown.style.display = 'block';
	};

	// Function to hide dropdown after delay
	const hideDropdown = (dropdown) => {
		hideTimeout = setTimeout(() => {
			dropdown.style.display = 'none';
		}, 200); // Delay in milliseconds (200ms)
	};

	// Add event listeners for the help dropdown
	navLinks[5]?.addEventListener('mouseenter', () => showDropdown(dropdownHelp));
	dropdownHelp?.addEventListener('mouseenter', () =>
		showDropdown(dropdownHelp)
	);
	navLinks[5]?.addEventListener('mouseleave', () => hideDropdown(dropdownHelp));
	dropdownHelp?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownHelp)
	);

	// Add event listeners for the signin dropdown
	navLinks[6]?.addEventListener('mouseenter', () =>
		showDropdown(dropdownSignIn)
	);
	dropdownSignIn?.addEventListener('mouseenter', () => {
		showDropdown(dropdownSignIn);
	});
	navLinks[6]?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownSignIn)
	);
	dropdownSignIn?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownSignIn)
	);
}

///////////////////////////////////////////////////////////////////
export function helpHandleDropdown() {
	// Select the nav element from the document
	const navLinks = document.querySelectorAll('nav li');

	// Check or Ensure if navLinks is not null or undefined
	if (!navLinks) return;

	// Select the dropdown element from the third nav link
	const dropdownHelp = navLinks[2].querySelector('div');
	// Select the dropdown element from the last nav link
	const dropdownSignIn = navLinks[4].querySelector('div');

	// Check or Ensure if dropdown is not null or undefined or exist
	// If dropdown is null or undefined then return early
	if (!dropdownHelp && !dropdownSignIn) return;

	// Initially hide both dropdown
	dropdownHelp.style.display = 'none';
	dropdownSignIn.style.display = 'none';

	// Store timeout reference
	let hideTimeout;

	// Function to show only the hovered dropdown
	const showDropdown = (dropdown) => {
		//Clear any existing timeout to prevent flickering
		clearTimeout(hideTimeout);

		// Hide dropdownHelp
		dropdownHelp.style.display = 'none';
		// Hide dropdownSignIn
		dropdownSignIn.style.display = 'none';

		// Show the targeted dropdown
		dropdown.style.display = 'block';
	};

	// Function to hide dropdown after delay
	const hideDropdown = (dropdown) => {
		hideTimeout = setTimeout(() => {
			dropdown.style.display = 'none';
		}, 200); // Delay in milliseconds (200ms)
	};

	// Add event listeners for the help dropdown
	navLinks[2]?.addEventListener('mouseenter', () => showDropdown(dropdownHelp));
	dropdownHelp?.addEventListener('mouseenter', () =>
		showDropdown(dropdownHelp)
	);

	navLinks[2]?.addEventListener('mouseleave', () => hideDropdown(dropdownHelp));
	dropdownHelp?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownHelp)
	);

	// Add event listeners for the signin dropdown
	navLinks[4]?.addEventListener('mouseenter', () =>
		showDropdown(dropdownSignIn)
	);
	dropdownSignIn?.addEventListener('mouseenter', () =>
		showDropdown(dropdownSignIn)
	);

	navLinks[4]?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownSignIn)
	);
	dropdownSignIn?.addEventListener('mouseleave', () =>
		hideDropdown(dropdownSignIn)
	);
}
