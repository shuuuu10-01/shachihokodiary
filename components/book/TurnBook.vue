<template>
  <div class="turn-grid">
    <div class="diary">
      <img src="../../assets/img/coffee.png" class="coffee" @click="clickDrop" v-if="!nowDrop || (nowDrop && !nowEdit)"/>
      <img src="../../assets/img/pen_on_table1.png" class="pen_on_table" @click="clickPen" v-if="!nowEdit"/>
      <img src="../../assets/img/drop_coffee.png" class="drop_coffee" v-if="nowDrop && nowEdit"/>
      <img src="../../assets/img/drop_coffee_paper.png" class="drop_coffee_papre" v-if="nowDrop && nowEdit"/>
      <!-- <img src="../../assets/img/eraser_on_table.png" class="eraser_on_table"/> -->
      <fw-turn 
        class="turn"
        ref="fwTurn"
      >
        <front-cover class="flip_page_double hard"/>
        <div class="flip_page_double hard" id="front_cover_back"></div>
        <div class="front_empty"></div>
        <template v-for="item in getDiaryList">
          <left-page :content="item.content" :date="item.date" :key="item.uid" />
          <right-page :image="item.image" :key="item.uid" />
        </template>
        <cache/>
        <div class="flip_page_double hard" id="back_cover_back">
          <p @click="logout">logout</p>
        </div>
        <back-cover class="flip_page_double hard"/>
      </fw-turn>
    </div>
    <!-- <button @click="check">check</button> -->
    <div class="edit" v-if="nowEdit">
      <edit-page
        :content="content"
        :date="date"
        :image="image"
        :nowEdit="nowEdit"
        v-on:edited="nowEdit=!nowEdit"
        ref="edit"
      />
    </div>
    <!-- <button class="edit" @click="nowEdit=!nowEdit">編集</button> -->
  </div>
</template>

<script>
import { FwTurn } from "vue-turnjs"
import LeftPage from './LeftPage.vue'
import RightPage from './RightPage.vue'
import BackCover from './BackCover.vue'
import FrontCover from './FrontCover.vue'
import EditPage from './EditPage.vue'
import Cache from './Cache.vue'

export default {
  data () {
    return {
      nowEdit:false,
      nowDrop:false,
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
    EditPage,
    Cache
  },
  computed: {
    getDiaryList () {
      return this.$store.getters['auth/getDiaryList']
    }
  },
  mounted () {
    console.log('mounted')
    setTimeout(() =>{
      this.$refs.fwTurn.goTo(this.getDiaryList.length*2+3)
    }, 2000)
  },
  methods: {
    check() {
      // this.$refs.fwTurn.goTo(this.$refs.fwTurn.currentPage+2)
      console.log(this.$refs.fwTurn)
    },
    clickPost() {
      if (this.nowEdit) {
        this.$refs.edit.clickPost()
      } else {
        return false
      }
    },
    clickPen () {
      console.log(this.getDiaryList.length*2+3,this.$refs.fwTurn.currentPage)
      if (this.$refs.fwTurn.currentPage <= 3 || ((this.getDiaryList.length)*2+3)<this.$refs.fwTurn.currentPage) {
      } else {
        this.nowEdit =!this.nowEdit
        this.nowDrop = false
      }
    },
    clickDrop () {
      if (this.nowEdit) {
        this.nowDrop = !this.nowDrop
      }
    },
    async logout () {
      this.$fire.auth.signOut().then(()=>{
        this.$router.push('/login')
      })
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
    },
    watch: {
      getDiaryList() {
        console.log(this.getDiaryList, "watch")
      }
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
    margin-top: 75px;
  }
  .diary {
    position: relative;
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

  #back_cover_back, #front_cover_back {
    background-image: url("../../assets/img/back_cover_back.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .edit {
    position: absolute;
  }
  #back_cover_back {
    position: relative;
    box-shadow: inset rgb(0 0 0 / 30%) 10px 0px 14px 7px !important;
  }
  #back_cover_back p {
    font-family: MyFont1;
    cursor: pointer;
    color: white;
    position: absolute;
    font-size: 45px;
    line-height: 45px;
    top: 370px;
    left: 50%;
    transform: translateX(-50%);
  }
  #back_cover_back p:hover {
    color: #de524a;
  }
  #front_cover_back{
    box-shadow: inset rgb(0 0 0 / 30%) -10px 0px 14px 7px !important;
  }
  .front_empty {
    background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
    box-shadow: inset rgb(0 0 0 / 30%) 10px 0px 14px 7px !important;
  }
  .coffee {
    position: absolute;
    top: -30px;
    left: -370px;
    height: 250px;
    width: auto;
    cursor: pointer;
    z-index: 2;
  }
  .pen_on_table {
    position: absolute;
    right: -375px;
    top: 40px;
    height: 340px;
    width: auto;
    z-index: 100;
    cursor: pointer;
  }
  .eraser_on_table {
    position: absolute;
    left: 80%;
    bottom: 60%;
    height: 200px;
    width: auto;
    z-index: 99;
  }
  .drop_coffee {
    position: absolute;
    top: -164px;
    left: -568px;
    height: 450px;
    cursor: pointer;
    z-index: 3;
  }
  .drop_coffee_papre {
    position: absolute;
    left: -3px;
    top: -50px;
    height: 300px;
    width: auto;
    z-index: 2;
  }
</style>
