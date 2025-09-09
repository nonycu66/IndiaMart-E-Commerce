// Function to generate the form elements
function formHTML() {
	return ` 
			<div class="flex-1">
				<h2>
					<span class="block text-center">Let us know your requirement</span>
					<span class="text-base font-normal mt-5 text-center block">
				       Get best deals from verified suppliers across India
					</span>
				</h2>
				<form
					action=""
					method="post"
					name="yourFormRequirement"
					class="mt-[30px]"
				>
					<div class="mb-5 relative">
						<input
							type="text"
							name=""
							id=""
							class="focus:outline-[2px] focus:outline focus:outline-[#111] text-sm font-normal mt-[5px] w-full rounded-[3px] border border-solid border-[#c9c6c6] py-[7px] px-[10px]"
							placeholder="Enter Products/Service name"
						/>
					</div>
					<div class="mb-5">
						<div class="mt-[5px] flex items-center">
							<input
								class="focus:outline-none bg-[rgba(239, 239, 239, 0.3)] w-[65px] rounded-[3px] border border-solid border-[#c9c6c6] py-[7px] px-[10px]"
								type="text"
								name=""
								id=""
								value="+91"
							/>
							<input
								type="text"
								name=""
								id=""
								maxlenght="10"
								placeholder="Enter your mobile number"
								class="focus:outline-[2px] focus:outline focus:outline-[#111] flex-1 font-normal text-sm rounded-[3px] border border-solid border-[#c9c6c6] py-[7px] px-[10px]"
							/>
						</div>
						<div class="cursor-pointer text-xs relative inline-block mt-[5px]">
							Your Country is
							<span id="">
								<span class="font-bold text-xs cursor-pointer">India</span>
								<span
									class="border-t-[5px] border-t-[#555] border-solid border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent absolute top-[36%] right-[-13px]"
								>
								</span>
							</span>
						</div>
					</div>
					<div class="mb-5 relative font-normal">
						<input
							type="text"
							name=""
							id=""
							placeholder="Please enter your name"
							class="focus:outline-[2px] focus:outline focus:outline-[#111] mt-[5px] w-full text-sm font-normal rounded-[3px] py-[7px] px-[10px] border border-solid border-[#c9c6c6]"
						/>
					</div>
					<div class="mb-[10px] font-normal text-[#111] flex items-center justify-center">
						<button
							type="button"
							class="bg-[#2e3192] py-2 px-[50px] rounded text-lg text-white cursor-pointer"
						>
							Submit Requirement
						</button>
					</div>
				</form>
			</div>
    `;
}

// Function to render the form
export function renderFormView() {
	// Generate the HTML for the form view
	const returnedForm = formHTML();

	// Create the main div container for the form div
	const container = document.createElement('div');
	// Set the class for the container
	container.classList.add(
		'py-5',
		'px-5',
		'h-auto',
		'rounded',
		'bg-[#ededed]',
		'flex',
		'items-center',
		'lg:ml-[15px]',
		'border',
		'border-solid',
		'border-[#2e3192]',
		'shadow-form-box-shadow',
		'w-full',
		'lg:w-auto'
	);
	// Dynamically insert the generated form html into the container variable
	container.innerHTML = returnedForm;

	// Return the fully populated div
	return container;
}
