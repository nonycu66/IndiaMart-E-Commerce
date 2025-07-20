import { generateChemicalsLeftSide } from './chemicalsLeftSide.js';
import { chemicalsDataLeft } from '../data/chemicalsData.js';
import { renderChemicalsRightSide } from './chemicalsRightSide.js';

// function to generate the chemicals content layout dynamically
export function generateChemicalsLayout() {
	// Generate the left side
	const leftSideHTML = generateChemicalsLeftSide(chemicalsDataLeft);

	// Generate the right side
	const rightSideHTML = renderChemicalsRightSide();

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
