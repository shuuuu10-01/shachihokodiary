<template>
  <div class="edit-wrap" v-if="nowEdit">
    <left-page :content="text_model" :date="date" ref="left" :nowEdit="nowEdit" @click.native="clickPost" class="page_left"/>
    <right-page :image="image_model" :edit="true" ref="right"/>
    <textarea v-model="text_model" />
    <!-- <button @click="clickPost">編集完了</button> -->
    <draggable
      class="drag"
      @start="draggableStart"
      @end="nowDrag=false"
    >
      <div>
        <img src="../../assets/img/eraser_on_table.png" height="170px" v-show="!nowDrag" class="eraser"/>
      </div>
    </draggable>
  </div>
</template>

<script>
import LeftPage from './LeftPage.vue'
import RightPage from './RightPage.vue'
import Draggable from "vuedraggable";

export default {
  components: {
    LeftPage,
    RightPage,
    Draggable
  },
  data() {
    return {
      text_model: '',
      image_model: '',
      nowDrag: false
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    nowEdit: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    content(){
      this.text_model = this.content
    },
    image() {
      this.image_model = this.image
    }
  },
  created() {
    this.text_model = this.content
    this.image_model = this.image
  },
  mounted() {
    window.setInterval(this.deleteLast, 1000);
  },
  methods: {
    async clickPost () {
      this.$refs.left.draw()
      const imageUrl = await this.$refs.right.createUrl()
      const postData = {
        content: this.text_model,
        date: this.date,
        image: imageUrl
      }
      await this.$store.dispatch('auth/postDiary',postData)
      this.$emit('edited')
    },
    draggableStart() {
      this.nowDrag = true
    },
    deleteLast() {
      if(this.nowDrag) {
        this.text_model = this.text_model.slice(0, -1)
      }
    }
  }
}
</script>

<style scopd>
.edit-wrap {
  position: relative;
  display: flex;
  width: 760px;
  height: 535px;
}
.page {
  width: 380px;
  height: 100%;
}
textarea {
  position: absolute;
  top: 560px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 50px;
  resize: vertical;
}
.page_left {
  cursor: pointer;
}
.drag {
  position: absolute
}
img.eraser {
  top: 10px;
  left: 780px;
  position: absolute;
}
</style>
