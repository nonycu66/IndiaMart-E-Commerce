const titleElem = {
	title: '<b>Search</b> for products & find <b>verified sellers</b> near you',
};

// function to dymamically generate the html
export function searchHTML() {
	// Get the container where you want to append the dynamically generated content
	const container = document.getElementById('header_container');
	// Create the search main div
	const searchMainDiv = document.createElement('div');
	// Append the search main div to the container
	container.appendChild(searchMainDiv);
	// Add class to searchMaindiv
	searchMainDiv.classList.add(
		'bg-[url(/build/img/bg-img.jpg)]',
		'text-center',
		'bg-[#ccc]',
		'py-[35px]',
		// 'px-[45px]',
		'relative',
		'h-[158px]',
		'bg-cover',
		'overflow-hidden',
		'bg-[position:100%_32%]'
	);

	// Create the search container div
	const searchContainerDiv = document.createElement('div');
	// Append the search container div to the search main div
	searchMainDiv.appendChild(searchContainerDiv);
	// Add class to searchContainerdiv
	searchContainerDiv.classList.add('w-[100%]', 'mx-auto', 'my-0', 'z-5');

	// Create the h3 element
	const h3 = document.createElement('h3');
	// Append the h3 to the search container div
	searchContainerDiv.appendChild(h3);
	// Add class to h3
	h3.classList.add(
		'text-[#f9f9f9]',
		'text-[18px]',
		'lg:text-[22px]',
		'text-nowrap'
	);
	h3.innerHTML = titleElem.title;

	// Create the search area div
	const searchAreaDiv = document.createElement('div');
	// Appdend the serach area div to the search container div
	searchContainerDiv.appendChild(searchAreaDiv);
	// Add class to searchAreaDiv
	searchAreaDiv.classList.add('mt-[12px]', 'h-[50px]');

	// render the search area div innerhtml
	searchAreaDiv.innerHTML = `
       
		  <form class="pt-[2px] pb-[5px] px-[10px]  w-full">
		    <div class="w-auto overflow-hidden whitespace-nowrap">
			    <div class="h-[44px] flex items-center justify-center">
               <button class="bg-[#ececec] relative  text-[#333] px-2 py-2 h-[100%] text-[16px] border-none cursor-pointer min-w-[30%] max-w-[30%] lg:min-w-[15%] w-auto text-left rounded-bl-[8px] rounded-tl-[8px]">
			 <div class="flex">
	         	<i class="w-6  h-6  bg-no-repeat inline-block  bg-[url('/build/icon/map-maker.png')] scale-[0.8]">
				</i>
                   <span class="absolute  left-8">All India</span>
                     <i class="h-[15px] w-[15px] bg-[url(/build/img/home-sprite2.png)]  bg-[position:-200px_-357px] bg-no-repeat absolute right-2"></i>
					 </div>
               </button>
	     	<input
			type="text"
			class="shrink min-w-[45%] max-w-[45%] lg:min-w-[35%] w-auto py-2 pr-[8px] pl-[10px] text-[0.9rem] h-[100%] border-none  relative  bg-white outline-none"
			id="search-input"
			placeholder="Enter product/service name"
			autocomplete="off"
			role="textbox"
			aria-autocomplete="list"
			aria-haspopup="true"
		/>
         <button type="button" class=" bg-[#02625a] text-[15px] text-white py-[2px] pl-[4px] h-[100%] md:px-[22px]  border-none  md:text-[19px] relative indent-5  cursor-pointer min-w-[25%] max-w-[25%] lg:min-w-[10%] w-auto font-bold  rounded-br-[8px] rounded-tr-[8px]">
              <i class="w-5 h-[19px] bg-[position:-39px_-484px] absolute left-[10px] top-[25%]  md:left-[20px] bg-[url('/build/img/home-sprite2.png')]">
			  </i>
             Search 
         </button>
		   </div>
		  </div>
       </form>
       `;
}
