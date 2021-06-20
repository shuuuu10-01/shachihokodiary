<template>
  <div class="cache">
    <span class="cache_contein">
        <p class="bg-photolink">メンバー<br/>シモ @Simo_C3_hack<br/>shuuuu @shuuuu10_01<br/>Catgolem @catgolem<br/>ふぃる @fillis_y</p><br/>
        <p class="bg-photolink" id="c_freepik">サイトバックグラウンド～木目～</p>
        <a href="https://www.freepik.com/photos/background" class="bg-photolink">Background photo created by freepik - www.freepik.com</a>
    </span>
    <span class="link_collection">
        <p>リンク集</p>
        <a href="https://twitter.com/c3_kyutech" target="_blank"><img src="../../assets/img/C3_logo.png" class="c3_logo"/></a>
        <a href="https://hackz.team/" target="_blank"><img src="../../assets/img/icon_hacktu.png" class="hacktu_logo"/></a>
    </span>
    <span class="bg-photolink" id="c_syacihoko">© 2021 しゃちほこ</span>
  </div>
</template>

<style scoped>
  .cache .bg-photolink {
    position: relative;
    width: 350px;
    color: rgb(153, 153, 153);
  }
  .cache {
    background-image: url(https://www.beiz.jp/images_P/paper/paper_00108.jpg);
    text-align: center;
    box-shadow: inset rgb(0 0 0 / 30%) -10px 0px 14px 7px !important;
  }
  .cache_contein {
    position: relative;
    top: 50px;
  }
  .link_collection {
    position: relative;
    display: block;
    top: 60px;
    margin-top: 30px;
    margin-bottom: 10px;
    color: rgb(153, 153, 153);
  }
  .c3_logo, .hacktu_logo {
    display: inline-block;
  }
  .hacktu_logo {
    height: 70px;
    margin-left: 10px;
  }
  .c3_logo {
    height: 70px !important;
    margin-right: 10px;
  }
  #c_freepik {
    margin-top: 10px;
  }
  #c_syacihoko{
    bottom: -90px;
  }
  p {
    padding: 0;
    margin: auto;
  }

</style>