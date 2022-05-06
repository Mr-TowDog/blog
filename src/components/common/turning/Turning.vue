<template>
  <div class="turning zt">
    <div class="left">&#xe779;</div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">&#xe775;</div>
  </div>
</template>
<script>
export default {
  name: "turning",
  data() {
    return {};
  },
};
</script>
<style scoped>
.turning {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:20px ;
}
.turning .right,
.turning .left {
  font-size: 35px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  background: linear-gradient(to right, #437cb6, #ca6f6c);
  color: #fff;
}
.turning .center {
  font-size: 20px;
}
.turning .center span {
  font-size: 20px;
  margin: 0 10px;
}
</style>