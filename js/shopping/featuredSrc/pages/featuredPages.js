import { featuredData } from '../data/featuredData.js';
import { generateFeaturedLayoutHTML } from '../featuredComponents/featuredLayout.js';

// Function to render the featured products layout contents
export function renderFeaturedLayoutHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// create the topDiv element
	const topDiv = document.createElement('div');
	// Append topDiv to sectionElem
	sectionElem.appendChild(topDiv);
	// Add class to topDiv
	topDiv.className = 'pt-5';
	// Create the title span element
	const titleSpan = document.createElement('span');
	// Append titleSpan to topDiv
	topDiv.appendChild(titleSpan);
	// Add class to titleSpan
	titleSpan.classList.add('flex', 'items-center', 'mb-[20px]');
	// // Create the h2 element
	const h2Element = document.createElement('h2');
	// Append h2Element to titleSpan
	titleSpan.appendChild(h2Element);
	// Insert textContent into h2Element
	h2Element.textContent = 'Featured Products';
	// Add class to h2Element
	h2Element.classList.add(
		'text-base',
		'font-medium',
		'lg:text-[27px]',
		'lg:font-bold'
	);

	// Create the article element
	const articleElem = document.createElement('article');
	// Append articleElem to topDiv
	topDiv.appendChild(articleElem);
	// Add class to articleElem
	articleElem.classList.add('w-full', 'relative', 'pb-10');
	// Create the articleElem inner div
	const articleElemInnerDiv = document.createElement('div');
	// Append articleElemInnerDiv to articleElem
	articleElem.appendChild(articleElemInnerDiv);
	// Add class to articleElemInnerDiv
	articleElemInnerDiv.classList.add(
		'grid',
		'grid-cols-2',
		'gap-x-2.5',
		'gap-y-[23px]',
		'md:grid-cols-3',
		'lg:flex',
		'lg:gap-x-[23px]',
		'mb-5'
	);
	// Add id to articleElemInnerDiv
	articleElemInnerDiv.id = 'featured_products';

	///////////////////////////////////////////////////////
	// Create the view more div
	const viewMoreDiv = document.createElement('div');
	// Append viewMoreDiv to articleElem
	articleElem.appendChild(viewMoreDiv);
	// Add class to viewMoreDiv
	viewMoreDiv.classList.add(
		'w-full',
		'flex',
		'cursor-pointer',
		'items-center',
		'justify-center',
		'font-medium'
	);

	//////////////////////////////////////////////////////
	// Create the span element
	const spanElem = document.createElement('span');
	// Append the spanElem to viewMoreDiv
	viewMoreDiv.appendChild(spanElem);
	spanElem.textContent = 'View more';
	// Assign class to spanElem
	spanElem.classList.add(
		'py-[12px]',
		'px-[70px]',
		'border',
		'border-solid',
		'border-[#232324]',
		'rounded-[4px]',
		'text-lg',
		'bg-[#2e3192]',
		'text-white'
	);

	// Loop through the featuredData array and create products items
	featuredData.forEach((product, index) => {
		const productItems = generateFeaturedLayoutHTML(
			product,
			index,
			featuredData.length
		);
		articleElemInnerDiv.appendChild(productItems);
	});
}
