<template>
  <div class="paginator">
    <ul>
      <li @click="jump(cur_page - 1)" class="click-btn pointer">
        Prev
      </li>
      <li
        v-for="i in pages"
        :key="i"
        :class="i == cur_page ? 'active' : ''"
        @click="jump(i)"
        class="page-number pointer"
      >
        {{ i }}
      </li>
      <li @click="jump(cur_page + 1)" class="click-btn pointer">
        Next
      </li>
      <li>共{{ total_page }}页 {{ total }}篇文章</li>
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
    total_page () {
      return Math.ceil(this.total / this.page_size)
    },
    pages () {
      const ret = []
      const min = this.total_page > 5 ? 5 : this.total_page
      if (this.cur_page <= min - 2) {
        for (let i = 1; i <= min; i++) {
          ret.push(i)
        }
      } else if (this.cur_page + 2 < this.total_page) {
        for (
          let i = this.cur_page - 2 > 0 ? this.cur_page - 2 : 1;
          i < this.cur_page + 3;
          i++
        ) {
          ret.push(i)
        }
      } else if (this.total_page >= 5) {
        for (let i = this.total_page - 4; i <= this.total_page; i++) {
          ret.push(i)
        }
      } else {
        for (let i = 1; i <= this.total_page && i > 0; i++) {
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
        // alert("已经是第一页呐～～");
        return
      }
      if (num > this.total_page) {
        // alert("已经是最后一页呐～～");
        return
      }
      if (num === this.cur_page) {
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
    justify-content: center;
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
</style>
