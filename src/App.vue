<template>
  <div id="app">
    <setTimeHome v-if="backShow" @getPage="getPage"/>
    <Home v-if="HomeShow" />
  </div>
</template>

<script>
import Home from "@/Home/Index";
import setTimeHome from "./Home/components/setTimoHome";
export default {
  name: "App",
  data() {
    return {
      backShow: true,
      HomeShow: ''
    };
  },
  methods: {
    getPage(e) {
      this.backShow = e;
      this.HomeShow = !e;
    }
  },
  mounted() {
    if (this.backShow === "true") {
      setTimeout(() => {
        this.backShow = false;
      }, 5000);
    }
  },
  components: {
    Home,
    setTimeHome
  }
};
</script>

<style>
html {
  font-size: 20px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
