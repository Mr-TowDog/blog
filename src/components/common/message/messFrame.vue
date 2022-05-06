<template>
  <div>
    <div class="content">
      <p class="title"><span>&#xe614;</span>留言</p>
      <div class="content-board">
        <div class="user">
          <input type="text" placeholder="昵名" v-model.lazy="name" />
          <input type="text" placeholder="邮箱" v-model.lazy="emit" />
          <input type="text" placeholder="网址(http://)" v-model.lazy="url" />
        </div>
        <textarea class="message" v-model="content"></textarea>
        <p class="look">
          <span @click="emoShow">表情</span>
          |
          <span>预览</span>
        </p>
        <slot name="emo"></slot>
        <div class="but">
          <p>md语法</p>
          <button @click="playMessage" :class="{ ok: content, no: !content }">
            回复
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "frame",
  data() {
    return {
      name: "",
      emit: "",
      url: "",
      content: "",
      show: false,
    };
  },
  methods: {
    emoShow() {
      this.$emit("emoShow");
    },
    playMessage() {
      class Amessage {
        constructor(name, emit, url, content, time) {
          this.name = name ;
          this.emit = emit ;
          this.url = url;
          this.content = content;
          this.time = time;
        }
      }

      if (this.content != "") {
        let time = new Date();
        let amessage = new Amessage(
          this.name,
          this.emit,
          this.url,
          this.content,
          time.getTime()
        );
        this.$emit("playMessage", amessage);
        this.content = this.name = this.emit = this.url = "";
      } else {
        alert("请输入内容哟");
      }
    },
  },
};
</script>
<style scoped>
/* 留言内容样式 */
.content {
  width: 100%;
}
/* 标题样式 */
.title {
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 15px;
}
.title span {
  font-size: 23px;
}
/* 留言版内容 */
.content-board {
  border: 1px #ccc dashed;
}
/* //用户数据收集模块 */
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px #ccc dashed;
}
.user input {
  display: block;
  padding: 20px 0 10px 10px;
  height: 30px;
  font-size: 18px;
  border: none;
  outline: none;
}
/* 留言信息 */
.message {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  height: 150px;
  outline: none;
  border: none;
  overflow-y: auto;
  resize: none;
  background: url("~assets/img/message/myword.webp") right bottom no-repeat;
  background-size: 120px;
}
/* 表情 */
.look {
  padding: 10px;
  box-sizing: border-box;
  text-align: right;
  color: rgb(126, 126, 126);
}
/* 发送留言按钮 */
.but {
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  color: rgb(126, 126, 126);
}
.but button {
  width: 70px;
  height: 30px;
  border: none;
  outline: none;
  color: #fff;
}
.no {
  background: rgb(190, 190, 190);
}
.ok {
  background: skyblue;
}
</style>