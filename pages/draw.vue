<template>
  <div class="container">
    <SVGAnimation ref="svgAnim" :text="input_text" />
    <div class="input_form">
      <textarea type="text" v-model="input_text" />
      <div class="button_field">
        <button @click="draw()">Draw</button>
        <button @click="reset()">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import SVGAnimation from "../components/kanjivg/SVGAnimation.vue";

export default {
  components: { SVGAnimation },
  data: () => ({
    input_text: ""
  }),
  methods: {
    draw() {
      this.$refs.svgAnim.draw();
    },
    reset() {
      this.input_text = "";
      this.$refs.svgAnim.reset();
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
}

textarea {
  width: 300px;
  height: 100px;
}
</style>
