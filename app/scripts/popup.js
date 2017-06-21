import emoji from './../data/emoji.json'
/* eslint-disable no-undef */
var emojiContainer = $('#emojis');

//var txt = '&#x' + $(this).data('src') + ';';
Object.keys(emoji).forEach((key) => {
  var li = document.createElement('li');
  li.innerHTML = '&#x' + key + ';';
  emojiContainer.append(li);
})
