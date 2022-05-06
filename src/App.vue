<template>
  <div class="App">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import {startSakura} from "./common/yh"
import topNav from "components/common/topNav/TopNav.vue"
export default {
    name:'App',
    data(){
        return {}
    },
    components:{
      topNav
    },mounted() {
      startSakura()
    },
}
</script>
<style >

@import url("assets/css/normalize.css");
@import url("assets/css/index.css");
@import url("./assets/css/font.css");
.tanc{
opacity: 0;
  color: #fff;
    width: 150px;
    height:30px;
    line-height: 30px;
    position: absolute;
    top: -50px;
    left: -50px;
   text-align: center;
   background: rgb(36, 36, 36);
   border-radius:10px ;
}
.zt{
  width: 60%;
  margin: 0 auto;

}

</style>