<template>
  <div class="page">
    <SVGAnimation :text="content"/>
  </div>
</template>

<script>
import SVGAnimation from '../kanjivg/SVGAnimation.vue'
export default {
  components: { SVGAnimation },
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.page {
  background-color: white;
}
</style>
