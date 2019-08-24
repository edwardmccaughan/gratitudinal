<template>
  <div>
    <div>
      clicks: {{ counter }}
      double_clicks: {{ double }}
    </div>
    <button @click="clicked">increase</button>
  </div>
</template>

<script>
  export default {
    computed: {
      counter(){
        return this.$store.state.CounterStore.counter
      },
      double(){
        return this.$store.getters["CounterStore/doubleClicks"]
      }
    },
    methods: {
      clicked() {
        this.$store.commit("CounterStore/increment")
      }
    }
  }
</script>