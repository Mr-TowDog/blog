<template>
  <div class="article" v-if="Object.keys(getData)!=0">
    <half-banner :img="getData.content.img" hei="400px">
      <p>{{ getData.content.name }}</p>
    </half-banner>
    <div class="content">
      <!-- 文章内容设置 -->
      <div class="rigth">
      <blog-content :con="getData.content"></blog-content>
      <board :id="getData.content.id" :news ="getData.content.message" @goMessage="go"></board>
      <around-article :around="[getData.one,getData.tow]"></around-article>
      </div>
      <!-- 目录内容设置 -->
      <div class="left">
         <content-mul ref="mul"></content-mul>
      </div>
     
    </div>
    <footr></footr>
    <back></back>
    <show-mul @click.native="mulShow"></show-mul>

  </div>
</template>
<script>
import {getArticleData} from "netWork/articleData";
import addAData from 'netWork/addAData.js';

import back from "components/common/back/Back.vue";
import board from 'components/common/message/board.vue';

import halfBanner from "components/content/halfBanner/HalfBanner";
import footr from 'components/content/footr/Footr.vue';

import blogContent from "./childComponent/blogContent/BlogContent";
import contentMul from "./childComponent/blogContent/contentMul.vue";
import aroundArticle from './childComponent/aroundArticle.vue';
import showMul from './childComponent/showMul.vue';



export default {
  name: "",
  data() {
    return {
      getData: {},
      around:[],
      id:null,
      show:true,
    };
  },
  components: {
    back,
    blogContent,
    contentMul,
    board,
    aroundArticle ,
    footr,
    showMul,
    halfBanner,
  },
    
  mounted() {
    //通过url传的图书id获取文章信息
    
    this.id = this.$route.params.id;
    getArticleData(this.id).then((res) => {
      this.getData = res.data;
      console.log(this.getData)
    });
  },
  methods: {
    mulShow(e){
      
      this.show=!this.show;
      e.target.style.background = this.show?"linear-gradient(to left, skyblue, pink)":"linear-gradient(to right, skyblue, pink)";
        //将目录隐藏
      this.$el.querySelector(".left").style.display =this.show? "":"none";
      //设置文章宽度
      this.$el.querySelector(".rigth").style.width =this.show? "69%":"100%";
      
      
    },
    go(news){
      addAData("message",this.id,news)
    }
  },
  //监听页面路由变化，来刷新页面
  watch: {
    $route(to,from){
       //增加阅读浏览数
      addAData("number",this.id,++this.getData.content.number)
      //刷新页面
        window.history.go(0) ;
       
        

    }
  },
};
</script>
<style scoped>
.article {
  position: relative;
}
.content {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.rigth{
width: 70%;
}
.left{
  position: relative;
  width: 27%;
}
</style>