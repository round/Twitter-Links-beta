var style = document.createElement('style');
style.innerHTML = `
header[role="banner"],
div[data-testid="primaryColumn"] > div:first-child > div:first-child > div:first-child {
		display: none !important;
	}
`;
document.head.appendChild(style);

// document.title = 'Loading Twitter Links\u2026';

var extensionTitle = 'Twitter Links';
window.setInterval(function() {
    if (document.title !== extensionTitle) {
      document.title = extensionTitle;
    }
}, 100);
