import { generateMoreLayoutHTML } from '../moreComponents/moreLayout.js';
import { moreData } from '../data/moreData.js';
import { openModal } from '../moreComponents/control/moreControl.js';

// Function to render more contents and attach event listeners
export function renderMoreLayoutHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main-container');

	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Add class to sectionElem
	sectionElem.className = 'mt-5 bg-white';

	// Create the more div element
	const moreDiv = document.createElement('div');
	// Add class to moreDiv
	moreDiv.className = 'my-0 mx-auto bg-white';
	// Append moreDiv to sectionElem
	sectionElem.appendChild(moreDiv);
	// Create the moreInnerDiv
	const moreInnerDiv = document.createElement('div');
	// Add class to moreInnerDiv
	moreInnerDiv.className = 'px-[15px] py-[15px] bg-white';
	// Append moreInnerDiv to moreDiv
	moreDiv.appendChild(moreInnerDiv);

	// Create the more title paragraph element
	const moreTitle = document.createElement('h3');
	// Append moreTitle to moreInnerDiv
	moreInnerDiv.appendChild(moreTitle);
	// Add class to moreTitle
	moreTitle.className = 'text-2xl lg:text-[28px] text-[#333]';
	// Set the innerHTML of moreTitle
	moreTitle.innerHTML = '<b>More for You</b>';

	// Create the more article element
	const moreArticle = document.createElement('article');
	// Append moreArticle to moreInnerDiv
	moreInnerDiv.appendChild(moreArticle);
	// Add class to moreArticle
	moreArticle.classList.add(
		'grid',
		'grid-cols-2',
		'items-center',
		'md:grid-cols-3',
		'md:grid-cols-5'
	);

	// Add id to moreArticle
	moreArticle.id = 'more_list';

	// Generate the more section html
	const moreContents = generateMoreLayoutHTML();

	// Get the more article element by id
	const jsMoreList = document.getElementById('more_list');
	// Dynamically insert the generated HTML into the jsMore list variable
	jsMoreList.innerHTML = moreContents;

	// Add event listeners for the more buttons using event delegation
	jsMoreList.addEventListener('click', (event) => {
		const buttonElem = event.target.closest('.more_links');
		if (buttonElem) {
			openModal(event);
		}
	});

	// Create the more modal div element container
	const modalDiv = document.createElement('div');
	// Append modalDiv to sectionElem
	sectionElem.appendChild(modalDiv);
	// Add id to modalDiv
	modalDiv.id = 'modal_div';

	// Create the more modal overlay
	const modalOverlay = document.createElement('div');
	// Append modalOverlay to sectionElem
	sectionElem.appendChild(modalOverlay);
	// Add id to modalOverlay
	modalOverlay.id = 'modal_overlay';
	// Add class to modalOverlay
	modalOverlay.classList.add(
		'lg:fixed',
		'lg:left-0',
		'lg:top-0',
		'lg:right-0',
		'bottom-0',
		'lg:w-full',
		'lg:h-full',
		'lg:z-[99]',
		'lg:bg-[rgba(0,0,0,0.7)]',
		'hidden'
	);
}
