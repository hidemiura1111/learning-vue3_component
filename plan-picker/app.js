let PlanComponent = {
  template: '#plan-template',
  props: {
    name: { type: String, required: true },
    selected: {type: Boolean, default: false}
  },
  methods: {
    select() {
      this.$emit('select', this.name)
    }
  },
}

let PlanPickerComponent = {
  components: { plan: PlanComponent },
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: null
    }
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan
    }
  }
}

const app = Vue.createApp({
  components: { 'plan-picker': PlanPickerComponent }
  // data() {
  //   return {
  //     plans: ['The Single', 'The Curious', 'The Addict']
  //   }
  // }
})
  
// .component('plan-picker', {
//   components: { plan: PlanComponent },
//   template: '#plan-picker-template',
//   data() {
//     return {
//       plans: ['The Single', 'The Curious', 'The Addict']
//     }
//   }
// })
  
// .component('plan', {
//   template: '#plan-template',
//   props: {
//     name: { type: String, required: true }
//   }
// })
.mount('#app')