<template>
  <div class="articleBanner" :style="{ height: hei }">
    <img :src="img" class="img" />
    <div class="title" :style="{top:topValue}"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: "articleBanner",
  props: {
    img: {
      type: String,
      default: "",
    },
    hei: {
      type: String,
      default: "100vh",
    },
    topValue: {
      type: String,
      default: "50%",
    },
  },
  data() {
    return {};
  },
  mounted() {
    //判定图片大小是否大于窗口大小如果小于着设置图片大小为窗口大小
    let img = this.$el.querySelector("img");
    let windowWitdh = document.documentElement.clientWidth;
    if (img.width < windowWitdh) {
      img.style.width = windowWitdh + "px";
    }
  },
};
</script>
<style scoped>
.articleBanner {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img{
  position: relative;
}
.title {
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title p {
  font-size: 40px;
}
</style>