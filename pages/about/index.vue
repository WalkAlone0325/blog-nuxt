<template>
  <div class="about-page">
    <div v-html="content" class="about-content" />
    <FriendlyLink />
    <CommentComp :direct="direct" />
  </div>
</template>

<script>
import FriendlyLink from '~/components/FriendlyLinkCard'
import CommentComp from '~/components/CommentComp'

export default {
  components: {
    CommentComp,
    FriendlyLink
  },
  head: {
    title: `独行的博客-关于`
  },
  data () {
    return {
      content: '',
      direct: true
    }
  },
  created () {
    this.getAbout()
  },
  methods: {
    async getAbout () {
      const res = await this.$axios('/about')
      this.content = res.data[0].body
    }
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  width: 80%;
  margin: 0 auto;
  .about-content {
    color: #000;
  }
}
</style>
