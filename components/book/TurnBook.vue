<template>
  <div class="turn-grid">
    <div>
      <img src="../../assets/img/coffee.png" class="coffee"/>
      <img src="../../assets/img/pen_on_table.png" class="pen_on_table"/>
      <fw-turn 
        class="turn"
        ref="fwTurn"
      >
        <front-cover/>
        <div class="flip_page_double hard">空白</div>
        <div class="flip_page_double hard">空白</div>
        <template v-for="item in getDiaryList">
          <left-page :content="item.content" :date="item.date" :key="item.id" />
          <right-page :image="item.image" :key="item.id" />
        </template>
        <div class="cache">
			<p class="bg-photolink">サイトバックグラウンド～木目～</p>
			<a href="https://www.freepik.com/photos/background" class="bg-photolink">Background photo created by freepik - www.freepik.com</a>
        </div>
        <div class="flip_page_double hard" id="back_cover_back"></div>
        <back-cover />
      </fw-turn>
    </div>
    <!-- <button @click="check">check</button> -->
  </div>
</template>

<script>
import { FwTurn } from "vue-turnjs"
import LeftPage from './LeftPage.vue'
import RightPage from './RightPage.vue'
import BackCover from './BackCover.vue'
import FrontCover from './FrontCover.vue'

export default {
  components: { 
    FwTurn,
    LeftPage,
    RightPage,
    BackCover,
    FrontCover
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
    /* height: 800px; */
    margin-top: 5%;
  }
  .turn {
    height: 535px;
    filter: drop-shadow(-3px 5px 10px black);
  }
  .flip_page_double {
    width: 760px;
    height: 535px;
    text-align: center;
    line-height: 300px;
    vertical-align: middle;
    background: url("https://placehold.jp/380x535.png");
    background-size: 300px 400px;
  }

  #back_cover_back {
    background-image: url("../../assets/img/back_cover_back.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .cache .bg-photolink {
	position: relative;
	top: 20px;
	left: 20px;
	width: 350px;
  }
  .cache {
	background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
	text-align: left;
	box-shadow: inset rgb(0 0 0 / 30%) -10px 0px 14px 7px !important
  }
  .coffee {
    position: absolute;
    right: 60%;
    bottom: 60%;
    height: 600px;
  }
  .pen_on_table {
    position: absolute;
    right: 60%;
    bottom: 60%;
    height: 600px;
  }
</style>
