function openSearch(tab) {
  window.open('http://twitter.com/search?f=live&q=' + tab.url.split('?')[0] + '%20filter%3Alinks', 'twitterextension', 'top=' + window.screenTop +', left=' + (window.screenLeft + tab.width - 500) + ', width=500, height=' + tab.height);
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
