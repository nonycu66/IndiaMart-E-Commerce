import { chemicalsData } from '../data/chemicalsData.js';
import { generateChemicalsLayoutHTML } from '../chemicalsComponents/chemicalsLayout.js';

// Function to render the chemicals layout contents
export function renderChemicalsLayoutHTML() {
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
               src="/build/img/industrial-chemicals.png"
                alt="Industrial Chemicals"
				loading="lazy"
                 />
             </i>
             <h2
              class="text-base font-medium lg:text-[27px] lg:font-bold"
             >
                 Industrial Chemicals
             </h2>
    `;

	// Create the article element
	const articleElem = document.createElement('article');
	// Append articleElem to topDiv
	sectionElem.appendChild(articleElem);
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

	// Loop through the chemicalsData array and generate the items dynamically
	chemicalsData.forEach((product, index) => {
		const productItems = generateChemicalsLayoutHTML(
			product,
			index,
			chemicalsData.length
		);
		articleElemInnerDiv.appendChild(productItems);
	});

	///////////////////////////////////////////////////////////
	// Create the view more div
	const viewMoreDiv = document.createElement('div');
	// Append viewMoreDiv to bottomDiv
	sectionElem.appendChild(viewMoreDiv);
	// Add class to viewMoreDiv
	viewMoreDiv.classList.add(
		'w-full',
		'flex',
		'cursor-pointer',
		'items-center',
		'justify-center',
		'font-medium'
	);

	// Create the span element
	const spanElem = document.createElement('span');
	// Append the spanElem to viewMoreDiv
	viewMoreDiv.appendChild(spanElem);
	spanElem.textContent = 'Search for more products';
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
