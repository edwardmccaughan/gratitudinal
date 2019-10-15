<template>
  <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
    <div class="field">
      <label> Today I am grateful for:</label>
      <input type="text" v-model="gratitude.body" class="form-control">
    </div>
    <input type="submit" value="save" />
  </form>

</template>
<script>
  export default {
    data() {
      return this.$store.state.GratitudesStore
    },
    methods: {
      create() {
        this.$store.dispatch('GratitudesStore/create',this.gratitude).then((response) => {
          this.$router.push(`/gratitudes/${response.data.id}`)
        })
      }
    }
  }
</script>
