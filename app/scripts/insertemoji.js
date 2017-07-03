if (window.___emojikeyboard_element && window.___emojikeyboard_emoji) {
  if (window.___emojikeyboard_element.isContentEditable) {
    window.___emojikeyboard_element.innerHTML += window.___emojikeyboard_emoji
  } else {
    let text = window.___emojikeyboard_element.value
    let selStart = window.___emojikeyboard_element.selectionStart
    let selEnd = window.___emojikeyboard_element.selectionEnd
    window.___emojikeyboard_element.value = text.slice(0, selStart) + window.___emojikeyboard_emoji + text.slice(selEnd, text.length)
  }
}
