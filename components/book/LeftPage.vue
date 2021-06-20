<template>
  <div class="page">
    <p>{{ dateDisplay() }}</p>
    <SVGAnimation :text="content" :nowEdit="nowEdit" ref="svg" />
  </div>
</template>

<script>
import SVGAnimation from '../kanjivg/SVGAnimation.vue'
export default {
  components: { 
    SVGAnimation,
  },
  props: {
    content: {
      type: String,
      required: true
    },
    date: { 
      type: String,
      required: true
    },
    nowEdit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    dateDisplay() {
      const date_format = this.date.split("-")
      return date_format[0] + "年" + date_format[1] + "月" + date_format[2] + "日"
    },
    draw () {
      this.$refs.svg.draw()
    }
  }
}
</script>

<style scoped>
@font-face {
	font-family: 'MyFont2';
	src: url(../../assets/font/NewTegomin-Regular.ttf);
}
.page {
  background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
  text-align: left;
  box-shadow: inset rgb(0 0 0 / 30%) -10px 0px 14px 7px !important
}
.page p {
  padding-top: 70px;
  padding-left: 20px;
  border-bottom: solid 1px;
  border-bottom-style: dotted;
  font-family: MyFont2;
}
</style>
