<template>
  <div class="TitleBut">
    <a><button @click="play">开始阅读</button></a>
    <button @click="goGitHub">GITHUB</button>
  </div>
</template>
<script>
import {scroll} from "common/tool";
export default {
  name: "TitleBut",
  props: {
    but: {
      type: String,
      default: "nb",
    },
  },
  data() {
    return {
      playlook: 0,
      top: 0,
    };
  },
  mounted() {
    this.$bus.$on("playLook", (top) => {
      this.playlook = top;
    });
  },
  methods: {
    goGitHub() {
      window.open(this.but);
    },
    play() {
      scroll(this.playlook);
    },
  },
};
</script>
<style scoped>
.TitleBut {
  width: 100%;
  display: flex;
  justify-content: center;
}
.TitleBut button {
  box-sizing: border-box;
  padding: 0 30px;
  height: 45px;
  margin: 100px 30px 130px 30px;
  background: none;
  border: 1px solid #fff;
  border-radius: 20px;
  color: #fff;
  font-weight: 400;
  outline: none;
}
.TitleBut button:hover {
  transition: 0.5s;
  background: skyblue;
  border: 1px solid skyblue;
}
</style>