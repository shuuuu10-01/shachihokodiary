<template>
  <div>
    <Nuxt />
    <a href="https://www.freepik.com/photos/background" class="bg-photolink">Background photo created by freepik - www.freepik.com</a>
  </div>
</template>

<script>
import BGSound_Cafe_1 from '~/assets/sounds/VSQSE_0601_cafe_1.mp3'
import BGSound_Cafe_2 from '~/assets/sounds/VSQSE_0602_cafe_2.mp3'
import BGSound_Library_1 from '~/assets/sounds/VSQSE_0591_library_1.mp3'
import BGSound_Library_2 from '~/assets/sounds/VSQSE_0592_library_2.mp3'

export default {
  created() {
    var num = 4;
    var rand = Math.floor(Math.random() * (num - 1));;
    console.log(rand)
    switch (rand) {
      case 0: 
        const audio1 = new Audio(BGSound_Cafe_1) 
        audio1.loop = true
        audio1.volume = 0.1
        audio1.play()
        break;
      case 1: 
        const audio2 = new Audio(BGSound_Cafe_2)
        audio2.loop = true
        audio2.volume = 0.1
        audio2.play()
        break;
      case 2: 
        const audio3 = new Audio(BGSound_Library_1)
        audio3.loop = true
        audio3.volume = 0.1
        audio3.play()
        break;
      case 3: 
        const audio4 = new Audio(BGSound_Library_2)
        audio4.loop = true
        audio4.volume = 0.1
        audio4.play()
        break;
      default:
        break;
    }
  },
}
</script>

<style>
body {
  background: url("../assets/img/bg_wood.jpg") no-repeat fixed;
  background-size: cover;
  text-align: center;
  z-index: 0;
}

.bg-photolink {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: rgb(153, 153, 153);
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
