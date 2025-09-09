// For help Components
import { renderHeaderHTML } from './help/headerSrc/pages/headerPages.js';
import { renderTopBannerLayout } from './help/topBannerSrc/pages/topBannerPages.js';
import { renderMiddleBannerLayout } from './help/middleBannerSrc/pages/middleBannerPages.js';
import { renderBottomBannerLayout } from './help/bottomBannerSrc/pages/bottomBannerPages.js';
import { renderFooterLayoutHTML } from './help/footerSrc/footerPages.js';

document.addEventListener('DOMContentLoaded', () => {
	// Load help components for the help page
	renderHeaderHTML();
	renderTopBannerLayout();
	renderMiddleBannerLayout();
	renderBottomBannerLayout();
	renderFooterLayoutHTML();
});
