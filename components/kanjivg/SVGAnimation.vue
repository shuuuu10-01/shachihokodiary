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
      this.texts.forEach((value, index) => {
        this.svgpaths[index] = ("000" + value.charCodeAt(0).toString(16)).slice(-5);
      });
      console.log("svgpaths:[" + this.svgpaths + "]");
      this.btnFlag = true;
    },
    reset() {
      this.texts = [];
      this.svgpaths = [];
      this.btnFlag = false;
    }
  },
  created() {
    this.draw();
  }
};
</script>

<style scoped>
.svg_field {
  display: flex;
  width: 500px;
  height: 600px;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: 10px;
}
</style>
