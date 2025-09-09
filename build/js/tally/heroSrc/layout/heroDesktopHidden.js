import { heroDesktopHiddenData } from '../data/heroData.js';

// Function to generate the hero desktop hidden data html
export function generateHeroDesktopHiddenDataLayout() {
	let heroDesktopHidden = '';

	// loop through heroDesktopHiddenData array
	heroDesktopHiddenData.forEach((desktophidden) => {
		heroDesktopHidden =
			heroDesktopHidden +
			` 
            <li
               class="text-center px-3 my-3"
             >
                <img
                   src="${desktophidden.iconSrc}"
                    alt="View Tally"
                     class="mx-auto mb-4" 
                  />
                  <span
                      class="text-[13px] sm:text-sm font-semibold"
                    > 
                      ${desktophidden.topText}
                       <br />
                       ${desktophidden.bottomText}
                    </span>
              </li>
        `;
	});
	return heroDesktopHidden;
}
