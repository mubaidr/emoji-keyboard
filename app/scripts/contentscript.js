/* eslint-disable no-new, no-undef, camelcase */

import $ from './sizzle'
window.___emojikeyboard_element = null

$('input[type="text"], textarea, div[contenteditable="true"], p[contenteditable="true"]').forEach(function (element) {
  element.onfocus = function () {
    window.___emojikeyboard_element = this
  }
}, this)
