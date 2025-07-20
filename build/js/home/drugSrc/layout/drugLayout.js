import { generateDrugLeftSide } from './drugLeftSide.js';
import { drugDataLeft } from '../data/drugData.js';
import { renderDrugRightSide } from './drugRightSide.js';

// Function to generate the drug content layout dynamically
export function generateDrugLayout() {
	// Generate the left side
	const leftSideHTML = generateDrugLeftSide(drugDataLeft);

	// Generate the right side
	const rightSideHTML = renderDrugRightSide();

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
