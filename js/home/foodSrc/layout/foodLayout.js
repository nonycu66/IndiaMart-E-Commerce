import { generateFoodLeftSide } from './foodLeftSide.js';
import { foodDataLeft } from '../data/foodData.js';
import { renderFoodRightSide } from './foodRightSide.js';

// Function to generate the food content layout dynamically
export function generateFoodLayout() {
	// Generate the left side html
	const leftSideHTML = generateFoodLeftSide(foodDataLeft);

	// Generate the right side html
	const rightSideHTML = renderFoodRightSide();

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
