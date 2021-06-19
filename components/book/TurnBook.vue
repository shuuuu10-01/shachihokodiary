<template>
  <div class="turn-grid">
    <div>
      <fw-turn 
        class="turn"
        ref="fwTurn"
      >
        <div class="flip_page_double hard">表紙</div>
        <template v-for="item in getDiaryList">
          <left-page :content="item.content" :key="item.id" />
          <right-page :image="item.image" :key="item.id" />
        </template>
        <div class="flip_page_double hard">裏表紙</div>
      </fw-turn>
    </div>
    <!--<button @click="check">check</button>-->
  </div>
</template>

<script>
import { FwTurn } from "vue-turnjs"
import LeftPage from './LeftPage.vue'
import RightPage from './RightPage.vue'

export default {
  components: { 
    FwTurn,
    LeftPage,
    RightPage 
  },
  computed: {
    getDiaryList () {
      return this.$store.getters['auth/getDiaryList']
    }
  },
  mounted () {
    console.log('mounted')
    this.$refs.fwTurn.goTo(this.getDiaryList.length*2)
  },
  methods: {
    check() {
      // this.$refs.fwTurn.goTo(this.$refs.fwTurn.currentPage+2)
      console.log(this.$refs.fwTurn)
    }
  }
}
</script>

<style scoped>
  .turn-grid {
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-size: 500px 600px;
  }
</style>
