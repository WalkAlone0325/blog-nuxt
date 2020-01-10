<template>
  <div class="detail-page">
    <div class="detail-header bg-img-ani">
      <!-- :style="`background:url(${articleItem.image}) no-repeat;background-size:100% auto;`" -->
      <h1>{{ articleItem.title }}</h1>
      <span class="detail-avatar">作者：{{ articleItem.avatar }}</span>
      <span class="detail-avatar">
        <span v-for="item in articleItem.tags" :key="item._id">
          <span class="detail-tag">标签：{{ item.tag }}</span>
        </span>
      </span>
      <span class="detail-date">发布时间：{{ articleItem.updated | timeFormat }}</span>
    </div>
    <div class="detail-body">
      <div class="detail-left">
        <div class="markdown-body">
          <!-- v-html="code" -->
          <div ref="content" v-html="code" />
        </div>
      </div>
      <div class="detail-aside">
        <h3>目录</h3>
        <div v-html="toc" class="detail-toc" />
      </div>
    </div>
    <CommentComp :direct="direct" />
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlight.js'
import CommentComp from '~/components/CommentComp'
import 'highlight.js/styles/monokai-sublime.css'
import '~/assets/css/_highlight.scss'

const tocObj = {
  add (text, level) {
    const anchor = `#toc${level}${++this.index}`
    this.toc.push({ anchor, level, text })
    return anchor
  },
  // 使用堆栈的方式处理嵌套的ul,li，level即ul的嵌套层次，1是最外层
  // <ul>
  //   <li></li>
  //   <ul>
  //     <li></li>
  //   </ul>
  //   <li></li>
  // </ul>
  toHTML () {
    const levelStack = []
    let result = ''
    const addStartUL = () => {
      result += '<ul>'
    }
    const addEndUL = () => {
      result += '</ul>\n'
    }
    const addLI = (anchor, text) => {
      result += '<li><a href="#' + anchor + '">' + text + '<a></li>\n'
    }

    this.toc.forEach(function (item) {
      let levelIndex = levelStack.indexOf(item.level)
      // 没有找到相应level的ul标签，则将li放入新增的ul中
      if (levelIndex === -1) {
        levelStack.unshift(item.level)
        addStartUL()
        addLI(item.anchor, item.text)
      } else if (levelIndex === 0) { // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
        addLI(item.anchor, item.text)
      } else { // 找到了相应level的ul标签，但是不在栈顶位置，需要将之前的所有level出栈并且打上闭合标签，最后新增li
        while (levelIndex--) {
          levelStack.shift()
          addEndUL()
        }
        addLI(item.anchor, item.text)
      }
    })
    // 如果栈中还有level，全部出栈打上闭合标签
    while (levelStack.length) {
      levelStack.shift()
      addEndUL()
    }
    // 清理先前数据供下次使用
    this.toc = []
    this.index = 0
    return result
  },
  toc: [],
  index: 0
}

export default {
  components: {
    CommentComp
  },
  data () {
    return {
      direct: true,
      articleItem: {},
      code: '',
      toc: ''
    }
  },
  head () {
    return {
      title: this.articleItem.title,
      meta: [
        { name: 'description', content: this.articleItem.intro }
      ]
    }
  },
  created () {
    this.getArticleItem()
  },
  mounted () {
    const renderer = new marked.Renderer()
    marked.setOptions({
      renderer,
      highlight (code) {
        return hljs.highlightAuto(code).value
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    // eslint-disable-next-line no-unused-vars
    renderer.heading = function (text, level, raw) {
      const anchor = tocObj.add(text, level)
      return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`
    }
  },

  methods: {
    async getArticleItem () {
      const res = await this.$axios(`/article/${this.$route.params.id}`)
      this.articleItem = res.data

      if (res.data.body) {
        this.code = marked(res.data.body)
        res.data.toc = tocObj.toHTML()
        this.toc = res.data.toc
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/_variables.scss';
.detail-page {
  margin: 0 auto;
  .detail-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    h1 {
      color: $color-white;
    }
    .detail-avatar {
      margin: 10px;
      color: $color-white;
      font-size: 18px;
      .fa-user {
        margin-right: 10px;
      }
      .detail-tag {
        margin: 0 10px;
      }
    }
    .detail-date {
      color: $color-white;
    }
  }
  .detail-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 84%;
    margin: 10px auto;
    .detail-left {
      width: 80%;
    }
    .detail-aside {
      position: sticky;
      top: 70px;
      width: 20%;
      margin-left: 10px;
      background: $color-white;
      h3 {
        text-align: center;
        margin: 10px auto;
        padding-bottom: 5px;
        border-bottom: 2px solid $color-pink;
      }
      .detail-toc {
        ul {
          list-style: none;
          li {
            margin: 6px 0 4px -30px;
            padding: 2px 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
              text-decoration: none;
              color: #333;
              margin: 6px 0;
              &:hover {
                border-bottom: 2px solid $tx-tag;
              }
            }
          }
        }
      }
    }
  }
}
.anchor-fix {
  display: block;
  height: 60px;
  margin-top: -60px;
  visibility: hidden;
}
</style>
