<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index+item">
          <img :src="item.title" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name: "PageSwiper",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      imgs: [
        {
          title:
            ("http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"),
          id: 1,
          name: 'one'
        },
        {
          title:
            "http://g.hiphotos.baidu.com/image/h%3D300/sign=628c8e98e5f81a4c3932eac9e7286029/2e2eb9389b504fc2bbdd8ce9ebdde71191ef6d5f.jpg",
          id: 2,
           name: 'two'
        },
        {
          title:
            "http://h.hiphotos.baidu.com/image/h%3D300/sign=1dc1f6f463224f4a4899751339f69044/b3b7d0a20cf431ad64d5c3eb4536acaf2fdd98d9.jpg",
          id: 3,
           name: 'three'
        },

        {
          title:
            "http://g.hiphotos.baidu.com/image/h%3D300/sign=b5e4c905865494ee982209191df4e0e1/c2cec3fdfc03924590b2a9b58d94a4c27d1e2500.jpg",
          id: 4,
           name: 'fon'
        },

        {
          title:
            "http://b.hiphotos.baidu.com/image/h%3D300/sign=92afee66fd36afc3110c39658318eb85/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg",
          id: 5,
           name: 'fire'
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
.swiper-container {
  width: 100%;
  height: 10rem;
}
.swiper-wrapper {
  width: 20rem;
  height: 10rem;
}
.swiper-slide {
  text-align: center;
  line-height: 10rem;
}
/* .swiper-pagination-custom {
  bottom: 10px;
  left: 0;
  width: 100%;
}

.swiper-pagination-customs {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background: #000;
  opacity: 0.3;
  margin: 0 5px;
}

.swiper-pagination-customs-active {
  opacity: 1;
  background-color: #f78e00;
} */
img {
  width: 100%;
  height: 100%;
}
/* img:after { 
  content: url('http://b.hiphotos.baidu.com/image/h%3D300/sign=92afee66fd36afc3110c39658318eb85/908fa0ec08fa513db777cf78376d55fbb3fbd9b3.jpg');
  display: block;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
} */
</style>
