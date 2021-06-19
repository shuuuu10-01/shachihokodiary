<template>
  <div>
    {{ get_user }}
    {{ get_nowlogin }}
  </div>
</template>

<script>
export default {
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
