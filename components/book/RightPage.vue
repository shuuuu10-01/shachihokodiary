<template>
  <div class="page">
    <label v-if="edit" for="pick-img">
      <input
        id="pick-img"
        ref="preview"
        type="file"
        accept="image/*"
        :multiple="false"
        style="display: none"
        @change="onFilePicked($event)"
      >
      <img id="main" :src="image_model" alt="diary">
    </label>
    <img id="main" :src="image_model" alt="diary" v-if="!edit">
    <img id="right" src="@/assets/img/tape_right.png" alt="tape">
    <img id="left" src="@/assets/img/tape_left.png" alt="tape" v-if="!edit">
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: {},
      fileName: '',
      image_model: ''
    }
  },
  props: {
    image: {
      type: String,
      required: true
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    image() {
      this.image_model = this.image
    }
  },
  created() {
    this.image_model = this.image
  },
  methods: {
    onFilePicked (e) {
      const file = (e.target.files || e.dataTransfer.files)
      if (file.length !== 0) {
        this.image_model = URL.createObjectURL(file[0])
        this.file = file[0]
        this.fileName = file[0].name
      }
      const refs = this.$refs.preview
      refs.value = ''
    }
  }
}
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
  box-shadow: inset rgb(0 0 0 / 30%) 10px 0px 14px 7px !important
}
.page img, label img {
  height: 300px;
  object-fit: cover;
}
.page img#main, label img#main {
  box-shadow: rgb(0 0 0 / 30%) -2px 2px 5px 1px !important;
  width: 300px;
}
.page img#left {
  position: absolute;
  left: -19px;
  bottom: 16px;
}
.page img#right {
  position: absolute;
  right: -29px;
  top: 15px;
}
label {
  width: 300px;
  height: 300px;
}
</style>
