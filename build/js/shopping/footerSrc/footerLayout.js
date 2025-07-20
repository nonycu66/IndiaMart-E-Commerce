// function to generate the footer contents dynamically
export function generateFooterLayoutHTML() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	const footerUl = document.createElement('ul');
	footerUl.classList.add(
		'py-4',
		'lg:py-8',
		'lg:max-w-[1240px]',
		'lg:my-0',
		'lg:mx-auto'
	);
	footerUl.innerHTML = ` 
           <li
              class="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row justify-center items-center lg:justify-between">
               <p>
                 <span>
                   Copyright &copy; 1996-${currentYear} IndiaMart. All rights reserved.
                 </span>
               </p>
               <p>
                 <a 
                   href="/build/home.html"  
                 >
                   Home
                 </a>
                  &nbsp;&nbsp;&nbsp;
                   <a 
                   href="./sell.html"  
                    >
                    Sell on IndiaMart
                    </a>
                  &nbsp;&nbsp;&nbsp;
                  <a 
                   href="#"  
                    >
                      FAQ
                    </a>
                  &nbsp;&nbsp;&nbsp;
                 <a 
                   href="#"  
                    >
                      Terms of Use
                    </a>
                  &nbsp;&nbsp;&nbsp;
                </p>
             </li>
    `;
	return footerUl;
}
