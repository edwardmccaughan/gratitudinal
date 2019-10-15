<template>
  <div>
    <div>Email: {{user.email }}</div>
    <div>push reminders enabled: {{user.reminders_enabled ? 'enabled' : 'not enabled' }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return this.$store.state.UserStore
    },
    mounted() {
      this.$store.dispatch('UserStore/show')
    }
  }
</script>