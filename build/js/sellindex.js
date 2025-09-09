// For Sell Components
import { renderHeaderHTML } from './sell/headerSrc/pages/headerPages.js';
import { renderSellBanner } from './sell/BannerSrc/pages/bannerPages.js';
import { renderListingLayout } from './sell/listingSrc/pages/listingPages.js';
import { renderFooterLayoutHTML } from './sell/footerSrc/pages/footerPages.js';

document.addEventListener('DOMContentLoaded', () => {
	// Load Sell components for the sell page
	renderHeaderHTML();
	renderSellBanner();
	renderListingLayout();
	renderFooterLayoutHTML();
});
