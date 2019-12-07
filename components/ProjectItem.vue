<template>
  <div class="project-item-container">
    <a
      :href="item.project_url"
      :title="`项目地址: ${item.project_url}` || ''"
      v-for="item in projectList"
      :key="item._id"
      target="_block"
      class="project-item pointer"
    >
      <div class="img-box">
        <img :src="item.img_url" alt="图片不见了">
      </div>
      <div class="content">
        <h3>{{ item.project_name }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: { projectList: { type: Array, default: null } }
}
</script>

<style lang="scss" scoped>
.project-item-container {
  color: #000;
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  .project-item {
    position: relative;
    width: 300px;
    height: 400px;
    margin: 20px 10px;
    background: #666;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.5);
    &:hover .img-box img {
      opacity: 0;
    }
    .img-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s;
      }
    }
    .content {
      position: absolute;
      bottom: 20px;
      left: 20px;
      left: 10%;
      width: 80%;
      height: 50px;
      background: #f1f1f1;
      transition: 0.3s;
      overflow: hidden;
      padding: 15px;
      color: #515a6e;
      h3 {
        margin: 0;
        padding: 0;
        font-size: 20px;
        text-align: center;
      }
      p {
        margin: 10px 0 0;
        padding: 0;
        opacity: 0;
        line-height: 1.2em;
        transition: 0.3s;
        text-align: justify;
      }
    }
    &:hover .content {
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
    }
    &:hover .content p {
      opacity: 1;
      transition-delay: 0.3s;
    }
  }
}
</style>
