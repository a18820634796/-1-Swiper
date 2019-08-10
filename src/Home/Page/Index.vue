<template>
  <div class="page">
    <router-view />
    <NewDate />
    <Swiper class="swiper" />
    <div class="navbar">
      <div 
      class="navbarTitle"
      v-for="(item,index) in NavBar" 
      :key="index" @click="pushView()">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
import NewDate from "./components/NewDate";
import Swiper from "./components/PageSwiper";
export default {
  name: "page",
  data() {
    return {
      NavBar: [
        { title: "排行", id: "001", name: "paihang" },
        { title: "新游", id: "002", name: "xinyou" },
        { title: "单机", id: "003", name: "danji" },
        { title: "礼包", id: "004", name: "libao" }
      ]
    };
  },
  methods: {
    pushView() {
      this.$router.push({ name: "pageTwo" });
    },
  },
  components: {
    Swiper: Swiper,
    NewDate: NewDate
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
  /* position: absolute; */
  overflow: hidden;
}
/* .swiper {

} */
.navbar {
  width: 100%;
  height: 3rem;
  font-family: "楷体";
  font-weight: bolder;
  font-size: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
  line-height: 3rem;
}
.navbarTitle{
    /* flex: 1; */
}
</style>
