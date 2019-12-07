<template>
  <div class="article-page">
    <!-- 左侧信息栏 -->
    <tag-aside @searchTag="searchTag" :total="total" :tagsList="tagsList" />
    <!-- 文章列表 -->
    <div id="resultScroll" ref="myScrollbar" class="articles-box">
      <loading v-show="isloading" />
      <article-item :articleList="articleList" />
      <div v-show="noMore" class="articles-nomore">
        已经没有文章了，要不去别的页面看看...
      </div>
    </div>
  </div>
</template>

<script>
import ArticleItem from '~/components/ArticleItem'
import TagAside from '~/components/TagAside'

export default {
  components: {
    ArticleItem,
    TagAside
  },
  head: {
    title: `独行的博客-文章`
  },
  data () {
    return {
      articleList: [], // 接口数据
      tagsList: [],
      tag: '',
      hasMore: false, // 是否还有更多
      page: 1, // 当前页数
      size: 5, // 每页的条数
      total: 0,
      noMore: false,
      isloading: true
    }
  },
  created () {
    this.getAtricle()
    this.getTag()
  },
  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 滚动事件监听
    handleScroll () {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight
      // 如果滚动到接近底部，自动加载下一页
      if (scrollTop + clientHeight >= scrollHeight) {
        if (this.hasMore) {
          // 事件处理
          this.page += 1
          // 数据请求
          this.isloading = true
          this.getAtricle()
          this.isloading = false
        } else {
          this.noMore = true
        }
      }
    },

    // 过滤文章
    searchTag (val) {
      this.tag = val
      this.page = 1
      this.articleList = []
      this.isloading = true
      this.getAtricle()
      this.isloading = false
    },

    // 获取文章列表
    async getAtricle () {
      this.isloading = true
      const res = await this.$axios('/article', {
        params: {
          tag: this.tag || '',
          page: this.page || 1,
          size: this.size || ''
        }
      })
      res.data.article.forEach((val) => {
        this.articleList = [...this.articleList, val]
      })
      this.isloading = false
      this.total = res.data.total
      this.hasMore = res.data.hasMore
    },
    async getTag () {
      const res = await this.$axios('/tag')
      // 处理数据，将两个数组合并并加入标签的文章数
      const tagsList = res.data.data.tag_lists
      const numList = res.data.data.num_list
      tagsList.forEach((item) => {
        const temp = numList.find((i) => {
          return i._id === item._id
        })
        item.numList = temp == null ? 0 : temp.count
      })
      res.data = tagsList.sort((a, b) => {
        return a.numList < b.numList
      })
      this.tagsList = tagsList
    }
  }
}
</script>

<style lang="scss">
.article-page {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: 10px auto;

  .articles-box {
    flex: 1;
    .articles-nomore {
      text-align: center;
      font-weight: 600;
      margin-top: 20px;
      color: #8e44ad;
    }
  }
}
</style>
