import { generateCategoriesLikeLayoutHTML } from '../categoriesLikeComponents/categoriesLikeLayout.js';
import { categoriesData } from '../data/categoriesData.js';
import { openModal } from '../categoriesLikeComponents/control/categoriesLikeControl.js';
// Function to render categories content and attach event listeners
export function renderCategoriesHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append the sectionElem to mainElement
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add('my-[20px]', 'mx-0', 'pt-[20px]', 'bg-[#fff]');

	// Create the categories div element
	const categoryDiv = document.createElement('div');
	// App categoryDiv to sectionElem
	sectionElem.appendChild(categoryDiv);
	// Add class to cateoryDiv
	categoryDiv.className = 'bg-white';

	// Create the categoriesInner div
	const categoryInnerDiv = document.createElement('div');
	// Append categoryInnerDiv to categoryDiv
	categoryDiv.appendChild(categoryInnerDiv);
	// Add class to categoryInner
	categoryInnerDiv.className = 'bg-white py-[15px] px-[15px]';

	// Create the title div
	const titlePara = document.createElement('p');
	// Append titleDiv to categoryInnerDiv
	categoryInnerDiv.appendChild(titlePara);
	// Add class to titleDiv
	titlePara.classList.add(
		'text-[22px]',
		'lg:text-[25px]',
		'pb-[10px]',
		'font-bold',
		'text-[#333]'
	);
	titlePara.textContent = 'Categories You May Like';

	// Create the ul element
	const ulElement = document.createElement('ul');
	// Append ulElement to productInnerDiv
	categoryInnerDiv.appendChild(ulElement);
	// Add class to ulElement
	ulElement.classList.add(
		'grid',
		'grid-cols-2',
		'lg:grid-cols-5',
		'lg:gap-4',
		'gap-2.5',
		'mx-auto',
		'my-0'
	);
	// Add id to ulElement
	ulElement.id = 'ulElementId_categories';

	// Generate the main categories section html
	const mainCategoryHTML = generateCategoriesLikeLayoutHTML();

	// Get the ulElement by id
	const jsCategoriesContainer = document.getElementById(
		'ulElementId_categories'
	);
	// Set the innerHTML of the ulElement to the mainCategoryHTML
	jsCategoriesContainer.innerHTML = mainCategoryHTML;

	// Add event listener to the category buttons using event delegation
	jsCategoriesContainer.addEventListener('click', (event) => {
		// Check if the clicked element is a button
		const buttonElem = event.target.closest('.button');
		if (buttonElem) {
			const index = buttonElem.getAttribute('data-index');
			openModal(event, categoriesData[index]);
		}
	});

	// Create the categories modal div container
	const modalDiv = document.createElement('div');
	// Append modalDiv to sectionElem
	sectionElem.appendChild(modalDiv);
	// Add id to modalDiv
	modalDiv.id = 'modalDivId_categories';

	// Create the category modal overlay
	const modalOverlay = document.createElement('div');
	// Append modalOverlay to sectionElem
	sectionElem.appendChild(modalOverlay);
	// Add id to modalOverlay
	modalOverlay.id = 'modalOverlayId_categories';
	// Add class to modalOverlay
	modalOverlay.classList.add(
		'fixed',
		'left-0',
		'top-0',
		'right-0',
		'bottom-0',
		'w-full',
		'h-full',
		'z-[99]',
		'bg-[rgba(0,0,0,0.7)]',
		'hidden'
	);
}
