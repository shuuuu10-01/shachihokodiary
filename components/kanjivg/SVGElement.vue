<template>
  <component :is="svg" :class="{edit: nowEdit}"/>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: "03000"
    },
    nowEdit: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    no_svgs: ["03000", "00020", "0300c", "0300d"],
    no_svgs_flag: false
  }),
  computed: {
    svg() {
      this.no_svgs.forEach(no_svg => {
        if (this.name == no_svg) {
          this.no_svgs_flag = true;
        }
      });
      if (this.no_svgs_flag)
        return () => import(`@/assets/svg/${this.name}.svg`);
      else
        return () =>
          import(`@/node_modules/@madcat/kanjivg/dist/main/${this.name}.svg`);
    }
  },
  methods: {
    animSvg() {
      if(this.nowEdit) {
        this.$anime({
          targets: ".edit path",
          strokeDashoffset: [this.$anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 500,
          delay: function(el, i) {
            return i * 250;
          }
        });
      }
    },
    reverseAnimSvg() {
      if(this.nowEdit) {
        this.$anime({
          targets: ".edit path",
          strokeDashoffset: [this.$anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 1000,
          direction: "reverse",
          delay: function(el, i) {
            return i * 1000;
          }
        });
      }
    },
  },
  updated: function() {
    // console.log(this.nowEdit)
    this.animSvg()
  },
  destroyed: function() {
    this.reverseAnimSvg()
  }
};
</script>

<style scoped>
svg {
  width: 25px;
  height: 25px;
  border-bottom: solid 1px;
}
</style>
