<template>
  <div>
    <turn-book />
    <PenWrite />
  </div>
</template>

<script>
import TurnBook from "../components/book/TurnBook.vue";
import PenWrite from "../components/animation/PenWrite.vue";
export default {
  components: { 
    TurnBook,
    PenWrite 
  },
};
</script>
