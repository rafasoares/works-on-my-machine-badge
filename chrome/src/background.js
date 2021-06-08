chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.sendMessage(tab.id, { 'message': 'toggle_womm_badge' })
})
