/* eslint-disable no-new, no-undef, camelcase */

import $ from './sizzle'
window.___emojikeyboard_element = null

chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (window.___emojikeyboard_element) {
    for (let key in changes) {
      let emoji = changes[key].newValue[0]
      window.___emojikeyboard_element.value += String.fromCodePoint('0x' + emoji.unified)
    }
  }
})

$('input[type="text"], textarea, div[contenteditable="true"], p[contenteditable="true"]').forEach(function (element) {
  element.onfocus = function () {
    window.___emojikeyboard_element = this
  }
  element.onblur = function () {
    // window.___emojikeyboard_element = null
  }
}, this)
