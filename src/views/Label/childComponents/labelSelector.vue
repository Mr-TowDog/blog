<template>
  <div class="label">
    <open-module>
      <h1 slot="title"><span>&#xe886;</span>文章标签</h1>
      <div class="center" slot="center">
        <a v-for="(v, k) of label" :key="k" @click="clickLabel">
          <span class="span">
            {{ k }}
            <span>{{ v }}</span>
          </span>
        </a>
      </div>
    </open-module>
  </div>
</template>
<script>
import openModule from "components/content/openModule/OpenModule.vue";

import getLabel from "netWork/getLabel";
export default {
  name: "lableSelector",
  data() {
    return {
      label: {},
    };
  },
  mounted() {
    getLabel().then((res) => {
      this.label = res.data;
      console.log(this.label);
    });
  },
  components: { openModule },
  methods: {
    clickLabel(){
      this.$emit("clickLabel")
    }
  },
};
</script>
<style scoped>
.label {
  position: relative;
  top: -50px;
  z-index: 2;
}
.center{
  box-sizing: border-box;
  margin: 50px;
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.center .span{
  display: inline-block;
  padding: 14px;
  margin: 10px;
  border-radius:5px ;
  box-shadow:var(--shadow) ;
  transition: 0.5s;
}
.center .span:hover{
color: #fff;
background: linear-gradient(to right, #437cb6, #ca6f6c);
}
</style>