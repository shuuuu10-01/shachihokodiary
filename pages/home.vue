<template>
  <div>
    {{ get_user }}
    {{ get_nowlogin }}
    <turn-book />
  </div>
</template>

<script>
import TurnBook from '../components/book/TurnBook.vue'
export default {
  components: { TurnBook },
  computed: {
    get_user() {
      return this.$store.getters['auth/getUser']
    },
    get_nowlogin() {
      return this.$store.getters['auth/isAutheticated']
    }
  }
}
</script>
