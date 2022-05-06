<template>
  <div>
    <banner :titleData ="titleData"></banner>
    <maxim></maxim>
    <blog-article :data="data"></blog-article>
    <back></back>
    <turning>
      <div slot="center"><span>1</span>/<span>1</span></div>
    </turning>
    <footr></footr>
  </div>
</template>
<script>
import { ajax } from "netWork/require";
import getTitle from "netWork/MyTitle";

import myTitle from "components/content/myTitle/MyTitle.vue";
import footr from "components/content/footr/Footr.vue";

import back from "components/common/back/Back.vue";
import blogArticle from "components/common/blogArticle/BlogArticle";
import turning from "components/common/turning/Turning.vue";

import banner from "./childComponent/Banner";
import maxim from "./childComponent/Maxim.vue";



export default {
  name: "index",
  data() {
    return {
      index: 0,
      data: [],
      titleData: {},
    };
  },
  components: {
    myTitle,
    banner,
    maxim,
    blogArticle,
    back,
    footr,
    turning,
  },
  mounted() {
    //获取标题模块数据
    getTitle().then((res) => {
      res.data[0]["motto"] = JSON.parse(res.data[0]["motto"]);
      this.titleData = res.data[0];
    });
    //获取当前页面需要展示的文章数据
    this.getdata();
  },
  methods: {
    getdata() {
      this.index += 1;
      ajax({
        url: "/getarticle/",
        method: "get",
        params: {
          index: this.index,
        },
      }).then((res) => {
        this.data = res.data;
        console.log(this.data);
      });
    },
  },
};
</script>
<style scoped>
</style>