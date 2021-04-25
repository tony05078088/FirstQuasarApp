<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("settings/getSettings");
    this.$store.dispatch("auth/handleAuthStateChange");
  }
};
</script>
