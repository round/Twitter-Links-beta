var style = document.createElement('style');
style.innerHTML = `
header[role="banner"],
div[data-testid="primaryColumn"] > div:first-child > div:first-child > div:first-child  > div:first-child  > div:first-child > div:first-child > div:first-child > div:first-child {
		display: none !important;
}

div[role="tablist"] > div {
	display: none;
}

div[role="tablist"] > div:nth-child(1),
div[role="tablist"] > div:nth-child(2) {
	display: block;
	width: 50%;
}

div[role="tablist"] > div a {
	padding-bottom: 15px;
}

div[aria-label="Previous"],
div[aria-label="Next"] {
	display: none !important;
}

nav[role="navigation"] > div > div {
	width: 100%;
}

`;
document.head.appendChild(style);

// document.title = 'Loading Twitter Links\u2026';

var extensionTitle = 'Twitter links to this page:';
window.setInterval(function() {
  if (document.title !== extensionTitle) {
    document.title = extensionTitle;
  }
}, 100);
