// For Tally Components
import { renderHeaderHTML } from './tally/headerSrc/pages/headerPages.js';
import { renderHeroPages } from './tally/heroSrc/pages/heroPages.js';
import { renderFeaturesLayoutPages } from './tally/features/pages/featuresPages.js';
import { renderPricingLayoutPages } from './tally/pricing/pages/pricingPages.js';

document.addEventListener('DOMContentLoaded', () => {
	// Load Tally components for the Tally page
	renderHeaderHTML();
	renderHeroPages();
	renderFeaturesLayoutPages();
	renderPricingLayoutPages();
});
