<template>
  <div class="animation_field">
    <img id="pen" src="@/assets/img/pen_write.png" >
    <img id="shadow" src="@/assets/img/pen_shadow.png" >
  </div>
</template>

<script>

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
  
</script>

<style scoped>
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
  display: none;
}

#pen {
  position:relative;
  top:13px;
  left: 23px;
  width: 40%;
  height: auto;
  display: flex;
  z-index: 100;
  display: none;
}

#shadow{
  position:relative;
  left: -85px;
  top: -235px;
  width: 40%;
  height: auto;
  display: flex;
  z-index: 100;
  display: none;
}

</style>