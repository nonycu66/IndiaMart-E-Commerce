import { categoriesLayoutHTML } from '../categoriesComponent/categoriesLayout.js';

// Function to render the categgories layout
export function renderCategoriesLayout() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Create the categories ul element
	const categoriesUlElem = document.createElement('ul');
	// Append categoriesUlElem to sectionElem
	sectionElem.appendChild(categoriesUlElem);
	// Add class to categoriesUlElem
	categoriesUlElem.classList.add(
		'mt-[5px]',
		'mb-[15px]',
		'mx-[15px]',
		'grid',
		'grid-cols-5',
		'lg:grid-cols-10',
		'justify-center',
		'gap-x-4',
		'gap-y-4'
	);

	// Generate the categories html dynamically
	const categoriesList = categoriesLayoutHTML();
	// Set the innerHTML of categoriesUlElem to the generated categoriesList
	categoriesUlElem.innerHTML = categoriesList;
}
