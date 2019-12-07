<template>
  <div class="contact-info">
    <div class="option pointer">
      <i v-if="btnFlag" @click="backTop" class="back-top iconfont icon-huidaodingbu" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      btnFlag: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    backTop () {
      const timer = setInterval(() => {
        const ispeed = Math.floor(-this.scrollToTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          this.scrollTop + ispeed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 100)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.scrollTop = scrollTop
      if (this.scrollTop > 60) { this.btnFlag = true } else { this.btnFlag = false }
    }
  }
}
</script>

<style lang="scss" scpoed>
.contact-info {
  position: fixed;
  top: 80%;
  right: 10px;
  z-index: 998;
  .back-top {
    font-size: 42px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    padding: 2px;
    &:hover {
      color: #0fffb7;
    }
  }
}
</style>
