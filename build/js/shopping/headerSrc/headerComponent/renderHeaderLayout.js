import { headerHTML } from './headerLayout.js';

// Function to render the header
export function renderHeaderView() {
	// Create the header element container
	const container = document.createElement('header');
	// Set the class for the container
	container.classList.add(
		'w-full',
		'bg-white',
		'sticky',
		'py-[18px]',
		'px-3',
		'z-[999]',
		'top-0',
		'left-0',
		'right-0',
		'border-b',
		'border-solid',
		'border-[#c4c8cc]',
		'transition-all',
		'duration-200',
		'ease-in-out'
	);

	// Dynamically insert the generated header element into the container variable
	container.innerHTML = headerHTML();

	// Return the fully populated header - container
	return container;
}
