<template>
  <div class="messShow">
    <img :src="anew.url||head" />
    <div class="content">
      <ul class="name">
        <li>{{ anew.name||user }}</li>
        <li>{{ anew.emit ||emit}}</li>
      </ul>
      <p class="time">{{ anew.time | time }}</p>
      <div class="message">
        <p>{{ anew.content }}</p>
        <span>回复</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "aMessShow",
  props: {
    anew: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      user:"游客",
      emit:"无电子系邮件",
      head:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fa1f9d5dc6fd3705a4f759715e7af73455f548210.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653541540&t=6702bdcdf25e2978a41bc6a1f0a6d554"
    };
  },
  filters: {
    time(value) {
      var time = new Date();
      var newtime = time.getTime();
      var lodtime = newtime - value;
      //格式时间差
      function getTime(num, value) {
        if (parseInt(num / (24 * 60 * 60 * 1000)) > 93) {
          return time.getMonth(value) + 1 + "月" + time.getDay(value) + "日";
        } else if (parseInt(num / (24 * 60 * 60 * 1000)) > 360) {
          return (
            time.getFullYear(value) +
            "年" +
            (time.getMonth(value) + 1) +
            "月" +
            time.getDay(value) +
            "日"
          );
        } else {
          var h = parseInt(num / (60 * 60 * 1000));
          var m = parseInt(num / (60 * 1000));
          var s = parseInt(num / 1000);
          var res;
          if (h > 24) {
            res = parseInt(h / 24) + "天前";
          } else if (m > 60) {
            res = parseInt(m / 60) + "小时前";
          } else if (s > 60) {
            res = parseInt(s / 60) + "分钟前";
          } else {
            res = s + "秒前";
          }
          return res;
        }
      }
      //返回值
      return getTime(lodtime, value);
    },
  },
};
</script>
<style scoped>
.messShow {
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 40px 0 30px;
  border-bottom: 1px #ccc dashed;
}
.messShow img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.content {
  flex: 1;
  margin-left: 10px;
}
.name {
  display: flex;
  align-items: center;
}
.name li:nth-child(1) {
  color: skyblue;
  font-weight: 600;
}
.name li:nth-child(n + 2) {
  background: #ccc;
  padding: 5px;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
}
.name li {
  margin-right: 20px;
  font-size: 18px;
}
.time {
  font-size: 14px;
  color: rgb(155, 155, 155);
  margin: 10px 0 20px 0;
}
.message {
  color: rgb(102, 102, 102);
  display: flex;
  justify-content: space-between;
}
.message span {
  color: red;
}
</style>