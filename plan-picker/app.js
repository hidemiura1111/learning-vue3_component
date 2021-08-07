const app = Vue.createApp({
  // data() {
  //   return {
  //     plans: ['The Single', 'The Curious', 'The Addict']
  //   }
  // }
})
  
.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  }
})
  
.component('plan', {
  template: '#plan-template',
  props: {
    name: { type: String, required: true }
  }
})
.mount('#app')