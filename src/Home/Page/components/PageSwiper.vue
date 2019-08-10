<template>
  <div class="Swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index+item">
          <img :src="item.title" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>-->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
// import OneImg from "../../../assets/下载.jpg";
import TwoImg from "../../../assets/two.jpg";
import ThreeImg from "../../../assets/three.jpg";
import FourImg from "../../../assets/four.jpg";
import FireImg from "../../../assets/fire.jpg";
import SixImg from "../../../assets/six.jpg";

export default {
  name: "PageSwiper",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgs: [
        {
          title: SixImg,
          id: 1,
          name: "one"
        },
        {
          title: TwoImg,
          id: 2,
          name: "two"
        },
        {
          title: ThreeImg,
          id: 3,
          name: "three"
        },

        {
          title: FourImg,
          id: 4,
          name: "fon"
        },

        {
          title: FireImg,
          id: 5,
          name: "fire"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    new Swiper(".swiper-container", {
      loop: true, //连续
      autoplay: true, //自动播放
      speed: 300, //速度
      observer: true,
      autoplayDisableOnInteraction: false, //点击后是否继续播放
      // paginationClickable: true,
      // 如果需要分页器
      pagination: ".swiper-pagination",
      paginationType: "custom"
      // 如果需要前进后退按钮
      //   nextButton: ".swiper-button-next",
      //   prevButton: ".swiper-button-prev",
      // 如果需要滚动条
      //   scrollbar: ".swiper-scrollbar"
    });
  }
};
</script>
<style scoped>
.Swiper {
  width: 100%;
}
.swiper-container {
  width: 100%;
  height: 8.5rem;
}
.swiper-wrapper {
  /* width: 20rem; */
}
.swiper-slide {
  text-align: center;
  /* line-height: 10rem; */
}
/* .swiper-pagination-custom {
  bottom: 10px;
  left: 0;
  width: 100%;
}*/
img {
  width: 100%;
  height: 100%;
}
</style>
