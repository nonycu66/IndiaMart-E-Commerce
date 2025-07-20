export function yearIncrement() {
	// Get the year html element into javascript
	const yearElement = document.getElementById('year');
	// Call the Date function and assign it to a variable
	const currentYear = new Date();
	// Call the getFullYear function and assign it to a variable
	const year = currentYear.getFullYear();
	// Insert the current year into the yearElement
	yearElement.innerHTML = year;
}
