<template>
  <div class="record-page">
    <h2>收藏的大神文章</h2>
    <ul class="record-list">
      <li
        :title="item.title"
        v-for="(item, index) in recordList"
        :key="item._id"
        class="record-item text-over"
      >
        <span class="item-index">{{ index + 1 }}</span>
        <a :href="item.url" target="_blank" class="item-title pointer">
          <span class="item-date">【{{ item.updated | timeFormat("yyyy-mm-dd") }}】</span>
          {{ item.title }}
        </a>
      </li>
    </ul>
    <Paginator
      :cur_page="Number(page)"
      :page_size="Number(size)"
      :total="Number(total)"
      @jump="jump"
      v-show="total!=0"
      class="paginator-style"
    />
  </div>
</template>

<script>
import Paginator from '~/components/Paginator'

export default {
  components: {
    Paginator
  },
  head: {
    title: `独行的博客-收录`
  },
  data () {
    return {
      recordList: [],
      total: 0, // 文章总数
      page: 1, // 当前页数
      size: 20, // 每页的条数
      hasMore: false
    }
  },
  created () {
    this.getRecord()
  },
  methods: {
    // 跳转页面
    jump (num) {
      this.page = Number(num)
      this.getRecord()
    },
    // 获取收录列表
    async getRecord () {
      const res = await this.$axios('/record', {
        params: {
          page: this.page,
          size: this.size
        }
      })
      this.recordList = res.data.record
      this.total = res.data.total
      this.hasMore = res.data.hasMore
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";

.record-page {
  // width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 20px 0 0;
    color: $tx-record;
    text-align: center;
  }
  .record-list {
    flex: 1;
    width: 80%;
    height: 500px;
    margin: 10px auto;
    list-style: none;
    background: $color-f1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .record-item {
      width: 50%;
      padding: 10px 15px;
      color: $tx-record;
      .item-index {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: $color-white;
        background: $bg-record;
        text-align: center;
        line-height: 30px;
      }
      .item-title {
        text-decoration: none;
        color: #515a6e;
        font-weight: 600;
        &:hover {
          color: $tx-record-hover;
        }
      }
    }
  }
  .paginator-style {
    width: 50%;
  }
}
</style>
