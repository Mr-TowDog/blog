<template>
  <div class="showMul">
      &#xe602;
  </div>
</template>
<script>
export default {
    name:'showMul',
    data(){
        return {}
    },
}
</script>
<style scoped>
.showMul{
    cursor: default;
    position: fixed;
    right: 20px;
    bottom: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    font-size: 27px;
    color: #fff;
    border-radius:50% ;
    background: linear-gradient(to left, skyblue, pink);
    overflow: hidden;
}
</style>