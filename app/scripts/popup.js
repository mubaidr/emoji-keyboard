import Vue from 'vue'
import _ from 'lodash'
import emojiData from './../data/emojis.json'

/* eslint-disable no-new */
new Vue({
  el: '#emoji-app',
  data () {
    return {
      categories: ['People', 'Activity', 'Symbols', 'Objects', 'Nature', 'Foods', 'Places', 'Flags'],
      activeCategory: 'People',
      emojiSearch: '',
      emojiSelected: '',
      emojisRecent: []
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
  mounted () {},
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
    selectEmoji (code) {
      this.emojiSelected = '&#x' + code.unified
    }
  }
})
