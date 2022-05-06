<template>
  <div class="share">
<ul class="icon">
    <li><i>&#xe6ef;</i></li>
    <li><i>&#xe607;</i></li>
    <li><i>&#xe60d;</i></li>
    <li><i>&#xe702;</i></li>
    <li><i>&#xe64d;</i></li>
    <li><i>&#xe62d;</i></li>
</ul>
  </div>
</template>
<script>
export default {
    name:'Share',
    data(){
        return {}
    },
}
</script>
<style scoped>
.icon{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
}
.icon li {
    width: 30px;
    height: 30px;
    border-radius:50% ;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
}




.icon li:nth-child(4) i{
    font-size: 35px;
}
.icon li:nth-child(1) i{
    color: skyblue;
}
.icon li:nth-child(2) i{
    color: rgb(7, 71, 97);
}
.icon li:nth-child(3) i{
    color: rgb(235, 12, 4);
}
.icon li:nth-child(4) i{
    color: rgb(235, 154, 4);
}
.icon li:nth-child(5) i{
    color:skyblue;
}
.icon li:nth-child(6) i{
    color:rgb(235, 111, 11);
}
.icon li:nth-child(4) i{
    font-size: 35px;
}
.icon li:hover i{
    color: #fff;
}
.icon li:nth-child(1):hover{
    background: skyblue;
}
.icon li:nth-child(2):hover{
    background: rgb(7, 71, 97);
}
.icon li:nth-child(3):hover{
    background: rgb(235, 12, 4);
}
.icon li:nth-child(4):hover{
    background: rgb(235, 154, 4);
}
.icon li:nth-child(5):hover{
    background: skyblue;
}
.icon li:nth-child(6):hover{
    background:rgb(235, 111, 11) ;
}

.icon i{
    font-size: 31px;
}
</style>