<template>
  <div>
    all gratitudes:
    <div v-for="gratitudes in gratitudes_split_by_date">
      <hr>
      {{ gratitudes[0].created_at.split("T")[0]}}
      <div v-for="gratitude in gratitudes">
        <div>{{ gratitude.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('GratitudesStore/index')
    },
    computed: {
      gratitudes_split_by_date() {
        return this.$store.getters['GratitudesStore/split_gratitudes_by_date']
      }
    }
  }
</script>