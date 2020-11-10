new Vue({
  el: "#app",
  data: {
    activeItem: '2017'
  },
  methods: {
  	isActive (tabItem) {
      return this.activeItem === tabItem
    },
    setActive (tabItem) {
      this.activeItem = tabItem
    }
  }
})