<template>
  <div class="turn-grid">
    <div>
      <h1>Double display</h1>
      <fw-turn class="turn">
        <div class="flip_page_double hard">表紙</div>
        <div class="flip_page_double hard">P1 left</div>
        <div class="flip_page_double hard">P1 right</div>
        <div class="flip_page_double hard">P2 left</div>
        <div class="flip_page_double hard">P2 right</div>
        <div class="flip_page_double hard">裏表紙</div>
      </fw-turn>
    </div>
  </div>
</template>

<script>
import { FwTurn } from "vue-turnjs";
export default {
  components: { FwTurn }
}
</script>

<style scoped>
  .turn-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 800px;
  }
  .turn {
    height: 600px;
  }
  .flip_page_double {
    width: 1000px;
    height: 600px;
    text-align: center;
    line-height: 300px;
    vertical-align: middle;
    background: url("https://placehold.jp/500x600.png");
    background-size: ５00px 600px;
  }
</style>
