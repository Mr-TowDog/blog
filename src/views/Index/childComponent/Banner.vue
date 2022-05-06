<template>
  <div class="Banner">
    <half-banner img="http://42.193.255.35/img/banner.jpg" topValue="60%">
      <my-title :titleConfig="titleConfig" :titleData="titleData"></my-title>
    </half-banner>
  </div>
</template>
<script>
import myTitle from "components/content/myTitle/MyTitle.vue";
import HalfBanner from "components/content/halfBanner/HalfBanner.vue";
export default {
  name: "Banner",
  props:{
      titleData:{
          type:Object,
          default(){
              return {};
          }
      }
  },
  data() {
    return {
      titleConfig: {
        name: "TowDog",
        but: true,
        contact: true,
      },
    };
  },
  components: { HalfBanner, myTitle },
};
</script>
<style scoped>
.Banner {
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>