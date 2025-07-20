import { generateBuildingLeftSide } from './buildingLeftSide.js';
import { buildingDataLeft } from '../data/buildingData.js';
import { renderBuildingRightSide } from './buildingRightSide.js';

// Function to generate the building content layout dynamically
export function generateBuildingLayout() {
	// Generate the left side html
	const leftSideHTML = generateBuildingLeftSide(buildingDataLeft);

	// Generate the right side html
	const rightSideHTML = renderBuildingRightSide();

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
