<template>
  <component :is="svg" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "03000"
    }
  },
  data: () => ({
    no_svgs: ["03000", "00020"],
    no_svgs_flag: false
  }),
  computed: {
    svg() {
      this.no_svgs.forEach(exist_svg => {
        if(this.name == exist_svg) {
          this.no_svgs_flag = true;
        }
      });
      if(this.no_svgs_flag)
        return () =>
          import(`@/assets/svg/${this.name}.svg`);
      else
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
