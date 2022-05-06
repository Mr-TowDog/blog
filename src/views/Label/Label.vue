<template>
  <div>
    <half-banner img="http://42.193.255.35/img/banner.jpg" hei="550px">
      <my-title :titleConfig="titleConfig"></my-title>
    </half-banner>
    <label-selector @clickLabel="label"></label-selector>
    <template v-if="!articleShow">
      <h1>默认</h1>
    </template>
    <template v-else>
      <h1>点击显示数据</h1>
      
    </template>
  </div>
</template>
<script>
import halfBanner from "components/content/halfBanner/HalfBanner.vue";
import myTitle from "components/content/myTitle/MyTitle.vue";
import LabelSelector from "./childComponents/labelSelector.vue";

export default {
  name: "Label",
  data() {
    return {
      titleConfig: {
        name: "TowDog",
        but: false,
        contact: false,
      },
      articleShow:false,
    };
  },
  components: {
    halfBanner,
    myTitle,
    LabelSelector,
  },
  methods: {
    label(){
      this.articleShow = !this.articleShow
    }
  },
};
</script>
<style scoped>
</style>