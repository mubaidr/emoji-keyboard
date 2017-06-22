import Vue from 'vue'
import _ from 'lodash'
import emojiData from './../data/emoji.json'

/* eslint-disable no-new */
new Vue({
  el: '#emoji-app',
  data () {
    return {
      /* eslint-disable */
      categories: ['People', 'Activity', 'Symbols', /* 'Regional', 'Modifier', */ 'Objects', 'Nature', 'Food', 'Travel' /*, 'Flags' */ ],
      activeCategory: 'People'
    }
  },
  watch: {},
  computed: {
    emojis() {
      return _.orderBy(_.filter(emojiData, (emoji) => {
        return emoji.category === this.activeCategory.toLowerCase()
      }), 'order', 'asc')
    }
  },
  created() {},
  mounted() {},
  methods: {}
})
