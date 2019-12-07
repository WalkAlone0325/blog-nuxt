<template>
  <div class="header-page">
    <header>
      <h1>独行</h1>
      <nav>
        <ul class="header-nav">
          <nuxt-link
            :to="item.path"
            v-for="(item, index) in menuList"
            :key="index"
            tag="li"
            class="nav-item"
          >
            {{ item.name }}
          </nuxt-link>
        </ul>
      </nav>
      <div class="header-la">
        <!-- <router-link to="/login" tag="button" class="login" v-if="login">登录/注册</router-link> -->
        <!-- <div class="avatar"></div> -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: true,
      menuList: [
        { name: '首页', path: '/home' },
        { name: '文章', path: '/article' },
        { name: '归档', path: '/archives' },
        { name: '作品', path: '/project' },
        { name: '收录', path: '/record' },
        { name: '链接', path: '/link' },
        { name: '关于', path: '/about' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';
.header-page {
  position: sticky;
  top: 0;
  z-index: 999;
  background-image: $bg-img;
  opacity: 0.9;
  header {
    width: 80%;
    height: 60px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    h1 {
      flex: 1;
      margin-left: 20px;
      color: $color-white;
    }
    nav {
      .header-nav {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 10px;
        .nav-item {
          padding: 20px 30px;
          color: $color-white;
          // border: 1px solid #ccc;
          &:hover {
            color: $tx-tag;
            cursor: pointer;
          }
        }
        .nuxt-link-active {
          color: $tx-tag;
        }
      }
    }
    .header-la {
      display: flex;
      margin-right: 5px;
      .login {
        border: none;
        background: $color-black;
        color: $color-white;
        padding: 10px;
        border-radius: 10px;
        &:hover {
          background: $color-white;
          color: $color-black;
          cursor: pointer;
        }
      }
      .avatar {
        width: 50px;
        height: 50px;
        margin: 0 20.42px;
        border-radius: 50%;
        background: $color-white;
      }
    }
  }
}
</style>
