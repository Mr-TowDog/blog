<template>
  <div class="Back" @click="backTop" >

      <div class="BackItem" :class="{show:!css}">&#xe6a4;</div>
      
  </div>
</template>
<script>
import {scroll} from "common/tool"
export default {
    name:'Back',
    data(){
        return {
            css:false,
        }
    },
    mounted() {
        window.onscroll=this.show
    },
    methods: {
        backTop(){
            scroll(0)
        },
        show(){
            if(window.scrollY!=0){
                this.css=true
            }else{
                this.css=false
            }
        }
    },
}
</script>
<style scoped>
.Back{
    cursor: default;
    position: fixed;
    bottom: 50px;
    right: 20px;
    overflow: hidden;
    background: #fff;
    border-radius: 50%;
    
}
.BackItem{
    position: relative;
    display: flex;
    top: 0px;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius:50% ;
    transition: 0.5s;
    font-size: 39px;
    color: skyblue;
}
.show{
    top: 42px;
}
</style>