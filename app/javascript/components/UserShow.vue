<template>
  <div>
    <div>Email: {{user.email }}</div>


    <h2>Push notification reminders:</h2>
    reminders are sent every 24 hours if you haven't recorded any gratitudes
    <div v-if="user.reminders_enabled">
      <button v-on:click="disablePushReminders">disable</button>
    </div>
    <div v-else>
      <button v-on:click="enablePushReminders">enable</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return this.$store.state.UserStore
    },
    mounted() {
      this.$store.dispatch('UserStore/show')
    },
    methods: {
      enablePushReminders: function (event) {
        this.$store.dispatch('UserStore/update',{reminders_enabled: true})
      },
      disablePushReminders: function (event) {
        this.$store.dispatch('UserStore/update',{reminders_enabled: false})
      }
    },
  }
</script>