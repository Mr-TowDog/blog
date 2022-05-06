<template>
  <div class="stat"> 
    <ul class="statement">
      <li>
        <p>文章作者:</p>
        <span>{{author}}</span>
      </li>
      <li>
        <p>文章链接:</p>
        <a :href="url">{{url}}</a>
      </li>
      <li>
        <p>版权声明:</p>
        <span>
          本博客所有文章除特別声明外，均采用 CC BY 4.0 许可协议。转载请注明来源
          LogicVan !
        </span>
      </li>
    </ul>
    <div class="share">
      <div class="label">{{label}}</div>
      <share class="li"></share>
    </div>
  </div>
</template>
<script>
import share from 'components/common/share/Share.vue';
export default {
  name: "statement",
  props:{
      author:{
          type:String,
          befault:"TowDog"
      },
      label:{
        type:String,
          befault:"web前端"
      }
      
  },
  data() {
    return {
        url:"",
    };
  },
  mounted() {
      this.url = window.location.href;
  },
  components: { share },
};
</script>
<style scoped>
.stat{
  padding: 0 10px;
  margin: 0 30px;
  padding-top:20px;
  border-top: 1px solid #ccc;
}
.statement{
    margin: 0;
    padding: 0;
    padding: 0 10px;
    list-style: none;
    border: 1px solid #ccc;
}
.statement li{
    display: flex;
    align-items: center;
    height: 20px;
    padding: 10px 0;
}
.statement li p{
    font-size: 16px;
    font-weight: 700;
    margin-right:10px ;
    color: #34495E;
}
.statement li span, a{
    color: rgb(80, 190, 233);
    text-decoration: none;
}

.share{
  cursor: default;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.share .label{
  padding: 5px;
  border-radius: 10px ;
  border: 1px solid skyblue;
  color: skyblue;
}
.li{
width: 40%;
}
</style>