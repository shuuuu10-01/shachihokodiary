<template>
  <div class="animation_field">
<<<<<<< HEAD
    <!-- <img id="pen" src="@/assets/img/pen_write.png" >
    <img id="shadow" src="@/assets/img/pen_shadow.png" > -->
=======
    <img id="pen" src="@/assets/img/pen_write.png" style="transform: translate(500px, 150px);">
    <!-- <img id="shadow" src="@/assets/img/pen_shadow.png" > -->
>>>>>>> [update] ペンのアニメーションを動かせた
  </div>
</template>

<script>

<<<<<<< HEAD
// const target = document.getElementById('pen'); // アニメーションの対象
// const startX = 50; // X座標の始点
// const startY = 50; // Y座標の始点
// const endX = 800; // X座標の目標点
// const endY = 150; // Y座標の目標点
// const diffX = endX - startX; // X座標の変化量
// const diffY = endY - startY; // Y座標の変化量
// const time = 1000; // 変化にかける時間 (ミリ秒)
// let progress = 0;

// // アップデートを実行する
// requestAnimationFrame(update);

// function update(timestamp) {
//   // 進捗率を算出
//   progress = timestamp / time;

//   // 進捗率が100%を超えないよう丸める
//   progress = Math.min(progress, 1);

//   // 値を算出し反映する
//   const resultX = startX + diffX * progress; // X座標
//   const resultY = startY + diffY * progress; // Y座標
//   target.style.transform = `translate( ${resultX}px, ${resultY}px )`;

//   // 進捗が1未満の場合はアップデートを再実行する
//   if (progress < 1) {
//     requestAnimationFrame(update);
//   }
// }
=======
const target = document.getElementById('pen'); // アニメーションの対象
const startX = 50; // X座標の始点
const startY = 50; // Y座標の始点
const endX = 800; // X座標の目標点
const endY = 150; // Y座標の目標点
const diffX = endX - startX; // X座標の変化量
const diffY = endY - startY; // Y座標の変化量
const time = 1000; // 変化にかける時間 (ミリ秒)
let progress = 0;

// アップデートを実行する
requestAnimationFrame(update);

function update(timestamp) {
  // 進捗率を算出
  progress = timestamp / time;

  // 進捗率が100%を超えないよう丸める
  progress = Math.min(progress, 1);

  // 値を算出し反映する
  const resultX = startX + diffX * progress; // X座標
  const resultY = startY + diffY * progress; // Y座標
  target.style.transform = `translate( ${resultX}px, ${resultY}px )`;

  // 進捗が1未満の場合はアップデートを再実行する
  if (progress < 1) {
    requestAnimationFrame(update);
  }
}
>>>>>>> [update] ペンのアニメーションを動かせた
  
</script>

<style scoped>
<<<<<<< HEAD
.animation_field {
  position:absolute;
  top: 215px;
  width: 760px;
  height: 535px;
  margin-left: auto;
  margin-right: auto;
  left:0;
  right:0;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
}

#pen {
  position:relative;
  top:13px;
  left: 23px;
  width: 43%;
  height: auto;
=======
img {
  transform: translate(20%, 20%);
}

#pen {
  position:absolute; top:100px; left:100px;
  width: 15%;
  height: 15%;
>>>>>>> [update] ペンのアニメーションを動かせた
  display: flex;
  z-index: 100;
}

#shadow{
<<<<<<< HEAD
  position:relative;
  left: -95px;
  top: -260px;
  width: 43%;
  height: auto;
=======
  position:absolute; top:50px; left:50px;
  width: 20%;
  height: 20%;
>>>>>>> [update] ペンのアニメーションを動かせた
  display: flex;
  z-index: 100;
}

</style>