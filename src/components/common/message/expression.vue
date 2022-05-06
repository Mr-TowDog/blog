<template>
  <div>
      <ul class="emos">
          <li v-for="(v,k) of emos" :key="k" @mousedown="emo(v.text,$event)">{{v.text}}</li>
      </ul>
  </div>
</template>
<script>
import emos from "common/emo.js"
export default {
    name:'expression',
    data(){
        return {
            emos:{}
        }
    },
    mounted() {
      this.emos=emos
    },
    methods: {
        emo(value,e){
            e.preventDefault()
            this.$emit("emo",value)
        }
    },
}
</script>
<style scoped>
.emos{
     box-sizing: border-box;
    cursor: default;
    display: flex;
    flex-wrap:wrap ;
    width: 95%;
    height: 200px;
    overflow-y:scroll ;
    justify-content: space-between;
    margin: 15px auto;
    border: 1px #ccc solid;
}
.emos li{
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin:0 10px ;
}
</style>