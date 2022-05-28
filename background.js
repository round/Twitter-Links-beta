function openSearch(tab) {
  chrome.windows.getCurrent(function (currentWindow) {
    TwitterLinksPopup = chrome.windows.create({
      url: 'http://twitter.com/search?q=' +
        encodeURIComponent(tab.url) +
        '&src=typed_query' +
        '&TwitterLinks',
      tabId: tab.id,
      top: (currentWindow.top + (currentWindow.height - tab.height)),
      left: (currentWindow.left + tab.width - 400),
      width: 400,
      height: tab.height,
    }
    );
  });
}

chrome.action.onClicked.addListener(function (tab) {
  openSearch(tab);
});

chrome.contextMenus.create({
  id: 'twitter-links-search',
  title: 'Twitter links to this page\u2026'
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  openSearch(tab);
});
