<template>
  <div v-if="Object.keys(contact).length !== 0">
    <div class="nav">
      <a :href="contact.qq"><i title="联系我的qq">&#xe882;</i></a>
      <a :href="contact.CSDN"><i title="访问我的csdn">&#xe60a;</i></a>
      <a :href="contact.Github"><i title="访问我的gethub">&#xe885;</i></a>
      <a :href="contact.Know"><i title="访问我的知乎">&#xea8b;</i></a>
      <a :href="contact.microBlog"><i title="访问我的微博">&#xe8bb;</i></a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    contact: {
      type: Object,
      default() {
        return {
          ele: {},
        };
      },
    },
  },
  name: "titleContact",
  data() {
    return {};
  },
  mounted() {
    //   实现移入蹦出效果
    setTimeout(() => {
      // 1.获取监听事件元素
      var i = this.$el.querySelectorAll("i");
      i.forEach((ele) => {
        //   2.设置绑定事件
        ele.onmouseover = this.mouseover;
        ele.onmouseout = this.onmouseout;
      });
    }, 100);
  },
  methods: {
    mouseover(e) {
      //划入事件
      console.log("进来了");
      // 创建需要弹出的div即内容
      this.ele = document.createElement("div");
      this.ele.innerText = e.target.title;
      this.ele.className = "tanc";
      e.target.parentNode.appendChild(this.ele);
      // 传入自定义函数中
      this.time(this.ele, 1);
    },
    onmouseout(e) {
      //划出事件
      console.log("流量");
      // 传入自定义函数中
      this.time(this.ele, -10);
    },
    time(obj, num, time = 40) {
      // 1.获取传入元素的初始位置
      var top = parseInt(window.getComputedStyle(obj).top);
      //   2.设置当前位置
      top - 10;
      //3.设置透明度
      var op = num;
      var timeOut = setInterval(() => {
        //   5.设置定时器的停止条件
        if (op === 10) {
          // 当元素完全显示在页面上时
          clearInterval(timeOut);
        } else if (op === -1) {
          // 当元素完全消失在页面上时
          clearInterval(timeOut);
          //   删除元素
          obj.parentNode.removeChild(obj);
        }
        // 4.数值一点点增加形成动画
        top++;
        op++;
        obj.style = "opacity: " + Math.abs(op / 10) + ";top:" + top + "px;";
      }, time);
    },
  },
};
</script>
<style scoped>
.nav {
  font-family: "iconfont";
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.nav i {
  font-style: normal;
  font-size: 30px;
  color: #fff;
}
a {
  text-decoration: none;
  display: block;
  position: relative;
}
</style>