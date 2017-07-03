import Vue from 'vue'
import _ from 'lodash'

/* eslint-disable no-new, no-undef */

new Vue({
  el: '#emoji-app',
  data () {
    return {
      categories: ['People', 'Activity', 'Symbols', 'Objects', 'Nature', 'Foods', 'Places', 'Flags'],
      activeCategory: 'People',
      emojiSearch: '',
      emojiSelected: '',
      emojiRecent: [],
      emojiData: require('./../data/emojis.json')
    }
  },
  watch: {
    'emojiSelected' (value) {
      this.copyToClipboard(value)
    }
  },
  computed: {
    emojis () {
      return _.orderBy(_.filter(this.emojiData, (emoji) => {
        return emoji.category.toLowerCase() === this.activeCategory.toLowerCase()
      }), 'sort_order', 'asc')
    }
  },
  created () {
    this.initializeRecentEmoji()
  },
  mounted () {
    this.$nextTick(() => {})
  },
  methods: {
    getSkinTones () {
      return _.orderBy(_.filter(this.emojiData, (emoji) => {
        return emoji.category.toLowerCase() === 'Skin Tones'.toLowerCase()
      }), 'sort_order', 'asc')
    },
    containSearch (emoji) {
      let txt = this.emojiSearch.toLowerCase()
      return emoji.name ? emoji.name.toLowerCase().includes(txt) : false ||
        emoji.short_name ? emoji.short_name.toLowerCase().includes(txt) : false ||
        emoji.short_names ? (emoji.short_names.indexOf(txt) > -1) : false ||
        emoji.text ? emoji.text.toLowerCase().includes(txt) : false ||
        emoji.texts ? (emoji.texts.indexOf(txt) > -1) : false
    },
    selectEmoji (emoji, isRecent) {
      this.emojiSelected = String.fromCodePoint('0x' + emoji.unified)

      if (!isRecent) {
        this.addRecentEmoji(emoji)
      }
    },
    showemoji (emoji) {
      return '_' + emoji.unified
    },
    /* chrome utilties */
    clearChromeStorage (callback) {
      chrome.storage.local.clear(callback)
    },
    initializeRecentEmoji (callback) {
      chrome.storage.local.get(null, (items) => {
        if (items && items.emojis) {
          if (items.emojis.length > 0) {
            this.emojiRecent = items.emojis
          }
        } else {
          chrome.storage.local.set({
            'emojis': []
          }, callback)
        }
      })
    },
    addRecentEmoji (emoji, callback) {
      chrome.storage.local.get(null, (items) => {
        let emojis = items.emojis
        _.remove(emojis, {
          unified: emoji.unified
        })
        if (items.emojis.length >= 7) {
          emojis.pop()
        }
        emojis.unshift(emoji)
        this.emojiRecent = emojis
        chrome.storage.local.set({
          'emojis': emojis
        }, callback)
      })
    },
    copyToClipboard (text) {
      const input = document.createElement('input')
      input.style.position = 'fixed'
      input.style.opacity = 0
      input.value = text
      document.body.appendChild(input)
      input.select()
      document.execCommand('Copy')
      document.body.removeChild(input)
    }
  }
})
