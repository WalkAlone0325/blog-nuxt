<template>
  <!-- <footer class="footer-page">这是底部，独行的博客</footer> -->
  <div class="footer-page">
    <footer>
      <span>
        备案号：
        <a target="_block" href="http://www.beian.miit.gov.cn/">晋ICP备19014217号</a>
      </span>
      <span>欢迎交流，评论和留言</span>
      <span>独行的博客</span>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/variables';

.footer-page {
  background: $color-footer;
  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    color: $color-white;

    a {
      color: $color-white;
      &:hover {
        color: $color-header;
      }
    }
  }
}
</style>
