<template>
  <div class="newDate">
    <div class="getDate">
      当前时间：{{newDate}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newDate: new Date(),
    };
  },
  methods: {
    getTime() {
    //   setInterval(function() {
        var date = new Date();
        var year = date.getFullYear(); //获取当前年份
        var mon = date.getMonth() + 1; //获取当前月份
        var da = date.getDate(); //获取当前日
        var day = date.getDay(); //获取当前星期几
        var h = date.getHours(); //获取小时
        var m = date.getMinutes(); //获取分钟
        var s = date.getSeconds(); //获取秒
        // var getTime = document.getElementsByClassName("getDate");
        // getTime.innerHTML = "nihao";
        this.newDate = year+'年'+mon+'月'+da+'日'+'    '+h+':'+m+':'+s;
        console.log("11");
    //   });
    }
  },
  mounted() {
    this.getTime();
    // this.newDate = new Date().getHours();
    // console.log('11s')
  }
};
</script>
<style scoped>
.newDate {
  width: 100%;
  text-align: center;
  background: orange;
  font-size: 1rem;
}
.getDate{
    padding: 0.8rem;
    padding-bottom: 0.8rem;
}
</style>
