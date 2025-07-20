import { generateMachineryLeftSide } from './machineryLeftSide.js';
import { machineryDataLeft } from '../data/machineryData.js';
import { renderMachineryRightSide } from './machineryRightSide.js';

// Function to generate the machinery content layout dynamically
export function generateMachineryLayout() {
	// Generate the left side html
	const leftSideHTML = generateMachineryLeftSide(machineryDataLeft);

	// Generate the right side html
	const rightSideHTML = renderMachineryRightSide();

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
