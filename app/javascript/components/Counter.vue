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
        return this.$store.state.counter.counter
      },
      double(){
        return this.$store.getters["counter/doubleClicks"]
      }
    },
    methods: {
      clicked() {
        this.$store.commit("counter/increment")
      }
    }
  }
</script>