<template>
  <div class="page">
    <p>rightpage</p>
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
  background-color: white;
}
</style>
