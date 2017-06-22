import Vue from 'vue'
import _ from 'lodash'
import emojiData from './../data/emoji.json'

/* eslint-disable no-new */
new Vue({
  el: '#emoji-app',
  data () {
    return {
      /* eslint-disable standard/array-bracket-even-spacing */
      categories: ['People', 'Activity', 'Symbols', /* 'Regional', 'Modifier', */ 'Objects', 'Nature', 'Food', 'Travel' /*, 'Flags' */ ],
      activeCategory: 'People',
      search: ''
    }
  },
  watch: {},
  computed: {
    emojis () {
      return _.orderBy(_.filter(emojiData, (emoji) => {
        return emoji.category === this.activeCategory.toLowerCase()
      }), 'order', 'asc')
    }
  },
  created () {},
  mounted () {},
  methods: {
    containSearch (emoji) {
      return emoji.name.includes(this.search)
    },
    emojisRecent () {
      return {
        '1f600': {
          'name': 'grinning face',
          'category': 'people',
          'order': 1,
          'display': 1,
          'shortname': ':grinning:',
          'shortname_alternates': [],
          'ascii': [],
          'diversity': null,
          'diversities': [],
          'gender': null,
          'genders': [],
          'code_points': {
            'base': '1f600',
            'output': '1f600',
            'default_matches': ['1f600'],
            'greedy_matches': ['1f600'],
            'decimal': ''
          },
          'keywords': ['face', 'grin', 'smiley', 'emotion', 'happy', 'silly', 'laugh', 'thank you', 'awesome', 'smile', 'friend', 'teeth', 'pacman', 'fun', 'smileys', 'mood', 'emotions', 'emotional', 'hooray', 'cheek', 'cheeky', 'excited', 'proud', 'feliz', 'heureux', 'funny', 'laughing', 'lol', 'rofl', 'lmao', 'lmfao', 'hilarious', 'ha', 'haha', 'joy', 'chuckle', 'comedy', 'giggle', 'hehe', 'joyful', 'laugh out loud', 'thanks', 'thankful', 'praise', 'gracias', 'merci', 'thankyou', 'acceptable', 'okay', 'got it', 'cool', 'ok', 'will do', 'like', 'bien', 'yep', 'yup', 'smiles', 'friends', 'friendship', 'best friends', 'bestfriends', 'tooth', 'dentist', 'pac man']
        },
        '1f603': {
          'name': 'smiling face with open mouth',
          'category': 'people',
          'order': 2,
          'display': 1,
          'shortname': ':smiley:',
          'shortname_alternates': [],
          'ascii': [':D', ':-D', '=D'],
          'diversity': null,
          'diversities': [],
          'gender': null,
          'genders': [],
          'code_points': {
            'base': '1f603',
            'output': '1f603',
            'default_matches': ['1f603'],
            'greedy_matches': ['1f603'],
            'decimal': ''
          },
          'keywords': ['face', 'mouth', 'open', 'smile', 'smiley', 'emotion', 'happy', 'silly', 'laugh', 'good', 'smile', 'teeth', 'fun', 'smileys', 'mood', 'emotions', 'emotional', 'hooray', 'cheek', 'cheeky', 'excited', 'proud', 'feliz', 'heureux', 'funny', 'laughing', 'lol', 'rofl', 'lmao', 'lmfao', 'hilarious', 'ha', 'haha', 'joy', 'chuckle', 'comedy', 'giggle', 'hehe', 'joyful', 'laugh out loud', 'good job', 'nice', 'well done', 'bravo', 'congratulations', 'congrats', 'smiles', 'tooth', 'dentist']
        },
        '1f604': {
          'name': 'smiling face with open mouth & smiling eyes',
          'category': 'people',
          'order': 3,
          'display': 1,
          'shortname': ':smile:',
          'shortname_alternates': [],
          'ascii': [],
          'diversity': null,
          'diversities': [],
          'gender': null,
          'genders': [],
          'code_points': {
            'base': '1f604',
            'output': '1f604',
            'default_matches': ['1f604'],
            'greedy_matches': ['1f604'],
            'decimal': ''
          },
          'keywords': ['eye', 'face', 'mouth', 'open', 'smile', 'smiley', 'emotion', 'happy', 'laugh', 'smile', 'teeth', 'fun', 'smileys', 'mood', 'emotions', 'emotional', 'hooray', 'cheek', 'cheeky', 'excited', 'proud', 'feliz', 'heureux', 'laughing', 'lol', 'rofl', 'lmao', 'lmfao', 'hilarious', 'ha', 'haha', 'joy', 'chuckle', 'comedy', 'giggle', 'hehe', 'joyful', 'laugh out loud', 'smiles', 'tooth', 'dentist']
        },
        '1f601': {
          'name': 'grinning face with smiling eyes',
          'category': 'people',
          'order': 4,
          'display': 1,
          'shortname': ':grin:',
          'shortname_alternates': [],
          'ascii': [],
          'diversity': null,
          'diversities': [],
          'gender': null,
          'genders': [],
          'code_points': {
            'base': '1f601',
            'output': '1f601',
            'default_matches': ['1f601'],
            'greedy_matches': ['1f601'],
            'decimal': ''
          },
          'keywords': ['eye', 'face', 'grin', 'smile', 'smiley', 'emotion', 'happy', 'silly', 'laugh', 'thank you', 'good', 'beautiful', 'selfie', 'smile', 'friend', 'teeth', 'dumb', 'grimace', 'fun', 'smileys', 'mood', 'emotions', 'emotional', 'hooray', 'cheek', 'cheeky', 'excited', 'proud', 'feliz', 'heureux', 'funny', 'laughing', 'lol', 'rofl', 'lmao', 'lmfao', 'hilarious', 'ha', 'haha', 'joy', 'chuckle', 'comedy', 'giggle', 'hehe', 'joyful', 'laugh out loud', 'thanks', 'thankful', 'praise', 'gracias', 'merci', 'thankyou', 'acceptable', 'good job', 'nice', 'well done', 'bravo', 'congratulations', 'congrats', 'cute', 'pretty', 'adorable', 'adore', 'beauty', 'cutie', 'babe', 'lovely', 'smiles', 'friends', 'friendship', 'best friends', 'bestfriends', 'tooth', 'dentist', 'idiot', 'ignorant', 'stupid']
        }
      }
    }

  }
})
