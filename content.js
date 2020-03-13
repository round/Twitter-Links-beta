// (function() {
	console.log('content.js loaded');

	var style = document.createElement('style');
	style.innerHTML = `
	header[role="banner"],
	div[data-testid="primaryColumn"] > div:first-child > div:first-child > div:first-child {
			display: none !important;
		}
	`;
	document.head.appendChild(style);
// })();
