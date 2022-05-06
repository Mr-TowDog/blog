<template>
  <div class="blogArticle zt" v-if="data.length!==0">
      <article-item v-for="(v,k) of data" :key="k" :itemData="v"></article-item>
  </div>
</template>
<script>
import articleItem from './ArticleItem.vue'
export default {
  name: "",
  data() {
    return {
      
    };
  },
  props:{
    data:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
      articleItem
  },
  
};
</script>
<style scoped>
.blogArticle{
    margin-top:20px ;
display: flex;
flex-wrap: wrap;
justify-content:space-around
}
</style>