import { generateProductLikeLayoutHTML } from '../productLikeComponent/productLikeLayout.js';
import { openModal } from '../productLikeComponent/control/productLikeControl.js';
import { productsData } from '../data/productLikeData.js';

// Function to render product contents and attach event listeners
export function renderProductHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append the sectionElem to mainElement
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.classList.add('mb-[20px]', 'bg-[#fff]');
	// Add id to sectionElem
	sectionElem.id = 'product-section';

	// Create the products div element
	const productDiv = document.createElement('div');
	// Append productDiv to sectionElem
	sectionElem.appendChild(productDiv);
	//  Add class to productDiv
	productDiv.className = 'bg-white';
	// Create the productInner div
	const productInnerDiv = document.createElement('div');
	// Append productInnerDiv to productDiv
	productDiv.appendChild(productInnerDiv);
	// Add class to productInnerDiv
	productInnerDiv.classList.add('py-[15px]', 'px-[15px]', 'bg-[#fff]');

	// Create the title div
	const titleDiv = document.createElement('div');
	// Append titleDiv to productInnerDiv
	productInnerDiv.appendChild(titleDiv);
	// Add class to titleDiv
	titleDiv.classList.add(
		'text-[22px]',
		'lg:text-[25px]',
		'pb-[10px]',
		'font-bold',
		'text-[#333]'
	);

	// Create the title span
	const titleSpan = document.createElement('span');
	titleDiv.appendChild(titleSpan);
	titleSpan.classList.add('text-[22px]', 'lg:text-[25px]');
	titleSpan.textContent = 'Products You May Like';

	// Create the anchor element
	const anchorElem = document.createElement('a');
	titleDiv.appendChild(anchorElem);
	anchorElem.classList.add(
		'text-[#2e358f]',
		'text-[15px]',
		'ml-[8px]',
		'hover:underline'
	);
	anchorElem.href = 'https://my.indiamart.com/buyertools/myproductby';
	anchorElem.innerHTML = 'View All <i>&gt;</i>';
	anchorElem.target = '_blank';

	// Create the ul element
	const ulElement = document.createElement('ul');
	// Append ulElement to productInnerDiv
	productInnerDiv.appendChild(ulElement);
	// Add class to ulElement
	ulElement.classList.add(
		'grid',
		'grid-cols-2',
		'gap-2.5',
		'lg:grid-cols-5',
		'lg:gap-4',
		'mx-auto',
		'my-0',
		'bg-[#fff]'
	);
	// Add id to ulElement
	ulElement.id = 'ulElementId_products';

	// Generate main product section html
	const mainProduct = generateProductLikeLayoutHTML();

	// Get the ulElement by id
	const jsProductContainer = document.getElementById('ulElementId_products');
	// Dynnamically insert the generated main product html into the ulElementId
	jsProductContainer.innerHTML = mainProduct;

	// Add event listeners for the product buttons using event delegation
	jsProductContainer.addEventListener('click', (event) => {
		const buttonElem = event.target.closest('.button');
		if (buttonElem) {
			const index = buttonElem.getAttribute('data-index');
			openModal(event, productsData[index]);
		}
	});

	// Create the product modal div
	const modalDiv = document.createElement('div');
	// Apppend modaldiv to sectionElem
	sectionElem.appendChild(modalDiv);
	// Add id to modaldiv
	modalDiv.id = 'productModal';
	modalDiv.classList.add(
		'w-[300px]',
		'sm:w-[600px]',
		'md:w-[700px]',
		'lg:w-full'
	);

	// Create the product modal overlay
	const modalOverlayDiv = document.createElement('div');
	// Append modalOverlayDiv to sectionElem
	sectionElem.appendChild(modalOverlayDiv);
	// Add id to modalOverlayDiv
	modalOverlayDiv.id = 'productModalOverlay';
	// Add class to modalOverlayDiv
	modalOverlayDiv.classList.add(
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
