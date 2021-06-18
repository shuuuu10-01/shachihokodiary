<template>
  <component :is="svg" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "0002c"
    }
  },
  computed: {
    svg() {
      return () =>
        import(`@/node_modules/@madcat/kanjivg/dist/main/${this.name}.svg`);
    }
  },
  updated: function() {
    this.$anime({
      targets: "path",
      strokeDashoffset: [this.$anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 500,
      delay: function(el, i) {
        return i * 250;
      }
    });
  }
};
</script>

<style scoped>
svg {
  width: 40px;
  height: 40px;
  border-bottom: solid 1px;
}
</style>
