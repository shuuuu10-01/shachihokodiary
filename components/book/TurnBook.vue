<template>
  <div class="turn-grid">
    <div>
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
        <div class="flip_page_double hard">コピーライト</div>
        <div class="flip_page_double hard" id="back_cover_back">裏表紙の裏</div>
        <back-cover />
      </fw-turn>
    </div>
    <!-- <button @click="check">check</button> -->
    <div class="edit">
      <edit-page
        v-if="nowEdit"
        :content="content"
        :date="date"
        :image="image"
      />
    </div>
    <button class="edit" @click="nowEdit=!nowEdit">編集</button>
  </div>
</template>

<script>
import { FwTurn } from "vue-turnjs"
import LeftPage from './LeftPage.vue'
import RightPage from './RightPage.vue'
import BackCover from './BackCover.vue'
import FrontCover from './FrontCover.vue'
import EditPage from './EditPage.vue'

export default {
  data () {
    return {
      nowEdit:false,
      content: 'sample',
      date: '2021-10-1',
      image: ''
    }
  },
  components: { 
    FwTurn,
    LeftPage,
    RightPage,
    BackCover,
    FrontCover,
    EditPage
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
  },
  watch: {
    nowEdit() {
      let number = ((this.$refs.fwTurn.currentPage-2)/2)-1
      console.log(number)
      if (!Number.isInteger(number)) {
        number-= 0.5
      }
      const data = this.getDiaryList[number]
      this.content = data.content
      this.date = data.date
      this.image = data.image
      console.log(data, number)
    }
  }
}
</script>

<style scoped>
  .turn-grid {
    position: relative;
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
  .edit {
    position: absolute;
  }
</style>
