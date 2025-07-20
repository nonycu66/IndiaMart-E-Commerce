import { generateMedicalLeftSide } from './medicalLeftSide.js';
import { medicalDataLeft } from '../data/medicalData.js';
import { renderMedicalRightSide } from './medicalRightSide.js';

// Function to generate the medical content layout dynamically
export function generateMedicalLayout() {
	// Generate the left side
	const leftSideHTML = generateMedicalLeftSide(medicalDataLeft);

	// Generate the right side
	const rightSideHTML = renderMedicalRightSide();

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
