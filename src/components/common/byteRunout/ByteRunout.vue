<template>
  <div v-if="motto.length !== 0"></div>
</template>
<script>
export default {
  name: "MyMotto",
  props: {
    motto: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      index :0,
      key:0
    };
  },
  mounted() {
    setTimeout(()=>{
       if(this.motto.length!=0){
      this.go(200,70)
    }
    },300)
   
      
  },
  methods: {
    //字节跳动定时器
    //num设置删除还是打字
    //time 设置间隔事件
    //fun 设置回调函数
    add(num,time,fun){
      var $this = this
      // 1.设置i保存当前的文字指针
        var i = 0;
        // 2.设置立即执行函数产生闭包
        (function () {
          // 3.开启定时器实现字符填充
          var timeOut = setInterval(() => {
            //  4.更改i的指针位置（删除还是增加取决于传入的是负数还是正数）
            i = i + num;
            // 6.插入/删除文字
            $this.$el.innerText = $this.motto[$this.index].slice(0, i)+"|";
            // 7.判断i的指针位置是否大于文字个数
            if(i>$this.motto[$this.index].length+1){
              // 大于结束定时器，开启回调函数
                  clearInterval(timeOut)
                  fun()
                  
              }else if(i<-$this.motto[$this.index].length){
                // 删除：大于结束定时器，开启回调函数
                clearInterval(timeOut)
                  fun()
              }
          }, time);
        })();
      },
      //循环字节跳动
  go(num1,num2) {
    var $this = this
    //1.第一次增加 顾传一
          $this.add(1,num1,()=>{
            // 2.增加完成回调函数删除
          $this.add(-1,num2,()=>{
            // 删除完成（第一段完成，开始第二段）
            // 3.判断是否index指针是否已经等于名言段数
            if($this.index==$this.motto.length-1){
              // 是则将基数变成负数形成一直减
              $this.key = -1
            }else if($this.index==0){
              // 如果是0就将基数变成正数形成一直加
              $this.key= 1
            }
            //更改基数
            $this.index=$this.index+ $this.key;
            //调用自己形成循环
              $this.go(num1,num2)
          })
        });
        }
  },
};
</script>
<style scoped>
div {
  min-width: 50px;
min-height: 30px;
text-align: center;
font-size: 18px;
font-weight: 300;
color: #fff;
}
</style>