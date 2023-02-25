// background.js

// When the browser button is clicked, send a message to the content script to hide images
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, { action: "hideImages" });
});
