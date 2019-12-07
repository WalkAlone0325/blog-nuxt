<template>
  <div class="contact-card">
    <div class="contact-header">
      <h1>独行的博客</h1>
      <h3>
        <i class="iconfont icon-youxiang" style="font-size: 24px;" /> jsw0325@163.com
      </h3>
      <p>小小前端开发，努力学习，不敢放松，追赶大佬的步伐。</p>
      <i class="iconfont icon-jieshao" style="font-size: 18px; margin-right: -15px;" />
      <span>介绍下博客：</span>
      <p>前端展示：使用了最新版的 Vuecli4.x 搭建，HTML5、CSS3 的很多新特性，基本用 Flex 布局搭建，没有使用多余的插件，基本上都是自己实现。</p>
      <p>后台管理：使用了最新版的 Vuecli4.x 搭建，Element-UI，vue-router，vuex，Markdown编辑器，全屏，富文本编辑器等。</p>
      <p>服务端接口：使用了Koa2，MongoDB数据库。</p>
    </div>
    <div class="contact-container">
      <div @click="handleSelect1" :class="{ selected: isSelected1 }" class="box first pointer">
        <span class="icon-cont">
          <i class="iconfont icon-git" />
        </span>
        <h3>github</h3>
        <br>
        <ul class="hidden">
          <li>求Star</li>
          <li>多多关照</li>
          <a @click.stop href="https://github.com/WalkAlone0325" target="_block">GITHUB主页</a>
        </ul>
      </div>

      <div @click="handleSelect2" :class="{ selected: isSelected2 }" class="box second pointer">
        <span class="icon-cont">
          <i class="iconfont icon-juejin" />
        </span>
        <h3>掘金</h3>
        <br>
        <ul class="hidden">
          <li>掘金收藏了文章</li>
          <li>看大神秀操作</li>
          <a @click.stop href="https://juejin.im/user/5b38cdb1e51d4558c4723f86" target="_block">掘金主页</a>
        </ul>
      </div>

      <div @click="handleSelect3" :class="{ selected: isSelected3 }" class="box third pointer">
        <span class="icon-cont">
          <i class="iconfont icon-weixin1" />
        </span>
        <h3>微信</h3>
        <br>
        <ul class="hidden">
          <li>WX：824079965</li>
          <img
            src="../assets/images/wechat.jpg"
            alt="二维码不见了，手动加吧"
            style="width: 120px; height: 120px"
          >
        </ul>
      </div>

      <div @click="handleSelect4" :class="{ selected: isSelected4 }" class="box fourth pointer">
        <span class="icon-cont">
          <i class="iconfont icon-QQ" />
        </span>
        <h3>QQ</h3>
        <br>
        <ul class="hidden">
          <li>QQ：2291763727</li>
          <a
            @click.stop
            href="tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=2291763727"
            target="class"
          >加我的QQ</a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSelected1: false,
      isSelected2: false,
      isSelected3: false,
      isSelected4: false, // 切换类名
      val: null
    }
  },
  methods: {
    handleSelect1 () {
      this.isSelected1 = !this.isSelected1
    },
    handleSelect2 () {
      this.isSelected2 = !this.isSelected2
    },
    handleSelect3 () {
      this.isSelected3 = !this.isSelected3
    },
    handleSelect4 () {
      this.isSelected4 = !this.isSelected4
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-card {
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-image: linear-gradient(120deg, #8e44ad, #3495db, #8e44ad);
  .contact-header {
    padding: 0 50px;
    color: #f1f1f1;
    h1 {
      display: inline-block;
      margin: 20px 20px 0 0;
    }
    h3 {
      display: inline-block;
    }
    p,
    span {
      margin-left: 20px;
    }
    p {
      margin: 8px;
      text-indent: 30px;
    }
  }
  .contact-container {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    .box {
      height: 260px;
      padding: 15px;
      display: flex;
      background-position: center;
      position: relative;
      overflow: hidden;
      &:hover .icon-cont {
        animation: shady 3s linear infinite;
      }
      @keyframes shady {
        0% {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5),
            0 0 0 0px rgba(3, 108, 129, 0.5);
        }
        20% {
          box-shadow: 0 0 0 100px rgba(255, 255, 255, 0),
            0 0 0 0px rgba(3, 108, 129, 0);
        }
        20.1% {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5),
            0 0 0 0px rgba(3, 108, 129, 0.5);
        }
        50% {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5),
            0 0 0 0px rgba(3, 108, 129, 0.5);
        }
        70% {
          box-shadow: 0 0 0 100px rgba(255, 255, 255, 0),
            0 0 0 0px rgba(3, 108, 129, 0);
        }
        70.1% {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5),
            0 0 0 0px rgba(3, 108, 129, 0.5);
        }
        100% {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5),
            0 0 0 0px rgba(3, 108, 129, 0.5);
        }
      }
      .icon-cont {
        border: 6px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        width: 75px;
        height: 75px;
        margin: 20px auto;
        display: block;
        text-align: center;
        transition: 0.6s;
        position: absolute;
        top: 10px;
        left: 0;
        right: 0;
        z-index: 5;
        box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5),
          0 0 0 0px rgba(3, 108, 129, 0.5);
        i {
          color: #fff;
          opacity: 0.6;
          font-size: 2.5em;
          line-height: 75px;
        }
      }
      h3 {
        color: #fff;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        transition: 0.6s;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0);
        position: absolute;
        top: 95px;
        width: 86%;
        z-index: 4;
      }
      ul {
        color: #fff;
        font-size: 13px;
        line-height: 28px;
        text-indent: 14px;
        margin: 25px;
        margin-top: 399px;
        list-style-type: disc;
        margin-left: -15px;
        transition: 0.5s;
        a {
          display: inline-block;
          // text-align: center;
          margin: 20px auto;
          width: 100%;
          // height: 50px;
          font-size: 20px;
          // border: 1px solid #000;
          color: #fff;
          &:hover {
            border-radius: 5px;
            color: #515a6e;
            background: #f1f1f1;
          }
        }
      }
    }
    .box.selected .icon-cont {
      transform: scale(1.5, 1.5);
      transition: 0.6s;
      opacity: 0.3;
      position: absolute;
      top: -20px;
      left: -5px;
      right: 180px;
    }
    .box.selected:hover .icon-cont {
      animation: none;
    }
    .box.selected h3 {
      transition: 0.6s;
      padding: 32px 15px 15px 15px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      width: 86%;
      top: 16px;
    }
    .box.selected ul.hidden {
      transition: 0.5s;
      opacity: 1;
      margin-top: 95px;
    }
  }
}
</style>
