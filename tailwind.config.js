/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.html', './js/**/*.js'],
	theme: {
		extend: {
			backgroundImage: {
				'home-logo': 'url("img/hrd-sp-v32.png")',
				'shopping-logo': 'url("img/im_logo.jpg")',
				'nav-icon': 'url("img/hrd-sp-v32.png")',
				'help-dropdown-icon': 'url("icon/home-new-icon16.png")',
				'signin-dropdown-icon': 'url("icon/home-new-icon16.png")',
				'close-icon': 'url("icon/cross.svg")',
				'message-icon': 'url("icon/messsage-box.png")',
				'globe-icon': 'url("icon/globe.png")',
				'country-icon': 'url("img/country-v5.png")',
				'caret-icon': 'url("icon/caret-down.svg")',
				'google-icon': 'url("icon/Glogo.png")',
				'download-icon': 'url("icon/download.png")',
				'form-icon': 'url("icon/blform-sprite22.png")',
				'search-icon': 'url("img/home-sprite2.png")',
				'desktop-banner': 'url("img/desktop-banner.webp")',
			},
			boxShadow: {
				'product-box-shadow': '-16 0 13px 0 rgba(229, 229, 229, 0.16)',
				'shopping-category-box-shadow': '0 1px 4px rgba(0, 0, 0, 0.15)',
				'featured-product-box-shadow': '0 4px 7px rgba(0, 0, 0, 0.06)',
				'mens-wear-box-shadow': '0 4px 7px rgba(0, 0, 0, 0.06)',
				'ladies-wear-box-shadow': '0 1px 4px rgba(0, 0, 0, 0.15)',
				'form-box-shadow': '0 0 10px rgba(0, 0, 0, 0.7)',
				'buy-leads-shadow': '0, 2px, 7px rgba(0, 0, 0, 0.1)',
				'buy-leads-shadow-dropdown': 'inset 0 1px 0 #fff',
			},
		},
	},
	plugins: [],
};
