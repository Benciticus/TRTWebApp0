const app = Vue.createApp({
  // data, functions to react to events, component templates
  //template: '<h2>I am the template</h2>'
  data(){
    return{
      items: [
        {choice: false, lvl: 1, type: 'vNum', id:1, isHighlighted: true, content: '1 '},
        {choice: false, lvl: 1, type: 'DI', id:2, isHighlighted: true, content: 'DI'},
        {choice: false, lvl: 1, type: 'fNum', id:3, isHighlighted: true, content: '06'},
        {choice: false, lvl: 2, type: 'curlOpen', id:4, isHighlighted: false, content: '{'},
        {choice: true, lvl: 3, type: 'pareOpen', id:5, isHighlighted: false, content: '('},
        {choice: true, lvl: 3, type: 'phr', id:6, isHighlighted: false, content: 'This is the'},
        {choice: true, lvl: 3, type: 'pareClos', id:7, isHighlighted: false, content: ')'},
        {choice: true, lvl: 2, type: 'phr', id:8, isHighlighted: true, content: ' beginning of the gospel '},        
        {choice: true, lvl: 3, type: 'word1', id:9, isHighlighted: true, content: 'of'},
        {choice: false, lvl: 3, type: 'fwdSlash', id:10, isHighlighted: false, content: '/'},
        {choice: true, lvl: 3, type: 'word2', id:11, isHighlighted: false, content: 'about '},
        {choice: true, lvl: 2, type: 'phr', id:12, isHighlighted: true, content: 'Jesus '},
        {choice: false, lvl: 2, type: 'DI', id:13, isHighlighted: true, content: 'DI '},
        {choice: false, lvl: 2, type: 'fNum', id:14, isHighlighted: true, content: '07'},
        {choice: true, lvl: 2, type: 'phr', id:15, isHighlighted: true, content: 'Christ, '},
        {choice: false, lvl: 2, type: 'fNum', id:16, isHighlighted: true, content: '08'},
        {choice: true, lvl: 3, type: 'squaOpen', id:17, isHighlighted: true, content: '['},
        {choice: true, lvl: 4, type: 'pareOpen', id:18, isHighlighted: false, content: '('},
        {choice: true, lvl: 4, type: 'phr', id:19, isHighlighted: false, content: 'the'},
        {choice: true, lvl: 4, type: 'pareClos', id:13, isHighlighted: false, content: ')'},
        {choice: true, lvl: 3, type: 'phr', id:14, isHighlighted: true, content: ' Son of God'},
        {choice: true, lvl: 3, type: 'squaClos', id:20, isHighlighted: true, content: ']'},
        {choice: true, lvl: 2, type: 'phr', id:21, isHighlighted: true, content: ': '},
        {choice: false, lvl: 2, type: 'phr', id:22, isHighlighted: false, content: '⇔'},
        {choice: true, lvl: 2, type: 'phr', id:23, isHighlighted: false, content: ' The good '},
        {choice: true, lvl: 3, type: 'word1', id:24, isHighlighted: false, content: 'message'},
        {choice: true, lvl: 3, type: 'fwdSlash', id:25, isHighlighted: false, content: '/'},
        {choice: true, lvl: 3, type: 'word2', id:26, isHighlighted: false, content: 'news '},
        {choice: true, lvl: 2, type: 'phr', id:27, isHighlighted: false, content: 'about '},
        {choice: true, lvl: 3, type: 'squaOpen', id:28, isHighlighted: false, content: '['},
        {choice: true, lvl: 3, type: 'phr', id:28, isHighlighted: false, content: "God's Son"},
        {choice: true, lvl: 3, type: 'squaClos', id:28, isHighlighted: false, content: ']'},
        {choice: true, lvl: 2, type: 'phr', id:28, isHighlighted: false, content: ' Jesus '},
        {choice: false, lvl: 2, type: 'DI', id:28, isHighlighted: false, content: 'DI'},
        {choice: true, lvl: 2, type: 'phr', id:28, isHighlighted: false, content: ' Christ begins'},
        {choice: false, lvl: 2, type: 'curlClos', id:28, isHighlighted: false, content: '}'},
      ]
    }
  },
  methods: {
    toggleShowBooks(){
      this.showBooks = !this.showBooks
    },
    toggleFav(book){
      book.isFav = !book.isFav
    },
    toggleChoice(i){
      i.isHighlighted = !i.isHighlighted
    }
  },
  computed: {
    highlightedItems(){
      return this.items.filter((item) => item.isHighlighted)
    }

  }
})

app.mount('#app')