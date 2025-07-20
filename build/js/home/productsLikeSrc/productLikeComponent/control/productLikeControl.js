import { generateProductModalHTML } from '../modal/productLikeModal.js';

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
export function openModal(event, product) {
	// Prevent the default action of the button
	event.preventDefault();

	// Generate modal with the specific product contents
	const modalContents = generateProductModalHTML(product);
	// Get the modal div and assign it to a variable
	const modalContainer = document.getElementById('productModal');
	// Insert the modal contents into the variable container
	modalContainer.innerHTML = modalContents;

	// Get the modal element by its ID
	const modal = document.getElementById('product_modal');
	// Get the overlay element by its ID
	const overlay = document.getElementById('productModalOverlay');
	// Show the modal and overlay when the button is clicked
	showModalOverlay(modal, overlay);

	// Close the modal and overlay when the close icon is clicked
	const closeProductModalIcon = document.querySelector('.close_icon');
	if (closeProductModalIcon) {
		closeProductModalIcon.addEventListener('click', () => {
			hideModalOverlay(modal, overlay);
		});
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
