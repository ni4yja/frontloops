new Vue({
  el: "#app",
  data: {
    activeItem: 'cafes'
  },
  methods: {
  	isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
})