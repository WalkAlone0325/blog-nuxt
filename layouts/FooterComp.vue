<template>
  <!-- <footer class="footer-page">这是底部，独行的博客</footer> -->
  <div class="footer-page">
    <footer>这是底部，独行的博客</footer>
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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    color: $color-white;
  }
}
</style>
