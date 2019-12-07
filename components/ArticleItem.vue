<template>
  <div class="article-item-container">
    <nuxt-link
      v-for="item in articleList"
      :key="item._id"
      :to="`/article/${item._id}`"
      class="article-item pointer"
      tag="div"
    >
      <div class="article-img">
        <img v-lazy="item.image" alt="图片不见了">
      </div>
      <div class="article-content">
        <div class="content-header">
          <h2 class="text-over">
            {{ item.title }}
          </h2>
          <p>{{ item.intro }}</p>
        </div>
        <div class="content-footer">
          <span class="content-tag">
            <i class="iconfont icon-biaoqian" />
            <span v-for="tag in item.tags" :key="tag._id">
              <span style="margin-left: 6px">{{ tag.tag }}</span>
            </span>
          </span>
          <span class="content-date">
            <i class="iconfont icon-shijian" />
            发表时间：
            <!-- {{ item.updated | timeFormat }} -->
            <span v-time="item.updated" />
          </span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: { articleList: { type: Array, default: null } }
}
</script>

<style lang="scss" scoped>
.article-item-container {
  .article-item {
    display: flex;
    height: 200px;
    margin: 0 0 15px 10px;
    border-radius: 8px;
    background: linear-gradient(120deg, #8e44ad, #3495db, #8e44ad);
    overflow: hidden;
    &:hover {
      transition: 0.4s;
      box-shadow: 5px 5px 10px #9d7bc7;
      h2 {
        color: #303236;
      }
      img {
        transform: scale(1.2);
      }
      .article-content > .content-footer > .content-tag {
        transform: translateY(-4px);
      }
    }
    .article-img {
      width: 60%;
      overflow: hidden;
      img {
        width: 100%;
        height: 200px;
        transition: 0.6s;
        border-radius: 8px;
        opacity: 0.8;
      }
    }
    .article-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 14px 10px;
      color: #f1f1f1;
      .content-header {
        p {
          text-indent: 16px;
        }
      }
      .content-footer {
        display: flex;
        justify-content: space-between;
        .content-tag {
          color: #000;
          transition: 0.6s;
          transform: translateY(40px);
        }
      }
    }
  }
}
</style>
