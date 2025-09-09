import { generateCategoriesModalHTML } from '../modal/categoriesLikeModal.js';

// Helper function to show the modal and overlay
function showModalOverlay(modal, overlay) {
	modal.classList.remove('hidden');
	overlay.style.display = 'block';
}

// Helper function to hide the modal and overlay
function hideModalOverlay(modal, overlay) {
	modal.classList.add('hidden');
	overlay.style.display = 'none';
}

// Function to display the modal and overlay
// Function to open the modal
export function openModal(event, category) {
	// Prevent the default action of the button
	event.preventDefault();

	// Generate modal with the specific category contents
	const modalContents = generateCategoriesModalHTML(category);

	// Get the modal div and assign it to a variable
	const modalContainer = document.getElementById('modalDivId_categories');
	// Insert the modal contents into the variable container
	modalContainer.innerHTML = modalContents;

	// Get the modal element by its ID
	const modal = document.getElementById('categoryModal');
	// Get the modal element by its ID
	const overlay = document.getElementById('modalOverlayId_categories');
	// Show the modal and overlay when the button is clicked
	showModalOverlay(modal, overlay);

	// Close the modal and overlay when the close icon is clicked
	const closeCategoryModalIcon = document.getElementById('closeIcon');
	if (closeCategoryModalIcon) {
		closeCategoryModalIcon.addEventListener('click', () => {
			hideModalOverlay(modal, overlay);
		});
		console.log(closeCategoryModalIcon);
	}

	// close the modal and overlay when the user clicks outside the modal
	window.addEventListener('click', (e) => {
		if (e.target === modal) {
			hideModalOverlay(modal, overlay);
		}
	});

	// close the modal and overlay when the user press down the escape key
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
			hideModalOverlay(modal, overlay);
		}
	});
}
