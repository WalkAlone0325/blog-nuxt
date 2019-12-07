<template>
  <div class="archive-page">
    <div class="page_container">
      <ArchiveItem v-for="(item, key, index) in list" :key="index" :title="key" :list="item" />
    </div>
  </div>
</template>

<script>
import { timeFormat } from '~/plugins/filters'
import ArchiveItem from '~/components/ArchiveItem'

export default {
  components: { ArchiveItem },
  data () {
    return {
      archiveList: []
    }
  },
  head: {
    title: `独行的博客-归档`
  },
  computed: {
    list () {
      const json = {}
      this.archiveList.forEach((item) => {
        const time = item.created.substring(0, 7)
        if (json[time] == null) {
          json[time] = []
        }
        json[time].push(item)
      })
      return json
    }
  },
  created () {
    this.getArchive()
  },
  methods: {
    async getArchive () {
      const res = await this.$axios('/archives')
      this.archiveList = res.data.archiveList
      this.archiveList.map((item) => {
        return {
          _id: item._id,
          title: item.title,
          created: timeFormat(item.created),
          updated: timeFormat(item.updated)
        }
      })
    }
  }
}
</script>
