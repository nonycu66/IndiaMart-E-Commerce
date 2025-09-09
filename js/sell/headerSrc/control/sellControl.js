function showLeads(leadsDropdown) {
	leadsDropdown.classList.remove('hidden');
}

function removeLeads(leadsDropdown) {
	leadsDropdown.classList.add('hidden');
}

export function displayLeads() {
	const leadsContainer = document.getElementById('leads_container');
	const leadsDropdown = document.getElementById('leads_div');

	let isDropdownVisible = false;

	leadsContainer.addEventListener('click', (e) => {
		e.stopPropagation(); // Prevent window click event from firing immediately
		if (leadsDropdown.classList.contains('hidden')) {
			showLeads(leadsDropdown);
			isDropdownVisible = true;
		} else {
			removeLeads(leadsDropdown);
			isDropdownVisible = false;
		}
	});

	// Listen for clicks outside the dropdown to hide it
	window.addEventListener('click', (e) => {
		if (
			isDropdownVisible &&
			!leadsContainer.contains(e.target) &&
			!leadsDropdown.contains(e.target)
		) {
			removeLeads(leadsDropdown);
			isDropdownVisible = false;
		}
	});
}
