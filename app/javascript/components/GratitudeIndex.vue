<template>
  <div>
    all gratitudes:
    <div v-for="gratitude in gratitudes">
      <div><router-link :to="{path: '/gratitudes/' + gratitude.id}">{{ gratitude.body }}</router-link> </div>
      <div>{{ gratitude.user }}</div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      gratitudes: { required: false}
    },
    mounted() {
      const url = `/gratitudes.json`
      console.log("url",url)
      axios.get(url)
        .then(response => {
          console.log( response.data)
          this.gratitudes = response.data
        })
    }
  }
</script>