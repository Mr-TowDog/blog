<template>
  <div class="Maxim zt">
      <slot name="title"></slot>
      <slot name="center"></slot>
  </div>
</template>
<script>
export default {
    name:'OpenModlue',
    data(){
        return {
            data:""
        }
    },
}
</script>
<style scoped>
.Maxim{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 50px;
    margin-top:20px ;
    background: #fff;
    color: #34495E;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
}
.Maxim h1 span{
    font-size: larger;
    margin-right: 10px;
}
.Maxim p{
    font-size:17px ;
    color: #85929E;
}
</style>