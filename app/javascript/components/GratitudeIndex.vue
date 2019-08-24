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
  export default {
    data() {
      return this.$store.state.gratitudes
    },
    mounted() {
      this.$store.dispatch('gratitudes/index');
    }
  }
</script>