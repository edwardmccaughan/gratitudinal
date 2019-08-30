<template>
  <div>
    <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
      <label> Today I am grateful for:</label>
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="gratitude.body">
        <div class="input-group-append">
          <input type="submit" value="❤" class="btn btn-primary"  />
        </div>
      </div>
    </form>


    <ul v-for="gratitude in gratitudes">
      <li>{{ gratitude.body }}</li>
    </ul>
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
          // TODO: return focus to input field in case of mobile weirdness
        })
      }
    }
  }
</script>