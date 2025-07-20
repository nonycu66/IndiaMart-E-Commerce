import { generateIndustrialLeftSide } from './industrialLeftSide.js';
import { industrialDataLeft } from '../data/industrialData.js';
import { renderIndustrialRightSide } from './industrialRightSide.js';

// Function to generate the industrial content layout dynamically
export function generateIndustrialLayout() {
	// Generate the left side html
	const leftSideHTML = generateIndustrialLeftSide(industrialDataLeft);

	// Generate the right side html
	const rightSideHTML = renderIndustrialRightSide();

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
