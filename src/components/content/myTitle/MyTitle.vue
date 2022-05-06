<template>
  <div class="MyTitle" >
    <div class="logo">{{titleConfig.name}}</div>
    <byte-runout :motto="titleData.motto"></byte-runout>
    <title-but v-if="titleConfig.but" :but="titleData.Github"></title-but>
    <title-contact v-if="titleConfig.contact" :contact="titleData"></title-contact>
  </div>
</template>
<script>


import byteRunout from 'components/common/byteRunout/ByteRunout.vue';

import titleBut from './TitleBut';
import titleContact from './TitleContact';
export default {
  name: "MyTitle",
  props:{
    //title配置信息
    titleConfig:{
      type:Object,
      default(){
        return {};
      }
    },
    //title需要使用的数据
    titleData:{
       type:Object,
      default(){
        return {};
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  components: {
    byteRunout,
    titleBut,
    titleContact,
  },
};
</script>
<style scoped>
.MyTitle{
  margin-top:100px ;
}
.logo {
  width: 500px;
  height: 150px;
  text-align: center;
  line-height: 150px;
  font-size: 70px;
  font-weight: 900;
  color: #fff;
}
</style>