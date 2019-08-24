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
        return this.$store.state.counter
      },
      double(){
        return this.$store.getters.doubleClicks
      }
    },
    methods: {
      clicked() {
        this.$store.commit('increment')
      }
    }
  }
</script>