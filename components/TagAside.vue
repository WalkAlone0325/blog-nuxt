<template>
  <div class="aside-page">
    <div class="aside-tag">
      <h3>标签分类</h3>
      <hr>
      <ul>
        <li class="pointer">
          <span @click="searchTag('')" class="tag-name">全部</span>
          <span class="article-count">【{{ total }}】篇</span>
        </li>
        <li @click="searchTag(item._id)" v-for="item in tagsList" :key="item._id" class="pointer">
          <span class="tag-name">{{ item.tag }}</span>
          <span class="article-count">【{{ item.numList }}】篇</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // props: { tagList: Array, article_count: Array },
  props: { tagsList: { type: Array, default: null }, total: { type: Number, default: 0 } },
  data () {
    return {}
  },
  methods: {
    // 过滤得到标签文章
    searchTag (val) {
      this.$emit('searchTag', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-page {
  position: sticky;
  top: 70px;
  width: 24%;
  margin-right: 10px;
  padding-bottom: 10px;
  background: #f1f1f1;
  &:hover {
    transition: 1s ease;
    box-shadow: 0 0 5px 5px #9974c4;
  }
  .aside-tag {
    h3 {
      padding-left: 20px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        display: flex;
        font-size: 16px;
        &:hover {
          background: #3495db;
        }
        .tag-name {
          flex: 1;
          margin: 5px;
          padding: 5px 10px;
        }
        .article-count {
          margin: 5px;
          padding: 5px 10px;
        }
      }
    }
  }
}
</style>
