import { generatePackagingLeftSide } from './packagingLeftSide.js';
import { packagingDataLeft } from '../data/packagingData.js';
import { renderPackagingRightSide } from './packagingRightSide.js';

// Function to generate the packaging content layout dynamically
export function generatePackagingLayout() {
	// Generate the left side
	const leftSideHTML = generatePackagingLeftSide(packagingDataLeft);

	// Generate the right side
	const rightSideHTML = renderPackagingRightSide();

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
