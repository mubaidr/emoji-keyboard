/* eslint-disable no-new, no-undef, camelcase */

import $ from './sizzle'
window.___emojikeyboard_element = null

chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (window.___emojikeyboard_element) {
    for (let key in changes) {
      let emoji = changes[key].newValue[0]
      if (emoji) {
        if (window.___emojikeyboard_element.isContentEditable) {
          window.___emojikeyboard_element.innerHTML += String.fromCodePoint('0x' + emoji.unified)
        } else {
          let text = window.___emojikeyboard_element.value
          let selStart = window.___emojikeyboard_element.selectionStart
          let selEnd = window.___emojikeyboard_element.selectionEnd
          window.___emojikeyboard_element.value = text.slice(0, selStart) + String.fromCodePoint('0x' + emoji.unified) + text.slice(selEnd, text.length)
        }
      }
    }
  }
})

$('input[type="text"], textarea, [contenteditable="true"]').forEach(function (element) {
  element.onfocus = function () {
    window.___emojikeyboard_element = this
  }
}, this)
