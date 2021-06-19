<template>
  <div class="back-cover">
      <img src="../../assets/img/back-himo.png" id="back_himo"/>
      <img src="../../assets/img/back_cover_page.png" id="back_cover_page"/>
  </div>
</template>


<style>
.back-cover {
    position: relative;
    border-top-left-radius: 0px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 0px;
}
.back-cover img {
    position: absolute;
}
#back_cover_page {
    height: 539px;
    left: -2px;
}
#back_himo {
    height: 555px;
    right: 0;
    top: -6px;
}
</style>