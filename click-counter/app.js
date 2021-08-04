const app = Vue.createApp({

})
  
.component('click-counter', {
  // template: '<button @click="count++">{{count}}</button>',
  template: '#click-counter-template',
  data() {
    return {
      count: 0
    }
  }
})
.mount('#app')