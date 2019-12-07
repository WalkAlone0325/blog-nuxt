<template>
  <div class="page">
    <project-item :projectList="projectList" class="project" />
  </div>
</template>

<script>
import ProjectItem from '~/components/ProjectItem'

export default {
  components: {
    ProjectItem
  },
  head: {
    title: `独行的博客-作品`
  },
  data () {
    return {
      projectList: []
    }
  },
  created () {
    this.getProject()
  },
  methods: {
    async getProject () {
      const res = await this.$axios('/project')
      this.projectList = res.data.data
    }
  }
}
</script>
