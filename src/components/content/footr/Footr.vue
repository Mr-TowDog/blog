<template>
  <div class="footr">
    <div class="zt content">
      <div class="title">
      <h2>徐某第一次模仿全一个网页</h2>
      <p>迟早有一天我会变大变粗变强</p>
    </div>
    <titlaContact class="nav"></titlaContact>
    </div>
    
  </div>
</template>
<script>
import titlaContact from "../../content/myTitle/TitleContact.vue";
export default {
  name: "Footr",
  data() {
    return {};
  },
  components: {
    titlaContact,
  },
};
</script>
<style scoped>
.footr {
  width: 100%;
  height: 115px;
  background: linear-gradient(to right, #437cb6, #ca6f6c);
}
.content{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 115px;
}
.title h2{
  color: #fff
}
.title p {
  color: #CCC;
}
.nav{
width: 300px;
margin: 0 ;
}
</style>