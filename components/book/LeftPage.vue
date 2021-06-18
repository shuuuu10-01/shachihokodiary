<template>
  <div class="page">
    <p>leftpage</p>
    <img src="https://placehold.jp/500x500.png">
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
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
