<template>
  <div>
    <div>{{ json_data.body }}</div>
    <div>{{ json_data.user }}</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      gratidude_id: { required: false},
      json_data: { required: false}
    },
    mounted() {
      const url = `/gratitudes/${ this.$route.params.id}.json`
      console.log("url",url)
      axios.get(url)
        .then(response => {
          this.json_data = response.data
        })
    },
    beforeRouteUpdate (to, from, next) {
      const url = `/gratitudes/${ to.params.id}.json`
      console.log("changing url",url, to)
      axios.get(url)
        .then(response => {
          this.json_data = response.data
          console.log(this.json_data)
        })
      next()
    }
  }
</script>