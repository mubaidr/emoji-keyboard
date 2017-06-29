// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly';

/* eslint-disable no-undef */

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'install') {
    // call a function to handle a first install
  } else if (details.reason === 'update') {
    // call a function to handle an update
    console.log('previousVersion', details.previousVersion)
  }
  chrome.storage.local.clear()
})

/*
chrome.browserAction.setBadgeText({text: '\'Allo'})

console.log('\'Allo \'Allo! Event Page for Browser Action')
*/
