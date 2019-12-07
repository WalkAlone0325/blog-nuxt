<template>
  <div class="eyes">
    <div class="eye">
      <div class="ball" />
    </div>
    <div class="eye">
      <div class="ball" />
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    const balls = document.getElementsByClassName('ball')
    document.onmousemove = function () {
      const x = (event.clientX * 100) / window.innerWidth + '%'
      const y = (event.clientY * 100) / window.innerHeight + '%'
      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x
        balls[i].style.top = y
        balls[i].style.transform = `translate(-${x},-${y})`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.eyes {
  position: fixed;
  bottom: 0;
  right: 0;
  .eye {
    width: 80px;
    height: 40px;
    background: #f1f1f1;
    display: inline-block;
    margin: 5px 10px;
    border: 1px solid #666;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    .ball {
      width: 30px;
      height: 30px;
      background: #000;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 10px solid #666;
    }
  }
}
</style>
