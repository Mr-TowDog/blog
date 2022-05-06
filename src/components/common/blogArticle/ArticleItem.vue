<template>
  <div class="articleItem" :class="{ show: css, noShow: !css }">
    <div class="img" @click="playLook">
      <img :src="itemData.img" />
      <p>{{itemData.name}}</p>
      <div class="news" v-if="news!=='false'">
        {{news}}
      </div>
    </div>
    <div class="name">
      <p>{{ itemData.title }}</p>

      <div class="time">
        <p><span>&#xf00f9;</span>{{ itemData.time | time }}</p>
        <ul>
          <li v-for="(v, k) in itemData.label" :key="k">
            <span v-if="k===0">&#xe60d;</span><a>{{ v }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="title">
      <a>{{ itemData.name }}</a>
    </div>
  </div>
</template>
<script>
import { myMixins } from '../../../common/mixins';
export default {
  name: "ArticleItem",
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      },
    },
    news:{
      type:String,
      default:"false"
    }
  },
  data() {
    return {
      top: 0,
      css: false,
    };
  },
  mixins:[myMixins],
  methods: {
    playLook(){
     if(this.$route.params.id===this.itemData.id)return;
     this.$router.push("/article/"+this.itemData.id);
    }
  },
  filters: {
    time(value) {
      var date = /\d{4}-\d{2}-\d{2}/;
      return date.exec(value)[0];
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.articleItem {
  cursor: default;
  overflow: hidden;
  width: 30%;
  border-radius: 5%;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  color: #34495e;
  transition: 1s;
}
.articleItem .img {
  position:relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  justify-items: center;
}
.articleItem .img  img {
  width: 100%;
}
.img p{
  position: absolute;
  color: #fff;
  bottom: 20px;
  left: 20px;
  font-size: 20px;
  font-weight: 500;
}
.img .news{
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background: #fff;
  color: skyblue;
}
.name {
  box-sizing: border-box;
  padding: 15px 10px;
  border-bottom: 1px solid rgb(230, 230, 230);
}
.time {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.time ul {
  list-style: none;
  display: flex;
}
.time ul li {
  /* float: right; */
  margin-left: 10px;
}
.time ul li:hover {
  color: skyblue;
}
.title {
  box-sizing: border-box;
  padding: 15px 10px;
}
.title a {
  display: inline-block;
  padding: 3px 10px;
  background: linear-gradient(to right, #437cb6, #ca6f6c);
  border-radius: 20px;
  color: #fff;
}
a {
  display: inline-block;
}
.show {
  transform: scale(1);
  opacity: 1;
}
.noShow {
  transform: scale(0.5);
  opacity: 0;
}

@keyframes mover {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.articleItem:hover{
  animation: mover 1s  alternate;
}
</style>