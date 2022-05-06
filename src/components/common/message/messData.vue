<template>
  <div class="messData">
    <p class="text">{{news.length}}评论</p>
    <show v-for="(v,k) of news" :key="k" :anew="v"></show>
  </div>
</template>
<script>
import show from "./aMessShow.vue"
export default {
    name:'messData',
    props:{
      news:{
        type:Array,
        default(){
          return {}
        }
      }
    },
    data(){
        return {}
    },
    components:{
      show
    }
}
</script>
<style scoped>
.messData{
  padding: 20px;
  box-sizing: border-box;
  border-radius:20px ;
}
.text{
  font-size: 24px;
  font-weight: 400;
}
</style>