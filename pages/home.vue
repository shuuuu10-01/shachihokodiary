<template>
  <div class="container">
    {{ get_user }}
    {{ get_nowlogin }}
    <turn-book />
    <div class="button_field">
      <button @click="draw()">Draw</button>
      <button @click="reset()">Reset</button>
    </div>
  </div>
</template>

<script>
import TurnBook from "../components/book/TurnBook.vue";
export default {
  components: { TurnBook },
  computed: {
    get_user() {
      return this.$store.getters["auth/getUser"];
    },
    get_nowlogin() {
      return this.$store.getters["auth/isAutheticated"];
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 100vw;
  max-height: 100vh;
}
</style>
