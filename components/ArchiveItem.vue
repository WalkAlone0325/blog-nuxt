<template>
  <div class="arch-item">
    <div class="arch-item-title">
      <span>{{ title | format }}</span>
    </div>
    <ul>
      <router-link :to="`/article/${item._id}`" v-for="(item, index) in list" :key="index">
        <li>{{ item.created.substring(0, 10) + " => " + item.title }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  filters: {
    format (val) {
      const arr = val.split('-')
      return `${arr[0]} 年 ${arr[1]} 月`
    }
  },
  props: {
    list: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.arch-item {
  width: 80%;
  margin: 0 auto;
  border-left: 2px solid #3495db;

  .arch-item-title {
    font-size: 24px;
    font-weight: 700;
    margin: 20px 10px;
    span {
      color: #515a6e;
    }
  }

  ul {
    padding-left: 50px;
    font-size: 16px;
    list-style: none;
    a {
      text-decoration: none;
      li {
        padding: 10px 0;
        color: #666;
      }
      &:hover li {
        color: #3495db;
      }
    }
  }
}
</style>
