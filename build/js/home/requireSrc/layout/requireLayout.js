import { generateRequireLeftSide } from './requireLeftSide.js';
import { requireDataLeft } from '../data/requireData.js';
import { renderRequireRightSide } from './requireRightSide.js';
import { requireDataRight } from '../data/requireData.js';

// Function to generate the require content layout dynamically
export function generateRequireLayout() {
	// Generate the left side html
	const leftSideHTML = generateRequireLeftSide(requireDataLeft);

	// Generate the right side html
	const rightSideHTML = renderRequireRightSide(requireDataRight[0]);

	// Combine both sides into a single layout
	return ` 
      <div
         class="grid grid-cols-1 justify-center lg:flex lg:items-center"
        >
         ${leftSideHTML}
         ${rightSideHTML}
         </div>
    `;
}
