import { generateHomeDecorTopLeft } from '../homeDecorComponent/card/topLeftCard.js';
import { generateHomeDecorBottomLeft } from '../homeDecorComponent/card/bottomLeftCard.js';
import { generateHomeDecorCenterBottom } from '../homeDecorComponent/card/centerBottomCard.js';
import { generateHomeDecorCenterTop } from '../homeDecorComponent/card/centerTopCard.js';
import { generateHomeDecorRight } from '../homeDecorComponent/card/rightCard.js';
import { renderFrameView } from '../../shared/frameView.js';
import { renderFormView } from '../../shared/formView.js';
// Function to render the home decor content elements dynamically
export function renderHomeDecorHTML() {
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
               src="/build/img/home-decor.png"
                alt="Ladies Wear"
			     loading="lazy"
                 />
             </i>
             <h2 class="text-base font-medium lg:text-[27px] lg:font-bold">Home Decor</h2>
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
	// Create the first article element
	const articleElemFirst = document.createElement('article');
	// Append articleElemFirst to bottomDiv
	divHolder.appendChild(articleElemFirst);
	// Add class to articleElemFirst
	articleElemFirst.className = 'flex gap-x-3 justify-center';

	// Call the generateHomeDecorTopLeft function and insert it to the variable
	const topLeftHomeDecor = generateHomeDecorTopLeft();
	// Set articleElemFirst inner html to topLeftHomeDecor
	articleElemFirst.innerHTML = topLeftHomeDecor;

	//////////////////////////////////////////////////
	// Create the second article element
	const articleElemSecond = document.createElement('article');
	// Append articleElemSecond to bottomDiv
	divHolder.appendChild(articleElemSecond);
	articleElemSecond.className = 'flex justify-center';

	// Call the generateHomeDecorBottomLeft function and insert it into the variable
	const bottomLeftHomeDecor = generateHomeDecorBottomLeft();
	// Set the articleElemSecond inner html to bottomLeftHomeDecor
	articleElemSecond.innerHTML = bottomLeftHomeDecor;

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

	// Call the generateHomeDecorCenterBottom function and insert it into the variable
	const centerBottomHomeDecor = generateHomeDecorCenterBottom();
	// Set the articleElemThird inner html to CenterBottomHomeDecor
	articleElemThird.innerHTML = centerBottomHomeDecor;

	///////////////////////////////////////////////////
	// Create the fourth article element
	const articleElemFourth = document.createElement('article');
	// Append articleElemFourth to secondDivHolder
	secondDivHolder.appendChild(articleElemFourth);
	articleElemFourth.className = 'flex justify-center';

	// Call the generateHomeDecorCenterTop function and insert it into the variable
	const centerTopHomeDecor = generateHomeDecorCenterTop();
	// Set the articleElemFourth inner html to CenterTopHomeDecor
	articleElemFourth.innerHTML = centerTopHomeDecor;

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

	// Call the generateHomeDecorRight function and insert it into the variable
	const rightHomeDecor = generateHomeDecorRight();
	// Set the articleElemFifth inner html to rightHomeDecor
	articleElemFifth.innerHTML = rightHomeDecor;

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
