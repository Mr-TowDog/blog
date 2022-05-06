<template>
  <div class="contentTitle" v-if="Object.keys(conTitle).length!==0">
      <div class="title">
          <p>{{conTitle.name}}</p>
          <ul >
              <li v-for="(v,k) in conTitle.label" :key="k"><span v-if="k===0">&#xe60e;</span>{{v}}</li>
          </ul>
      </div>
      <div class="time">
          <ul>
              <li><p>发布日期：</p><p>{{conTitle.time|time}}</p></li>
              <li><p>文章字数：</p><p>{{conTitle.article.length}}</p></li>
              <li><p>阅读次数：</p><p>{{conTitle.number}}</p></li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
    name:'contentTitle',
    props:{
        conTitle:{
            type:Object,
            defalut(){
                return {}
            }
        }
    },
    data(){
        return {}
    },
    filters:{
        time(value){
                var reg = /\d{4}-\d{2}-\d{2}/;
            return reg.exec(value)[0]
            
        }
    }
}
</script>
<style scoped>
.contentTitle{
    padding:0 20px ;
    width: 100%;
    border-bottom:#525F7F 1px solid ;
    box-sizing: border-box;
}
.title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
}
.title ul{
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}
 .title ul li {
    margin: 0 10px;
    color: #434e68;
    
}
 .title li span{
     
 }
.title p {
     display: inline-block;
  padding: 3px 10px;
  background: linear-gradient(to right, #437cb6, #ca6f6c);
  border-radius: 20px;
  color: #fff;
}
.time ul{
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    align-items: center;
    color: #525F7F;
}
.time ul li{
    display: flex;
}
.time{
    margin: 20px 0;
}
</style>