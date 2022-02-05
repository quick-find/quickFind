let color = '#488FDB';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.contextMenus.create({
  id: "some-command",
  title: "some title",
  contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "some-command") {
      console.log("yay!");
  }
});
