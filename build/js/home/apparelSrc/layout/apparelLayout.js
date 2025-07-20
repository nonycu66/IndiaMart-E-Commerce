import { generateApparelLeftSide } from './apparelLeftSide.js';
import { apparelDataLeft } from '../data/apparelData.js';
import { renderApparelRightSide } from './apparelRightSide.js';

// Function to generate the apparel content layout dynamically
export function generateApparelLayout() {
	// Generate the left side html
	const leftSideHTML = generateApparelLeftSide(apparelDataLeft);

	// Generate the right side html
	const rightSideHTML = renderApparelRightSide();

	// Combine both sides into a single layout
	return ` 
           <div
                class="grid items-center gap-1 md:grid-cols-[325px_1fr] lg:grid-cols-[325px_1fr] md:gap-x-8 lg:gap-x-8 lg:overflow-hidden"
            >
            ${leftSideHTML}
            ${rightSideHTML}
            </div>
     `;
}
