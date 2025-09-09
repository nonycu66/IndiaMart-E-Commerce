import { topBrandsLayoutHTML } from '../topBrandsComponent/topBrandsLayout.js';

// Function to render topbrands content
export function renderTopBrandsLayout() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Create the topDiv element
	const topDiv = document.createElement('div');
	// Append topDiv to sectionElem
	sectionElem.appendChild(topDiv);
	// Add class to topDiv
	topDiv.classList.add(
		'bg-desktop-banner',
		'bg-[size:cover]',
		'h-auto',
		'lg:h-[400px]'
	);

	// Create the divInner element
	const divInner = document.createElement('div');
	// Append divInner to topDiv
	topDiv.appendChild(divInner);
	// Assign class to divInner
	divInner.classList.add('flex', 'justify-end', 'cursor-pointer');
	divInner.id = 'topbrand_inner';

	// Create the article elemment
	const articleElem = document.createElement('article');
	// Append articleElem to divInner
	divInner.appendChild(articleElem);
	// Assign id to articleElem
	articleElem.id = 'article_elem_id';
	// Assign class to articleElem
	articleElem.classList.add(
		'grid',
		'grid-cols-2',
		'sm:gap-x-4',
		'min-w-[260px]',
		'max-w-[260px]',
		'min-w-[300px]',
		'max-w-[300px]',
		'lg:min-w-[520px]',
		'lg:max-w-[520px]',
		'lg:top-5',
		'sm:right-[25px]',
		'md:right-[50px]',
		'lg:right-[90px]',
		'relative'
	);

	// Generate the topBrandsListHTML dynamically
	const brandsList = topBrandsLayoutHTML();
	// Set the innerHTML of articleElem to the generated brandsList
	articleElem.innerHTML = brandsList;

	// Create the div element for the advert
	const advertDiv = document.createElement('div');
	// Append advertDiv to sectionElem
	sectionElem.appendChild(advertDiv);
	// add class to advertDiv
	advertDiv.className = 'mt-5';

	advertDiv.innerHTML = `
	     <a href="#">
             <img
		      src="/build/img/ib-bnr-D.webp"
		       class="w-full h-full"
			   alt="idustrial-tools"
			 />
        </a>
	`;
}
