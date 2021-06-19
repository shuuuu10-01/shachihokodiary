<template>
  <div class="edit-wrap">
    <div class="leftpage">
      <left-page :content="text_model" :date="date" ref="left"/>
    </div>
    <div class="rightpage">
      <right-page :image="image_model" :edit="true" ref="right"/>
    </div>
    <textarea v-model="text_model" />
    <button @click="clickPost">編集完了</button>
  </div>
</template>

<script>
import LeftPage from './LeftPage.vue'
import RightPage from './RightPage.vue'
export default {
  components: {
    LeftPage,
    RightPage
  },
  data() {
    return {
      text_model: '',
      image_model: '',
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
  methods: {
    clickPost () {
      this.$refs.left.draw()
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
button {
  position: absolute;
}
</style>
