import Vue from 'vue'
import _ from 'lodash'
import emojiData from './../data/emojis.json'

/* eslint-disable no-new, no-undef */

new Vue({
  el: '#emoji-app',
  data () {
    return {
      categories: ['People', 'Activity', 'Symbols', 'Objects', 'Nature', 'Foods', 'Places', 'Flags'],
      activeCategory: 'People',
      emojiSearch: '',
      emojiSelected: '',
      emojisRecent: [],
      chrome: chrome
    }
  },
  watch: {},
  computed: {
    emojis () {
      return _.orderBy(_.filter(emojiData, (emoji) => {
        return emoji.category.toLowerCase() === this.activeCategory.toLowerCase()
      }), 'sort_order', 'asc')
    }
  },
  created () {},
  mounted () {
    console.log(this.chrome)
    this.initializeRecentEmoji()
  },
  methods: {
    getSkinTones () {
      return _.orderBy(_.filter(emojiData, (emoji) => {
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
      this.emojiSelected = emoji.unified
      if (!isRecent) {
        this.addRecentEmoji(emoji)
      }
    },
    showemoji (emoji) {
      return '_' + emoji.unified
    },
    /* chrome utilties */
    clearChromeStorage (callback) {
      this.chrome.storage.local.clear(callback)
    },
    initializeRecentEmoji (callback) {
      this.chrome.storage.local.get(null, (items) => {
        if (items && items.emojis) {
          if (items.emojis.length > 0) {
            this.emojisRecent = items.emojis
          }
        } else {
          this.chrome.storage.local.set({
            'emojis': []
          }, callback)
        }
      })
    },
    addRecentEmoji (emoji, callback) {
      this.chrome.storage.local.get(null, (items) => {
        let emojis = items.emojis
        if (items.emojis.length === 7) {
          emojis.pop()
        }
        emojis.unshift(emoji)
        this.emojisRecent = emojis
        this.chrome.storage.local.set({
          'emojis': emojis
        }, callback)
      })
    }
  }
})
