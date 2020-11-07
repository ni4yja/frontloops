new Vue({
  el: '#app',
  data: {
    show: false,
    isOpen: false,
    items: [
      'Holidays',
      'Berlin',
      'Summer vacation'
    ]
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
})