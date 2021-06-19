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


<style>
.front-cover {
    position: relative;
    border-top-left-radius: 0px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 0px;
}
.front-cover p {
    z-index: 100;
    position: absolute;
    top: 50%;
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