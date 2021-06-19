<template>
  <div class="page">
    <img :src="image" alt="diary">
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
  max-width: 400px;
  height: 400px;
  object-fit: cover;
}
</style>
