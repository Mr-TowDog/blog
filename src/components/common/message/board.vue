<template>
  <div class="board" :class="{ show: css, noShow: !css }">
    <mess-frame @emoShow="emoShow()" @playMessage="playMessage" ref="messFrame">
      <expression slot="emo" v-if="show" @emo="playemo"></expression>
    </mess-frame>
    <mess-data :news="news"></mess-data>
  </div>
</template>
<script>
import messFrame from "./messFrame.vue";
import messData from "./messData.vue";
import expression from "./expression.vue";

import { myMixins } from "common/mixins";
export default {
  name: "board",
  props: {
    id:{
      type:String,
      default:"0"
    },
    news:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      show: false,
      top: 0,
    };
  },
  components: {
    expression,
    messData,
    messFrame,
  },
  mixins: [myMixins],
  mounted() {
  },
  methods: {
    //添加表情
    playemo(value) {
      //获取文本框节点
      var text = this.$refs.messFrame.$el.querySelector(".message");
      //更改双向绑定数据
      this.$refs.messFrame.content = bj(text.value, text.selectionStart, value);
      // 通过文本框的光标位置添加表情
      function bj(str1, num, str2) {
        var one = str1.substring(0, num);
        var tow = str1.substring(num);
        return one + str2 + tow;
      }
    },
    //表情包的显示与隐藏
    emoShow() {
      this.show = !this.show;
    },
    //向2评论列表里添加数据
    playMessage(amessage) {
      this.news.unshift(amessage);
      this.$emit("goMessage",this.news)
    },
  },
};
</script>
<style scoped>
/* 留言模块css */
.board {
  cursor: pointer;
  width: 100%;
  padding: 15px;
  clear: both;
  box-sizing: border-box;

  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: 0.5s;
}
.noShow {
  transform: translate(0, 50px);
  opacity: 0;
}
.show {
  opacity: 1;
}
</style>