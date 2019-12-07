<template>
  <div class="friendly-page">
    <LinkCard :friendlylinkList="friendlylinkList" :toolsLinkList="toolsLinkList" />
  </div>
</template>

<script>
import LinkCard from '~/components/LinkCard'

export default {
  components: {
    LinkCard
  },
  head: {
    title: `独行的博客-链接`
  },
  data () {
    return {
      friendlylinkList: [],
      toolsLinkList: []
    }
  },
  created () {
    this.getFriendlyLink()
    this.getToolsLink()
  },
  methods: {
    async getFriendlyLink () {
      const res = await this.$axios('/friendlink')
      this.friendlylinkList = res.data
    },
    async getToolsLink () {
      const res = await this.$axios('/toollink')
      this.toolsLinkList = res.data
    }
  }
}
</script>
