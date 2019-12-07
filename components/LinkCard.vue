<template>
  <div class="friendly-comp-page">
    <h2>友链：</h2>
    <div class="friendly-container">
      <div v-for="itemlink in friendlylinkList" :key="itemlink._id" class="link-item">
        <a :href="itemlink.blog_url" class="link-item-a" target="_block">
          <div class="link-header">
            <img :src="itemlink.blog_imgurl" class="link-logo" alt>
            <h3>{{ itemlink.blog_name }}</h3>
          </div>
          <p class="link-desc">{{ itemlink.blog_desc }}</p>
        </a>
      </div>
    </div>
    <h2>工具：</h2>
    <div class="friendly-container">
      <div v-for="itemlink in toolsLinkList" :key="itemlink._id" class="link-item">
        <a :href="itemlink.blog_url" class="link-item-a" target="_block">
          <div class="link-header">
            <img :src="itemlink.blog_imgurl" class="link-logo" alt>
            <h3>{{ itemlink.blog_name }}</h3>
          </div>
          <p class="link-desc">{{ itemlink.blog_desc }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friendlylinkList: { type: Array, default: null },
    toolsLinkList: { type: Array, default: null }
  }
}
</script>

<style lang="scss" scoped>
.friendly-comp-page {
  width: 80%;
  margin: 0 auto;
  padding-left: 10px;
  h2 {
    margin-left: -20px;
  }
  .friendly-container {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    // justify-content: space-evenly;
    .link-item {
      margin: 20px 12px 10px;
      border-radius: 5px;
      transition: 0.6s;
      background: linear-gradient(225deg, transparent 15px, #6a82ce 0) right,
        linear-gradient(45deg, transparent 15px, #826dc2 0) left;
      background-size: 50% 100%;
      background-repeat: no-repeat;
      &:hover {
        .link-item-a > .link-header > .link-logo {
          transform: translateY(0px);
        }
      }
      .link-item-a {
        width: 280px;
        height: 150px;
        display: block;
        color: #fff;
        .link-header {
          display: flex;
          align-items: center;
          .link-logo {
            width: 50px;
            height: 50px;
            margin: 10px;
            border-radius: 50%;
            transition: 0.3s;
            transform: translateY(-24px);
          }
        }
        .link-desc {
          text-indent: 32px;
          padding: 0 10px;
          line-height: 20px;
          margin: 0;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
