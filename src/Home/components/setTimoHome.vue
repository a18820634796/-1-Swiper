<template>
  <div class="all">
    <div class="gopage" @click="getPage">{{time}}</div>
  </div>
</template>
<script>
import HomeBack from "../../assets/home.jpg";
export default {
  data() {
    return {
      show: false,
      time: "",
      outTime: 6
    };
  },
  methods: {
    getPage() {
      console.log("555555555");
      this.$emit("getPage", this.show);
    }
  },
  beforeCreate() {
    let clock = window.setInterval(() => {
      this.outTime--;
      if (this.outTime === 0) {
        this.$emit("getPage", this.show);
      }
      this.time = this.outTime + "s后跳转";
    }, 1000);
  }
};
</script>
<style scoped>
.all {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../../assets/home.jpg);
  background-size: cover; /*全屏展示*/
  /* -webkit-animation-name: all; 
  -webkit-animation-duration: 5s;  */
}

/* @-webkit-keyframes all {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
} */
.gopage {
  width: 5rem;
  height: 1.7rem;
  border-radius: 1rem;
  background: white;
  opacity: 0.4;
  margin-top: 1rem;
  position: absolute;
  right: 0.5rem;
  text-align: center;
  line-height: 1.7rem;
  font-size: 0.8rem;
  font-family: "开题";
}
</style>
