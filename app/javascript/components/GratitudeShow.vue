<template>
  <div>
    <div>{{ gratitude.body }}</div>
    <div>{{ gratitude.user }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return this.$store.state.gratitudes
    },
    mounted() {
      this.$store.dispatch('gratitudes/show', this.$route.params.id);
    },
    beforeRouteUpdate (to, from, next) {
      this.$store.dispatch('gratitudes/show', to.params.id);
      next()
    }
  }


  // export default {
  //   props: {
  //     gratidude_id: { required: false},
  //     json_data: { required: false}
  //   },
  //   mounted() {
  //     const url = `/gratitudes/${ this.$route.params.id}.json`
  //     console.log("url",url)
  //     axios.get(url)
  //       .then(response => {
  //         this.json_data = response.data
  //       })
  //   },
  //   beforeRouteUpdate (to, from, next) {
  //     const url = `/gratitudes/${ to.params.id}.json`
  //     console.log("changing url",url, to)
  //     axios.get(url)
  //       .then(response => {
  //         this.json_data = response.data
  //         console.log(this.json_data)
  //       })
  //     next()
  //   }
  // }
</script>