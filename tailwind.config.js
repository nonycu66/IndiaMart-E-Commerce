/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html', './build/js/**/*.js'],
	theme: {
		extend: {
			backgroundImage: {
				'home-logo': 'url("/build/img/hrd-sp-v32.png")',
				'shopping-logo': 'url("/build/img/im_logo.jpg")',
				'nav-icon': 'url("/build/img/hrd-sp-v32.png")',
				'help-dropdown-icon': 'url("/build/icon/home-new-icon16.png")',
				'signin-dropdown-icon': 'url("/build/icon/home-new-icon16.png")',
				'close-icon': 'url("/build/icon/cross.svg")',
				'message-icon': 'url("/build/icon/messsage-box.png")',
				'globe-icon': 'url("/build/icon/globe.png")',
				'country-icon': 'url("/build/img/country-v5.png")',
				'caret-icon': 'url("/build/icon/caret-down.svg")',
				'google-icon': 'url("/build/icon/Glogo.png")',
				'download-icon': 'url("/build/icon/download.png")',
				'form-icon': 'url("/build/icon/blform-sprite22.png")',
				'search-icon': 'url("/build/img/home-sprite2.png")',
				'desktop-banner': 'url("/build/img/desktop-banner.webp")',
			},
			boxShadow: {
				'product-box-shadow': '-16 0 13px 0 rgba(229, 229, 229, 0.16)',
				'shopping-category-box-shadow': '0 1px 4px rgba(0, 0, 0, 0.15)',
				'featured-product-box-shadow': '0 4px 7px rgba(0, 0, 0, 0.06)',
				'mens-wear-box-shadow': '0 4px 7px rgba(0, 0, 0, 0.06)',
				'ladies-wear-box-shadow': '0 1px 4px rgba(0, 0, 0, 0.15)',
				'form-box-shadow': '0 0 10px rgba(0, 0, 0, 0.7)',
			},
		},
	},
	plugins: [],
};
