<template>
  <div class="aroundArticle">
    <articleItem
      class="item"
      v-for="(v, k) of around"
      :key="k"
      :itemData="v"
      :news="v.id | num"
    ></articleItem>
  </div>
</template>
<script>
import articleItem from "components/common/blogArticle/ArticleItem";
export default {
  name: "aroundArticle",
  props: {
    around: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  components: {
    articleItem,
  },
  filters: {
    num(value) {
        value = parseInt(value)
        var string;
        var id = parseInt(window.location.hash.slice(10))
      switch (value) {
        case id+1:
          string="下一篇";
          break;
        case id-1:
          string="上一篇";
          break;
        case id:
          string="本篇";
          break;
        default:console.log("报错")
          break;
      }
      return string;
    },
  },
};
</script>
<style scoped>
.aroundArticle {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.item {
  width: 48%;
  box-sizing: border-box;
}
</style>