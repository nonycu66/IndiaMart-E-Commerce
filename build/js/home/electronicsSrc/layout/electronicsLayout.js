import { generateElectronicsLeftSide } from './electronicsLeftSide.js';
import { electronicsDataLeft } from '../data/electronicsData.js';
import { renderElectronicsRightSide } from './electronicsRightSide.js';

// Function to generate the electronics content layout dynamically
export function generateElectronicsLayout() {
	// Generate the left side html
	const leftSideHTML = generateElectronicsLeftSide(electronicsDataLeft);

	// Generate the right side html
	const rightSideHTML = renderElectronicsRightSide();

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
