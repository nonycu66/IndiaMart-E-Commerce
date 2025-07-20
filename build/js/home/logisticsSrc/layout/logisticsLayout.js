import { generateLogisticsRightSide } from './logisticsLeftSide.js';
import { logisticsDataLeft } from '../data/logisticsData.js';
import { renderLogisticsRightSide } from './logisticsRightSide.js';

// Function to generate the logistics content layout dynamically
export function generateLogisticsLayout() {
	// Generate the left side
	const leftSideHTML = generateLogisticsRightSide(logisticsDataLeft);

	// Generate the right side
	const rightSideHTML = renderLogisticsRightSide();

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
