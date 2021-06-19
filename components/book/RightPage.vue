<template>
  <div class="page">
    <img id="main" :src="image" alt="diary">
    <img id="right" src="@/assets/img/tape_right.png" alt="tape">
    <img id="left" src="@/assets/img/tape_left.png" alt="tape">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
  box-shadow: inset rgb(0 0 0 / 30%) 10px 0px 14px 7px !important
}
.page img {
  height: 300px;
  object-fit: cover;
}
.page img#main {
  box-shadow: rgb(0 0 0 / 30%) -2px 2px 5px 1px !important;
}
.page img#left {
  position: absolute;
  left: -19px;
  bottom: 16px;
}
.page img#right {
  position: absolute;
  right: -29px;
  top: 15px;
}
</style>
