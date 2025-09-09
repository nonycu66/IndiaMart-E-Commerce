// Function to generate the signin dropdown html dynamically
export function generateSignInDropdownHTML(signInDropDownData) {
	if (!Array.isArray(signInDropDownData) || signInDropDownData.length === 0) {
		console.warn('signInDropDownData is not an array or is empty');
		return '<!-- SignInDropDownData is not available -->';
	}

	const { buttonText, newUserText, joinNowText, dropdownObjects } =
		signInDropDownData[0];

	let html = ` 
         	<div class="border-b border-[#eeeeee] border-solid">
				<a
					class="block no-underline w-[110px] py-[10px] my-[10px] mx-auto p-0 border border-solid border-[#00a699] text-center rounded-[3px] text-white bg-[#00a699] hover:bg-[#02625a]"
					href="#"
					>
					${buttonText}
					</a>
					<div class="py-[6px] px-[6px] text-[#757575] text-center">
					${newUserText}
					<p class="pl-[5px] inline-block text-[#2e3192] cursor-pointer hover:underline">${joinNowText}</p>
					</div>
				</div>
    `;

	// Loop through the rest of the dropdownObjects
	for (let i = 0; i < dropdownObjects.length; i++) {
		const item = dropdownObjects[i];
		const isAnchor =
			item.href &&
			item.signinIconPosition &&
			item.text.toLowerCase().includes('http') === false;

		if (isAnchor) {
			html = html + createLink(item);
		}
	}
	return html;
}

// Function to generate the link element
function createLink({ text, href, signinIconPosition }) {
	return ` 
       <a
		  class="block relative py-[10px] pl-[35px] w-full text-left text-[#111] text-[13px] hover:bg-[#f2f0f0]"
			href="${href}"
			> ${text}
			<span
			  class="absolute bg-[url('/build/icon/home-new-icon16.png')] top-[7px] left-[5px] h-5 w-10 bg-no-repeat"
			  style="background-position: ${signinIconPosition}" 
			>
			</span>
			</a>
  `;
}
