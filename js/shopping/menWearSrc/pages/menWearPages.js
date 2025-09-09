import { generateMensLayoutHTML } from '../menWearComponent/menLayout.js';

// Function to render the mens products layout contents
export function renderMensLayoutHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Add class to sectionElem
	sectionElem.className = 'py-5 container max-w-full';
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// create the topDiv element
	const topDiv = document.createElement('div');
	// Append topDiv to sectionElem
	sectionElem.appendChild(topDiv);
	// Add class to topDiv
	topDiv.className = 'flex items-center mb-5';
	topDiv.innerHTML = ` 
            <i class="cursor-pointer flex items-center justify-center rounded-[50%] mr-[15px] shadow-ladies-wear-box-shadow">
              <img
               src="/build/img/men-wear.png"
                alt="Ladies Wear"
				loading="lazy"
                 />
             </i>
    `;

	// Create the h2 element
	const h2Element = document.createElement('h2');
	// Append h2Element to topDiv
	topDiv.appendChild(h2Element);
	// Insert textContent into h2Element
	h2Element.textContent = 'Men Wear';
	// Add class to h2Element
	h2Element.classList.add(
		'text-base',
		'font-medium',
		'lg:text-[27px]',
		'lg:font-bold'
	);

	// Create the article element
	const articleElem = document.createElement('article');
	// Append articleElem to sectionElem
	sectionElem.appendChild(articleElem);
	// Add class to articleElem
	articleElem.classList.add('w-full', 'relative', 'pb-10');
	// Create the articleElem inner div
	const articleElemInnerDiv = document.createElement('div');
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
	articleElemInnerDiv.id = 'menswear_products';

	// Generate the mens wear html dynamically
	const mensWearItems = generateMensLayoutHTML();

	// Insert mensWearItems into the articleElemInner variable
	articleElemInnerDiv.innerHTML = mensWearItems;

	/////////////////////////////////////////////////////////
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
}
