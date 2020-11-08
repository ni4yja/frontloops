new Vue({
  el: '#app',
  data: function(){
    return {
      options: {
          afterLoad: this.afterLoad,
          navigation: false,
          anchors: ['page1', 'page2', 'page3']
      }
    }
  }
})