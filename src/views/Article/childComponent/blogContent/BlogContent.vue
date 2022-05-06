<template>
  <div class="Blogcontent" v-if="Object.keys(con).length!=0">
    <div class="context">
      <content-titlt :conTitle="con"></content-titlt>
      <content-data :conData="con.article"></content-data>
      <statement :author="con.author" :label ="con.label[0]"></statement>
    </div>
  </div>
</template>
<script>
import contentTitlt  from './contentTitle.vue'
import contentData from './contentData.vue'
import  statement from '../statement.vue'
export default {
  name: "BlogContent",
  props:{
      con:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  data() {
    return {};
  },
  mounted() {
      console.log(this.con)
  },
  components:{
    contentTitlt,
    contentData,
    statement,
  }
};
</script>
<style scoped>
.Blogcontent{
  width: 100%;
  float: left;
  box-sizing: border-box;
  margin-bottom: 20px;
}
  
.context{
    background: #fff;
    margin-top:-60px ;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
}
</style>