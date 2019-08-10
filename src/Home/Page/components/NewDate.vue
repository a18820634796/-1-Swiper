<template>
  <div class="newDate">
    <div class="getDate">{{time}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newDate: "",
      time: "",
      outTime: 6
    };
  },
  methods: {
    beforeCreate() {
      let clock = window.setInterval(() => {
        var date = new Date();
        var year = date.getFullYear(); //获取当前年份
        var mon = date.getMonth() + 1; //获取当前月份
        var da = date.getDate(); //获取当前日
        var day = date.getDay(); //获取当前星期几
        var h = date.getHours(); //获取小时
        var m = date.getMinutes(); //获取分钟
        var s = date.getSeconds(); //获取秒
        const time = '当前时间：'+ year+'年'+mon+'月'+da+'日'+' '+h+':'+m+':'+s;
        this.time = time;
      }, 1000);
    }
  },
  created() {
    this.beforeCreate();
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
.getDate {
  font-size: 0.8rem;
  padding: 0.8rem;
  padding-bottom: 0.8rem;
}
</style>
