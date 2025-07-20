import { renderHeaderView } from '../headerComponent/renderHeaderLayout.js';

export function renderShoppingHeaderHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('div_container');

	// Call the headerHTML function and insert it into headerView variable
	const headerView = renderHeaderView();
	// Append headerView to headerElem
	container.appendChild(headerView);
}
