<template>
  <div>
    <div>{{ gratitude.body }}</div>
    <div>{{ gratitude.user }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return this.$store.state.GratitudesStore
    },
    mounted() {
      this.$store.dispatch('GratitudesStore/show', this.$route.params.id);
    },
    beforeRouteUpdate (to, from, next) {
      this.$store.dispatch('GratitudesStore/show', to.params.id);
      next()
    }
  }
</script>