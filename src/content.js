chrome.runtime.onMessage.addListener((req) => {
  if (req.message === 'toggle_womm_badge') {
    let id = 'womm-badge'

    var div = document.getElementById(id)

    if (div) {
      document.body.removeChild(div)
    } else {
      div = document.createElement('div')
      div.id = id

      document.body.appendChild(div)
    }
  }
})
