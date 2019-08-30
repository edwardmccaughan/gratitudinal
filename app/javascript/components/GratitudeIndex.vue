<template>
  <div>
    <h1>I have been grateful for:</h1>

    <div class="card text-white bg-primary mb-3" style="max-width: 40rem;" v-for="gratitudes in gratitudes_split_by_date">
      <div class="card-header">{{ gratitudes[0].created_at.split("T")[0]}}</div>
        <div class="card-body">
          <p class="card-text">
            <ul v-for="gratitude in gratitudes">
            <li>{{ gratitude.body }}</li>
          </ul>
        </p>
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