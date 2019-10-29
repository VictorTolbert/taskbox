<template>
  <div id="app">
    <InboxScreen />
  </div>
</template>

<script>
import store from "./store";
import InboxScreen from "./components/InboxScreen/InboxScreen.vue";
import "./index.css";

export default {
  name: "app",
  store,
  components: {
    InboxScreen
  }
};
</script>

<style>
@import "./index.css";
</style>
