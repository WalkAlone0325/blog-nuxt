<template>
  <div class="paginator">
    <ul>
      <div class="paginator-comp">
        <li @click="jump(curPage - 1)" class="click-btn pointer">
          Prev
        </li>
        <li
          v-for="i in pages"
          :key="i"
          :class="i == curPage ? 'active' : ''"
          @click="jump(i)"
          class="page-number pointer"
        >
          {{ i }}
        </li>
        <li @click="jump(curPage + 1)" class="click-btn pointer">
          Next
        </li>
      </div>
      <li>共 {{ totalPage }} 页</li>
      <li>共 {{ total }} 篇文章</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    curPage: { type: Number, default: 0 },
    pageSize: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.total / this.pageSize)
    },
    pages () {
      const ret = []
      const min = this.totalPage > 5 ? 5 : this.totalPage
      if (this.curPage <= min - 2) {
        for (let i = 1; i <= min; i++) {
          ret.push(i)
        }
      } else if (this.curPage + 2 < this.totalPage) {
        for (
          let i = this.curPage - 2 > 0 ? this.curPage - 2 : 1;
          i < this.curPage + 3;
          i++
        ) {
          ret.push(i)
        }
      } else if (this.totalPage >= 5) {
        for (let i = this.totalPage - 4; i <= this.totalPage; i++) {
          ret.push(i)
        }
      } else {
        for (let i = 1; i <= this.totalPage && i > 0; i++) {
          ret.push(i)
        }
      }
      // 返回整个页码组
      return ret
    }
  },
  methods: {
    jump (num) {
      if (num <= 0) {
        return
      }
      if (num > this.totalPage) {
        return
      }
      if (num === this.curPage) {
        return
      }
      this.$emit('jump', num)
    }
  }
}
</script>

<style lang="scss" scoped>
.paginator {
  width: 70%;
  margin: 0 auto;
  ul {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    li {
        line-height: 30px;
        border-radius: 50%;
        margin: 0 5px;
        font-weight: 600;
        color: #777;
        border-radius: 50%;
      }
    .paginator-comp {
      display: flex;
      .click-btn {
        margin: 0 20px;
        &:hover {
          color: #6495ed;
        }
      }
      .page-number {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        &:hover,
        &.active {
          background: #6495ed;
          color: #fff;
        }
      }
    }
  }
}
</style>
