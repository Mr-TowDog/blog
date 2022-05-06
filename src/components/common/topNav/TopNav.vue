<template>
  <div class="TopNav">
    <div class="frome nav">
      <div class="loge">
        <img src="~assets/img/common/favicon.png" />
        <p>TowDog</p>
      </div>
      <ul class="navItem">
        <li @click="play('index')"><i>&#xe6cb;</i>首页</li>
        <li @click="play('label')"><i>&#xe886;</i>标签</li>
        <li><i>&#xe619;</i>归档</li>
        <li><i>&#xe622;</i>关于</li>
        <li><i>&#xe69f;</i>留言板</li>
        <li><i>&#xe636;</i>友情链接</li>
        <li><i>&#xe65e;</i>导航</li>
        <li><i>&#xe752;</i>搜索</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopNav",
  data() {
    return {};
  },
  mounted() {
    var $this = this;
    document.addEventListener("scroll", function (e) {
      var top = window.scrollY;
      if (top > 0 && $this.$el.className.indexOf(" back") === -1) {
        $this.$el.className = $this.$el.className + " back";
      } else if (top === 0) {
        $this.$el.className = "TopNav";
      }
    });
  },
  methods: {
    play(url) {
      window.location.hash = "#/" + url;
      // if(this.$route.path.indexOf(url)==-1)this.$router.Path="/"+url;
      // console.log(this.$router)
      
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.TopNav {
  cursor: pointer;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  z-index: 100;
}
.back {
  background: linear-gradient(to right, #437cb6, #ca6f6c);
  box-shadow: 0px 1px 20px 3px rgba(0, 0, 0, 0.5);
}
.nav {
  width: 60%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.loge {
  display: flex;
  align-items: center;
}
.loge p {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
}
.navItem {
  width: 800px;
  list-style: none;
  display: flex;
  align-items: center;
  font-family: "iconfont";
}
.navItem i {
  font-style: normal;
  margin-right: 10px;
}
.navItem li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95%;
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.navItem li:hover {
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.2);
}
</style>