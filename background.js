function openSearch(tab) {

  chrome.windows.getCurrent(function(currentWindow) {
    window.open('http://twitter.com/search?f=live&q=' + tab.url.split('?')[0] + '%20filter%3Alinks', 'TwitterLinks', 'top=' + (currentWindow.top + (currentWindow.height - tab.height)) + ', left=' + (currentWindow.left + tab.width - 500) + ', width=500, height=' + tab.height);

  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  openSearch(tab)
});

chrome.contextMenus.create({
  title: "Who tweeted this\u2026"
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  openSearch(tab)
});
