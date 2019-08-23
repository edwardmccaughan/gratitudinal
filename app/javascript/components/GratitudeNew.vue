<template>
  <form method="post" action="/gratitudes">
    <input type="hidden" name="authenticity_token" :value="csrf">

    <div class="field">
      <label> Today I am gratful for:</label>
      <input type="text" name="gratitude[body]">
      <input type="text" name="gratitude[user_id]" value="1">
    </div>

    <button type="submit">Submit</button>
  </form>

</template>

<script>
  export default {
    data: () => {
      return ({
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      })
    }
  }
</script>