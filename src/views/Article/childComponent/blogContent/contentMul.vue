<template>
  <div class="mul" :class="{ stop: css }">
    <p class="title">&#xe602;目录</p>
    <div
      v-for="(anchor,k) in titles"
      :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
      @click="handleAnchorClick(anchor)"
      :key="k"
    >
      <a style="cursor: pointer">{{ anchor.title }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "contentMul",
  data() {
    return {
      dom: {},
      titles: [],
      css: false,
    };
  },
  mounted() {
    //接收文章内容发送的事件，开始查找h1，h2，h3。。。标签形参目录
    this.$bus.$on("mul", (res) => {
      this.dom = res;

      const anchors = res.$el.querySelectorAll("h1,h2,h3,h4,h5,h6");
      const titles = Array.from(anchors).filter(
        (title) => !!title.innerText.trim()
      );

      if (!titles.length) {
        this.titles = [];
        return;
      }

      const hTags = Array.from(
        new Set(titles.map((title) => title.tagName))
      ).sort();

      this.titles = titles.map((el) => ({
        title: el.innerText,
        lineIndex: el.getAttribute("data-v-md-line"),
        indent: hTags.indexOf(el.tagName),
      }));
    });
    this.top = this.$el.offsetTop;
    window.addEventListener("scroll", () => {
      this.stop();
    });
  },
  methods: {
    //点击目录跳转
    handleAnchorClick(anchor) {
      var preview = this.dom;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
    //实现目录跟着屏幕走
    stop() {
      if (window.scrollY > 370) {
        this.css = true;
        // this.$el.style="top:"+(window.scrollY-370)+"px";
      } else {
        this.css = false;
      }
    },
  },
};
</script>
<style scoped>
.mul {
  width: 100%;
  min-height: 500px;
  margin-top: 30px;
  margin-left: 30px;
  padding: 0 20px;
  padding-top: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #fff;
  font-size: 20px;
  font-weight: 700;
}
.stop {
  width: 300px;
  padding-top: 50px;
  position: fixed;
  top: 0;
}
.title{
  font-size: 25px;
  font-weight: 700;
  margin:20px 0px ;
  margin-left:-10px ;

}
</style>