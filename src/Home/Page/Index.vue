<template>
  <div class="page">
    <router-view />
    <NewDate />
    <Swiper class="swiper" />
    <div @click="pushView()">首页 页面</div>
  </div>
</template>
<script>
import NewDate from "./components/NewDate";
import Swiper from "./components/PageSwiper";
export default {
  methods: {
    pushView() {
      this.$router.push({ name: "pageTwo" });
    }
  },
  components: { 
      Swiper: Swiper,
      NewDate:NewDate,
    }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.page {
  width: 100%;
  height: 100%;
  position: absolute;
}
.swiper {
  margin-top: 0;
}
</style>
