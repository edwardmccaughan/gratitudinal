<template>
  <div>
    <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
      <div class="field">
        <label> Today I am grateful for:</label>
        <input type="text" v-model="gratitude.body" class="form-control">
        <input type="submit" value="save" />
      </div>
    </form>

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
      return this.$store.state.GratitudesStore
    },
    mounted() {
      this.$store.dispatch('GratitudesStore/index_today');
    },
    methods: {
      create() {
        this.$store.dispatch('GratitudesStore/create',this.gratitude).then((response) => {
          this.$store.dispatch('GratitudesStore/index_today');
          this.gratitude.body = ""
        })
      }
    }
  }
</script>