
// function getSelectedText() {
//   if (window.getSelection) {
//       return window.getSelection().toString();
//   }
//   else if (document.selection) {
//       return document.selection.createRange().text;
//   }
//   return '';
// }


let color = '#488FDB';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.contextMenus.create({
  id: "getText",
  title: "Get Text",
  contexts: ["all"]
});

// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// } 

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "getText") {

    //TODO Hightlight function



  //   document.addEventListener('DOMContentLoaded', function() {
  //     const test = document.querySelector('#test');
  //     test.addEventListener('click', function() {
  //         chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  //             chrome.tabs.executeScript(tabs[0].id, { code: `document.getSelection().toString()` }, (result) => {
  //                 alert(result);
  //             });
  //         });
  //     });
  // });
  }
});
