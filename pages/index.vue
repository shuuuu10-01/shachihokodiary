<template>
  <div>
    <div v-if="getNowLogin">
      <button type=“button” @click="$router.push('/home')">ShachihokoDiary</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getNowLogin () {
      return this.$store.getters['auth/isAutheticated']
    }
  }
}
</script>

<style scoped>
@font-face {
	font-family: 'MyFont1';
	src: url(../assets/font/DancingScript-VariableFont_wght.ttf);
}
@font-face {
	font-family: 'MyFont2';
	src: url(../assets/font/NewTegomin-Regular.ttf);
}
button {
  font-family: MyFont1;
  color: rgb(255, 255, 231);
  font-size: 100px;
  margin-top: 20%;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  border: none;
  outline: none;
}
</style>
