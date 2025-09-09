import { generateConnectLeftSide } from './connectLeftSide.js';
import { generateConnectRightSide } from './connectRight.js';
import { connectData } from './connectData.js';

// Function to generate the connect layout html dynamically
export function generateConnectLayout() {
	// Generate the left side HTML
	const leftSideHTML = generateConnectLeftSide(connectData);
	// Generate the right side HTML
	const rightSideHTML = generateConnectRightSide();

	// Combine both sides into a single layout
	return `
        <div
           class="grid grid-cols-1 py-[15px] px-[15px] gap-10 lg:flex lg:items-center"
            >
            ${leftSideHTML}
            ${rightSideHTML}
        </div>
    `;
}
