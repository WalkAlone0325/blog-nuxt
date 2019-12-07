<template>
  <div
    id="commentBox"
    class="comment_box"
  >
    <p class="comment_title">
      留下点什么吧 . . .
    </p>
    <div
      id="gitalk_comment"
      v-initComment
    />
  </div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { md5 } from '~/plugins/md5'
let direct = false

export default {
  directives: {
    initComment: {
      inserted () {
        if (direct === true) {
          const gitalk = new Gitalk({
            clientID: '7b43169e705bb15a34ff',
            clientSecret: 'e184434f37147e6363665904109e253b34b2f468',
            repo: 'vue-node-blog',
            owner: 'WalkAlone0325',
            admin: ['WalkAlone0325'],
            id: md5(window.location.href),
            distractionFreeMode: false,
            // labels: [''],
            body: '文章地址：' + window.location.href
          })
          gitalk.render('gitalk_comment')
        }
      }
    }
  },
  props: {
    title: { type: String, default: '' },
    direct: { type: Boolean, default: false }
  },
  watch: {
    title (newVal) {
      if (newVal != null) {
        const gitalk = new Gitalk({
          clientID: '7b43169e705bb15a34ff',
          clientSecret: 'e184434f37147e6363665904109e253b34b2f468',
          repo: 'vue-node-blog',
          owner: 'WalkAlone0325',
          admin: ['WalkAlone0325'],
          id: md5(window.location.href),
          distractionFreeMode: false,
          labels: [''],
          body: '文章地址：' + window.location.href,
          title: newVal
        })
        gitalk.render('gitalk_comment')
      }
    }
  },
  created () {
    direct = this.direct
  }
}
</script>

<style lang="scss" scoped>
.comment_box {
  width: 84%;
  margin: 0 auto;
  z-index: 999;
  padding: 5px 20px;
  background-color: #fff;
  .comment_title {
    font-size: 22px;
    margin: 10px 0 10px;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
  }
}
</style>
