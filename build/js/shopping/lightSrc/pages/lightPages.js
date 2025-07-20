import {
	lightDataFirst,
	lightDataSecond,
	lightDataThird,
	lightDataFourth,
	lightDataFifth,
} from '../data/lightData.js';
import { generateLightTopLeft } from '../lightComponents/card/topLeftCard.js';
import { generateLightBottomLeft } from '../lightComponents/card/bottomLeftCard.js';
import { generateLightCenterBottom } from '../lightComponents/card/centerBottomCard.js';
import { generateLightCenterTop } from '../lightComponents/card/centerTopCard.js';
import { generateLightRight } from '../lightComponents/card/rightCard.js';
import { renderFrameView } from '../../shared/frameView.js';
import { renderFormView } from '../../shared/formView.js';
export function renderLightHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('main_container');
	// Create the section element
	const sectionElem = document.createElement('section');
	// Append sectionElem to container
	container.appendChild(sectionElem);
	// Assign class to sectionElem
	sectionElem.className = 'py-5 container max-w-full';
	// create the topDiv element
	const topDiv = document.createElement('div');
	// Append topDiv to sectionElem
	sectionElem.appendChild(topDiv);
	// Add class to topDiv
	topDiv.className = 'flex items-center mb-5';
	topDiv.innerHTML = ` 
            <i class="cursor-pointer flex items-center justify-center rounded-[50%] mr-[15px] shadow-ladies-wear-box-shadow">
              <img
               src="/build/img/light.png"
                alt="light"
				loading="lazy"
                 />
             </i>
                <h2
                 class="text-base font-medium lg:text-[27px] lg:font-bold">
                    Light
              </h2>
    `;

	// Create the bottom div
	const bottomDiv = document.createElement('div');
	// Append bottomDiv to sectionElem
	sectionElem.appendChild(bottomDiv);
	// Add class to bottomDiv
	bottomDiv.classList.add(
		'w-full',
		'relative',
		'pb-[30px]',
		'flex',
		'flex-col',
		'lg:flex-row',
		'gap-y-3',
		'lg:gap-y-0'
	);

	// Create the div holder element
	const divHolder = document.createElement('div');
	// Append divHolder to bottomDiv
	bottomDiv.appendChild(divHolder);
	divHolder.classList.add(
		'grid',
		'grid-cols-[65%_35%]',
		'gap-x-3',
		'lg:flex',
		'lg:flex-col'
	);

	//////////////////////////////////////////////////////
	// create the first article element
	const articleElemFirst = document.createElement('article');
	// Append articleElemFirst to bottomDiv
	divHolder.appendChild(articleElemFirst);
	// Add class to articleElemFirst
	articleElemFirst.className = 'flex gap-x-3 justify-center';

	// Loop through lightDataFirst and generate the top left items
	lightDataFirst.forEach((product) => {
		const productItems = generateLightTopLeft(product);
		articleElemFirst.appendChild(productItems);
	});

	//////////////////////////////////////////////////
	// Create the second article element
	const articleElemSecond = document.createElement('article');
	// Append articleElemSecond to bottomDiv
	divHolder.appendChild(articleElemSecond);
	articleElemSecond.className = 'flex justify-center';

	// Loop through lightDataSecond and generate the bottom left items
	lightDataSecond.forEach((product) => {
		const productItems = generateLightBottomLeft(product);
		articleElemSecond.appendChild(productItems);
	});

	/////////////////////////////////////////////////////
	// Create the second div holder element
	const secondDivHolder = document.createElement('div');
	// Append secondDivHolder to bottomDiv
	bottomDiv.appendChild(secondDivHolder);
	// Add class to secondDivHolder
	secondDivHolder.classList.add(
		'grid',
		'grid-cols-[65%_35%]',
		'gap-x-3',
		'lg:flex',
		'lg:flex-col-reverse'
	);

	//////////////////////////////////////////////
	// Create the third article element
	const articleElemThird = document.createElement('article');
	// Append articleElemThird to secondDivHolder
	secondDivHolder.appendChild(articleElemThird);
	// Add class to articleElemThird
	articleElemThird.className = 'flex justify-center gap-x-3';

	// Loop through lightDataThird and generate the center bottom items
	lightDataThird.forEach((product) => {
		const productItems = generateLightCenterBottom(product);
		articleElemThird.appendChild(productItems);
	});

	///////////////////////////////////////////////////
	// Create the fourth article element
	const articleElemFourth = document.createElement('article');
	// Append articleElemFourth to secondDivHolder
	secondDivHolder.appendChild(articleElemFourth);
	articleElemFourth.className = 'flex justify-center';

	// Loop through lightDataFourth and generate the center bottom items
	lightDataFourth.forEach((product) => {
		const productItems = generateLightCenterTop(product);
		articleElemFourth.appendChild(productItems);
	});

	////////////////////////////////////////////////////
	// Create the third div holder element
	const thirdDivHolder = document.createElement('div');
	bottomDiv.appendChild(thirdDivHolder);

	// Create the fifth article element
	const articleElemFifth = document.createElement('article');
	// Append articleElemThird to secondDivHolder
	thirdDivHolder.appendChild(articleElemFifth);
	// Add class to articleElemThird
	articleElemFifth.classList.add(
		'grid',
		'grid-cols-[1fr_1fr]',
		'lg:flex',
		'lg:flex-col',
		'justify-items-center'
	);

	// Loop through lightDataFifth and generate the right items
	lightDataFifth.forEach((product) => {
		const productItems = generateLightRight(product);
		articleElemFifth.appendChild(productItems);
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

	////////////////////////////////////////////////////////////
	// Create the flex container div
	const flexContainer = document.createElement('div');
	// Append formDiv to sectionElem
	sectionElem.appendChild(flexContainer);
	// Assign class to formDiv
	flexContainer.classList.add(
		'flex',
		'flex-col',
		'lg:flex-row',
		'items-center',
		'mb-[30px]',
		'mt-5',
		'gap-y-8'
	);

	// Call the renderFrameView function and insert it into the frameView variable
	const frameView = renderFrameView();
	// Append the frameView to the flexContainer
	flexContainer.appendChild(frameView);

	// Call the renderFormView function and insert it into the frameForm variable
	const formView = renderFormView();
	// Append the frameForm to the flexContainer
	flexContainer.appendChild(formView);
}
