<template>
  <div class="main-page">
    <HeaderComp />
    <div class="main-container">
      <transition name="page" mode="out-in">
        <nuxt />
      </transition>
    </div>
    <SideBar />
    <EyesItem />
    <FooterComp />
  </div>
</template>

<script>
import EyesItem from './EyesItem'
import HeaderComp from './HeaderComp.vue'
import FooterComp from './FooterComp.vue'
import SideBar from './SideBar.vue'

export default {
  layout: 'blog',
  components: {
    HeaderComp,
    FooterComp,
    EyesItem,
    SideBar
  },
  mounted () {
    // 记 2020-04-04 清明节疫情全国哀悼
    if (new Date().getTime() < new Date('2020-04-04').setHours(23, 59, 59, 999)) {
      document.body.style = 'filter:grayscale(100%)'
    }
  }
}
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .main-container {
    flex: 1;
    background: #f5f5f5;
  }
}
</style>
