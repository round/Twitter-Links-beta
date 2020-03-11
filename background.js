function openSearch(tab) {

  chrome.windows.getCurrent(function(currentWindow) {
    //add per-tab logic and toggle / focus logic
    TwitterLinksPopup = window.open('http://twitter.com/search?f=live&q=' + tab.url.split('?')[0] + '%20filter%3Alinks', 'TwitterLinks-' + tab.id, 'top=' + (currentWindow.top + (currentWindow.height - tab.height)) + ', left=' +
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
