<template>
  <div>
      <open-module>
          <h1 slot="title"><span>&#xe622;</span>座右铭</h1>
          <p slot="content">迟早有一天我会变大前强变粗</p>
      </open-module>
  </div>
</template>
<script>
import openModule from 'components/content/openModule/OpenModule.vue';

export default {
  components: { openModule },
    name:'Maxim',
    data(){
        return {}
    },
        mounted() {
        //发送事件总线，方便开始阅读的点击跳转
        this.$bus.$emit("playLook",this.$el.offsetTop);
    },
}
</script>
<style scoped>

</style>