<template>
  <div class="front-cover">
      <img src="../../assets/img/bg_close_note.png" id="bg_close_note"/>
      <p>{{getUser.name}}</p>
  </div>
</template>

<script>
export default {
    computed: {
        getUser() {
            return this.$store.getters['auth/getUser']
        }
    }
}
</script>


<style scoped>
@font-face {
	font-family: 'MyFont1';
	src: url(../../assets/font/DancingScript-VariableFont_wght.ttf);
}
@font-face {
	font-family: 'MyFont2';
	src: url(../../assets/font/NewTegomin-Regular.ttf);
}
.front-cover {
    position: relative;
    text-align: center;
}
.front-cover p {
    position: relative;
    z-index: 100;
    top: 140px;
    margin-left: 30px;
    font-family: MyFont1, MyFont2;
    color: rgb(255, 255, 231);
    font-size: 15px;
}
.front-cover img {
    position: absolute;
}
#bg_close_note {
    height: 560px;
    left: -18px;
    top: -9px;
}

</style>