<template>
  <div class="svg_field">
    <div class="svg" v-for="svgpath in svgpaths" :key="svgpath.key">
      <SVGElement v-show="svgpath != '' && btnFlag" :name="svgpath" />
    </div>
  </div>
</template>

<script>
import SVGElement from './SVGElement.vue';

export default {
  components: { SVGElement },
  props: {
    text: {
      type: String,
      required: true,
      default: ""
    }
  },
  data: () => ({
    texts: [],
    svgpaths: [],
    btnFlag: false
  }),
  methods: {
    draw() {
      this.texts = [];
      this.svgpaths = [];
      this.texts = this.text.split("");
      this.texts.forEach(e => {
        this.svgpaths.push(("000" + e.charCodeAt(0).toString(16)).slice(-5));
      });
      console.log("svgpaths:[" + this.svgpaths + "]");
      this.btnFlag = true;
    },
    reset() {
      this.texts = [];
      this.svgpaths = [];
      this.btnFlag = false;
    }
  }
};
</script>

<style scoped>
.svg_field {
  display: flex;
  width: 600px;
  height: 500px;
  flex-wrap: wrap;
  align-content: flex-start;
  background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
  padding: 10px;
  margin-bottom: 30px;
}
</style>
