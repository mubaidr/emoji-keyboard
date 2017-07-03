/* eslint-disable no-new, no-undef, camelcase */

import $ from './sizzle'

$('input[type="text"], textarea, [contenteditable="true"]').forEach((element) => {
  console.log(element, 'testing')
  element.onfocus = () => {
    window.___emojikeyboard_element = element
  }
})
